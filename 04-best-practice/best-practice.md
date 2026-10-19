# 3 best practice quốc tế

> Các mã H4, H5 (giả thuyết) và FB (nguồn) được giải thích ở [GIAI-THICH-MA.md](../GIAI-THICH-MA.md).

## Tiêu chí chọn

Mỗi best practice phải: (1) giải quyết đúng một điểm đau trên journey map; (2) có kết quả đo được, ưu tiên nghiên cứu có bình duyệt; (3) chuyển được sang Vinmec trong sprint bằng dữ liệu giả lập. Ba ví dụ dưới đây phủ ba lớp của vấn đề H4: **lịch hẹn** (bác sĩ, giờ, dịch vụ), **bước chuẩn bị**, và **cách dùng AI an toàn khi nói chuyện với bệnh nhân**.

| # | Best practice | Điểm đau trên journey map |
| --- | --- | --- |
| 1 | DrDoctor tại Guy's and St Thomas' (NHS, Anh) | Giai đoạn 05–06: lịch đổi mà không báo, trạng thái không ổn định (FB1, FB4) |
| 2 | Hướng dẫn chuẩn bị qua ứng dụng, tin nhắn trước nội soi đại tràng | Giai đoạn 06–07: thủ thuật không làm được, thiếu bước bắt buộc (FB2, FB5) |
| 3 | Trợ lý giọng nói AI Dora (Ufonia, NHS) | Cách thiết kế AI nói chuyện với bệnh nhân, có người giám sát |

## 1. DrDoctor tại Guy's and St Thomas' – quản lý lịch hẹn qua tin nhắn

**Bối cảnh.** Năm 2015, Guy's and St Thomas' NHS Foundation Trust (London) có tỷ lệ bệnh nhân không đến khám (DNA) là 13,5%, gấp đôi mức trung bình NHS 6,7%. Bệnh viện triển khai nền tảng đặt lịch và quản lý lịch ngoại trú của DrDoctor.

**Cách làm.** Bệnh nhân nhận tin nhắn về lịch hẹn và dùng nền tảng trực tuyến để xem và quản lý lịch. Ở Royal Orthopaedic Hospital, DrDoctor còn liên kết mã bệnh nhân giữa hệ thống quản lý chẩn đoán hình ảnh (CRIS) và hệ thống quản lý bệnh nhân (PAS) để có một góc nhìn thống nhất về bệnh nhân (nguồn 2).

**Kết quả.** Tỷ lệ DNA toàn bệnh viện giảm 17,2%; lợi ích tài chính ước tính 2,6 triệu bảng trong năm đầu; 91% bệnh nhân sẵn sàng giới thiệu dịch vụ (nguồn 1).

**Lưu ý khi dùng.**

- Đây là case study, không phải nghiên cứu có nhóm đối chứng. Hai trong bốn tác giả làm việc cho DrDoctor.
- Chỉ đối chiếu được phần tóm tắt của bài. Các chi tiết như tin nhắn hai chiều (bệnh nhân trả lời để xác nhận, hủy, đổi lịch) hay mức giảm ở từng cơ sở chưa được kiểm tra với toàn văn, nên không đưa vào slide.
- Chỉ số đo là bệnh nhân bỏ hẹn, còn vấn đề của Vinmec là phía bệnh viện đổi kế hoạch. Cơ chế giống nhau (thông tin lịch không đến được đúng người, đúng lúc) nhưng theo chiều ngược lại.

**Bài học cho Vinmec.** Thông báo chỉ có tác dụng khi gắn trực tiếp vào hệ thống lịch của bệnh viện: nếu thay đổi bác sĩ, dịch vụ không được ghi vào hệ thống thì không công cụ nào báo được. Tin nhắn nên cho bệnh nhân hành động (xác nhận, chọn lịch khác), không chỉ để đọc. Việc liên kết mã bệnh nhân giữa các hệ thống ở Royal Orthopaedic cũng là gợi ý cho hướng dự phòng H5.

## 2. Hướng dẫn chuẩn bị qua ứng dụng, tin nhắn trước nội soi đại tràng

**Bối cảnh.** Nội soi đại tràng chỉ làm được khi bệnh nhân làm sạch ruột đúng cách theo nhiều bước trong vài ngày trước. Chuẩn bị không đạt thì phải hẹn lại, giống FB2 (đến nơi không làm được thủ thuật) và FB5 (thiếu bước bắt buộc).

**Cách làm.** Thay tờ hướng dẫn giấy bằng ứng dụng điện thoại hoặc tin nhắn qua ứng dụng nhắn tin phổ biến (WeChat ở Trung Quốc), gửi từng bước đúng thời điểm và có nhắc giờ.

