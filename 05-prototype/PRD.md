# PRD – Prototype "Lịch hẹn của tôi"

PRD (Product Requirements Document) trả lời **sản phẩm cần hành xử thế nào** để đạt mục tiêu trong [BRD rút gọn](BRD-lite.md). Các mã FB, CS, BP, R… được giải thích ở [GIAI-THICH-MA.md](../GIAI-THICH-MA.md); rủi ro R1–R10 ở [06-rui-ro-dao-duc](../06-rui-ro-dao-duc/README.md).

## 1. Người dùng và tình huống

| Người dùng | Tình huống | Kịch bản trong prototype |
| --- | --- | --- |
| Phụ nữ mang thai đặt khám thai theo gói | Bác sĩ đã đặt bị đổi | S1 (FB4) |
| Phụ nữ mang thai đặt siêu âm | Dịch vụ bị đổi, phòng bị đổi | S2 (FB3a) |
| Phụ nữ mang thai chuẩn bị nhập viện sinh | Thêm bước chuẩn bị bắt buộc | S3 (FB2, FB5) |
| Phụ huynh đặt khám nhi cho con | Trạng thái lịch nhảy về "chờ xác nhận" | S4 (FB1) |
| Phụ huynh đưa con đi tiêm chủng | Đổi giờ và phòng | S5 |
| Phụ nữ mang thai, lịch giữ nguyên | Đối chứng: không được báo nhầm | S6 |
| Nhân viên điều phối (mô phỏng) | Sửa lịch, thêm bước chuẩn bị, gửi thông báo | Màn hình phía bệnh viện |

## 2. Luồng chính

```text
Điều phối sửa lịch → code so "lịch bệnh nhân đã biết" với "lịch hiện tại"
  → AI viết lời nhắn từ kết quả so sánh (hoặc câu chữ viết sẵn nếu người dùng tắt AI)
  → Bệnh nhân: Xác nhận · Chọn lịch khác · Gọi tổng đài

Câu hỏi của bệnh nhân → có từ khóa khẩn cấp? → có: hướng dẫn gọi 115, không qua AI
                                             → không: AI phân loại (lịch / chuẩn bị / y khoa / khác);
                                                câu y khoa được chuyển cho nhân viên y tế
```

## 3. Yêu cầu chức năng

| Mã | Yêu cầu | Tiêu chí chấp nhận | Nguồn |
| --- | --- | --- | --- |
| F1 | Phát hiện thay đổi giữa lịch đã đặt và lịch hiện tại: bác sĩ, dịch vụ, ngày, giờ, phòng, cơ sở, trạng thái xác nhận, bước chuẩn bị thêm mới | 6/6 kịch bản ra đúng mức độ (lớn, vừa, nhắc nhở, không đổi); có kiểm thử tự động | FB1–FB5; BP1 |
| F2 | Việc phát hiện thay đổi do code làm, không do AI; bảng "Trước → Bây giờ" lấy từ code | Bảng trên màn hình không phụ thuộc câu trả lời của AI | R1; CS ràng buộc 2 |
| F3 | AI viết tiêu đề, lời nhắn ngắn (≤ 3 câu) và danh sách việc cần làm (≤ 5 mục), chỉ từ dữ kiện F1 | Đầu ra đúng JSON schema; không có bác sĩ, giờ, bước chuẩn bị nào ngoài dữ kiện | BP1, BP2 |
| F4 | Mỗi thông báo có 3 nút: Xác nhận, Chọn lịch khác, Gọi tổng đài | Bấm nút được ghi vào nhật ký kèm số giây | BP1 |
| F5 | Danh sách bước chuẩn bị có hạn, đánh dấu được việc đã xong | Bước bắt buộc chưa xong được nhắc khi lịch không đổi | BP2; FB2, FB5 |
| F6 | Hỏi đáp về lịch và bước chuẩn bị từ dữ liệu của lượt khám | Không trả lời thông tin không có trong dữ liệu; gợi ý gọi tổng đài | – |
| F7 | Câu hỏi y khoa: không trả lời nội dung, chuyển cho nhân viên y tế, báo thời hạn phản hồi | 100% câu y khoa trong bộ thử được chuyển | BP3; R2; CS ràng buộc 5 |
| F8 | Dấu hiệu khẩn cấp: kiểm tra bằng từ khóa *trước* khi gọi AI, hiện ngay hướng dẫn gọi 115 hoặc đến cấp cứu | Câu khẩn cấp không bao giờ được gửi cho AI; nhận cả khi gõ không dấu | 06, mục 2 |
| F9 | Màn hình mô phỏng phía bệnh viện: sửa lịch hiện tại, thêm bước chuẩn bị, gửi thông báo | Chạy được 6 kịch bản bằng link `?kb=S1…S6&demo=1` | Phục vụ thử |
| F10 | Nhật ký phiên thử: kịch bản, nút đã bấm, số giây, câu hỏi và cách phân loại, nhà cung cấp và mô hình AI đã trả lời | Có đủ dữ liệu để điền log thử nghiệm | Phục vụ thử |
| F11 | **Người dùng được tắt AI:** ô "Cho phép dùng AI…" trên màn hình bệnh nhân, kèm giải thích AI làm gì. Tắt thì vẫn nhận đủ thông báo bằng câu chữ viết sẵn, không gửi dữ liệu cho AI | Khi tắt, máy chủ không gọi nhà cung cấp AI; nhật ký ghi "Người dùng đã tắt AI" | CS ràng buộc 1 (chính sách bảo vệ dữ liệu cá nhân) |

