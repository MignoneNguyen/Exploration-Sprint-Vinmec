# BRD rút gọn – Sáng kiến "Lịch hẹn của tôi"

BRD (Business Requirements Document) trả lời **vì sao làm và làm để đạt gì**. Sản phẩm cụ thể cần hành xử thế nào nằm ở [PRD.md](PRD.md). Vì sao chỉ làm bản rút gọn: xem [PHUONG-PHAP.md, mục 5](../PHUONG-PHAP.md#5-brd-và-prd). Các mã H4, FB, CS, BP… được giải thích ở [GIAI-THICH-MA.md](../GIAI-THICH-MA.md).

## 1. Vấn đề kinh doanh

Sau khi bệnh nhân đặt lịch, kế hoạch khám có thể thay đổi (bác sĩ, dịch vụ, giờ, bước chuẩn bị bắt buộc) mà bệnh nhân chỉ biết khi đã đến viện (H4: 5/8 trường hợp Facebook). Quy trình của Vinmec cho phép tổng đài điều chỉnh giờ khám sau khi đặt, nhưng việc báo lại dựa vào cuộc gọi; trong khi Vinmec cam kết người bệnh được biết bác sĩ chịu trách nhiệm điều trị (CS). Need statement: [03-need-statement](../03-need-statement/need-statement.md).

## 2. Vì sao đáng làm (business case)

| Giá trị | Lập luận | Bằng chứng |
| --- | --- | --- |
| Giữ lợi thế cạnh tranh | Người bệnh chọn Vinmec vì thuận tiện và chắc chắn; lịch không được giữ đúng là mất đúng lợi thế đó, có người cân nhắc đổi viện | P2, FB4; TT1 so sánh trực tiếp với Tâm Anh |
| Giữ đúng cam kết với người bệnh | Quyền được biết bác sĩ điều trị, được thông tin bằng ngôn ngữ dễ hiểu | CS, FB4 |
| Giảm việc lặp lại cho tổng đài | Người bệnh tự gọi để kiểm tra lịch khi trạng thái lịch nhảy | FB1 |
| Giảm lượt khám phải hủy hoặc làm lại | Đến nơi không làm được thủ thuật, thiếu bước chuẩn bị bắt buộc | FB2, FB5 |
| Có tiền lệ ở nơi khác | Tin nhắn lịch gắn với hệ thống lịch giảm tương đối 17,2% tỷ lệ bỏ hẹn ở Guy's and St Thomas' (case study trước–sau, không có nhóm đối chứng) | BP1 |

**Chưa có:** số liệu nền của Vinmec (tần suất thay đổi lịch, số cuộc gọi kiểm tra lịch) và chi phí tích hợp. Đây là lý do chưa làm BRD đầy đủ.

## 3. Mục tiêu của bước prototype

Kiểm chứng: **nếu thay đổi về bác sĩ, dịch vụ, giờ khám hoặc bước chuẩn bị bắt buộc được báo đến bệnh nhân trước khi rời nhà, bằng lời dễ hiểu và kèm việc cần làm, thì bệnh nhân hiểu đúng và hành động đúng.** Đây là điều kiện cần cho outcome của need statement.

Prototype **không** chứng minh được vấn đề xảy ra thường xuyên. Việc đó cần phỏng vấn đúng nhóm người dùng và số liệu của Vinmec.

## 4. Phạm vi sáng kiến

| Trong phạm vi | Ngoài phạm vi |
| --- | --- |
| Lượt khám đã đặt trước của phụ nữ mang thai, phụ huynh (khám thai theo gói, tiêm chủng, khám nhi) | Người lớn tuổi khám theo bảo hiểm ở viện công; ca khám gấp không đặt trước |
| Báo thay đổi lịch và bước chuẩn bị, từ sau khi đặt đến ngày khám | Đặt lịch mới, thanh toán, đặt cọc (đã có trên app) |
| Hỏi đáp về lịch và chuẩn bị; chuyển câu hỏi y khoa cho nhân viên | Tư vấn y khoa, giải thích kết quả, chẩn đoán |
| | Hồ sơ tách rời giữa các diện khám (H5: hướng dự phòng, cần sáng kiến riêng) |
| | Thái độ nhân viên, thiếu nhân sự, thời gian chờ thanh toán (vấn đề vận hành) |

## 5. Các bên liên quan

Bệnh nhân (người dùng chính), nhân viên điều phối lịch (người tạo thay đổi), tổng đài (nhận cuộc gọi khi bệnh nhân bấm "gọi tổng đài"), bác sĩ đầu mối (duyệt danh sách từ khóa khẩn cấp và nội dung chuẩn bị), đội MyVinmec và IT (sở hữu app, dữ liệu lịch), lãnh đạo khoa sản, nhi (quyết định tiếp nhận). Phân tích đầy đủ ở [need statement, mục 7.1](../03-need-statement/need-statement.md#71-các-bên-liên-quan-cho-h4).

## 6. Chỉ số thành công

**Của sáng kiến** (khi triển khai thật; chưa có số nền, cần xin dữ liệu Vinmec ở tuần 1 sprint):

- **Chỉ số chính** (outcome của need statement): tỷ lệ lượt khám đã đặt mà khi đến nơi không làm được hoặc phải đổi, trên tổng số lượt đặt trước của khoa sản, nhi.
- **Chỉ số phụ** (theo [tiêu chí nhu cầu](../03-need-statement/need-statement.md#74-tiêu-chí-nhu-cầu-need-criteria)): tỷ lệ lượt có thay đổi mà bệnh nhân biết trước khi rời nhà; số cuộc gọi tổng đài chỉ để kiểm tra lại lịch; thời gian chờ thêm do phải xếp lại hàng.
- Khung tính quy mô và dữ liệu cần xin: [need statement, mục 7.2](../03-need-statement/need-statement.md#72-thị-trường-khung-tính-chưa-có-số).

**Của bước prototype** (thử với 2–3 người dùng): hiểu đúng thay đổi ≥ 2/3; thời gian đến khi hành động < 60 giây; hành động đúng ≥ 2/3; câu y khoa và khẩn cấp được chuyển đúng 100%; mức hài lòng ≥ 4/5. Cách đo chi tiết: [PRD.md, mục 6](PRD.md#6-tiêu-chí-chấp-nhận-khi-thử-với-người-dùng).

## 7. Giả định và ràng buộc

- **Giả định lớn nhất:** mọi thay đổi về lịch đều được nhân viên ghi vào hệ thống. Nếu không, không công cụ nào báo được (BP1). Cần kiểm chứng với điều phối lịch ở tuần 1 sprint.
- Giả định: bệnh nhân đọc thông báo trong app. Kênh Zalo hoặc SMS chưa được kiểm chứng.
- Ràng buộc từ chính sách Vinmec: phải báo cho người dùng khi dữ liệu được xử lý tự động và cho phép từ chối; không chia sẻ thông tin sức khỏe khi chưa có đồng ý; không chẩn đoán ([04-chinh-sach-vinmec.md, mục 3](../01-phong-van/04-chinh-sach-vinmec.md#3-ràng-buộc-cho-giải-pháp-ai-rút-ra-từ-chính-sách)).
- Ràng buộc của bài tập: 1 tuần; không có quyền truy cập hệ thống Vinmec; chỉ dữ liệu giả lập; người thử là người quen, không phải bệnh nhân Vinmec.
