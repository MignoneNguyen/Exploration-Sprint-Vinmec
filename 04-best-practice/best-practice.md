# 3 best practice quốc tế

> Các mã H4, H5 (giả thuyết) và FB (nguồn) được giải thích ở [GIAI-THICH-MA.md](../GIAI-THICH-MA.md).

## Tiêu chí chọn

Mỗi best practice phải: (1) giải quyết đúng một điểm đau trên journey map; (2) có kết quả đo được, ưu tiên nghiên cứu có bình duyệt; (3) chuyển được sang Vinmec trong sprint bằng dữ liệu giả lập. Ba ví dụ dưới đây phủ ba lớp của vấn đề H4: **lịch hẹn** (bác sĩ, giờ, dịch vụ), **bước chuẩn bị**, và **cách dùng AI an toàn khi nói chuyện với bệnh nhân**. Phần "Case study bổ sung" ở dưới có thêm năm ví dụ dùng để đối chiếu, chưa đưa vào slide chính.

Mọi số liệu đều ghi số nguồn trong ngoặc, đối chiếu với danh sách [Nguồn](#nguồn) ở cuối file. Các nguồn được kiểm tra lại ngày 20/10/2026.

| # | Best practice | Điểm đau trên journey map |
| --- | --- | --- |
| 1 | DrDoctor tại Guy's and St Thomas' (NHS, Anh) | Giai đoạn 05–06: lịch đổi mà không báo, trạng thái không ổn định (FB1, FB4) |
| 2 | Hướng dẫn chuẩn bị qua ứng dụng, tin nhắn trước nội soi đại tràng | Giai đoạn 06–07: thủ thuật không làm được, thiếu bước bắt buộc (FB2, FB5) |
| 3 | Trợ lý giọng nói AI Dora (Ufonia, NHS) | Cách thiết kế AI nói chuyện với bệnh nhân, có người giám sát |

## 1. DrDoctor tại Guy's and St Thomas' – quản lý lịch hẹn qua tin nhắn

**Bối cảnh.** Năm 2015, Guy's and St Thomas' NHS Foundation Trust (London) có tỷ lệ bệnh nhân không đến khám (DNA) là 13,5%, gấp đôi mức trung bình NHS 6,7%. Bệnh viện triển khai nền tảng đặt lịch và quản lý lịch ngoại trú của DrDoctor.

**Cách làm.** Bệnh nhân nhận tin nhắn về lịch hẹn và dùng nền tảng trực tuyến để xem và quản lý lịch. Ở Royal Orthopaedic Hospital, DrDoctor còn liên kết mã bệnh nhân giữa hệ thống quản lý chẩn đoán hình ảnh (CRIS) và hệ thống quản lý bệnh nhân (PAS) để có một góc nhìn thống nhất về bệnh nhân (nguồn 2).

**Kết quả.** Tỷ lệ DNA toàn bệnh viện giảm **tương đối** 17,2% (Bảng 2 của bài: từ 13,6% xuống 11,2%, tức khoảng 2,4 điểm phần trăm); lợi ích tài chính ước tính 2,6 triệu bảng trong năm đầu; 91% bệnh nhân trả lời khảo sát sẵn sàng giới thiệu dịch vụ (nguồn 1). Thí điểm ở khối Sản phụ (Women's Services) giảm 34% DNA (nguồn 1).

**Lưu ý khi dùng.**

- Đây là case study so sánh trước và sau, không có nhóm đối chứng; thay đổi khác trong cùng giai đoạn cũng có thể góp phần. Hai trong bốn tác giả làm việc cho DrDoctor (nguồn 1).
- Số liệu trong bài không khớp nhau: tóm tắt ghi mức nền 13,5%, Bảng 2 ghi 13,6% → 11,2%, còn phần Outcome ghi 11,7% → 10,4% (chỉ giảm 11,1%). Khi đưa lên slide phải ghi rõ "giảm tương đối" (nguồn 1).
- Con số 91% tính trên 788 người trả lời trong 2.945 người được hỏi (27%), nên có thể lệch về phía người hài lòng (nguồn 1).
- Bài có mô tả tin nhắn dạng hội thoại (conversational SMS) để bệnh nhân đổi hoặc hủy lịch, nhưng không mô tả rõ việc trả lời để xác nhận. Mức giảm 20–30% ở các nơi triển khai trước được bài dẫn lại từ case study của DrDoctor, không phải số đo độc lập (nguồn 1).
- Chỉ số đo là bệnh nhân bỏ hẹn, còn vấn đề của Vinmec là phía bệnh viện đổi kế hoạch. Cơ chế giống nhau (thông tin lịch không đến được đúng người, đúng lúc) nhưng theo chiều ngược lại.

**Bài học cho Vinmec.** Thông báo chỉ có tác dụng khi gắn trực tiếp vào hệ thống lịch của bệnh viện: nếu thay đổi bác sĩ, dịch vụ không được ghi vào hệ thống thì không công cụ nào báo được. Tin nhắn nên cho bệnh nhân hành động (xác nhận, chọn lịch khác), không chỉ để đọc. Việc liên kết mã bệnh nhân giữa các hệ thống ở Royal Orthopaedic cũng là gợi ý cho hướng dự phòng H5.

## 2. Hướng dẫn chuẩn bị qua ứng dụng, tin nhắn trước nội soi đại tràng

**Bối cảnh.** Nội soi đại tràng chỉ làm được khi bệnh nhân làm sạch ruột đúng cách theo nhiều bước trong vài ngày trước. Chuẩn bị không đạt thì phải hẹn lại, giống FB2 (đến nơi không làm được thủ thuật) và FB5 (thiếu bước bắt buộc).

**Cách làm.** Thay tờ hướng dẫn giấy bằng ứng dụng điện thoại hoặc tin nhắn qua ứng dụng nhắn tin phổ biến (WeChat ở Trung Quốc), gửi từng bước đúng thời điểm và có nhắc giờ.

**Kết quả.**

- Meta-analysis 6 nghiên cứu (4 RCT, 1.665 bệnh nhân; Desai và cộng sự, *Endoscopy International Open*, 2019): nhóm dùng ứng dụng đạt chuẩn bị đầy đủ 87,5%, so với 77,5% ở nhóm hướng dẫn thông thường. OR gộp 2,67 (KTC 95% 1,00–7,13; p = 0,05; I² = 78%; 5 trong 6 nghiên cứu có số liệu cho kết quả này), tác giả mô tả là "có xu hướng có ý nghĩa". Khi chỉ tính các RCT: OR 2,66 (KTC 95% 0,92–7,69; p = 0,07), chưa có ý nghĩa thống kê (nguồn 3).
- Meta-analysis 8 RCT về hướng dẫn qua WeChat (Yan và cộng sự, *Cureus*, 2025): tỷ lệ chuẩn bị đạt tăng (RR 1,14; KTC 95% 1,04–1,24), tỷ lệ phát hiện u tuyến tăng (RR 1,56; KTC 95% 1,20–2,02) và tỷ lệ phát hiện polyp tăng (RR 1,25; KTC 95% 1,03–1,51) (nguồn 4).
- **Bằng chứng ngược chiều.** RCT 753 bệnh nhân tại Penn Medicine (Mahmud và cộng sự, *JAMA Network Open*, 2021): nhóm nhận thêm 9 tin nhắn tự động trong tuần trước nội soi **không** tốt hơn nhóm chăm sóc thông thường (hướng dẫn giấy cộng một cuộc gọi của điều dưỡng). Tỷ lệ vừa đến khám vừa chuẩn bị tốt: 53,1% so với 54,4% (p = 0,73) (nguồn 7).

**Lưu ý khi dùng.**

- Bằng chứng ở mức vừa và không thống nhất: meta-analysis thứ nhất chỉ ở ngưỡng ý nghĩa thống kê, các nghiên cứu khác nhau nhiều (nguồn 3); RCT lớn nhất tìm được cho kết quả âm tính (nguồn 7).
- Cả 8 RCT trong meta-analysis WeChat đều ở Trung Quốc đại lục, có dấu hiệu sai lệch xuất bản (Egger p = 0,01) (nguồn 4); *Cureus* là tạp chí có quy trình bình duyệt nhanh.
- Nhóm bệnh nhân là người làm nội soi, không phải sản, nhi.

**Bài học cho Vinmec.** Mỗi dịch vụ đặt trước (siêu âm 4D, thủ thuật, chuẩn bị nhập viện) cần một danh sách bước chuẩn bị có mốc thời gian, gửi theo từng bước chứ không gửi một lần. Kênh nên là kênh bệnh nhân đã dùng hằng ngày; ở Việt Nam có thể là Zalo, cần kiểm chứng trong phỏng vấn. Không nên kỳ vọng tin nhắn tự nó tốt hơn cuộc gọi: khi kênh hiện có đã tốt (như cuộc gọi của điều dưỡng ở Penn), tin nhắn thêm vào không tạo khác biệt (nguồn 7). Tổng quan Cochrane cũng cho thấy nhắc lịch bằng tin nhắn hiệu quả tương đương gọi điện nhưng rẻ hơn (nguồn 8). Lợi thế thực tế của tin nhắn với Vinmec là chi phí, khả năng ghi lại và cho bệnh nhân hành động, không phải hiệu quả vượt trội.

## 3. Dora (Ufonia) – trợ lý AI gọi điện cho bệnh nhân trong NHS

**Bối cảnh.** Sau mổ đục thủy tinh thể, bệnh viện phải gọi hỏi thăm từng bệnh nhân, tốn nhiều thời gian nhân viên. Oxford University Hospitals và Buckinghamshire Healthcare dùng Dora, một trợ lý giọng nói AI tự gọi cho bệnh nhân.

**Cách làm.** Dora gọi bệnh nhân khoảng ba tuần sau mổ, hỏi các câu triệu chứng cố định và trả lời câu hỏi thường gặp. Kết quả chỉ có hai nhãn: "không có lo ngại" hoặc "có thể có lo ngại". Nhãn thứ hai được chuyển cho bác sĩ gọi lại trong 48 giờ. Ít nhất 10% cuộc gọi được người kiểm tra lại chất lượng (nguồn 5).

**Kết quả** (Higham và cộng sự, *Clinical Ophthalmology*, 2026). 1.636 bệnh nhân được xếp lịch gọi, 1.580 người đủ điều kiện; 86% nghe máy và 89% trong số đó hoàn tất cuộc gọi. 767 bệnh nhân (63% trong 1.213 cuộc gọi hoàn tất) được xác định không có lo ngại, không cần bác sĩ gọi lại. Giá trị dự đoán âm 99,5% (763/767), giá trị dự đoán dương 16,8% (75/446): AI chủ động báo dư để không bỏ sót. Tuổi trung vị 77, NPS 47, không có khác biệt có ý nghĩa theo tuổi, giới hay dân tộc (nguồn 5). Nghiên cứu trước đó (225 bệnh nhân đồng ý tham gia, 202 người được phân tích), có bác sĩ giám sát trực tiếp từng cuộc gọi, ghi nhận độ nhạy 94% và độ đặc hiệu 86% (Meinert và cộng sự, *eClinicalMedicine*, 2024; nguồn 6).

**Lưu ý khi dùng.**

- Nghiên cứu 2026: phần lớn tác giả là nhân viên, cổ đông hoặc cố vấn của Ufonia, và nghiên cứu được tài trợ qua một khoản grant SBRI Healthcare cho Ufonia (nguồn 5). Nghiên cứu 2024 do NIHR và NHSX tài trợ, có hai tác giả là nhân viên Ufonia trong thời gian nghiên cứu (nguồn 6).
- Người không nói được tiếng Anh, người suy giảm nhận thức hoặc thính lực bị loại khỏi nhóm dùng Dora; một nghiên cứu trước ở Oxford ghi nhận khoảng 11% bệnh nhân không tuyển được vì các lý do này (nguồn 5).
- Ca sót đáng chú ý nhất xảy ra vì người kiểm tra chất lượng sửa nhãn "có thể có lo ngại" của AI thành "không có lo ngại", không phải vì AI (nguồn 5).
- Nhiều số liệu trong bài không khớp nhau: số cuộc gọi hoàn tất (tóm tắt ghi 1.269, phần kết quả ghi 1.213), thời gian nghiên cứu ở Buckinghamshire, tỷ lệ dân tộc, và số ca phải đổi hướng điều trị ngoài kế hoạch (4, 5 hay 2 ca tùy phần). Số liệu trên dùng số ở phần kết quả (nguồn 5).

**Bài học cho Vinmec.** Giới hạn AI vào một việc hẹp, có kịch bản; chủ động nghiêng về phía an toàn (thà báo nhầm còn hơn bỏ sót); mọi thứ ngoài phạm vi chuyển cho người thật, có thời hạn phản hồi rõ ràng; đo an toàn bằng con số ngay từ đầu. Bài học về ngôn ngữ trùng với điểm thiếu nhất quán của MIA (chỉ tiếng Việt, dù app có mục đặt lịch cho người nước ngoài). Phần này dùng tiếp cho [06-rui-ro-dao-duc](../06-rui-ro-dao-duc/).

## Case study bổ sung

Năm ví dụ dưới đây không thay thế ba best practice chính, nhưng dùng để đối chiếu từng lớp của vấn đề. Mã A–E dùng trong bảng tổng hợp.

### A. Fast Pass (Epic) tại Sutter Health và UCSF (Mỹ) – báo lịch trống sớm hơn, bệnh nhân bấm nhận

**Cách làm.** Khi có lịch bị hủy, hệ thống bệnh án điện tử tự gửi SMS hoặc email mời bệnh nhân trong danh sách chờ chuyển sang lịch sớm hơn; bệnh nhân nhận hoặc giữ lịch cũ qua cổng bệnh nhân.

**Kết quả.** Sutter Health (07–12/2018): 177.311 lời mời, 8,3% được nhận; lịch được nhận có tỷ lệ bỏ hẹn thấp hơn 1,3 điểm phần trăm so với lịch tương đương không có lời mời; lời mời qua SMS được nhận nhiều hơn, người lớn tuổi và người nhiều bệnh nền nhận ít hơn (nguồn 9). UCSF (06/2022–03/2023): khoảng 11% lời mời được nhận, bệnh nhân được khám sớm hơn trung vị 14 ngày, ước tính khoảng 3 triệu USD phí khám trong 9 tháng; người lớn tuổi, một số nhóm dân tộc và người không nói tiếng Anh ít nhận lời mời hơn, tác giả cảnh báo công cụ có thể làm tăng bất bình đẳng (nguồn 10).

**Lưu ý.** Nghiên cứu hồi cứu, không ngẫu nhiên. Đây là thay đổi lịch có lợi cho bệnh nhân (khám sớm hơn), không phải thay đổi bất lợi như ở Vinmec.

**Bài học cho Vinmec.** Là ví dụ gần nhất về tin nhắn sinh ra từ chính hệ thống lịch của bệnh viện và cho bệnh nhân hành động ngay. Tỷ lệ phản hồi thấp ở người lớn tuổi và người không nói ngôn ngữ chính trùng với rủi ro R5 ở [06-rui-ro-dao-duc](../06-rui-ro-dao-duc/).

### B. Tổng quan Cochrane về nhắc lịch bằng tin nhắn

**Kết quả.** 8 RCT, 6.615 người tham gia. Tin nhắn so với không nhắc: tỷ lệ đến khám tăng (RR 1,14; KTC 95% 1,03–1,26; 78,6% so với 67,8%). Tin nhắn so với gọi điện: tương đương (RR 0,99; KTC 95% 0,95–1,02). Hai nghiên cứu cho thấy chi phí cho mỗi lượt đến khám của tin nhắn thấp hơn gọi điện 55% và 65%. Chất lượng bằng chứng thấp đến vừa; tác giả kết luận bằng chứng chưa đủ để quyết định chính sách (nguồn 8).

**Bài học cho Vinmec.** Thay một phần cuộc gọi của tổng đài bằng tin nhắn có thể giữ hiệu quả và giảm chi phí, nhưng không có bằng chứng tin nhắn tốt hơn gọi điện.

### C. MomConnect (Bộ Y tế Nam Phi) – phân loại tin nhắn của bà mẹ để chuyển người xử lý

**Bối cảnh.** MomConnect gửi tin nhắn cho phụ nữ mang thai và sau sinh, kèm một helpdesk để họ gửi câu hỏi, khiếu nại, lời khen cho nhân viên Bộ Y tế.

**Kết quả.** Phân tích 65.768 tin nhắn (10/2016–07/2017): khoảng 19% câu trả lời của nhân viên bị đánh giá là chưa tốt hoặc sai, thời gian phản hồi trung vị 4 giờ; phản hồi cho các báo cáo bị đối xử tệ khi sinh không tốt hơn phản hồi chung. Một bộ phân loại đơn giản (naïve Bayes) học theo nhãn của nhân viên đạt độ chính xác trung bình 85,4% và độ đặc hiệu ≥ 98% với các nhãn hiếm (nguồn 12).

**Lưu ý.** Bộ phân loại mới được thử trên dữ liệu cũ, chưa triển khai và đo lại.

**Bài học cho Vinmec.** AI dùng để phân loại và đẩy tin nhắn khẩn lên người xử lý trước, không để trả lời thay. Cần đo cả chất lượng và thời gian trả lời của người, không chỉ của AI. Cùng nhóm bệnh nhân sản như FB trong nhóm review sinh con.

### D. ARMMAN và Google (Ấn Độ) – AI chọn ai cần được nhân viên gọi

**Cách làm.** Chương trình mMitra gửi tin nhắn thoại cho phụ nữ mang thai. Một mô hình AI (restless multi-armed bandit) chọn những người có nguy cơ bỏ chương trình để nhân viên y tế gọi điện trước; AI không nói chuyện trực tiếp với bệnh nhân.

**Kết quả.** Nghiên cứu thực địa với 23.003 người trong 7 tuần: nhóm do AI chọn người gọi giảm khoảng 30% số lần giảm tương tác, khác biệt có ý nghĩa thống kê so với các nhóm so sánh (nguồn 13).

**Lưu ý.** Đăng ở hội nghị AI (AAAI), có tác giả từ Google Research và ARMMAN; chỉ số là mức tương tác, không phải kết quả sức khỏe.

**Bài học cho Vinmec.** Khi một ngày có nhiều lịch bị đổi, AI có thể xếp thứ tự ai cần tổng đài gọi trước (thay đổi lớn, ở xa, lớn tuổi), còn việc nói chuyện vẫn do người làm.

### E. UC San Diego Health (Mỹ) – AI soạn nháp trả lời, bác sĩ duyệt trước khi gửi

**Kết quả.** Nghiên cứu cải tiến chất lượng có phân nhóm ngẫu nhiên (06–08/2023), 52 bác sĩ chăm sóc ban đầu: khi có bản nháp do AI soạn, thời gian đọc tin nhắn tăng 21,8%, câu trả lời dài hơn 17,9%, thời gian trả lời không thay đổi có ý nghĩa. Bác sĩ vẫn thấy công cụ có ích (nguồn 14).

**Bài học cho Vinmec.** Có người duyệt đầu ra của AI là cần thiết nhưng tốn thời gian; không nên giả định AI tiết kiệm công nhân viên mà phải đo.

## Tổng hợp bài học cho Vinmec

| Bài học | Từ | Áp dụng vào prototype |
| --- | --- | --- |
| Thông báo phải gắn vào hệ thống lịch; thay đổi phải được ghi lại thì mới báo được | 1, A | Dữ liệu giả lập gồm "lịch đã đặt" và "lịch hiện tại"; AI so hai bản để tìm thay đổi |
| Tin nhắn cho bệnh nhân hành động được | 1, A | Mỗi tin có nút xác nhận, chọn lịch khác, gọi tổng đài |
| Chuẩn bị theo từng bước, đúng thời điểm; không kỳ vọng tin nhắn tự nó tốt hơn cuộc gọi | 2, B | Danh sách bước chuẩn bị theo dịch vụ, nhắc trước 1–2 ngày; giữ tổng đài song song |
| AI làm việc hẹp, nghiêng về an toàn, chuyển người khi không chắc | 3, C, D | AI chỉ giải thích thay đổi lịch và bước chuẩn bị; câu hỏi y khoa chuyển cho nhân viên |
| Người lớn tuổi, người không đọc được ngôn ngữ chính phản hồi kém hơn | 3, A | Đo riêng tỷ lệ hiểu đúng theo nhóm tuổi; giữ kênh gọi điện |
| Đo an toàn và độ chấp nhận ngay từ đầu, kể cả thời gian người duyệt | 1, 3, E | Log thử nghiệm ghi tỷ lệ hiểu đúng thay đổi, mức hài lòng và thời gian nhân viên xử lý |

**Điều chưa có ở cả ba:** không ví dụ nào xử lý đúng tình huống bệnh viện tự đổi kế hoạch rồi báo cho bệnh nhân. Vấn đề này có thật ở nơi khác: khảo sát của Healthwatch Walsall (Anh) tại bệnh viện Walsall Manor ghi nhận gần một phần tư người trả lời có lịch hẹn không diễn ra như đã đặt, hơn một nửa số người bị hủy lịch không được giải thích lý do, và có bệnh nhân vẫn đến khám dù lịch đã bị hủy (nguồn 11; báo cáo địa phương, không bình duyệt). Một thử nghiệm đã đăng ký có đo "hủy lịch do bệnh viện" là một kết quả nhưng chưa công bố kết quả (nguồn 15). Đây vừa là rủi ro (chưa có bằng chứng giải pháp hiệu quả) vừa là chỗ prototype có thể đóng góp.

## Nguồn

1. Bartlett M, Blazer S, Hobson G, Abbs I. *The power of digital communications: improving outpatient attendances in south London.* Future Healthcare Journal, 2018;5(1):43–46. doi:10.7861/futurehosp.5-1-43. https://pmc.ncbi.nlm.nih.gov/articles/PMC6510049
2. DrDoctor. *Royal Orthopaedic Hospital's Radiology department reduce DNA rates to 3% in just 3 months* (case study của nhà cung cấp). https://www.drdoctor.co.uk/resources/case-studies/reducing-dna-rates-with-royal-orthopaedic-hospital
3. Desai M, Nutalapati V, Bansal A, et al. *Use of smartphone applications to improve quality of bowel preparation for colonoscopy: a systematic review and meta-analysis.* Endoscopy International Open, 2019;7(2):E216–E224. doi:10.1055/a-0796-6423. https://pmc.ncbi.nlm.nih.gov/articles/PMC6338550
4. Yan N, Wu L, Wang J, et al. *Effect of WeChat-Based Education on the Quality of Intestinal Preparation Before Colonoscopy: A Meta-Analysis of Randomized Controlled Trials.* Cureus, 2025;17(11):e96705. doi:10.7759/cureus.96705. https://pmc.ncbi.nlm.nih.gov/articles/PMC12611535
5. Higham A, Sideri AM, Tarcoveanu F, Lim EJ, et al. *Evaluation of Routine Clinical Deployment of an Autonomous Artificial Intelligence Assistant for Cataract Follow-Up in the National Health Service.* Clinical Ophthalmology, 2026;20 (đăng 17/04/2026). doi:10.2147/OPTH.S576990. https://doi.org/10.2147/OPTH.S576990
6. Meinert E, Milne-Ives M, Lim E, et al. *Accuracy and safety of an autonomous artificial intelligence clinical assistant conducting telemedicine follow-up assessment for cataract surgery.* eClinicalMedicine, 2024;73:102692. doi:10.1016/j.eclinm.2024.102692. https://pmc.ncbi.nlm.nih.gov/articles/PMC11266473
7. Mahmud N, Asch DA, Sung J, Reitz C, Coniglio MS, McDonald C, Bernard D, Mehta SJ. *Effect of Text Messaging on Bowel Preparation and Appointment Attendance for Outpatient Colonoscopy: A Randomized Clinical Trial.* JAMA Network Open, 2021;4(1):e2034553. doi:10.1001/jamanetworkopen.2020.34553. NCT03710213. https://pmc.ncbi.nlm.nih.gov/articles/PMC7835713
8. Gurol-Urganci I, de Jongh T, Vodopivec-Jamsek V, Atun R, Car J. *Mobile phone messaging reminders for attendance at healthcare appointments.* Cochrane Database of Systematic Reviews, 2013;(12):CD007458. doi:10.1002/14651858.CD007458.pub3
9. Chung S, Martinez MC, Frosch DL, Jones VG, Chan AS. *Patient-Centric Scheduling With the Implementation of Health Information Technology to Improve the Patient Experience and Access to Care: Retrospective Case-Control Analysis.* Journal of Medical Internet Research, 2020;22(6):e16451. doi:10.2196/16451. https://www.jmir.org/2020/6/e16451
10. Ganeshan S, Liu AW, Kroeger A, Anand P, Seefeldt R, Regner A, Vaughn D, Odisho AY, Mourad M. *An Electronic Health Record-Based Automated Self-Rescheduling Tool to Improve Patient Access: Retrospective Cohort Study.* Journal of Medical Internet Research, 2024;26:e52071. doi:10.2196/52071. https://pmc.ncbi.nlm.nih.gov/articles/PMC10988365
11. Healthwatch Walsall. *Patient appointments at Walsall Manor Hospital* (báo cáo khảo sát và quan sát, không bình duyệt). Truy cập 20/10/2026. https://nds.healthwatch.co.uk/node/1119552
12. Engelhard M, Copley C, Watson J, Pillay Y, Barron P, LeFevre AE. *Optimising mHealth helpdesk responsiveness in South Africa: towards automated message triage.* BMJ Global Health, 2018;3(Suppl 2):e000567. doi:10.1136/bmjgh-2017-000567. https://pmc.ncbi.nlm.nih.gov/articles/PMC5922466
13. Mate A, Madaan L, Taneja A, Madhiwalla N, Verma S, Singh G, Hegde A, Varakantham P, Tambe M. *Field Study in Deploying Restless Multi-Armed Bandits: Assisting Non-profits in Improving Maternal and Child Health.* Proceedings of the AAAI Conference on Artificial Intelligence, 2022;36(11):12017–12025. doi:10.1609/aaai.v36i11.21460
14. Tai-Seale M, Baxter SL, Vaida F, et al. *AI-Generated Draft Replies Integrated Into Health Records and Physicians' Electronic Communication.* JAMA Network Open, 2024;7(4):e246565. doi:10.1001/jamanetworkopen.2024.6565
15. ClinicalTrials.gov. *Behavioural Interventions to Improve Equity in Outpatient Access* (NCT06163222, chưa có kết quả). Truy cập 20/10/2026. https://clinicaltrials.gov/study/NCT06163222

