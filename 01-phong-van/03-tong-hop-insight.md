# Tổng hợp insight – Khoảnh khắc Đặt lịch

> Các mã H1–H5 (giả thuyết) và FB, TT, AS, W, P, CS (nguồn) được giải thích ở [GIAI-THICH-MA.md](../GIAI-THICH-MA.md).

## 1. Mục tiêu và phạm vi

**Khoảnh khắc đã chọn: Đặt lịch**, tập trung vào khoảng cách giữa những gì bệnh nhân đã đặt và những gì thực sự xảy ra vào ngày khám. Mục tiêu phỏng vấn: xác nhận khoảng cách này xảy ra thường xuyên, và tìm hiểu bệnh nhân đang tự xoay xở thế nào. Song song, theo dõi mẫu thứ hai: hệ thống không nhận ra đó là cùng một bệnh nhân.

## 2. Nguồn dữ liệu

Sáu nguồn, chi tiết ở các file cùng thư mục:

| Nguồn | File | Quy mô |
| --- | --- | --- |
| Review App Store | [01-desk-research.md](01-desk-research.md) | 11 review gần nhất |
| Facebook | [01-desk-research.md](01-desk-research.md) | 4 bài đăng, 8 trường hợp (FB1–FB7, FB3 tách thành FB3a/FB3b) |
| TikTok | [01-desk-research.md](01-desk-research.md) | 5 video, 4 đã ghi chép |
| Tự dùng MyVinmec | [00-myvinmec-walkthrough.md](00-myvinmec-walkthrough.md) | 1 lần, khoảng 8 phút (18/10/2026) |
| Chính sách chính thức của Vinmec (CS) | [04-chinh-sach-vinmec.md](04-chinh-sach-vinmec.md) | 9 văn bản, truy cập 19/10/2026 |
| Phỏng vấn | [P1](survey-logs/P1.md) · [P2](survey-logs/P2.md) · [P3](survey-logs/P3.md) · [P4](survey-logs/P4.md), theo [interview guide](02-interview-guide.md) | 4 người, khoảng 40–80 tuổi (17–18/10/2026, P1 bổ sung 19/10) |

| Mã | Tuổi (khoảng) | Nơi khám chính | Cách đến khám |
| --- | --- | --- | --- |
| P1 | 50–55 | Bạch Mai, vì chuyên khoa tốt nhất | Không bao giờ đặt lịch; tuần trước đưa mẹ đi khám, tự tìm khoa theo bảng chỉ dẫn. Khám định kỳ theo công ty, mỗi năm một nơi |
| P2 | 40 | Vinmec (dịp Tết, con ốm cần khám gấp, vì gần nhà); thỉnh thoảng Việt Pháp | Gọi hotline |
| P3 | 75–80 | Việt Xô, theo bảo hiểm | Không bao giờ đặt lịch; khám định kỳ 6 tháng/lần |
| P4 | 65–70 | Bệnh viện 175, khám định kỳ theo bảo hiểm | Đến thẳng; AI ở sảnh sắp xếp bác sĩ |

## 3. Giả thuyết

1. **H4 (chính)** – Sau khi đặt lịch, bệnh nhân không biết bác sĩ, dịch vụ hoặc giờ khám đã bị thay đổi, hay còn thiếu bước chuẩn bị nào, cho đến khi đến viện. Hệ quả: đi lại vô ích, xếp hàng lại, mất niềm tin.
2. **H5 (phụ)** – Hệ thống không nhận ra cùng một bệnh nhân qua các lần khám hoặc các diện khám (gói, công ty, cá nhân), nên bệnh nhân bị hỏi lại và hồ sơ bị tách rời.
3. **H1 (đã loại)** – Bệnh nhân không biết nên đặt chuyên khoa hay bác sĩ nào. MyVinmec đã có tính năng đáp ứng (trợ lý MIA, đặt lịch theo triệu chứng), và 4/4 người phỏng vấn tự xử lý được.
4. **H2, H3 (dự phòng)** – Về nhận kết quả: không biết khi nào có kết quả (H2), không hiểu kết quả (H3).

**Tiêu chí xác nhận:** một giả thuyết chỉ được xem là đúng khi có ít nhất 2 người *thuộc đúng nhóm người dùng* kể lại một lần cụ thể đã xảy ra.

## 4. Đối chiếu giả thuyết qua các nguồn

