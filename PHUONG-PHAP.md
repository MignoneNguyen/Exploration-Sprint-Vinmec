# Phương pháp: Biodesign, PMBOK, SDLC và quản lý thay đổi

Bài làm dùng bốn khung tham chiếu. Mỗi khung trả lời một câu hỏi khác nhau:

| Khung | Trả lời câu hỏi | Dùng ở đâu trong repo |
| --- | --- | --- |
| **Stanford Biodesign** (Identify → Invent → Implement) | Đang giải đúng nhu cầu chưa? | Phần 1–4: tìm nhu cầu, viết need statement, sàng lọc nhu cầu |
| **SDLC** (vòng đời phát triển phần mềm) | Đang ở bước nào của việc làm ra sản phẩm? | Phần 1–2 là phân tích yêu cầu; phần 5 là thiết kế, xây dựng, kiểm thử |
| **PMBOK, 10 lĩnh vực kiến thức** | Dự án đang được quản lý đủ mặt chưa? | Rải khắp các phần; là khung chính của [kế hoạch coach](07-coach-plan/README.md) |
| **Quản lý thay đổi** (change management) | Khi kế hoạch hoặc quy trình thay đổi, xử lý thế nào? | Đổi hướng giả thuyết (H1 → H4); đưa giải pháp vào khoa ở tuần 6 |

Các mã H1–H5 được giải thích ở [GIAI-THICH-MA.md](GIAI-THICH-MA.md).

## 1. Biodesign

Quy trình Biodesign có ba giai đoạn. Bài tập 1 tuần nằm gần hết trong giai đoạn đầu (Identify) và chạm vào đầu giai đoạn hai (Invent) khi làm prototype.

