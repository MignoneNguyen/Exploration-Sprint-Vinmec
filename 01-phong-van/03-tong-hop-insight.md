# Tổng hợp insight – Khoảnh khắc Đặt lịch

> Các mã H1–H5 (giả thuyết) và FB, TT, AS, W, P (nguồn) được giải thích ở [GIAI-THICH-MA.md](../GIAI-THICH-MA.md).

## 1. Mục tiêu và phạm vi

**Khoảnh khắc đã chọn: Đặt lịch**, tập trung vào khoảng cách giữa những gì bệnh nhân đã đặt và những gì thực sự xảy ra vào ngày khám. Mục tiêu phỏng vấn: xác nhận khoảng cách này xảy ra thường xuyên, và tìm hiểu bệnh nhân đang tự xoay xở thế nào. Song song, theo dõi mẫu thứ hai: hệ thống không nhận ra đó là cùng một bệnh nhân.

## 2. Nguồn dữ liệu

Năm nguồn, chi tiết ở các file cùng thư mục:

| Nguồn | File | Quy mô |
| --- | --- | --- |
| Review App Store | [01-desk-research.md](01-desk-research.md) | 11 review gần nhất |
| Facebook | [01-desk-research.md](01-desk-research.md) | 7 bài đăng, 8 trường hợp (FB1–FB7, FB3 tách thành FB3a/FB3b) |
| TikTok | [01-desk-research.md](01-desk-research.md) | 5 video, 4 đã ghi chép |
| Tự dùng MyVinmec | [00-myvinmec-walkthrough.md](00-myvinmec-walkthrough.md) | 1 lần, khoảng 8 phút (18/10/2026) |
| Phỏng vấn | [P1](survey-logs/P1.md) · [P2](survey-logs/P2.md) · [P3](survey-logs/P3.md) · [P4](survey-logs/P4.md), theo [interview guide](02-interview-guide.md) | 4 người, khoảng 40–80 tuổi (17–18/10/2026) |

| Mã | Tuổi (khoảng) | Nơi khám chính | Cách đến khám |
| --- | --- | --- | --- |
| P1 | 50–55 | Bạch Mai, vì chuyên khoa tốt nhất | Đặt lịch khám cho mẹ tuần trước; tự tìm khoa theo bảng chỉ dẫn |
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

| Giả thuyết | App Store | Facebook | TikTok | Tự dùng app | Phỏng vấn | Đánh giá |
| --- | --- | --- | --- | --- | --- | --- |
| H4 – Không biết lịch bị đổi | 3 review lỗi đặt lịch, lịch sync chậm | FB1, FB2, FB3a, FB4, FB5 | – | Chưa kiểm chứng (chưa hoàn tất đặt lịch) | 0/4 xác nhận; không ai thuộc đúng nhóm | Bằng chứng desk research khá, chưa có xác nhận trực tiếp |
| H5 – Không nhận ra cùng một bệnh nhân | Không tìm được kết quả MRI cũ; liên kết hồ sơ chậm | FB3b, FB7 | – | Liên kết hồ sơ phải tự khớp thông tin; Inpatient Tracking không thấy hồ sơ | 3/3 người được hỏi tự giữ bản giấy; A16 chưa có câu trả lời rõ | Tín hiệu trung bình |
| H1 – Không biết chọn khoa | Không có chỗ review bác sĩ | – | TT5: tìm review bác sĩ ngoài app | Đã có MIA và đặt lịch theo triệu chứng | 4/4 tự xử lý được | Loại. Chọn bác sĩ là tín hiệu yếu |
| H2 – Không biết khi nào có kết quả | Khám thứ Bảy không thấy kết quả trên app | – | – | – | 0/3 | Không ủng hộ |
| H3 – Không hiểu kết quả | – | – | – | – | 1/3 | Yếu |

Kết quả phỏng vấn theo giả thuyết:

| Giả thuyết | Kết quả phỏng vấn | Kết luận |
| --- | --- | --- |
| H4 | P2 trả lời "không" ở A10–A13 (lần khám gấp); P3, P4 không đặt lịch trước; P1 chưa được hỏi phần này | Chưa kiểm chứng được bằng phỏng vấn. Giữ là giả thuyết mở |
| H5 | P2 "không biết"; P1, P3, P4 chưa được hỏi A16 | Chưa kiểm chứng. Bằng chứng từ FB3b, FB7 và lần tự dùng app |
| H1 | Cả 4 tự xử lý được: bảng chỉ dẫn, tự tìm trên mạng, quen khám nội, AI ở sảnh | Củng cố quyết định loại H1 |
| H2 | P2 được gọi/nhắn; P3 khoảng 2 giờ; P4 có giờ ước tính in trên phiếu | Không ủng hộ |
| H3 | P3, P4 hiểu nhờ cột ngưỡng trên phiếu và bác sĩ; P2 có phần không hiểu | Yếu (1/3) |