| Giả thuyết | App Store | Facebook | TikTok | Tự dùng app | Chính sách (CS) | Phỏng vấn | Đánh giá |
| --- | --- | --- | --- | --- | --- | --- | --- |
| H4 – Không biết lịch bị đổi | 3 review lỗi đặt lịch, lịch sync chậm | FB1, FB2, FB3a, FB4, FB5 | – | Chưa kiểm chứng (chưa hoàn tất đặt lịch) | Quy trình cho phép tổng đài điều chỉnh giờ khám; thông báo lại dựa vào cuộc gọi. Cam kết "được biết bác sĩ điều trị" mâu thuẫn với FB4 | 0/4 xác nhận; không ai thuộc đúng nhóm | Bằng chứng desk research khá, giải thích được cơ chế; chưa có xác nhận trực tiếp |
| H5 – Không nhận ra cùng một bệnh nhân | Không tìm được kết quả MRI cũ; liên kết hồ sơ chậm | FB3b, FB7 (chưa xác minh) | – | Liên kết hồ sơ phải tự khớp thông tin; Inpatient Tracking không thấy hồ sơ | Một mã y tế cho mỗi người, nhưng app chỉ liên kết khi thông tin khớp; người bệnh chịu trách nhiệm giữ thông tin khớp | P1 xác nhận hồ sơ không đồng bộ giữa các nơi khám; 4/4 tự giữ kết quả | Tín hiệu khá: giả thuyết duy nhất có xác nhận trực tiếp từ phỏng vấn |
| H1 – Không biết chọn khoa | Không có chỗ review bác sĩ | – | TT5: tìm review bác sĩ ngoài app | Đã có MIA và đặt lịch theo triệu chứng | – | 4/4 tự xử lý được | Loại. Chọn bác sĩ là tín hiệu yếu |
| H2 – Không biết khi nào có kết quả | Khám thứ Bảy không thấy kết quả trên app | – | – | – | – | 0/4 | Không ủng hộ |
| H3 – Không hiểu kết quả | – | – | – | – | Cam kết được tư vấn khi có kết quả | 1/4 | Yếu |

Kết quả phỏng vấn theo giả thuyết:

| Giả thuyết | Kết quả phỏng vấn | Kết luận |
| --- | --- | --- |
| H4 | P2 trả lời "không" ở A10–A13 (lần khám gấp); P1, P3, P4 không đặt lịch trước | Chưa kiểm chứng được bằng phỏng vấn. Giữ là giả thuyết mở |
| H5 | P1 ủng hộ: khám định kỳ theo công ty mỗi năm một nơi, hồ sơ không đồng bộ, mỗi nơi giữ riêng. P2 không biết; P3, P4 chưa hỏi | 1 người ủng hộ trực tiếp (P1). Cộng với FB3b, FB7 và lần tự dùng app: tín hiệu khá |
| H1 | Cả 4 tự xử lý được: bảng chỉ dẫn, tự tìm trên mạng, quen khám nội, AI ở sảnh | Củng cố quyết định loại H1 |
| H2 | P2 được gọi/nhắn; P3 khoảng 2 giờ; P4 có giờ ước tính in trên phiếu; P1 thấy kết quả trên app Bạch Mai sáng hôm sau | Không ủng hộ (0/4) |
| H3 | P1 tự đọc và được bác sĩ giải thích; P3, P4 hiểu nhờ cột ngưỡng trên phiếu và bác sĩ; P2 có phần không hiểu | Yếu (1/4) |

## 5. Phát hiện

**Nhận định chính:** AI của Vinmec đang có mặt ở đầu hành trình (tìm hiểu và đặt lịch) nhưng dừng lại ở đó. Sau khi đặt lịch, bằng chứng cho thấy thay đổi không được báo (H4) và hồ sơ bị tách rời (H5), và chưa thấy AI hỗ trợ ở giai đoạn này.

