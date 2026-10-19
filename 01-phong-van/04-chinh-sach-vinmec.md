# Chính sách và cam kết của Vinmec (mã nguồn CS)

> Các mã H4, H5, FB, P được giải thích ở [GIAI-THICH-MA.md](../GIAI-THICH-MA.md).

Nguồn chính thức của Vinmec, truy cập 19/10/2026. Dùng để hiểu **cơ chế** đằng sau điểm đau và để đặt **ràng buộc** cho giải pháp AI. Nguồn này không cho biết vấn đề xảy ra thường xuyên đến mức nào.

## 1. Vinmec quy định, cam kết gì

| Chủ đề | Vinmec quy định / cam kết | Nguồn |
| --- | --- | --- |
| Hồ sơ bệnh nhân | Mỗi khách hàng có một mã y tế (PID), in trên tem dán hồ sơ và phiếu khám. Khách cũ không cần điền lại phiếu đăng ký. Bệnh nhân được nhận diện bằng ít nhất 2 thông tin: họ tên, ngày sinh (kèm PID nếu cần) | [5], [7] |
| Liên kết hồ sơ trên app | Chỉ liên kết được khi thông tin khai báo trên app trùng khớp với lúc khám. Nếu thông tin đúng mà vẫn không liên kết được thì phải gọi hotline | [6] |
| Đặt lịch | Đặt qua web, app hoặc hotline. Tổng đài viên gọi lại để xác nhận giờ khám và có thể điều chỉnh nếu cần. Một số bác sĩ yêu cầu đặt cọc (440.000–1.600.000đ, quan sát trong app) | [8] |
| Quyền được thông tin | Được biết bác sĩ và nhân viên chịu trách nhiệm điều trị; được báo trước chi phí ước tính; thông tin phải bằng ngôn ngữ người bệnh hiểu được; được tư vấn khi có kết quả | [1] |
| Nghĩa vụ của người bệnh | Cung cấp chính xác thông tin cá nhân, báo khi thông tin thay đổi và chịu trách nhiệm về thông tin đã khai | [1] |
| Dữ liệu cá nhân | Không mua bán dữ liệu cá nhân. Dữ liệu thu thập có thể gồm CCCD, nơi làm việc, số thẻ BHYT. Chỉ lưu trong thời hạn cần thiết hoặc theo luật. Người bệnh có quyền xem, sửa, yêu cầu xóa. Khi xử lý bằng AI hoặc hệ thống tự động: phải thông báo cho người dùng, giải thích nguyên tắc thuật toán và cho phép không tham gia | [2] |
| Đạo đức nghề nghiệp | Thông tin sức khỏe chỉ chia sẻ với bên thứ ba khi người bệnh đồng ý và được người có thẩm quyền duyệt. Công bố dịch vụ và chi phí trung thực | [3] |
| Khiếu nại | Bộ phận tiếp nhận liên hệ lại trong vòng 24 giờ. Khiếu nại phải gửi trong vòng 1 tháng kể từ khi sự việc xảy ra | [4] |

## 2. Cam kết so với thực tế quan sát được

| Cam kết | Thực tế | Liên quan |
| --- | --- | --- |
| Được biết bác sĩ chịu trách nhiệm điều trị | FB4: đặt bác sĩ trước 2 tuần, đến nơi bị chuyển sang bác sĩ khác mà không được báo | H4 |
| Tổng đài xác nhận và có thể điều chỉnh giờ khám | FB1: trạng thái lịch nhảy giữa "đã xác nhận" và "chờ tổng đài xác nhận", phải tự gọi kiểm tra. Việc điều chỉnh được thiết kế sẵn trong quy trình, nhưng thông báo lại dựa vào cuộc gọi | H4 |
| Một mã y tế cho mỗi bệnh nhân | Liên kết phụ thuộc vào việc khớp thông tin; FB7 kể bị tách hai mã (chưa xác minh); P1 có hồ sơ không đồng bộ giữa các nơi khám | H5 |
| Người bệnh phải báo khi thông tin thay đổi | Gánh nặng giữ hồ sơ khớp nằm ở người bệnh; 4/4 người phỏng vấn tự giữ kết quả | H5 |
| Thông tin bằng ngôn ngữ người bệnh hiểu được | Trợ lý MIA chỉ hỗ trợ tiếng Việt, dù app có tùy chọn đặt lịch cho người nước ngoài | Ngoài phạm vi |
| Báo trước chi phí ước tính | App hiện phí khám dự kiến và tiền cọc; TT3 cho thấy quyền lợi bảo hiểm cho trẻ em vẫn khó hiểu | Phụ |

