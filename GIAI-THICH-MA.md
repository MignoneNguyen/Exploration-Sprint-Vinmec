# Giải thích các mã dùng trong repo

Các file trong repo dùng mã ngắn cho giả thuyết (H1–H5) và cho nguồn bằng chứng (FB, TT, AS, W, P). File này giải thích từng mã.

## 1. Giả thuyết về điểm đau (H1–H5)

Mỗi giả thuyết là một phỏng đoán về điểm đau của người bệnh, cần được kiểm chứng bằng bằng chứng. Các giả thuyết được đánh số theo thứ tự xuất hiện trong quá trình discovery, **không theo mức ưu tiên**: H4 là giả thuyết chính dù mang số 4.

| Mã | Giả thuyết | Thuộc giai đoạn | Trạng thái |
| --- | --- | --- | --- |
| **H1** | Bệnh nhân **không biết nên đặt chuyên khoa hay bác sĩ nào** khi đặt lịch. | Trước khi đặt lịch | **Đã loại.** MyVinmec đã có trợ lý MIA và đặt lịch theo triệu chứng; 4/4 người phỏng vấn tự xử lý được (bảng chỉ dẫn, tự tìm trên mạng, quen khám nội, AI ở sảnh). |
| **H2** | Bệnh nhân **không biết khi nào có kết quả** xét nghiệm, chụp chiếu và xem ở đâu. | Nhận kết quả | **Không ủng hộ** (0/3 người được hỏi): được gọi/nhắn, biết khoảng 2 giờ, hoặc giờ ước tính in trên phiếu. |
| **H3** | Bệnh nhân **không hiểu kết quả** khi cầm trên tay. | Nhận kết quả | **Yếu** (1/3): hai người hiểu nhờ cột ngưỡng trên phiếu và bác sĩ giải thích. |
| **H4** | Sau khi đặt lịch, bệnh nhân **không biết kế hoạch khám đã thay đổi** (đổi bác sĩ, đổi dịch vụ, đổi giờ, thủ thuật không làm được, còn thiếu bước chuẩn bị bắt buộc) **cho đến khi đến viện**. Hệ quả: đi lại vô ích, xếp hàng lại, mất niềm tin. | Từ sau khi đặt lịch đến ngày khám | **Giả thuyết chính, còn mở.** Có 5/8 trường hợp Facebook ủng hộ, nhưng 0/4 người phỏng vấn xác nhận vì không ai thuộc đúng nhóm người dùng. Là nền của [need statement chính](03-need-statement/need-statement.md). |
| **H5** | Hệ thống **không nhận ra cùng một bệnh nhân** qua các lần khám hoặc các diện khám (gói khám, công ty, cá nhân), nên bệnh nhân bị hỏi lại thông tin và hồ sơ bị tách rời. | Khai thông tin, liên kết hồ sơ; các lần khám sau | **Hướng dự phòng, tín hiệu trung bình.** Có FB3b, FB7, review App Store và lần tự dùng app; 3/3 người được hỏi tự giữ hồ sơ giấy. Là nền của need statement dự phòng. |

**Tiêu chí xác nhận một giả thuyết:** có ít nhất 2 người *thuộc đúng nhóm người dùng* kể lại một lần cụ thể đã xảy ra. Bài đăng mạng xã hội và review chỉ dùng để đặt giả thuyết, không đủ để xác nhận.

## 2. Mã nguồn bằng chứng

| Mã | Nguồn | Chi tiết |
| --- | --- | --- |
| **P1–P4** | Người được phỏng vấn (ẩn danh), 17–18/10/2026 | [01-phong-van/survey-logs/P1.md](01-phong-van/survey-logs/P1.md) … [P4.md](01-phong-van/survey-logs/P4.md) |
| **FB1–FB7** | Bài đăng Facebook về Vinmec (nhóm review và trang cá nhân), quanh ngày 17/10/2026. Bài FB3 nêu hai vấn đề nên tách thành **FB3a** (siêu âm 4D bị xếp hàng 2D) và **FB3b** (gói khám bị hỏi lại) | [01-phong-van/01-desk-research.md](01-phong-van/01-desk-research.md) |
| **TT1–TT5** | Video TikTok review Vinmec (TT2 chưa ghi chép) | [01-phong-van/01-desk-research.md](01-phong-van/01-desk-research.md) |
| **AS** | Review MyVinmec trên App Store (11 review gần nhất) | [01-phong-van/01-desk-research.md](01-phong-van/01-desk-research.md) |
| **W** | Lần tự dùng thử MyVinmec (walkthrough), 18/10/2026 | [01-phong-van/00-myvinmec-walkthrough.md](01-phong-van/00-myvinmec-walkthrough.md) |

## 3. Mã câu hỏi phỏng vấn

| Mã | Phần | Kiểm chứng |
| --- | --- | --- |
| **A1–A9** | Phần A: Đặt lịch (trải nghiệm chung) | H1, bối cảnh |
| **A10–A15** | Phần A: câu hỏi về lịch đã đặt so với thực tế | H4 |
| **A16–A17** | Phần A: hồ sơ qua nhiều diện khám, thời gian khám | H5 |
| **B1–B7** | Phần B: Nhận kết quả | H2, H3 |
| **K1–K3** | Kết thúc | Điểm đau lớn nhất, giới thiệu người khác |

Dấu ★ đánh dấu câu ưu tiên, hỏi kể cả khi thiếu thời gian. Nội dung đầy đủ: [01-phong-van/02-interview-guide.md](01-phong-van/02-interview-guide.md).

## 4. Thuật ngữ khác

| Thuật ngữ | Nghĩa |
| --- | --- |
| Need statement | Câu mô tả nhu cầu theo mẫu Biodesign: vấn đề – nhóm người dùng – kết quả mong muốn, không nêu giải pháp |
| Desk research | Nghiên cứu từ nguồn có sẵn (review, mạng xã hội, tài liệu), không tiếp xúc trực tiếp người dùng |
| Workaround | Cách người dùng tự xoay xở khi gặp vướng mắc |
| MIA | Trợ lý AI trong app MyVinmec (tên theo giao diện app ngày 18/10/2026) |
| DNA (did not attend) | Bệnh nhân không đến buổi khám đã hẹn; chỉ số dùng trong các nghiên cứu ở NHS (Anh) |
| My visits | Mục xem lịch khám đã đặt trong MyVinmec |
