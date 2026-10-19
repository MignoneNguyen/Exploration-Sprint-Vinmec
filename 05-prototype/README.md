# Prototype có AI

> **Trạng thái: chưa làm.** Thư mục này là khung để điền. Không ghi log thử nghiệm cho đến khi đã thử thật với người dùng.

## Hướng prototype (rút từ need statement và best practice)

Need statement chính: [03-need-statement](../03-need-statement/need-statement.md). Bài học áp dụng: [04-best-practice](../04-best-practice/best-practice.md#tổng-hợp-bài-học-cho-vinmec).

| Thành phần | Mô tả | Từ đâu |
| --- | --- | --- |
| Dữ liệu giả lập | Hai bản lịch cho mỗi bệnh nhân giả: "lịch đã đặt" và "lịch hiện tại" (bác sĩ, dịch vụ, giờ, các bước chuẩn bị bắt buộc) | Best practice 1 |
| AI so sánh | AI so hai bản, tìm thay đổi và bước chuẩn bị còn thiếu, viết tin nhắn ngắn, dễ hiểu | Best practice 1, 2 |
| Tin nhắn cho bệnh nhân hành động | Mỗi tin có nút: xác nhận, chọn lịch khác, gọi tổng đài | Best practice 1 |
| Nhắc chuẩn bị theo từng bước | Danh sách bước chuẩn bị theo dịch vụ, nhắc trước 1–2 ngày | Best practice 2 |
| Giới hạn an toàn | AI chỉ giải thích thay đổi lịch và bước chuẩn bị; mọi câu hỏi y khoa chuyển cho nhân viên | Best practice 3 |

Chỉ dùng dữ liệu tự mô phỏng. Không dùng dữ liệu thật của người bệnh (mục 4 và 6.4 của đề).

## Cần nộp trong thư mục này

- [ ] Mã nguồn hoặc file thiết kế click được (`src/` hoặc link Figma)
- [ ] `prompts.md`: prompt đã dùng cho AI, kèm phiên bản
- [ ] `test-log.md`: log thử với 2–3 người, theo mẫu dưới
- [ ] Ghi chú đã sửa gì sau mỗi lần thử

## Mẫu log thử nghiệm

| Người thử | Bối cảnh (ẩn danh) | Làm gì | Gặp gì (hiểu đúng thay đổi chưa, chỗ nào vướng) | Đã sửa gì sau đó |
| --- | --- | --- | --- | --- |
| T1 | | | | |
| T2 | | | | |
| T3 | | | | |

Chỉ số nên ghi cho mỗi người thử: có hiểu đúng thay đổi không (có/không), thời gian đến lúc biết cần làm gì, mức hài lòng 1–5.
