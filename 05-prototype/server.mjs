// Máy chủ cục bộ cho prototype. Chạy: node server.mjs  (mở http://localhost:3000)
// Khóa API đọc từ file .env cạnh file này (xem .env.example):
//   ANTHROPIC_API_KEY → Claude; OPENAI_API_KEY → GPT; có cả hai thì AI_PROVIDER chọn.
//   Không có khóa nào thì chạy chế độ mẫu không AI.
// Thêm --offline để ép chế độ mẫu (dùng khi muốn so sánh hai chế độ).

import http from "node:http";
import { readFile, appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { soLich, laKhanCap, TRA_LOI_KHAN_CAP, tinNhanKhongAI, traLoiKhongAI } from "./lib/core.mjs";
import { PROMPT_VERSION, SYSTEM_THONG_BAO, SCHEMA_THONG_BAO, SYSTEM_HOI_DAP, SCHEMA_HOI_DAP } from "./lib/prompts.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
try {
  process.loadEnvFile(path.join(here, ".env"));
} catch {
  // Không có .env: dùng biến môi trường sẵn có.
}

const PORT = Number(process.env.PORT ?? 3000);

function chonNhaCungCap() {
  if (process.argv.includes("--offline")) return null;
  const chiDinh = (process.env.AI_PROVIDER ?? "").trim().toLowerCase();
  if (chiDinh === "anthropic" || chiDinh === "openai") return chiDinh;
  if (process.env.ANTHROPIC_API_KEY) return "anthropic";
  if (process.env.OPENAI_API_KEY) return "openai";
  return null;
}

const PROVIDER = chonNhaCungCap();
const OFFLINE = PROVIDER === null;
const MODEL = PROVIDER === "openai" ? process.env.OPENAI_MODEL || "gpt-5" : "claude-opus-5-5";

let client = null;
let Anthropic = null;
let OpenAI = null;
if (PROVIDER === "anthropic") {
  ({ default: Anthropic } = await import("@anthropic-ai/sdk"));
  client = new Anthropic();
} else if (PROVIDER === "openai") {
  ({ default: OpenAI } = await import("openai"));
  client = new OpenAI();
}

function goiAI(system, schema, noiDung) {
  return PROVIDER === "openai" ? goiOpenAI(system, schema, noiDung) : goiClaude(system, schema, noiDung);
}

// Gọi GPT qua Chat Completions với structured outputs (JSON theo schema).
async function goiOpenAI(system, schema, noiDung) {
  try {
    const response = await client.chat.completions.create({
      model: MODEL,
      max_completion_tokens: 8000,
      response_format: { type: "json_schema", json_schema: { name: "ket_qua", schema, strict: true } },
      messages: [
        { role: "system", content: system },
        { role: "user", content: noiDung },
      ],
    });
    const message = response.choices[0]?.message;
    if (message?.refusal) return { loi: "refusal" };
    return { data: JSON.parse(message?.content ?? ""), model: response.model };
  } catch (error) {
    if (error instanceof OpenAI.AuthenticationError) return { loi: "Khóa API không hợp lệ" };
    if (error instanceof OpenAI.RateLimitError) return { loi: "Vượt giới hạn tốc độ" };
    if (error instanceof OpenAI.NotFoundError) return { loi: `Không tìm thấy mô hình ${MODEL}, kiểm tra OPENAI_MODEL` };
    if (error instanceof OpenAI.APIError) return { loi: `Lỗi API ${error.status}` };
    if (error instanceof SyntaxError) return { loi: "AI trả JSON không hợp lệ" };
    return { loi: `Lỗi kết nối: ${error.message}` };
  }
}

// Gọi Claude, trả về object JSON theo schema, hoặc lỗi để rơi về tin nhắn mẫu.
async function goiClaude(system, schema, noiDung) {
  try {
    const response = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 16000,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "low", format: { type: "json_schema", schema } },
      system,
      messages: [{ role: "user", content: noiDung }],
    });
    if (response.stop_reason === "refusal") return { loi: "refusal" };
    const text = response.content.filter((b) => b.type === "text").map((b) => b.text).join("");
    return { data: JSON.parse(text), model: response.model };
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) return { loi: "Khóa API không hợp lệ" };
    if (error instanceof Anthropic.RateLimitError) return { loi: "Vượt giới hạn tốc độ" };
    if (error instanceof Anthropic.APIError) return { loi: `Lỗi API ${error.status}` };
    if (error instanceof SyntaxError) return { loi: "AI trả JSON không hợp lệ" };
    return { loi: `Lỗi kết nối: ${error.message}` };
  }
}

