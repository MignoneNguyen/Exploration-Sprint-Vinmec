# Kịch bản thử và log thử nghiệm

> **Trạng thái: chưa thử với người thật.** Bảng log dưới đây để trống có chủ đích. Chỉ điền sau khi đã thử thật với 2–3 người. Nhật ký máy ghi lại tự động trong `logs/phien-<ngày>.jsonl` (nút đã bấm, số giây, câu hỏi và cách phân loại) để đối chiếu.

Chỉ số và mục tiêu đặt trước: [BRD-lite.md, mục 6](BRD-lite.md#6-chỉ-số-thành-công-khi-thử-với-người-dùng).

## Chuẩn bị (5 phút)

1. Chạy prototype: `npm install` rồi `npm start` (có khóa API) hoặc `npm run start:offline` (không AI). Mở http://localhost:3000.
2. Người điều phối (bạn) ngồi ở máy, người thử chỉ nhìn **màn hình bệnh nhân**. Có thể tick "Chế độ người thử" để ẩn phía bệnh viện, rồi dùng link `?kb=S2&demo=1` để tự gửi thông báo.
3. Xin đồng ý, nói rõ đây là dữ liệu giả, không hỏi về sức khỏe của người thử.

## Kịch bản cho mỗi người thử (15 phút)

| Bước | Kịch bản | Bạn nói với người thử | Quan sát và ghi |
| --- | --- | --- | --- |
| 1 | S1 Đổi bác sĩ | "Anh/chị đã đặt khám thai với BS. Minh. Vừa có thông báo, anh/chị đọc và làm như bình thường." | Nói lại thay đổi có đúng không; nút bấm; số giây |
| 2 | S2 Siêu âm 4D thành 2D | Như trên | Có nhận ra dịch vụ bị đổi không; chọn "Chọn lịch khác" hay "Xác nhận" |
| 3 | S3 Thêm bước chuẩn bị | Như trên | Có kể được 2 bước mới và hạn của chúng không |
| 4 | S6 Không đổi | Như trên | Có hiểu nhầm là có thay đổi không |
| 5 | Hỏi đáp | "Anh/chị hỏi trợ lý bất cứ điều gì về buổi khám." Sau đó gợi ý thử câu "Đổi bác sĩ thì có ảnh hưởng gì đến em bé không?" | Câu y khoa có được chuyển người không; người thử thấy thế nào |
| 6 | Kết thúc | "Anh/chị chấm 1–5 mức hữu ích. Điều gì khó hiểu nhất?" | Điểm, trích dẫn |

Không giải thích giao diện trước. Nếu người thử hỏi "bấm gì bây giờ", ghi lại đó là một điểm vướng.

## Log thử nghiệm

Chế độ dùng khi thử: ☐ AI ☐ Mẫu (không AI)

| Người thử | Bối cảnh (ẩn danh) | Kịch bản | Hiểu đúng thay đổi? | Nút bấm, số giây | Gặp gì, vướng ở đâu | Trích dẫn | Đã sửa gì sau đó |
| --- | --- | --- | --- | --- | --- | --- | --- |
| T1 | | | | | | | |
| T2 | | | | | | | |
| T3 | | | | | | | |

## Tổng hợp sau khi thử

| Chỉ số | Mục tiêu | Kết quả |
| --- | --- | --- |
| Hiểu đúng thay đổi | ≥ 2/3 | |
| Thời gian đến khi hành động | < 60 giây | |
| Hành động đúng | ≥ 2/3 | |
| Câu y khoa, khẩn cấp được chuyển đúng | 100% | |
| Mức hài lòng | ≥ 4/5 | |

Đã sửa gì (ghi cả phiên bản prompt nếu sửa prompt, xem [prompts.md](prompts.md)):

-
