# Individual Reflection — Nguyễn Bá Chính

## 1. Vai trò và đóng góp của tôi

Trong dự án, tôi đảm nhiệm vai trò **Team Lead / Product** và tham gia xuyên suốt từ lúc hình thành ý tưởng đến khi hoàn thiện các checkpoint.

Các công việc chính tôi đã thực hiện gồm:

- Phối hợp với các thành viên để chọn ý tưởng và thu hẹp phạm vi bài toán.
- Chia việc theo vai trò và theo dõi tiến độ của từng thành viên.
- Viết và chỉnh sửa `spec.md` từ đầu đến cuối, bao gồm problem statement, evidence, impact, solution design, failure cases, evaluation, quality bar, validation plan và changelog.
- Tham gia code, test prototype và kiểm tra các case lỗi.
- Quản lý GitHub, kiểm tra commit/push và đảm bảo các deliverable được cập nhật đúng trước deadline.
- Làm và chỉnh sửa slide, chuẩn bị nội dung trình bày và các checkpoint.
- Nhắc deadline, kiểm tra lại phần việc của các thành viên và review kết quả trước khi đưa vào bài nộp.

Một ví dụ cụ thể về phần quản lý repo là khi một thành viên vô tình push dữ liệu không được phép công khai lên GitHub. Tôi phát hiện sớm, kiểm tra lại lịch sử Git, xóa dữ liệu khỏi repository history và bổ sung rule trong `.gitignore` để giảm nguy cơ lặp lại lỗi này.

## 2. Cách tôi phối hợp với nhóm

Tôi chủ yếu đóng vai trò điều phối và kiểm soát chất lượng chung. Tôi chia task cho từng người, theo dõi tiến độ, nhắc các mốc deadline và kiểm tra xem kết quả của từng thành viên đã bám đúng yêu cầu của ban tổ chức hay chưa.

Khi một thành viên hoàn thành phần việc, tôi thường review lại trước khi đưa vào spec, slide hoặc repo. Nếu thấy thiếu hoặc chưa đúng mục tiêu sản phẩm, tôi phản hồi để chỉnh sửa tiếp.

Qua quá trình này, tôi nhận ra rằng việc chia task chỉ là bước đầu. Điều quan trọng hơn là phải hiểu khả năng thực hiện thực tế của từng thành viên, mức độ chủ động của họ và khả năng hỗ trợ nhau khi có vấn đề.

## 3. Cách tôi sử dụng AI

Tôi sử dụng **ChatGPT Plus** như một công cụ hỗ trợ trong quá trình làm dự án.

Tôi dùng AI để:

- kiểm tra nhanh một số đoạn code;
- tìm nguyên nhân của lỗi kỹ thuật;
- kiểm tra lỗi chính tả hoặc cách diễn đạt;
- gợi ý cách phát triển hoặc thu hẹp ý tưởng;
- rà soát cấu trúc spec, slide và checklist;
- gợi ý hướng xử lý khi gặp lỗi Git/GitHub.

Tuy nhiên, tôi không sử dụng kết quả AI như đáp án cuối cùng. Sau khi nhận được gợi ý, tôi kiểm tra lại dựa trên yêu cầu của ban tổ chức, trạng thái thực tế của repo và kết quả chạy của nhóm. Sau đó tôi tự quyết định phần nào có thể dùng, phần nào cần sửa hoặc phần nào không nên tin.

Qua dự án, tôi thấy AI giúp tăng tốc rất nhiều ở các bước kiểm tra và gợi ý, nhưng trách nhiệm xác minh và quyết định cuối cùng vẫn thuộc về người làm dự án.

## 4. Khó khăn lớn nhất

Khó khăn lớn nhất của tôi và cả nhóm là **user validation với người thật**.

Yêu cầu mục tiêu là 5 người ngoài nhóm, nhưng do giới hạn về thời gian, nguồn lực và khả năng tìm người phù hợp trong thời gian ngắn, nhóm chỉ hoàn thành được **2/5 participant** trước checkpoint.

Dù số lượng chưa đạt mục tiêu, hai phiên validation vẫn giúp nhóm phát hiện vấn đề mà trước đó khi tự test chưa nhận ra. Đặc biệt, một người dùng thử citation và phát hiện rằng các mã như `T04-040`, `T04-053` chỉ được hiển thị nhưng chưa thể click để mở trực tiếp nguồn. Người dùng phản hồi rằng nếu vẫn phải tự tìm lại nguồn thì citation chưa thực sự thuận tiện cho việc kiểm chứng.

Đây là một insight quan trọng vì core value của sản phẩm là giúp người học kiểm chứng câu trả lời. Sau feedback này, tôi ưu tiên vấn đề citation cao hơn các đề xuất mang tính thẩm mỹ như animation và đã yêu cầu Vũ bổ sung/cải thiện phần này.

## 5. Điều tôi học được

Qua dự án, tôi nhận thấy **năng lực thực hiện và mức độ chủ động của từng thành viên ảnh hưởng rất lớn đến tiến độ của cả nhóm**.

Có những lúc một thành viên gặp khó khăn hoặc không có đủ thời gian nhưng chưa chủ động báo sớm hoặc nhờ hỗ trợ. Điều này khiến phần việc có thể bị chậm và người lead chỉ phát hiện khi gần deadline.

Tôi cũng học được rằng một sản phẩm AI không thể chỉ được đánh giá bằng việc “chạy được”. Cần có evidence, quality bar, test case, failure case và đặc biệt là feedback từ người dùng thật. Một vấn đề như citation tưởng như đã ổn khi nhìn từ phía nhóm phát triển, nhưng chỉ khi có người dùng thật tương tác thì mới thấy được điểm bất tiện thực tế.

## 6. Điểm tôi cần cải thiện

Điểm tôi thấy mình còn hạn chế nhất là **khả năng review và đánh giá kết quả của các thành viên một cách nhanh và có hệ thống**.

Tôi vẫn mất khá nhiều thời gian để hiểu:

- phần người khác làm đang thiếu gì;
- yêu cầu nào của ban tổ chức chưa được đáp ứng;
- lỗi đó là lỗi nhỏ hay ảnh hưởng trực tiếp đến rubric;
- phần nào cần sửa ngay và phần nào có thể để sau.

Trong các dự án sau, tôi muốn cải thiện bằng cách:

- tạo checklist/rubric ngay từ đầu cho từng task;
- yêu cầu mỗi thành viên báo sớm blocker thay vì đợi đến gần deadline;
- review theo checkpoint nhỏ thay vì đợi hoàn thành toàn bộ;
- xác định rõ tiêu chí “done” cho từng deliverable trước khi giao việc;
- dành thời gian cho user validation sớm hơn để tránh phát hiện vấn đề quan trọng quá muộn.

## 7. Reflection tổng kết

Vai trò lead giúp tôi học được nhiều hơn về quản lý phạm vi, chia việc, kiểm soát chất lượng và ra quyết định dưới áp lực thời gian.

Đóng góp lớn nhất của tôi không chỉ nằm ở một feature cụ thể mà ở việc giữ cho toàn bộ dự án đi đúng hướng: từ chọn ý tưởng, viết `spec.md`, quản lý GitHub, kiểm tra bài, xử lý lỗi, theo dõi checkpoint đến chuẩn bị slide và submission.

Điều tôi muốn cải thiện nhiều nhất sau dự án là khả năng review nhanh, giao việc có tiêu chí rõ hơn và tổ chức validation sớm hơn. Nếu làm lại, tôi sẽ cố gắng giảm thời gian dành cho việc sửa ở cuối và chuyển nhiều thời gian hơn sang kiểm chứng với người dùng thật.
