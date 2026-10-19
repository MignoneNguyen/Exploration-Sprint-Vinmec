// Logic không dùng AI: so lịch, kiểm tra khẩn cấp, mẫu tin nhắn khi không có AI.
// Dùng chung cho server.mjs và tests/core.test.mjs.

export const TRUONG = {
  dich_vu: "Dịch vụ",
  bac_si: "Bác sĩ",
  co_so: "Cơ sở",
  ngay: "Ngày khám",
  gio: "Giờ khám",
  phong: "Phòng",
  trang_thai: "Trạng thái lịch",
};

// Thay đổi về những trường này có thể khiến bệnh nhân đến mà không được khám như đã đặt.
const TRUONG_LON = new Set(["dich_vu", "bac_si", "co_so", "ngay"]);

const TEN_TRANG_THAI = {
  da_xac_nhan: "Đã xác nhận",
  cho_tong_dai_xac_nhan: "Chờ tổng đài xác nhận",
  da_huy: "Đã hủy",
};

export function hienThi(truong, giaTri) {
  if (truong === "trang_thai") return TEN_TRANG_THAI[giaTri] ?? giaTri;
  if (truong === "ngay") {
    const [y, m, d] = String(giaTri).split("-");
    return d && m && y ? `${d}/${m}/${y}` : giaTri;
  }
  return giaTri;
}

// Áp các thay đổi mẫu của kịch bản lên lịch đã đặt để ra lịch hiện tại.
export function apThayDoi(lichDaDat, thayDoi = {}) {
  const hienTai = structuredClone(lichDaDat);
  for (const [k, v] of Object.entries(thayDoi)) {
    if (k in TRUONG) hienTai[k] = v;
  }
  if (Array.isArray(thayDoi.them_chuan_bi)) {
    hienTai.chuan_bi = [...hienTai.chuan_bi, ...thayDoi.them_chuan_bi];
  }
  return hienTai;
}

// So lịch đã đặt với lịch hiện tại. Kết quả là dữ kiện duy nhất mà AI được phép dùng.
export function soLich(lichDaDat, lichHienTai, daXong = []) {
  const thayDoi = [];
  for (const truong of Object.keys(TRUONG)) {
    if (lichDaDat[truong] !== lichHienTai[truong]) {
      thayDoi.push({
        truong,
        ten: TRUONG[truong],
        truoc: hienThi(truong, lichDaDat[truong]),
        sau: hienThi(truong, lichHienTai[truong]),
      });
    }
  }

  const idCu = new Set(lichDaDat.chuan_bi.map((c) => c.id));
  const chuanBiMoi = lichHienTai.chuan_bi.filter((c) => !idCu.has(c.id));
  const xong = new Set(daXong);
  const batBuocChuaXong = lichHienTai.chuan_bi.filter((c) => c.bat_buoc && !xong.has(c.id));

  let mucDo = "khong_doi";
  if (thayDoi.some((t) => TRUONG_LON.has(t.truong)) || chuanBiMoi.some((c) => c.bat_buoc)) {
    mucDo = "lon";
  } else if (thayDoi.length > 0 || chuanBiMoi.length > 0) {
    mucDo = "vua";
  } else if (batBuocChuaXong.length > 0) {
    mucDo = "nhac_nho";
  }

  return { muc_do: mucDo, thay_doi: thayDoi, chuan_bi_moi: chuanBiMoi, bat_buoc_chua_xong: batBuocChuaXong };
}