**Kết quả.**

- Meta-analysis 6 nghiên cứu (Desai và cộng sự, *Endoscopy International Open*, 2019): nhóm dùng ứng dụng đạt chuẩn bị đầy đủ 87,5%, so với 77,5% ở nhóm hướng dẫn thông thường. OR gộp 2,67 (KTC 95% 1,00–7,13; p = 0,05), tác giả mô tả là "có xu hướng có ý nghĩa". Khi chỉ tính các RCT: OR 2,66 (KTC 95% 0,92–7,69; p = 0,07), chưa có ý nghĩa thống kê (nguồn 3).
- Meta-analysis 8 RCT về hướng dẫn qua WeChat (Yan và cộng sự, *Cureus*, 2025): tỷ lệ chuẩn bị đạt tăng (RR 1,14; KTC 95% 1,04–1,24), tỷ lệ phát hiện u tuyến tăng (RR 1,56; KTC 95% 1,20–2,02) và tỷ lệ phát hiện polyp tăng (RR 1,25; KTC 95% 1,03–1,51) (nguồn 4).

**Lưu ý khi dùng.** Bằng chứng ở mức vừa: kết quả của meta-analysis thứ nhất chỉ ở ngưỡng ý nghĩa thống kê, các nghiên cứu khác nhau nhiều, và *Cureus* là tạp chí có quy trình bình duyệt nhanh. Nhóm bệnh nhân là người làm nội soi, không phải sản, nhi.

**Bài học cho Vinmec.** Mỗi dịch vụ đặt trước (siêu âm 4D, thủ thuật, chuẩn bị nhập viện) cần một danh sách bước chuẩn bị có mốc thời gian, gửi theo từng bước chứ không gửi một lần. Kênh nên là kênh bệnh nhân đã dùng hằng ngày; ở Việt Nam có thể là Zalo, cần kiểm chứng trong phỏng vấn.

## 3. Dora (Ufonia) – trợ lý AI gọi điện cho bệnh nhân trong NHS

**Bối cảnh.** Sau mổ đục thủy tinh thể, bệnh viện phải gọi hỏi thăm từng bệnh nhân, tốn nhiều thời gian nhân viên. Oxford University Hospitals và Buckinghamshire Healthcare dùng Dora, một trợ lý giọng nói AI tự gọi cho bệnh nhân.

**Cách làm.** Dora gọi bệnh nhân khoảng ba tuần sau mổ, hỏi các câu triệu chứng cố định và trả lời câu hỏi thường gặp. Kết quả chỉ có hai nhãn: "không có lo ngại" hoặc "có thể có lo ngại". Nhãn thứ hai được chuyển cho bác sĩ gọi lại trong 48 giờ. Ít nhất 10% cuộc gọi được người kiểm tra lại chất lượng (nguồn 5).

**Kết quả** (Higham và cộng sự, *Clinical Ophthalmology*, 2026). 1.636 bệnh nhân được xếp lịch gọi, 1.580 người đủ điều kiện; 86% nghe máy và 89% trong số đó hoàn tất cuộc gọi. 767 bệnh nhân (khoảng 63%) được xác định không có lo ngại, không cần bác sĩ gọi lại. Giá trị dự đoán âm 99,5% (763/767), giá trị dự đoán dương 16,8%: AI chủ động báo dư để không bỏ sót. Tuổi trung vị 77, NPS 47, không có khác biệt có ý nghĩa theo tuổi, giới hay dân tộc (nguồn 5). Nghiên cứu trước đó với 225 bệnh nhân, có bác sĩ giám sát trực tiếp từng cuộc gọi, ghi nhận độ nhạy 94% và độ đặc hiệu 86% (Meinert và cộng sự, *eClinicalMedicine*, 2024; nguồn 6).

**Lưu ý khi dùng.**

- Phần lớn tác giả là nhân viên, cổ đông hoặc cố vấn của Ufonia, và nghiên cứu được tài trợ qua một khoản grant cho Ufonia.
- Người không nói được tiếng Anh, người suy giảm nhận thức hoặc thính lực bị loại khỏi nhóm dùng Dora.
- Ca sót đáng chú ý nhất xảy ra vì người kiểm tra chất lượng sửa nhãn "có thể có lo ngại" của AI thành "không có lo ngại", không phải vì AI.
- Một vài số liệu trong bài không khớp nhau giữa phần tóm tắt và phần kết quả (ví dụ số cuộc gọi hoàn tất). Bảng trên dùng số ở phần kết quả.