**Nhận xét:** khoảng cách lớn nhất nằm ở hai chỗ: quy trình cho phép thay đổi giờ khám và bác sĩ nhưng thông báo không theo kịp, và trách nhiệm giữ thông tin khớp được đặt lên người bệnh. Cả hai đều trùng với H4 và H5.

## 3. Ràng buộc cho giải pháp AI, rút ra từ chính sách

1. Phải thông báo cho người dùng khi dữ liệu được xử lý tự động, giải thích nguyên tắc hoạt động và cho phép từ chối.
2. Thông tin lịch hẹn và thay đổi phải lấy từ hệ thống vận hành thật, không để AI tự suy đoán.
3. Thông tin đưa ra phải bằng ngôn ngữ người bệnh hiểu được.
4. Chỉ chia sẻ thông tin sức khỏe với người khác (người nhà, công ty) khi người bệnh đồng ý.
5. Không đưa ra chẩn đoán hay lời khuyên điều trị; chỉ hỗ trợ phần dịch vụ.

Các ràng buộc này được đưa vào [PRD của prototype](../05-prototype/PRD.md) và [phần rủi ro, đạo đức](../06-rui-ro-dao-duc/README.md).

## 4. Nguồn

1. [Quyền và nghĩa vụ của người bệnh, thân nhân](https://www.vinmec.com/vie/bai-viet/quyen-va-nghia-vu-cua-nguoi-benh-nhan-vi) – cập nhật 16/10/2026
2. [Chính sách bảo vệ dữ liệu cá nhân](https://www.vinmec.com/vie/bai-viet/chinh-sach-bao-ve-du-lieu-ca-nhan-cua-cong-ty-co-phan-benh-vien-da-khoa-quoc-te-vinmec) – hiệu lực 03/09/2026
3. [Nguyên tắc đạo đức của Hệ thống Y tế Vinmec](https://www.vinmec.com/vie/bai-viet/nguyen-tac-dao-duc-he-thong-y-te-vinmec)
4. [Chính sách giải quyết khiếu nại, tranh chấp](https://www.vinmec.com/vie/bai-viet/chinh-sach-giai-quyet-khieu-nai-tranh-chap)
5. [Hướng dẫn kết nối hồ sơ y tế và sổ tiêm chủng trên MyVinmec](https://www.vinmec.com/vie/bai-viet/huong-dan-ket-noi-ho-so-y-te-va-so-tiem-chung-tren-ung-dung-myvinmec-vi)
6. [Hướng dẫn theo dõi kết quả khám sức khỏe tổng quát trên MyVinmec](https://www.vinmec.com/vie/bai-viet/huong-dan-theo-doi-ket-qua-kham-suc-khoe-tong-quat-tai-ung-dung-myvinmec-vi)
7. [Outpatient examination procedure at Vinmec](https://vinmec.com/eng/article/outpatient-examination-procedure-at-vinmec-en)
8. [Trang đăng ký khám](https://vinmec.com/dat-kham)
9. [Giới thiệu Hệ thống Y tế Vinmec](https://www.vinmec.com/vie/bai-viet/gioi-thieu-ve-he-thong-y-te-vinmec-vi)