async function ghiNhatKy(banGhi) {
  const dir = path.join(here, "logs");
  await mkdir(dir, { recursive: true });
  const ngay = new Date().toISOString().slice(0, 10);
  await appendFile(path.join(dir, `phien-${ngay}.jsonl`), JSON.stringify({ luc: new Date().toISOString(), ...banGhi }) + "\n");
}

async function thongBao({ lich_da_dat, lich_hien_tai, da_xong = [], ly_do = "" }) {
  const ketQua = soLich(lich_da_dat, lich_hien_tai, da_xong);
  const mau = tinNhanKhongAI(ketQua, ly_do);
  if (OFFLINE) return { ...ketQua, tin_nhan: mau, che_do: "mau" };

  const noiDung = JSON.stringify({ lich_hien_tai, ket_qua_so_sanh: ketQua, ly_do_thay_doi: ly_do || null });
  const ai = await goiAI(SYSTEM_THONG_BAO, SCHEMA_THONG_BAO, noiDung);
  if (ai.data) return { ...ketQua, tin_nhan: ai.data, che_do: "ai", model: ai.model };
  return { ...ketQua, tin_nhan: mau, che_do: "mau", ghi_chu: `Không dùng được AI (${ai.loi}), hiển thị tin nhắn mẫu` };
}

async function hoiDap({ cau_hoi, lich_hien_tai }) {
  // Lớp an toàn chạy trước AI: dấu hiệu khẩn cấp không bao giờ được gửi cho AI xử lý.
  if (laKhanCap(cau_hoi)) return { ...TRA_LOI_KHAN_CAP, che_do: "quy_tac_an_toan" };
  if (OFFLINE) return { ...traLoiKhongAI(cau_hoi, lich_hien_tai), che_do: "mau" };

  const noiDung = JSON.stringify({ luot_kham: lich_hien_tai, cau_hoi });
  const ai = await goiAI(SYSTEM_HOI_DAP, SCHEMA_HOI_DAP, noiDung);
  if (ai.data) return { ...ai.data, che_do: "ai", model: ai.model };
  return { ...traLoiKhongAI(cau_hoi, lich_hien_tai), che_do: "mau", ghi_chu: `Không dùng được AI (${ai.loi})` };
}

const TINH = {
  "/": ["public/index.html", "text/html; charset=utf-8"],
  "/data/scenarios.json": ["data/scenarios.json", "application/json; charset=utf-8"],
};

function docBody(req) {
  return new Promise((resolve, reject) => {
    let s = "";
    req.on("data", (c) => {
      s += c;
      if (s.length > 1e6) reject(new Error("Body quá lớn"));
    });
    req.on("end", () => resolve(s ? JSON.parse(s) : {}));
    req.on("error", reject);
  });
}

function guiJson(res, code, obj) {
  res.writeHead(code, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(obj));
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (req.method === "GET" && TINH[url.pathname]) {
      const [file, type] = TINH[url.pathname];
      res.writeHead(200, { "content-type": type });
      return res.end(await readFile(path.join(here, file)));
    }
    if (req.method === "GET" && url.pathname === "/api/che-do") {
      return guiJson(res, 200, { che_do: OFFLINE ? "mau" : "ai", model: OFFLINE ? null : MODEL, prompt: PROMPT_VERSION });
    }
    if (req.method === "POST" && url.pathname === "/api/thong-bao") {
      const body = await docBody(req);
      const kq = await thongBao(body);
      await ghiNhatKy({ loai: "thong_bao", kich_ban: body.kich_ban, muc_do: kq.muc_do, che_do: kq.che_do, tin_nhan: kq.tin_nhan });
      return guiJson(res, 200, kq);
    }
    if (req.method === "POST" && url.pathname === "/api/hoi-dap") {
      const body = await docBody(req);
      const kq = await hoiDap(body);
      await ghiNhatKy({ loai: "hoi_dap", kich_ban: body.kich_ban, cau_hoi: body.cau_hoi, phan_loai: kq.phan_loai, che_do: kq.che_do });
      return guiJson(res, 200, kq);
    }
    if (req.method === "POST" && url.pathname === "/api/su-kien") {
      // Nút bệnh nhân bấm và thời gian từ lúc thấy thông báo, dùng cho log thử nghiệm.
      const body = await docBody(req);
      await ghiNhatKy({ loai: "su_kien", ...body });
      return guiJson(res, 200, { ok: true });
    }
    guiJson(res, 404, { loi: "Không tìm thấy" });
  } catch (error) {
    guiJson(res, 500, { loi: error.message });
  }
});

server.listen(PORT, () => {
  console.log(`Prototype đang chạy: http://localhost:${PORT}`);
  console.log(OFFLINE ? "Chế độ: MẪU (không AI)" : `Chế độ: AI (${MODEL}), prompt ${PROMPT_VERSION}`);
});
