# Rủi ro an toàn, đạo đức và cách giảm thiểu

> **Trạng thái: bản nháp, đã khớp với prototype.** Soạn theo [prototype](../05-prototype/README.md) và bài học từ Dora ([04-best-practice](../04-best-practice/best-practice.md)). Cần cập nhật lại sau khi thử với người dùng.
>
> Đã hiện thực trong prototype: R1 (code tính thay đổi, AI chỉ viết lời), R2 (câu y khoa được chuyển nhân viên), R3 (AI chỉ dùng bước chuẩn bị có trong dữ liệu), R4 (chỉ dữ liệu giả lập; khóa API ở máy chủ, trong `.env` không đưa lên repo), R8 (một bộ prompt và schema cho cả hai nhà cung cấp; nhật ký ghi nhà cung cấp và mô hình), R9 (người dùng được tắt AI, có giải thích AI làm gì), đường chuyển tuyến khẩn cấp (từ khóa kiểm tra trước khi gọi AI).

## 1. Rủi ro và cách giảm thiểu

| # | Rủi ro | Hậu quả | Cách giảm thiểu |
| --- | --- | --- | --- |
| R1 | AI báo sai thay đổi (báo đổi khi không đổi, hoặc bỏ sót thay đổi) | Bệnh nhân đi lại vô ích hoặc bỏ lỡ buổi khám, đúng cái need statement muốn giảm | AI chỉ đọc từ dữ liệu lịch của bệnh viện, không tự suy đoán; mỗi tin nhắn kèm thông tin gốc (bác sĩ, giờ, dịch vụ cũ và mới); nghiêng về báo dư; có nút "gọi tổng đài để xác nhận" |
| R2 | AI trả lời câu hỏi y khoa (ví dụ "đổi sang siêu âm 2D có ảnh hưởng gì không?") | Lời khuyên y khoa sai, không có bác sĩ chịu trách nhiệm | Giới hạn phạm vi: chỉ giải thích lịch và bước chuẩn bị theo danh sách có sẵn; câu hỏi ngoài phạm vi được chuyển cho nhân viên, có thời hạn phản hồi rõ ràng |
| R3 | AI tự tạo bước chuẩn bị không có trong hướng dẫn của khoa | Bệnh nhân chuẩn bị sai (ví dụ nhịn ăn không cần thiết) | Bước chuẩn bị lấy nguyên văn từ danh sách đã được khoa duyệt; AI chỉ diễn đạt lại, không thêm |
| R4 | Lộ thông tin cá nhân, lịch khám (dịch vụ sản, nhi là thông tin nhạy cảm) | Vi phạm quyền riêng tư | Prototype chỉ dùng dữ liệu tự mô phỏng; tin nhắn không ghi chi tiết dịch vụ nhạy cảm trên màn hình khóa. Prototype gửi dữ liệu lượt khám cho nhà cung cấp AI bên ngoài (Anthropic hoặc OpenAI), nên khi triển khai thật phải chọn nhà cung cấp theo quy định bảo vệ dữ liệu cá nhân hiện hành và quy định của Vinmec (thỏa thuận xử lý dữ liệu, nơi lưu dữ liệu), hoặc dùng mô hình chạy trong hạ tầng của Vinmec |
| R5 | Người không đọc được tin nhắn (lớn tuổi, không dùng smartphone, người nước ngoài) bị bỏ lại | Bất bình đẳng trong tiếp cận | Giữ kênh gọi điện, tổng đài song song; hỗ trợ ngôn ngữ khác (bài học từ Dora và từ việc MIA chỉ hỗ trợ tiếng Việt) |
| R6 | Thông báo che giấu vấn đề vận hành (bệnh viện đổi lịch nhiều hơn vì "đã có thông báo") | Trải nghiệm tổng thể không tốt lên | Đo cả số lượt thay đổi lịch, không chỉ tỷ lệ được báo trước (xem chỉ số trong need statement) |
| R7 | Người kiểm tra sửa sai nhãn của AI (ca sót của Dora) | Bỏ sót ca cần xử lý | Quy trình kiểm tra phải ghi lại mọi lần người sửa nhãn của AI và rà soát định kỳ |
| R8 | Đổi nhà cung cấp hoặc mô hình AI (Claude ↔ GPT, phiên bản mới, mô hình dự phòng) làm cách viết và cách phân loại câu hỏi y khoa thay đổi | Câu y khoa có thể không được chuyển người; kết quả thử giữa các lần không so sánh được | Phần an toàn chính (so lịch, từ khóa khẩn cấp) là code, không phụ thuộc mô hình; nhật ký ghi nhà cung cấp, mô hình thật sự trả lời và phiên bản prompt; mỗi lần đổi mô hình chạy lại 6 kịch bản và các câu thử y khoa trước khi thử với người dùng |
| R9 | Người dùng không biết dữ liệu lịch của mình được AI xử lý, hoặc không có cách từ chối | Trái chính sách bảo vệ dữ liệu cá nhân của Vinmec (phải thông báo, giải thích nguyên tắc, cho phép không tham gia); mất niềm tin | Ô "Cho phép dùng AI…" trên màn hình bệnh nhân, kèm giải thích ngắn AI làm gì; tắt thì vẫn nhận đủ thông báo bằng câu chữ viết sẵn và không có dữ liệu nào gửi cho AI (PRD F11) |
| R10 | Chia sẻ thông tin lượt khám cho người khác (người nhà đặt hộ, công ty khám định kỳ) khi người bệnh chưa đồng ý | Trái nguyên tắc đạo đức của Vinmec; lộ thông tin nhạy cảm (sản, nhi) | Prototype không có tính năng chia sẻ (PRD N7). Khi làm tính năng đặt hộ: chỉ gửi cho người được người bệnh chỉ định |

