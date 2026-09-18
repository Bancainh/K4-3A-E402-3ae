# CP5 User Validation Log

## Mục tiêu
Kiểm tra xem người dùng có thể sử dụng prototype để:
- tìm câu trả lời dựa trên tài liệu VLearn;
- hiểu khi nào hệ thống cần hỏi lại;
- hiểu khi nào hệ thống từ chối trả lời;
- kiểm tra được căn cứ/citation của câu trả lời.

## Validation setup
- Số người cần test: ít nhất 5 người ngoài nhóm
- Mỗi người thực hiện task thực tế trên prototype
- Người test được khuyến khích nói suy nghĩ thành tiếng
- Nhóm quan sát, hạn chế hướng dẫn
- Sau mỗi phiên test, ghi lại observation và quote nguyên văn


---

## P1 — Châu Nguyễn Tri Vũ — 2A202602101

### 1. Comfort
"Tụi mình đang đánh giá sản phẩm, không đánh giá bạn, không có câu trả lời đúng/sai, cứ nói suy nghĩ của bạn."

### 2. Context
**Câu hỏi:**  
"Kể lần gần nhất ông gặp khó khăn tìm tài liệu trong VLearn của trường."

**P1:**  
"Thì tài liệu dài quá, tìm đúng ý mình muốn cũng mệt."

### 3. Task
"Ông dùng cái này hỏi thử 1, 2 câu về tài liệu trong VLearn thử đi."

### 4. Observation
- P1 đọc màn hình và xem app gồm những gì.
- P1 hỏi: "Có thể label dữ liệu bằng các cụm từ phổ biến không?"
  - Hệ thống báo không đủ căn cứ để trả lời.
- P1 hỏi: "Điều quan trọng nhất khi định hình một sản phẩm AI là gì?"
  - Hệ thống xác định câu hỏi còn mơ hồ và yêu cầu bổ sung ngữ cảnh.
- P1 bổ sung ngữ cảnh liên quan đến quan sát và nghiên cứu người dùng.
  - Hệ thống trả lời được và đưa ra citation.

### 5. Post-test interview

**Điều khó chịu nhất:**

> "Tui thấy giao diện hơi đơn giản, có thể làm đẹp hơn, thêm animation các thứ nữa."

**Có tin kết quả không? Vì sao?**

> "Có, nó lấy dữ liệu trong VLearn thì chắc đúng rồi mà hỏi cụ thể nó mới giải đáp được."

### 6. Evaluation
- Task result: Pass
- Positive finding:
  - Người dùng hiểu rằng câu hỏi cần đủ cụ thể.
  - Người dùng nhận thấy giá trị của câu trả lời dựa trên tài liệu VLearn.
- Issue:
  - Giao diện còn đơn giản.
- Severity: Low
- Decision:
  - Chưa ưu tiên animation.
  - Ưu tiên những vấn đề ảnh hưởng trực tiếp đến khả năng kiểm chứng câu trả lời.

  ---

## P2 — Phạm Văn Hoàng Anh Tú — 2A202602507 

### 1. Comfort
"Tụi mình đang đánh giá sản phẩm, không đánh giá bạn, không có câu trả lời đúng/sai, cứ nói suy nghĩ của bạn."

### 2. Context
**Câu hỏi:**  
"Kể lần gần nhất ông gặp khó khăn tìm tài liệu trong VLearn của trường."

**P2:**  
"Nhiều lần tui tra mấy từ chuyên ngành trên Chat thì nó trả lời dài, nhưng không biết có đúng với slide thầy dạy không."

### 3. Task
"Ông dùng cái này hỏi thử mấy cái giống vậy đi."

### 4. Observation
- P2 xem lướt qua ứng dụng.
- P2 hỏi: "Attention mechanism là gì?"
  - Hệ thống đưa ra câu trả lời kèm citation.
- P2 thử click vào các citation `T04-040`, `T04-053`.
  - Citation hiện tại không thể click để mở nguồn.
- P2 hỏi: "Thông tin giờ học lớp 3A."
  - Hệ thống từ chối trả lời vì câu hỏi nằm ngoài phạm vi hoặc không có đủ evidence.

### 5. Post-test interview

**Điều khó chịu nhất:**

> "Mấy cái trích dẫn T04 gì gì đó, trích ra mà không click được thì cũng phải tự mò lại à. Với lại hình như không có lịch sử hả."

**Có tin kết quả không? Vì sao?**

> "Thì có trích dẫn ra thì chắc cũng đáng tin mà không vô được trang thì hơi bất tiện."

### 6. Evaluation
- Task result: Pass, nhưng có usability issue.
- Positive findings:
  - Người dùng nhận ra citation giúp tăng độ tin cậy.
  - Hệ thống xử lý đúng câu hỏi ngoài phạm vi.
- Issue 1:
  - Citation có mã nguồn nhưng không thể click để mở nguồn tương ứng.
- Severity: High
- Issue 2:
  - Không có lịch sử câu hỏi.
- Severity: Medium
- Decision:
  - Ưu tiên cải thiện citation để người dùng có thể mở hoặc xem nguồn trực tiếp.
  - Chưa ưu tiên chat history vì chưa phải core value của prototype hiện tại.

  ---

## Validation Summary

### Participants
- Completed: 2 participants outside the team
- Target: 5 participants
- Limitation: Due to the CP5 time constraint, the team completed 2/5 planned validation sessions.

### Key findings

#### P1
- Task result: Pass
- Main issue: UI còn đơn giản.
- Severity: Low
- User vẫn hiểu được khi nào cần bổ sung ngữ cảnh và tin tưởng hơn khi câu trả lời dựa trên tài liệu VLearn.

#### P2
- Task result: Pass with usability issue
- Main issue 1: Citation như `T04-040`, `T04-053` không thể click để mở nguồn.
- Severity: High
- Main issue 2: Không có chat history.
- Severity: Medium

### Product decision
Nhóm ưu tiên cải thiện khả năng kiểm chứng citation thay vì đầu tư vào animation hoặc chat history.

Lý do:
- Citation là một phần trực tiếp của core value: giúp người dùng kiểm chứng câu trả lời dựa trên tài liệu VLearn.
- P2 đã chủ động thử click citation nhưng không thể mở nguồn.
- Animation chủ yếu ảnh hưởng thẩm mỹ, không ảnh hưởng trực tiếp đến khả năng hoàn thành job của người dùng.