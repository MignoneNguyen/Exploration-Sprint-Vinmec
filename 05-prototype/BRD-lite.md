# BRD rút gọn – Prototype "Lịch hẹn của tôi"

Vì sao chỉ làm BRD rút gọn, không làm BRD đầy đủ: xem [PHUONG-PHAP.md, mục 5](../PHUONG-PHAP.md#5-có-cần-brd-không). Các mã H4, FB… được giải thích ở [GIAI-THICH-MA.md](../GIAI-THICH-MA.md).

## 1. Mục tiêu

Kiểm chứng giả thuyết H4 bằng prototype: **nếu thay đổi về bác sĩ, dịch vụ, giờ khám hoặc bước chuẩn bị bắt buộc được báo đến bệnh nhân trước khi rời nhà, bằng lời dễ hiểu và kèm việc cần làm, thì bệnh nhân hiểu đúng và hành động đúng.** Đây là điều kiện cần cho outcome của [need statement](../03-need-statement/need-statement.md): giảm số lần đến viện mà không được khám đúng như đã đặt.

Prototype **không** chứng minh được vấn đề xảy ra thường xuyên. Việc đó cần phỏng vấn đúng nhóm người dùng và số liệu của Vinmec.

## 2. Phạm vi

| Trong phạm vi | Ngoài phạm vi |
| --- | --- |
| Một lượt khám đã đặt trước của phụ nữ mang thai hoặc phụ huynh (dữ liệu giả lập) | Tích hợp hệ thống lịch thật của Vinmec |
| So sánh "lịch đã đặt" với "lịch hiện tại" để tìm thay đổi | Đặt lịch mới, thanh toán, đặt cọc |
| Tin nhắn báo thay đổi do AI viết, có nút hành động | Gửi SMS, Zalo, thông báo đẩy thật |
| Danh sách bước chuẩn bị theo mốc thời gian | Nội dung chuẩn bị do AI tự nghĩ ra |
| Hỏi đáp về lịch và bước chuẩn bị; chuyển câu hỏi y khoa cho nhân viên | Tư vấn y khoa, giải thích kết quả, chẩn đoán |
| Màn hình mô phỏng phía bệnh viện để tạo thay đổi khi thử | Quy trình nội bộ của điều phối lịch |

## 3. Các bên liên quan

Bệnh nhân (người dùng chính), nhân viên điều phối lịch (người tạo thay đổi, được mô phỏng trong prototype), tổng đài (nhận cuộc gọi khi bệnh nhân bấm "gọi tổng đài"), bác sĩ đầu mối (duyệt danh sách từ khóa khẩn cấp và nội dung chuẩn bị). Phân tích đầy đủ ở [need statement, mục 6.1](../03-need-statement/need-statement.md#61-các-bên-liên-quan-cho-h4).

## 4. Yêu cầu chức năng

| Mã | Yêu cầu | Nguồn |
| --- | --- | --- |
| F1 | Phát hiện thay đổi giữa lịch đã đặt và lịch hiện tại: bác sĩ, dịch vụ, ngày, giờ, phòng, cơ sở, trạng thái xác nhận, bước chuẩn bị thêm mới | FB1–FB5; best practice 1 |
| F2 | Việc phát hiện thay đổi do code làm (không do AI), để không bao giờ báo sai dữ kiện | Rủi ro R1 |
| F3 | AI viết tiêu đề, lời nhắn ngắn và danh sách việc cần làm, chỉ dựa trên dữ kiện F1 trả về | Best practice 1, 2 |
| F4 | Mỗi thông báo có 3 nút: Xác nhận, Chọn lịch khác, Gọi tổng đài | Best practice 1 (tin nhắn để hành động) |
| F5 | Danh sách bước chuẩn bị có hạn (trước 1 ngày, sáng ngày khám…), đánh dấu được việc đã xong | Best practice 2; FB2, FB5 |
| F6 | Hỏi đáp: trả lời câu hỏi về lịch và bước chuẩn bị từ dữ liệu của lượt khám | – |
| F7 | Câu hỏi y khoa: không trả lời nội dung, chuyển cho nhân viên y tế, báo thời hạn phản hồi | Best practice 3; rủi ro R2 |
| F8 | Dấu hiệu khẩn cấp: kiểm tra bằng từ khóa *trước* khi gọi AI, hiển thị ngay hướng dẫn gọi 115 hoặc đến cấp cứu | 06-rui-ro-dao-duc, mục 2 |
| F9 | Màn hình mô phỏng phía bệnh viện: sửa lịch hiện tại, thêm bước chuẩn bị, gửi thông báo | Phục vụ thử nghiệm |
| F10 | Ghi nhật ký phiên thử (kịch bản, nút đã bấm, thời gian đến khi hành động, câu hỏi và cách phân loại) | Phục vụ log thử nghiệm |

## 5. Yêu cầu phi chức năng

| Mã | Yêu cầu |
| --- | --- |
| N1 | Chỉ dùng dữ liệu tự mô phỏng; không nhập dữ liệu thật của người bệnh |
| N2 | Khóa API chỉ nằm ở máy chủ cục bộ, không đưa xuống trình duyệt |
| N3 | Chạy được khi không có khóa API (chế độ mẫu không AI), để vẫn thử được và để so sánh |
| N4 | Tiếng Việt, xưng hô lịch sự, câu ngắn; đọc được trên màn hình điện thoại |
| N5 | Ghi rõ trên giao diện: đây là prototype bài tập, không phải ứng dụng chính thức của Vinmec |

## 6. Chỉ số thành công khi thử với người dùng

| Chỉ số | Cách đo | Mục tiêu đặt trước |
| --- | --- | --- |
| Hiểu đúng thay đổi | Sau khi đọc thông báo, người thử nói lại thay đổi là gì; so với dữ kiện | Ít nhất 2/3 người thử hiểu đúng ở mọi kịch bản |
| Thời gian đến khi hành động | Đồng hồ trong prototype, từ lúc thông báo hiện đến lúc bấm nút | Dưới 60 giây |
| Hành động đúng | Nút được bấm phù hợp với tình huống (ví dụ: đổi dịch vụ thì chọn lịch khác hoặc gọi tổng đài) | Ít nhất 2/3 |
| An toàn | Câu hỏi y khoa và câu khẩn cấp được chuyển đúng | 100% trong các câu thử |
| Mức hài lòng | Người thử tự chấm 1–5 | Trung bình ≥ 4 |

## 7. Giả định và ràng buộc

- Giả định: mọi thay đổi về lịch đều được nhân viên ghi vào hệ thống. Nếu không, không công cụ nào báo được (bài học từ DrDoctor). Đây là giả định lớn nhất, cần kiểm chứng với điều phối lịch ở tuần 1 sprint.
- Giả định: bệnh nhân đọc thông báo trong app. Kênh Zalo hoặc SMS chưa được kiểm chứng.
- Ràng buộc: thời gian 1 tuần; không có quyền truy cập hệ thống Vinmec; người thử là người quen, không phải bệnh nhân Vinmec.

---

*Phần do AI hỗ trợ: Claude soạn bản nháp từ need statement, best practice và phần rủi ro; người làm duyệt phạm vi và chỉ số.*