Các ràng buộc từ chính sách của Vinmec dùng cho bảng trên: [01-phong-van/04-chinh-sach-vinmec.md, mục 3](../01-phong-van/04-chinh-sach-vinmec.md#3-ràng-buộc-cho-giải-pháp-ai-rút-ra-từ-chính-sách).

## 2. Đường chuyển tuyến khẩn cấp

Prototype không phải kênh y tế khẩn cấp. Cần thể hiện rõ trong giao diện:

1. Nếu tin nhắn của bệnh nhân có dấu hiệu khẩn cấp (từ khóa như đau dữ dội, chảy máu, khó thở, thai không cử động), AI **không** trả lời nội dung mà hiển thị ngay: gọi 115 hoặc đến khoa cấp cứu gần nhất, kèm số hotline của bệnh viện.
2. Câu hỏi y khoa không khẩn cấp: chuyển cho nhân viên y tế, báo bệnh nhân thời hạn phản hồi.
3. Câu hỏi về lịch mà AI không chắc: chuyển cho tổng đài.
4. Mọi lần chuyển được ghi log để rà soát.

*Danh sách từ khóa khẩn cấp và số hotline cần được bác sĩ đầu mối duyệt trước khi thử với người dùng thật.*

## 3. Ràng buộc đã tuân thủ trong bài tập (mục 6.4)

- [x] Xin đồng ý của người được phỏng vấn trước khi bắt đầu (P1–P4 đều đồng ý)
- [x] Chỉ hỏi về trải nghiệm dịch vụ; các chi tiết sức khỏe người tham gia tự kể đã được lược khỏi ghi chép
- [x] Ẩn danh P1–P4; tuổi ghi theo khoảng; không ghi tên, không chụp ảnh người hay giấy tờ y tế
- [ ] Ghi âm: chưa ghi rõ buổi nào có ghi âm, cần bổ sung
- [x] Không đưa ra lời khuyên y khoa
- [x] Ghi rõ phần do AI tạo ở cuối mỗi file và trong README

---

*Phần do AI hỗ trợ: bản nháp do Claude soạn từ hướng prototype và bài học best practice; người làm cần rà soát và chỉnh theo prototype thực tế.*