## 4. Yêu cầu phi chức năng

| Mã | Yêu cầu |
| --- | --- |
| N1 | Chỉ dùng dữ liệu tự mô phỏng; không nhập dữ liệu thật của người bệnh |
| N2 | Khóa API chỉ nằm ở máy chủ cục bộ (file `.env`, không đưa lên repo), không đưa xuống trình duyệt |
| N3 | Chạy được khi không có khóa API (chế độ mẫu không AI), để vẫn thử được và để so sánh |
| N4 | Tiếng Việt, xưng hô lịch sự, câu ngắn; đọc được trên màn hình điện thoại (CS ràng buộc 3) |
| N5 | Ghi rõ trên giao diện: đây là prototype bài tập, không phải ứng dụng chính thức của Vinmec |
| N6 | Không phụ thuộc một nhà cung cấp AI: chạy được với Claude hoặc GPT, cùng prompt và schema, chọn bằng file `.env` |
| N7 | Không chia sẻ thông tin lượt khám cho người khác (người nhà, công ty) khi chưa có đồng ý của người bệnh (CS ràng buộc 4). Prototype không có tính năng chia sẻ |

## 5. Hành vi của AI

- Prompt, schema, mô hình và lịch sử thay đổi: [prompts.md](prompts.md).
- AI chỉ nhận kết quả so sánh do code tính và dữ liệu một lượt khám; không nhận thông tin nhận dạng thật.
- Đầu ra luôn là JSON theo schema; AI trả sai định dạng hoặc lỗi thì tự rơi về câu chữ viết sẵn.

## 6. Tiêu chí chấp nhận khi thử với người dùng

| Chỉ số | Cách đo | Mục tiêu đặt trước |
| --- | --- | --- |
| Hiểu đúng thay đổi | Sau khi đọc thông báo, người thử nói lại thay đổi là gì; so với dữ kiện | Ít nhất 2/3 người thử hiểu đúng ở mọi kịch bản |
| Thời gian đến khi hành động | Đồng hồ trong prototype, từ lúc thông báo hiện đến lúc bấm nút | Dưới 60 giây |
| Hành động đúng | Nút được bấm phù hợp với tình huống (ví dụ: đổi dịch vụ thì chọn lịch khác hoặc gọi tổng đài) | Ít nhất 2/3 |
| An toàn | Câu hỏi y khoa và câu khẩn cấp được chuyển đúng | 100% trong các câu thử |
| Mức hài lòng | Người thử tự chấm 1–5 | Trung bình ≥ 4 |

Kịch bản thử và bảng log: [test-log.md](test-log.md).

## 7. Ngoài phạm vi của prototype

Tích hợp hệ thống lịch thật; gửi SMS, Zalo, thông báo đẩy thật; đặt lịch mới, thanh toán; nội dung chuẩn bị do AI tự nghĩ ra; tư vấn y khoa; quy trình nội bộ của điều phối lịch.