## 5. Phát hiện

**Nhận định chính:** AI của Vinmec đang có mặt ở đầu hành trình (tìm hiểu và đặt lịch) nhưng dừng lại ở đó. Sau khi đặt lịch, bằng chứng desk research cho thấy thay đổi không được báo (H4) và hồ sơ bị tách rời (H5), và chưa thấy AI hỗ trợ ở giai đoạn này. Cần phỏng vấn đúng nhóm người dùng để xác nhận.

Phát hiện ngoài giả thuyết:

- **Bệnh nhân tự giữ hồ sơ (3/3 người được hỏi):** P2 scan lại và giữ bản gốc, P3 và P4 giữ bản giấy. Bệnh nhân đang là nơi duy nhất nối các lần khám lại với nhau. Tín hiệu này cùng hướng với H5.
- **Chọn viện theo hoàn cảnh:** P2 chọn Vinmec khi cần gấp vì gần nhà, chọn Việt Pháp khi cần chuyên môn. Khớp với FB4: lợi thế của Vinmec là thuận tiện và chắc chắn, nên lịch hẹn không được giữ đúng là mất đúng lợi thế đó.
- **Chờ đợi đông (P3, P4):** chờ ít nhất 2 giờ, nhưng chủ yếu ở viện công, ngoài phạm vi.
- **Đối chứng:** theo lời kể của P4, Bệnh viện 175 dùng AI ở sảnh để sắp xếp bác sĩ. Chưa đối chiếu với nguồn công khai; nên tìm hiểu thêm để so sánh.

**Ngoài phạm vi AI:** phần lớn phàn nàn trên Facebook và TikTok là về thái độ nhân viên, thiếu nhân sự, cơ sở vật chất và chuyên môn (FB6, TT1, TT3). Đây là vấn đề vận hành và con người, AI không giải quyết được. Ghi nhận rõ để không thổi phồng vai trò của AI.

## 6. Hạn chế

- **Tuyển sai nhóm:** không tuyển được người đặt lịch trước tại Vinmec trong thời hạn. Chỉ P2 dùng dịch vụ Vinmec gần đây, và đó là lần khám gấp.
- **Bỏ sót câu hỏi:** P1 đặt lịch trước (cho mẹ, tuần trước) và P1, P4 đều từng dùng MyVinmec, nhưng các câu ★ về H4 và về app (A7–A13) chưa được hỏi với hai người này.
- **Nhóm người dùng của need statement** (phụ nữ mang thai, phụ huynh) được chọn từ desk research: các trường hợp Facebook và đa số video TikTok đều thuộc khoa sản, nhi. Chưa có số liệu của Vinmec xác nhận đây là nhóm dùng dịch vụ nhiều nhất.
- **Nguồn thứ cấp thiên lệch:** Facebook và TikTok thiên về phàn nàn.
- Phiếu phỏng vấn chưa ghi hình thức và thời lượng từng buổi.

## 7. Kết luận

**Quyết định:** giữ H4 làm need statement chính, ghi rõ mức bằng chứng là desk research (5 trường hợp Facebook, 3 review App Store, tự dùng app) và chưa có phỏng vấn trực tiếp xác nhận. H5 là hướng dự phòng, được thêm tín hiệu từ việc 3/3 người được hỏi tự giữ hồ sơ.

Need statement chính thức và bằng chứng: [03-need-statement](../03-need-statement/need-statement.md).

**Kế hoạch kiểm chứng nếu được chọn vào sprint:** tuần đầu phỏng vấn 3–5 phụ nữ mang thai hoặc phụ huynh đặt lịch trước tại Vinmec (khám thai theo gói, tiêm chủng, khám nhi), tuyển từ các nhóm review Vinmec trên Facebook; xin xem màn hình My visits và thông báo khi có thay đổi lịch.

---

*Phần do AI hỗ trợ: Claude soạn cấu trúc, diễn đạt và bảng đối chiếu từ ghi chép discovery; việc chọn giả thuyết, tiêu chí và kết luận do người làm quyết định.*