// Bỏ dấu tiếng Việt để so từ khóa không phụ thuộc cách gõ.
export function boDau(s) {
  return String(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

// Danh sách cần bác sĩ đầu mối duyệt trước khi thử với người dùng thật.
export const TU_KHOA_KHAN_CAP = [
  "chay mau", "ra mau", "dau du doi", "dau bung du doi", "kho tho", "co giat",
  "ngat", "bat tinh", "vo oi", "ra nuoc oi", "khong cu dong", "it cu dong",
  "thai may it", "sot cao", "tim tai", "khong tho duoc", "cap cuu",
];

export function laKhanCap(cauHoi) {
  const t = boDau(cauHoi);
  return TU_KHOA_KHAN_CAP.some((k) => t.includes(k));
}

export const TRA_LOI_KHAN_CAP = {
  phan_loai: "khan_cap",
  chuyen_nhan_vien: true,
  tra_loi:
    "Đây có thể là tình huống cần xử trí ngay. Anh/chị vui lòng gọi 115 hoặc đến khoa cấp cứu gần nhất. " +
    "Trợ lý lịch hẹn không thể tư vấn y khoa. Hotline của bệnh viện: [SỐ HOTLINE – cần bác sĩ đầu mối xác nhận].",
};

// Phân loại câu hỏi khi không có AI (chế độ mẫu). Có AI thì AI phân loại.
const TU_KHOA_Y_KHOA = [
  "co sao khong", "anh huong", "nguy hiem", "an toan khong", "thuoc", "uong gi", "an gi",
  "benh", "trieu chung", "ket qua", "co nen", "chan doan", "dieu tri", "bi gi",
];
const TU_KHOA_CHUAN_BI = ["chuan bi", "mang gi", "mang theo", "nhin an", "giay to", "so kham", "can lam gi"];

export function phanLoaiKhongAI(cauHoi) {
  const t = boDau(cauHoi);
  if (laKhanCap(cauHoi)) return "khan_cap";
  if (TU_KHOA_Y_KHOA.some((k) => t.includes(k))) return "y_khoa";
  if (TU_KHOA_CHUAN_BI.some((k) => t.includes(k))) return "chuan_bi";
  return "lich";
}

function moTaLich(lich) {
  return (
    `${lich.dich_vu} với ${lich.bac_si}, ${hienThi("gio", lich.gio)} ngày ${hienThi("ngay", lich.ngay)}, ` +
    `${lich.phong}, ${lich.co_so} (${hienThi("trang_thai", lich.trang_thai)})`
  );
}

export function traLoiKhongAI(cauHoi, lichHienTai) {
  const loai = phanLoaiKhongAI(cauHoi);
  if (loai === "khan_cap") return TRA_LOI_KHAN_CAP;
  if (loai === "y_khoa") {
    return {
      phan_loai: "y_khoa",
      chuyen_nhan_vien: true,
      tra_loi:
        "Câu hỏi này cần nhân viên y tế trả lời. Em đã chuyển câu hỏi cho điều dưỡng của khoa; " +
        "anh/chị sẽ được gọi lại trong giờ hành chính. Nếu thấy bất thường, vui lòng gọi 115 hoặc đến cấp cứu.",
    };
  }
  if (loai === "chuan_bi") {
    const ds = lichHienTai.chuan_bi.map((c) => `- ${c.noi_dung} (${c.han})`).join("\n");
    return { phan_loai: "chuan_bi", chuyen_nhan_vien: false, tra_loi: `Các bước chuẩn bị cho buổi khám:\n${ds}` };
  }
  return { phan_loai: "lich", chuyen_nhan_vien: false, tra_loi: `Lịch hiện tại của anh/chị: ${moTaLich(lichHienTai)}.` };
}

// Tin nhắn mẫu khi không có AI: cùng dữ kiện, câu chữ cố định.
export function tinNhanKhongAI(ketQua, lyDo = "") {
  const { muc_do, thay_doi, chuan_bi_moi, bat_buoc_chua_xong } = ketQua;
  const viec = [];
  for (const c of chuan_bi_moi) viec.push(`${c.noi_dung} (${c.han})`);
  for (const c of bat_buoc_chua_xong) {
    if (!chuan_bi_moi.includes(c)) viec.push(`${c.noi_dung} (${c.han})`);
  }

  if (muc_do === "khong_doi") {
    return { tieu_de: "Lịch hẹn giữ nguyên", loi_nhan: "Lịch hẹn của anh/chị không có thay đổi.", viec_can_lam: viec };
  }
  if (muc_do === "nhac_nho") {
    return {
      tieu_de: "Nhắc chuẩn bị cho buổi khám",
      loi_nhan: "Lịch hẹn không thay đổi. Anh/chị còn bước chuẩn bị bắt buộc chưa hoàn thành.",
      viec_can_lam: viec,
    };
  }
  const phan = thay_doi.map((t) => `${t.ten}: ${t.truoc} → ${t.sau}`);
  if (chuan_bi_moi.length) phan.push(`Thêm ${chuan_bi_moi.length} bước chuẩn bị`);
  if (thay_doi.some((t) => t.truong === "trang_thai")) {
    viec.unshift("Gọi tổng đài hoặc chờ tin xác nhận trước khi đến viện");
  }
  return {
    tieu_de: muc_do === "lon" ? "Lịch hẹn có thay đổi quan trọng" : "Lịch hẹn có thay đổi",
    loi_nhan: `Lịch hẹn của anh/chị đã thay đổi: ${phan.join("; ")}.` + (lyDo ? ` Lý do: ${lyDo}.` : ""),
    viec_can_lam: viec,
  };
}
