# Prototype có AI: "Lịch hẹn của tôi"

Báo cho bệnh nhân khi bác sĩ, dịch vụ, giờ khám hoặc bước chuẩn bị bắt buộc thay đổi sau khi đã đặt lịch, kèm việc cần làm và nút hành động. Kiểm chứng giả thuyết H4 của [need statement](../03-need-statement/need-statement.md). Chỉ dùng dữ liệu tự mô phỏng.

![Kịch bản S2: siêu âm 4D bị chuyển thành 2D](screenshots/S2-demo.png)

| File | Nội dung |
| --- | --- |
| [BRD-lite.md](BRD-lite.md) | BRD rút gọn: mục tiêu, phạm vi, yêu cầu, chỉ số thành công |
| [prompts.md](prompts.md) | Prompt, schema, nguyên tắc thiết kế an toàn, lịch sử thay đổi prompt |
| [test-log.md](test-log.md) | Kịch bản thử với người dùng và bảng log (**chưa thử, đang để trống**) |
| `server.mjs` | Máy chủ cục bộ, gọi Claude qua SDK chính thức `@anthropic-ai/sdk` |
| `lib/core.mjs` | So lịch, kiểm tra khẩn cấp, tin nhắn mẫu (không dùng AI) |
| `lib/prompts.mjs` | Prompt và JSON schema |
| `public/index.html` | Giao diện: màn hình bệnh nhân và màn hình mô phỏng phía bệnh viện |
| `data/scenarios.json` | 6 kịch bản giả lập, dựa trên FB1–FB5 |
| `tests/core.test.mjs` | 9 kiểm thử cho phần không dùng AI |

## Cách chạy

Cần Node.js 20 trở lên.

```bash
cd 05-prototype
npm install
npm test                      # 9 kiểm thử phần không dùng AI
npm run start:offline         # chế độ mẫu, không cần khóa API
ANTHROPIC_API_KEY=... npm start   # chế độ AI (PowerShell: $env:ANTHROPIC_API_KEY="..."; npm start)
```

Mở <http://localhost:3000>. Link tiện cho buổi thử: `?kb=S2` chọn kịch bản, `&demo=1` tự áp thay đổi mẫu và gửi thông báo, `&tester=1` ẩn phía bệnh viện.

Khóa API chỉ nằm ở máy chủ cục bộ, không gửi xuống trình duyệt. Không đưa khóa vào repo.

## Cách hoạt động

```text
Điều phối sửa lịch  →  code so "lịch bệnh nhân đã biết" với "lịch hiện tại"  →  AI viết lời nhắn từ kết quả so sánh
(phía bệnh viện)        (bảng Trước → Bây giờ, mức độ, bước chuẩn bị mới)        (tiêu đề, lời nhắn, việc cần làm)
                                                                               ↓
                              Bệnh nhân: Xác nhận · Chọn lịch khác · Gọi tổng đài  (ghi số giây để đo)

Câu hỏi của bệnh nhân  →  có từ khóa khẩn cấp?  → có: hướng dẫn gọi 115, không qua AI
                                                → không: AI phân loại (lịch / chuẩn bị / y khoa / khác);
                                                   câu y khoa được chuyển cho nhân viên y tế
```

| Kịch bản | Dựa trên | Mức độ do code tính |
| --- | --- | --- |
| S1 Đổi bác sĩ không báo trước | FB4 | Lớn |
| S2 Siêu âm 4D bị chuyển thành 2D | FB3a | Lớn |
| S3 Thêm bước chuẩn bị bắt buộc | FB2, FB5 | Lớn |
| S4 Trạng thái nhảy về chờ xác nhận | FB1 | Vừa |
| S5 Đổi giờ và phòng | Biến thể FB4 | Vừa |
| S6 Không có thay đổi (đối chứng) | Kiểm tra AI không báo nhầm | Nhắc chuẩn bị / giữ nguyên |

## Đã kiểm tra và chưa kiểm tra

| Phần | Trạng thái |
| --- | --- |
| So lịch, mức độ, từ khóa khẩn cấp, phân loại khi không có AI | 9/9 kiểm thử tự động đạt |
| Chế độ mẫu: 6 kịch bản và 4 loại câu hỏi qua máy chủ | Đã chạy thử, đúng như mong đợi |
| Giao diện | Đã chạy trên Edge, xem ảnh chụp ở trên |
| Khi gọi AI lỗi (khóa sai), tự rơi về tin nhắn mẫu | Đã thử với khóa không hợp lệ |
| **Chế độ AI khi có khóa hợp lệ** | **Chưa chạy được**: máy làm bài không có khóa API. Cần chạy thử cả 6 kịch bản và ghi kết quả trước khi thử với người dùng |
| **Thử với 2–3 người dùng** | **Chưa làm**, xem [test-log.md](test-log.md) |

## Giới hạn đã biết

- Danh sách từ khóa khẩn cấp là bản nháp, cần bác sĩ đầu mối duyệt. So khớp từ khóa có thể bỏ sót cách nói khác; prototype ưu tiên báo dư.
- Không có kênh gửi thật (SMS, Zalo, thông báo đẩy); thông báo chỉ hiện trong màn hình mô phỏng.
- Giả định lớn nhất: mọi thay đổi đều được nhân viên ghi vào hệ thống. Prototype không kiểm chứng được giả định này.

---

*Phần do AI hỗ trợ: Claude viết code, prompt và kiểm thử theo phạm vi trong BRD rút gọn; người làm chạy thử với người dùng và quyết định sửa gì.*
