# Một lần đi khám: thiết kế lại trải nghiệm đặt lịch với AI trên MyVinmec

Bài tập 1 tuần, Exploration Sprint 6 tuần tại Vinmec (VinUni V-RIC).

## Giới thiệu ngắn

**Khoảnh khắc đã chọn: Đặt lịch**, cụ thể là khoảng thời gian từ lúc đặt lịch đến ngày khám.

MyVinmec đã có AI ở đầu hành trình: trợ lý MIA gợi ý chuyên khoa và đặt lịch theo triệu chứng. Sau khi đặt lịch thì chưa có AI hỗ trợ. Bằng chứng desk research cho thấy đây là chỗ bệnh nhân gặp vấn đề: bác sĩ, dịch vụ hoặc bước chuẩn bị thay đổi mà bệnh nhân chỉ biết khi đã đến viện.

**Need statement:**

> Cách để ngăn việc kế hoạch khám đã đặt (bác sĩ, dịch vụ, giờ khám, bước chuẩn bị bắt buộc) bị thay đổi mà bệnh nhân không biết trước khi đến viện, ở phụ nữ mang thai và phụ huynh đặt lịch trước tại Vinmec (cho mình hoặc cho con), nhằm giảm số lượt đến viện mà không được khám hoặc làm dịch vụ đúng như đã đặt.

**Mức chắc chắn: trung bình – thấp.** Bằng chứng chính là 5/8 trường hợp trên Facebook và 3 review App Store; chính sách chính thức của Vinmec giải thích được cơ chế (tổng đài được phép điều chỉnh giờ khám, thông báo lại dựa vào cuộc gọi). Chưa người phỏng vấn nào xác nhận, vì không tuyển được người thuộc đúng nhóm người dùng trong thời hạn. Hướng dự phòng H5 (hồ sơ tách rời) có 1 người phỏng vấn xác nhận trực tiếp. Chi tiết và kế hoạch kiểm chứng ở [01-phong-van/03-tong-hop-insight.md](01-phong-van/03-tong-hop-insight.md).

Các mã giả thuyết (H1–H5) và mã nguồn (FB, TT, AS, W, P, CS, BP) được giải thích ở **[GIAI-THICH-MA.md](GIAI-THICH-MA.md)**. Khung phương pháp (Biodesign, SDLC, PMBOK 10 lĩnh vực, quản lý thay đổi) và cách dùng BRD → PRD: **[PHUONG-PHAP.md](PHUONG-PHAP.md)**.

## Mục lục

| Thư mục | Nội dung | Trạng thái |
| --- | --- | --- |
| [slides.pdf](slides.pdf) | Deck 10 slide cho buổi trình bày 10 phút (nguồn: [slides/slides.html](slides/slides.html)) | Xong; slide kết quả thử chờ số liệu |
| [01-phong-van/](01-phong-van/) | [Ghi chép dùng thử MyVinmec](01-phong-van/00-myvinmec-walkthrough.md) · [Desk research](01-phong-van/01-desk-research.md) · [Chính sách Vinmec](01-phong-van/04-chinh-sach-vinmec.md) · [Interview guide bản 1](01-phong-van/02-interview-guide.md) → [bản 2](01-phong-van/02-interview-guide-v2.md) · Phỏng vấn [P1](01-phong-van/survey-logs/P1.md), [P2](01-phong-van/survey-logs/P2.md), [P3](01-phong-van/survey-logs/P3.md), [P4](01-phong-van/survey-logs/P4.md) · [Tổng hợp insight](01-phong-van/03-tong-hop-insight.md) | Xong |
| [02-journey-map/](02-journey-map/) | Journey map (PNG, PDF, HTML), đánh dấu điểm đau | Xong |
| [03-need-statement/](03-need-statement/need-statement.md) | Need statement theo mẫu Stanford Biodesign, thử thu hẹp/mở rộng phạm vi, bằng chứng, need statement dự phòng, sàng lọc nhu cầu (các bên liên quan, khung thị trường, ma trận H1–H5, tiêu chí nhu cầu) | Xong |
| [04-best-practice/](04-best-practice/best-practice.md) | 3 best practice quốc tế và 5 case study đối chiếu, nguồn đã kiểm tra lại, bài học cho Vinmec | Xong |
| [05-prototype/](05-prototype/README.md) | [BRD rút gọn](05-prototype/BRD-lite.md) → [PRD](05-prototype/PRD.md), prototype có AI (Claude hoặc GPT, chọn trong `.env`; mã nguồn, 6 kịch bản, người dùng tắt được AI), [prompt](05-prototype/prompts.md), [kịch bản và log thử](05-prototype/test-log.md) | Prototype xong; **chưa thử với người dùng** |
| [06-rui-ro-dao-duc/](06-rui-ro-dao-duc/README.md) | Rủi ro an toàn, đạo đức, đường chuyển tuyến khẩn cấp | Bản nháp, đã khớp với prototype |
| [07-coach-plan/](07-coach-plan/README.md) | "Mình sẽ coach một nhóm làm bài này thế nào": lịch 7 tuần, cách xử lý khi chưa biết ngày Vinmec chốt bài toán, cách gỡ khi nhóm kẹt, kiểm tra chất lượng | Bản nháp, cần chỉnh theo giọng người làm |

## Quy tắc dữ liệu đã tuân thủ

Người tham gia đều đồng ý trước khi phỏng vấn; ghi chép ẩn danh (P1–P4, tuổi theo khoảng); chỉ hỏi về trải nghiệm dịch vụ, và các chi tiết sức khỏe người tham gia tự kể đã được lược bỏ; không chụp ảnh người hay giấy tờ y tế; không đưa ra lời khuyên y khoa. Nguồn mạng xã hội được ẩn danh; link gốc lưu riêng, không đưa lên repo.