**So với chính sách của Vinmec** ([chi tiết](04-chinh-sach-vinmec.md#2-cam-kết-so-với-thực-tế-quan-sát-được)): khoảng cách lớn nhất nằm ở hai chỗ. Quy trình cho phép thay đổi giờ khám và bác sĩ nhưng thông báo không theo kịp (H4); trách nhiệm giữ thông tin khớp được đặt lên người bệnh (H5).

Phát hiện ngoài giả thuyết:

- **Bệnh nhân tự giữ hồ sơ (4/4):** P1 giữ kết quả ở nhà, P2 scan lại và giữ bản gốc, P3 và P4 giữ bản giấy. Bệnh nhân đang là nơi duy nhất nối các lần khám lại với nhau. Tín hiệu này cùng hướng với H5.
- **Đối chứng về hồ sơ (P1):** theo lời kể của P1, ở Bệnh viện Xanh Pôn chỉ cần đưa CCCD là ra mã bệnh nhân, và khám theo diện cá nhân hay doanh nghiệp đều dùng chung một mã. Với Vinmec, chưa xác minh được việc hồ sơ công ty và cá nhân dùng mã riêng: hướng dẫn chính thức cho thấy mỗi khách hàng có một mã y tế, khách cũ không cần đăng ký lại, và app chỉ liên kết được khi thông tin khai báo trùng khớp. FB7 có thể do thông tin đăng ký qua công ty không khớp với hồ sơ cá nhân. Cần hỏi thêm trước khi dùng làm luận điểm.
- **Chọn viện theo hoàn cảnh:** P2 chọn Vinmec khi cần gấp vì gần nhà, chọn Việt Pháp khi cần chuyên môn. Khớp với FB4: lợi thế của Vinmec là thuận tiện và chắc chắn, nên lịch hẹn không được giữ đúng là mất đúng lợi thế đó.
- **Chờ đợi đông (P1, P3, P4):** P1 đưa mẹ đi khám mất cả ngày (8 giờ sáng đến 8 giờ tối, riêng chờ chụp chiếu 6–7 tiếng); P3 và P4 chờ ít nhất 2 giờ. Chủ yếu ở viện công, ngoài phạm vi.
- **Đối chứng AI ở sảnh:** theo lời kể của P4, Bệnh viện 175 dùng AI ở sảnh để sắp xếp bác sĩ. Chưa đối chiếu với nguồn công khai.

**Ngoài phạm vi AI:** phần lớn phàn nàn trên Facebook và TikTok là về thái độ nhân viên, thiếu nhân sự, cơ sở vật chất và chuyên môn (FB6, TT1, TT3), cùng thời gian chờ ở viện công (P1, P3, P4). Đây là vấn đề vận hành và con người, AI không giải quyết được. Ghi nhận rõ để không thổi phồng vai trò của AI.

## 6. Hạn chế

- **Tuyển sai nhóm:** không tuyển được người đặt lịch trước tại Vinmec trong thời hạn. Chỉ P2 dùng dịch vụ Vinmec gần đây, và đó là lần khám gấp. P1, P3, P4 đều không đặt lịch trước, nên không ai kiểm chứng được H4.
- **Bằng chứng H5 nằm ngoài Vinmec:** trường hợp của P1 là hồ sơ không thông giữa các bệnh viện khác nhau, không phải trong Vinmec.
- **Câu hỏi về app:** P1 và P4 từng dùng MyVinmec nhưng chưa được hỏi A8, A9.
- **Nhóm người dùng của need statement** (phụ nữ mang thai, phụ huynh) được chọn từ desk research: các trường hợp Facebook và đa số video TikTok đều thuộc khoa sản, nhi. Chưa có số liệu của Vinmec xác nhận đây là nhóm dùng dịch vụ nhiều nhất.
- **Nguồn thứ cấp thiên lệch:** Facebook và TikTok thiên về phàn nàn. Chính sách của Vinmec giải thích được cơ chế nhưng không cho biết tần suất.
- Phiếu phỏng vấn chưa ghi hình thức và thời lượng từng buổi.

## 7. Kết luận

**Quyết định:** giữ H4 làm need statement chính, ghi rõ mức bằng chứng là desk research (5 trường hợp Facebook, 3 review App Store, tự dùng app) và chính sách của Vinmec giải thích được cơ chế, nhưng chưa có phỏng vấn trực tiếp xác nhận. H5 là hướng dự phòng, nay có xác nhận trực tiếp từ P1, đối chứng từ Xanh Pôn và tín hiệu 4/4 người tự giữ hồ sơ.

Need statement chính thức, bằng chứng và cách đo: [03-need-statement](../03-need-statement/need-statement.md).

**Kế hoạch kiểm chứng nếu được chọn vào sprint:** tuần đầu phỏng vấn 3–5 phụ nữ mang thai hoặc phụ huynh đặt lịch trước tại Vinmec (khám thai theo gói, tiêm chủng, khám nhi), tuyển từ các nhóm review Vinmec trên Facebook; xin xem màn hình My visits và thông báo khi có thay đổi lịch. Song song, hỏi điều phối lịch về cách ghi thay đổi, và hỏi khách khám theo công ty về việc liên kết hồ sơ (H5).

## 8. Tài liệu tham khảo

- **Chính sách chính thức của Vinmec:** 9 nguồn, xem [04-chinh-sach-vinmec.md, mục 4](04-chinh-sach-vinmec.md#4-nguồn).
- **Nguồn bên thứ ba:** [MyVinmec trên App Store](https://apps.apple.com/app/id1494832536) (review 1–2 sao và mô tả tính năng); [Medpro: Bệnh viện Vinmec có khám bảo hiểm y tế không?](https://medpro.vn/tin-tuc/benh-vien-vinmec-co-kham-bao-hiem-y-te-khong)
- **Mạng xã hội:** Facebook, 4 bài đăng (1 bài trong nhóm review sinh con tại Vinmec, 3 bài khác), xem ngày 17/10/2026; TikTok, 5 video review Vinmec, xem ngày 18/10/2026. Nội dung đã ẩn danh (FB1–FB7, TT1–TT5); không lưu link để bảo vệ người đăng.
- **Dữ liệu sơ cấp:** phỏng vấn P1–P4 (17–18/10/2026, P1 bổ sung 19/10); tự dùng MyVinmec, ghi màn hình ngày 18/10/2026 (khoảng 8 phút); ảnh chụp 11 review App Store gần nhất.
- **Phương pháp và tài liệu khóa học:** Rob Fitzpatrick, *The Mom Test*; đề bài Exploration Sprint 6 tuần tại Vinmec (mục 6.1, 6.4); slide khóa học Human-Centered AI Design, AI Product Thinking & Requirements (Day 05), Xác định bài toán kinh doanh cho AI (Day 02), AI Ethics, Responsible AI & Compliance, Prototype Interview, ví dụ phỏng vấn tốt và chưa tốt.

---

*Phần do AI hỗ trợ: Claude soạn cấu trúc, diễn đạt và bảng đối chiếu từ ghi chép discovery; việc chọn giả thuyết, tiêu chí và kết luận do người làm quyết định.*
