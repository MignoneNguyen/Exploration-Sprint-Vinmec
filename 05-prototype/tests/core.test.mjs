import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { apThayDoi, soLich, laKhanCap, phanLoaiKhongAI, tinNhanKhongAI } from "../lib/core.mjs";

const data = JSON.parse(await readFile(new URL("../data/scenarios.json", import.meta.url), "utf8"));
const kb = (id) => data.kich_ban.find((k) => k.id === id);
const chay = (id, daXong = []) => {
  const k = kb(id);
  return soLich(k.lich_da_dat, apThayDoi(k.lich_da_dat, k.thay_doi_tu_phia_vien), daXong);
};

test("S1 đổi bác sĩ là thay đổi lớn", () => {
  const r = chay("S1");
  assert.equal(r.muc_do, "lon");
  assert.deepEqual(r.thay_doi.map((t) => t.truong), ["bac_si"]);
});

test("S2 đổi dịch vụ 4D sang 2D và đổi phòng", () => {
  const r = chay("S2");
  assert.equal(r.muc_do, "lon");
  assert.deepEqual(r.thay_doi.map((t) => t.truong).sort(), ["dich_vu", "phong"]);
});

test("S3 thêm bước chuẩn bị bắt buộc là thay đổi lớn", () => {
  const r = chay("S3");
  assert.equal(r.muc_do, "lon");
  assert.equal(r.chuan_bi_moi.length, 2);
  assert.equal(r.thay_doi.length, 0);
});

test("S4 trạng thái chờ xác nhận là thay đổi vừa", () => {
  const r = chay("S4");
  assert.equal(r.muc_do, "vua");
  assert.equal(r.thay_doi[0].sau, "Chờ tổng đài xác nhận");
});

test("S5 đổi giờ và phòng là thay đổi vừa", () => {
  assert.equal(chay("S5").muc_do, "vua");
});

test("S6 không đổi: chỉ nhắc khi còn bước bắt buộc chưa xong", () => {
  assert.equal(chay("S6").muc_do, "nhac_nho");
  assert.equal(chay("S6", ["c1"]).muc_do, "khong_doi");
});

test("Tin nhắn mẫu không bao giờ nói có thay đổi khi không đổi", () => {
  const m = tinNhanKhongAI(chay("S6", ["c1"]));
  assert.equal(m.tieu_de, "Lịch hẹn giữ nguyên");
});

test("Từ khóa khẩn cấp nhận cả khi gõ không dấu", () => {
  assert.ok(laKhanCap("Tôi đang bị ra máu nhiều"));
  assert.ok(laKhanCap("toi bi ra mau nhieu"));
  assert.ok(laKhanCap("Em bé không cử động từ sáng"));
  assert.ok(laKhanCap("thai không cử động"));
  assert.ok(laKhanCap("Bé sốt cao co giật"));
  assert.ok(!laKhanCap("Mấy giờ tôi khám?"));
});

test("Phân loại không AI: câu y khoa được chuyển nhân viên", () => {
  assert.equal(phanLoaiKhongAI("Đổi bác sĩ thì có ảnh hưởng gì đến em bé không?"), "y_khoa");
  assert.equal(phanLoaiKhongAI("Tôi cần mang gì?"), "chuan_bi");
  assert.equal(phanLoaiKhongAI("Mấy giờ tôi khám?"), "lich");
});