| Giai đoạn Biodesign | Bước | Trong bài này |
| --- | --- | --- |
| **Identify** | Needs finding: quan sát, phỏng vấn, xác định vấn đề | [01-phong-van](01-phong-van/): tự dùng app, desk research, 4 cuộc phỏng vấn; [02-journey-map](02-journey-map/) |
| | Need statement: vấn đề – nhóm người dùng – kết quả mong muốn, không nêu giải pháp | [03-need-statement](03-need-statement/need-statement.md) |
| | Needs screening: hiểu sâu bối cảnh, giải pháp hiện có, các bên liên quan, giá trị | [03-need-statement, mục Sàng lọc](03-need-statement/need-statement.md#6-sàng-lọc-nhu-cầu-needs-screening); [04-best-practice](04-best-practice/best-practice.md) (giải pháp hiện có trên thế giới) |
| **Invent** | Tạo và sàng lọc ý tưởng, làm prototype | [05-prototype](05-prototype/) |
| | Rủi ro, quy định | [06-rui-ro-dao-duc](06-rui-ro-dao-duc/) |
| **Implement** | Chiến lược triển khai, kế hoạch kinh doanh | Ngoài phạm vi bài tập; thuộc tuần 5–6 của sprint (đề xuất, thẩm định, khoa tiếp nhận) |

**Điều Biodesign thay đổi trong bài làm:**

- Outcome của need statement được sửa từ "biết sớm khi lịch thay đổi" sang "giảm số lần đến viện mà không được khám đúng như đã đặt", vì Biodesign yêu cầu need statement không ngầm chứa giải pháp.
- Thêm bước **sàng lọc nhu cầu** để so sánh H1–H5 bằng cùng một bộ tiêu chí, thay vì chỉ chọn H4 theo cảm nhận.

## 2. SDLC

Sprint 6 tuần không hợp với mô hình thác nước (waterfall), vì nhu cầu chưa được xác nhận và sẽ thay đổi sau mỗi vòng thử. Mô hình phù hợp là **lặp (iterative/Agile) có cổng duyệt (stage-gate)**: mỗi tuần một vòng ngắn, và các cổng của Vinmec (Cổng 1, rà soát giữa kỳ, Cổng 2, Demo Day) là điểm quyết định đi tiếp, gộp hay dừng.

| Pha SDLC | Trong bài này | Sản phẩm |
| --- | --- | --- |
| Lập kế hoạch | Chọn khoảnh khắc Đặt lịch; chia thời gian 1 tuần | [README](README.md) |
| Phân tích yêu cầu | Phỏng vấn, journey map hiện trạng (as-is), need statement | Phần 1–3 |
| Thiết kế | Chọn hướng prototype từ bài học best practice; BRD rút gọn | [04-best-practice](04-best-practice/best-practice.md), [05-prototype/BRD-lite.md](05-prototype/BRD-lite.md) |
| Xây dựng | Prototype trên dữ liệu giả lập | [05-prototype](05-prototype/) |
| Kiểm thử | Thử với 2–3 người dùng, ghi log, sửa | [05-prototype/test-log.md](05-prototype/test-log.md) |
| Triển khai, bảo trì | Ngoài phạm vi bài tập (cần tích hợp hệ thống lịch thật của Vinmec) | – |

## 3. PMBOK: 10 lĩnh vực kiến thức áp dụng cho phần 1–4

PMBOK bản 6 chia quản lý dự án thành 10 lĩnh vực kiến thức. (Bản 7 chuyển sang nguyên tắc và "performance domains", nhưng 10 lĩnh vực vẫn là khung quen thuộc của kỳ thi PMP.)

| Lĩnh vực | Áp dụng trong phần 1–4 |
| --- | --- |
| 1. Tích hợp (Integration) | README nối mọi phần thành một mạch: bằng chứng → giả thuyết → need statement → prototype. File giải thích mã dùng chung cho mọi phần |
| 2. Phạm vi (Scope) | Chọn hẹp một khoảnh khắc (Đặt lịch, sau khi đặt đến ngày khám), một nhóm người dùng; ghi rõ phần ngoài phạm vi AI (nhân sự, cơ sở vật chất) |
| 3. Tiến độ (Schedule) | 5 bước theo đề, hạn 19/10/2026 |
| 4. Chi phí (Cost) | Chưa có số liệu chi phí. Ghi nhận chi phí ẩn của vấn đề: chuyến đi lại vô ích, cuộc gọi tổng đài chỉ để kiểm tra lịch (chỉ số 3 của need statement) |
| 5. Chất lượng (Quality) | Tiêu chí xác nhận giả thuyết; đối chiếu từng nguồn best practice với bài gốc; rà soát mâu thuẫn trong ghi chép phỏng vấn |
| 6. Nguồn lực (Resource) | Người phỏng vấn tự làm; AI (Claude) hỗ trợ soạn và đối chiếu, ghi rõ ở từng file |
| 7. Truyền thông (Communications) | Repo theo cấu trúc đề; slide 10 trang cho buổi trình bày |
| 8. Rủi ro (Risk) | Rủi ro của bằng chứng (nguồn thiên lệch, tuyển sai nhóm) ở [mục Hạn chế](01-phong-van/03-tong-hop-insight.md#6-hạn-chế); rủi ro của giải pháp ở [06](06-rui-ro-dao-duc/) |
| 9. Mua sắm (Procurement) | Không áp dụng trong bài tập. Trong sprint: tích hợp với hệ thống lịch, nhà cung cấp kênh tin nhắn (Zalo, SMS) |
| 10. Các bên liên quan (Stakeholder) | Phân tích các bên liên quan ở [mục Sàng lọc nhu cầu](03-need-statement/need-statement.md#6-sàng-lọc-nhu-cầu-needs-screening) |

## 4. Quản lý thay đổi

Dùng theo hai nghĩa:

1. **Kiểm soát thay đổi trong dự án:** khi bằng chứng đổi, hướng đi đổi theo nhưng phải ghi lại. Ví dụ trong bài: H1 bị loại sau khi thấy MyVinmec đã có MIA và 4/4 người tự chọn được khoa; outcome của need statement được sửa và có ghi lý do; need statement dự phòng H5 có sẵn điều kiện chuyển hướng rõ ràng.
2. **Đưa thay đổi vào tổ chức** (tuần 6, "khoa tiếp nhận giải pháp"): một giải pháp báo thay đổi lịch chỉ chạy được khi nhân viên điều phối ghi mọi thay đổi vào hệ thống (bài học từ DrDoctor). Mô hình ADKAR gợi ý trình tự: nhân viên hiểu vì sao cần ghi (Awareness), muốn làm (Desire), biết cách (Knowledge), làm được trong ca trực (Ability), được duy trì bằng chỉ số theo dõi (Reinforcement).

## 5. Có cần BRD không?

**Đề bài không yêu cầu BRD.** Kết luận: **không làm BRD đầy đủ, nhưng làm một BRD rút gọn cho prototype.**

| | BRD đầy đủ | BRD rút gọn (đã làm) |
| --- | --- | --- |
| Nội dung | Business case, chi phí, lợi ích tài chính, yêu cầu chi tiết, kế hoạch triển khai | Mục tiêu, phạm vi trong/ngoài, các bên liên quan, yêu cầu chức năng và phi chức năng, chỉ số thành công, giả định và ràng buộc |
| Phù hợp khi | Nhu cầu đã được xác nhận, có số liệu nền và chi phí | Cần chốt prototype làm gì và không làm gì trước khi xây |
| Lý do | Chưa phù hợp: H4 chưa được phỏng vấn xác nhận, chưa có số liệu nền của Vinmec, chưa biết chi phí tích hợp | Là cầu nối giữa need statement (phân tích yêu cầu) và prototype (thiết kế, xây dựng) trong SDLC; giúp người thử và mentor biết prototype kiểm chứng điều gì |

BRD rút gọn: [05-prototype/BRD-lite.md](05-prototype/BRD-lite.md). Một BRD đầy đủ nên làm ở tuần 5–6 của sprint, khi đã có kết quả 2 vòng thử người dùng và số liệu nền từ Vinmec.

---

*Phần do AI hỗ trợ: Claude soạn bảng ánh xạ các khung vào bài làm theo yêu cầu của người làm; người làm chọn khung tham chiếu và duyệt cách áp dụng.*