**Bài học cho Vinmec.** Giới hạn AI vào một việc hẹp, có kịch bản; chủ động nghiêng về phía an toàn (thà báo nhầm còn hơn bỏ sót); mọi thứ ngoài phạm vi chuyển cho người thật, có thời hạn phản hồi rõ ràng; đo an toàn bằng con số ngay từ đầu. Bài học về ngôn ngữ trùng với điểm thiếu nhất quán của MIA (chỉ tiếng Việt, dù app có mục đặt lịch cho người nước ngoài). Phần này dùng tiếp cho [06-rui-ro-dao-duc](../06-rui-ro-dao-duc/).

## Tổng hợp bài học cho Vinmec

| Bài học | Từ | Áp dụng vào prototype |
| --- | --- | --- |
| Thông báo phải gắn vào hệ thống lịch; thay đổi phải được ghi lại thì mới báo được | 1 | Dữ liệu giả lập gồm "lịch đã đặt" và "lịch hiện tại"; AI so hai bản để tìm thay đổi |
| Tin nhắn cho bệnh nhân hành động được | 1 | Mỗi tin có nút xác nhận, chọn lịch khác, gọi tổng đài |
| Chuẩn bị theo từng bước, đúng thời điểm | 2 | Danh sách bước chuẩn bị theo dịch vụ, nhắc trước 1–2 ngày |
| AI làm việc hẹp, nghiêng về an toàn, chuyển người khi không chắc | 3 | AI chỉ giải thích thay đổi lịch và bước chuẩn bị; câu hỏi y khoa chuyển cho nhân viên |
| Đo an toàn và độ chấp nhận ngay từ đầu | 1, 3 | Log thử nghiệm ghi tỷ lệ hiểu đúng thay đổi và mức hài lòng |

**Điều chưa có ở cả ba:** không ví dụ nào xử lý đúng tình huống bệnh viện tự đổi kế hoạch rồi báo cho bệnh nhân. Đây vừa là rủi ro (chưa có bằng chứng giải pháp hiệu quả) vừa là chỗ prototype có thể đóng góp.

## Nguồn

1. Bartlett M, Blazer S, Hobson G, Abbs I. *The power of digital communications: improving outpatient attendances in south London.* Future Healthcare Journal, 2018;5(1):43–46. doi:10.7861/futurehosp.5-1-43. https://pmc.ncbi.nlm.nih.gov/articles/PMC6510049
2. DrDoctor. *Royal Orthopaedic Hospital's Radiology department reduce DNA rates to 3% in just 3 months* (case study của nhà cung cấp). https://www.drdoctor.co.uk/resources/case-studies/reducing-dna-rates-with-royal-orthopaedic-hospital
3. Desai M, Nutalapati V, Bansal A, et al. *Use of smartphone applications to improve quality of bowel preparation for colonoscopy: a systematic review and meta-analysis.* Endoscopy International Open, 2019;7(2):E216–E224. doi:10.1055/a-0796-6423. https://pmc.ncbi.nlm.nih.gov/articles/PMC6338550
4. Yan N, Wu L, Wang J, et al. *Effect of WeChat-Based Education on the Quality of Intestinal Preparation Before Colonoscopy: A Meta-Analysis of Randomized Controlled Trials.* Cureus, 2025;17(11):e96705. https://pmc.ncbi.nlm.nih.gov/articles/PMC12611535
5. Higham A, et al. *Evaluation of Routine Clinical Deployment of an Autonomous Artificial Intelligence Assistant for Cataract Follow-Up in the National Health Service.* Clinical Ophthalmology, 2026;20. doi:10.2147/OPTH.S576990
6. Meinert E, et al. *Accuracy and safety of an autonomous artificial intelligence clinical assistant conducting telemedicine follow-up assessment for cataract surgery.* eClinicalMedicine, 2024;73:102692. https://pmc.ncbi.nlm.nih.gov/articles/PMC11266473

**Đối chiếu nguồn (19/10/2026):** đã mở từng nguồn để kiểm tra tên bài, tạp chí, năm và các số liệu trên. Nguồn 1 chỉ đối chiếu được phần tóm tắt. Đã sửa so với bản nháp: năm và tên bài của nguồn 1 (2018, không phải 2019), tên tạp chí của nguồn 4 (*Cureus*), khoảng tin cậy của nguồn 3; bỏ các chi tiết chưa kiểm chứng được.

---

*Phần do AI hỗ trợ: Claude tìm nguồn, tóm tắt, đề xuất bài học và đối chiếu số liệu với nguồn gốc; người làm chọn ví dụ và quyết định bài học áp dụng.*
