# AI SPEC — Grounded VLearn Answer · Nhóm 3ae · Zone A1
Hướng: [x] A — VLearn  [ ] B — Trợ lý Học viên  [ ] C — Làn mở
Loại: [x] Tối ưu tính năng có sẵn  [ ] Tính năng mới

## §1. User & Job

- Job executor + workflow:
  Học viên đang học một nội dung trong khóa học → gặp điểm chưa hiểu →
  mở VLearn Tutor để hỏi → đọc câu trả lời → kiểm tra nguồn/căn cứ →
  quyết định có sử dụng câu trả lời để tiếp tục học hay phải tự tìm lại tài liệu.

- Core JTBD:
  Khi gặp một nội dung chưa hiểu trong khóa học, tôi muốn nhận được câu trả lời
  có thể kiểm chứng từ tài liệu học để tiếp tục học mà không phải tự dò lại nhiều nguồn.

- Problem statement:
  Học viên khó biết một câu trả lời có thực sự dựa trên tài liệu khóa học hay không,
  đặc biệt khi câu hỏi thiếu ngữ cảnh hoặc nằm ngoài phạm vi tài liệu.
  Điều này làm tăng thời gian kiểm chứng và có nguy cơ khiến học viên tiếp nhận thông tin sai.

- Evidence:
  - Số liệu mining / kết quả khảo sát:
    [CHỜ TRUNG ĐIỀN: n = ?, bao nhiêu % gặp vấn đề]
  - ≥5 quote/ví dụ nguyên văn + nguồn:
    1. [CHỜ EVIDENCE]
    2. [CHỜ EVIDENCE]
    3. [CHỜ EVIDENCE]
    4. [CHỜ EVIDENCE]
    5. [CHỜ EVIDENCE]

## §2. Impact & quyết định chọn

| Ứng viên vấn đề | Bao nhiêu người/case gặp | Tần suất | Tốn gì mỗi lần | Khả thi |
|---|---:|---|---|---|
| Câu trả lời thiếu citation/căn cứ | [CHỜ SỐ] | [CHỜ] | Mất thời gian kiểm tra lại, nguy cơ học sai | Cao |
| Câu hỏi mơ hồ nhưng hệ thống trả lời ngay | [CHỜ SỐ] | [CHỜ] | Có thể trả lời sai ý người học | Cao |
| Câu hỏi ngoài phạm vi tài liệu vẫn có câu trả lời | [CHỜ SỐ] | [CHỜ] | Nguy cơ tạo thông tin không có căn cứ | Trung bình/Cao |

- Ứng viên ĐÃ LOẠI + vì sao:
  [Điền sau khi có số liệu. Không loại chỉ theo cảm giác.]

- Ứng viên CHỌN + vì sao:
  Vấn đề "câu trả lời thiếu căn cứ/citation".
  Lý do chọn: [CHỜ SỐ LIỆU chứng minh đây là vấn đề đáng ưu tiên].

## §3. Giải pháp tương tự đã nghiên cứu

- NotebookLM:
  Flow: người dùng đưa nguồn tài liệu → hỏi → nhận câu trả lời gắn với nguồn.
  Đáng học: ưu tiên grounding và giúp người dùng kiểm chứng câu trả lời.
  Đáng né: không nên biến prototype thành hệ thống quản lý tài liệu quá lớn.
  Nhóm khác ở chỗ: chỉ tập trung vào tài liệu học tập của VLearn và một lát cắt nhỏ.

- Perplexity:
  Flow: người dùng hỏi → hệ thống tổng hợp thông tin → hiển thị citation để kiểm tra nguồn.
  Đáng học: citation nằm ngay cạnh nội dung cần kiểm chứng.
  Đáng né: không cần xây khả năng tìm kiếm toàn web.
  Nhóm khác ở chỗ: phạm vi nguồn bị giới hạn vào tài liệu khóa học.

## §4. Thiết kế

- Lát cắt MỘT CÂU:
  Một học viên hỏi về nội dung khóa học →
  hệ thống kiểm tra tài liệu có đủ căn cứ để trả lời hay không →
  nếu đủ thì trả lời kèm nguồn, nếu không đủ thì thông báo rõ chưa có đủ căn cứ →
  học viên biết mức độ có thể tin cậy và kiểm chứng câu trả lời.

- Non-goals:
  1. Không xây lại toàn bộ VLearn Tutor.
  2. Không trả lời kiến thức ngoài tài liệu khóa học.
  3. Không xây hệ thống tìm kiếm web.
  4. Không cá nhân hóa toàn bộ lộ trình học.
  5. Không cố giải tất cả loại câu hỏi học tập.

- Mức prototype nhắm tới:
  [ ] Sketch
  [ ] Mock
  [x] Working

  Phần thật:
  - User nhập câu hỏi.
  - Hệ thống lấy context/tài liệu.
  - Có ít nhất 1 lời gọi AI thật.
  - Hệ thống đưa ra câu trả lời + citation hoặc từ chối vì thiếu căn cứ.

  Phần có thể mock:
  - Đăng nhập VLearn.
  - Hồ sơ người dùng.
  - Toàn bộ backend VLearn hiện tại.

- Automation:
  [ ] augment
  [x] conditional
  [ ] automate

  Lý do:
  Không nên luôn tự động trả lời.
  Khi evidence đủ mạnh → trả lời.
  Khi evidence yếu / không có → chuyển sang trạng thái "không đủ căn cứ"
  hoặc yêu cầu người dùng làm rõ.
  Cost-of-error của việc trả lời sai trong bối cảnh học tập cao hơn chi phí
  của việc nói "chưa đủ thông tin".

- §4b. Nguyên tắc đã áp dụng:

| Nguyên tắc | Áp cụ thể vào đâu trong prototype |
|---|---|
| Make clear what the system can do | UI nói rõ chỉ trả lời dựa trên tài liệu khóa học |
| Make clear how well the system can do | Khi confidence thấp, báo không đủ căn cứ thay vì trả lời chắc chắn |
| Support efficient correction | Người dùng có thể sửa / bổ sung câu hỏi |
| Support graceful failure | Không có nguồn thì không bịa câu trả lời |
| Show relevant context | Hiển thị citation / đoạn nguồn bên cạnh câu trả lời |

## §5. Kiểu lỗi — 4 lớp chỗ khó + kịch bản

| # | Lớp chỗ khó | Kịch bản | Rủi ro | Hành vi mong muốn |
|---|---|---|---|---|
| 1 | Input | Câu hỏi rõ, có trong tài liệu | Thấp | Trả lời + citation |
| 2 | Input | Câu hỏi quá ngắn/mơ hồ | Trả lời sai ý | Hỏi lại để làm rõ |
| 3 | Retrieval | Có tài liệu nhưng lấy sai đoạn | Citation sai | Không đạt quality bar |
| 4 | Retrieval | Không tìm thấy tài liệu liên quan | Hallucination | Báo không đủ căn cứ |
| 5 | Generation | Context đúng nhưng câu trả lời thêm thông tin ngoài context | Hallucination | Chỉ dùng thông tin từ context |
| 6 | Scope | Người dùng hỏi ngoài phạm vi khóa học | Trả lời ngoài domain | Từ chối nhẹ + nêu phạm vi |
| 7 | Confidence | Có context nhưng rất yếu/mâu thuẫn | Trả lời quá tự tin | Báo confidence thấp |
| 8 | Correction | Người dùng nói câu trả lời chưa đúng ý | Hệ thống lặp lại lỗi | Nhận correction và xử lý lại |

## §6. Bốn đường đi của trải nghiệm

- Happy path:
  User hỏi câu rõ → tìm thấy nguồn phù hợp →
  trả lời ngắn gọn + citation → user có thể mở nguồn để kiểm tra.

- Low-confidence:
  Tìm thấy một ít context nhưng chưa đủ chắc chắn →
  báo "Tôi chưa có đủ căn cứ để trả lời chắc chắn" →
  đề nghị user bổ sung thông tin hoặc xem nguồn liên quan.

- Failure/không căn cứ:
  Không tìm thấy nguồn phù hợp →
  không sinh câu trả lời kiến thức →
  nói rõ không tìm thấy thông tin trong tài liệu hiện có.

- Correction:
  User nói "ý mình hỏi là..." hoặc chỉ ra câu trả lời chưa đúng →
  hệ thống dùng câu hỏi đã sửa → chạy lại retrieval → trả lời lại.

- Khi bị đòi ngoài phạm vi:
  Nói rõ hệ thống chỉ hỗ trợ nội dung trong tài liệu khóa học
  và không suy đoán ngoài phạm vi.

- Case đặc thù domain:
  Nếu các tài liệu trong khóa học có nội dung khác nhau/mâu thuẫn,
  hiển thị nguồn liên quan và tránh tự kết luận khi chưa đủ căn cứ.

## §7. Kiểm thử

* Chiều chất lượng:

  1. **Groundedness:**
     Nội dung trả lời phải được hỗ trợ bởi context được truy xuất.

  2. **Citation correctness:**
     Citation phải thực sự chứa thông tin hỗ trợ cho câu trả lời.

  3. **Abstention correctness:**
     Khi không có đủ evidence, hệ thống không được tự suy đoán hoặc bịa câu trả lời; hệ thống phải từ chối trả lời hoặc yêu cầu người dùng làm rõ khi phù hợp.

  4. **Relevance:**
     Câu trả lời phải đúng trọng tâm câu hỏi và không đưa thêm thông tin không cần thiết.

* Golden set:

  Bộ kiểm thử gồm **20 cases**, lưu tại `eval/golden_set.csv`, với cơ cấu:

  * 8 câu có đủ căn cứ: phải trả lời đúng và có citation phù hợp.
  * 4 câu mơ hồ: phải yêu cầu người dùng làm rõ.
  * 4 câu ngoài phạm vi hoặc không có căn cứ: phải từ chối trả lời.
  * 2 câu có context yếu: không được trả lời khẳng định khi evidence chưa đủ; ưu tiên hỏi lại để làm rõ.
  * 2 câu correction/follow-up: phải xử lý đúng thông tin bổ sung hoặc sửa đổi từ người dùng.

* Quality bar:

  **Hệ thống đạt yêu cầu khi ≥ 80% cases trong golden set pass, đồng thời 100% cases không có đủ căn cứ không được bịa hoặc đưa ra câu trả lời khẳng định không được hỗ trợ bởi evidence.**

* Kết quả các lượt chạy:

| Lượt | Tổng case | Pass | Fail | Pass rate | Ghi chú                                                                                                                                           |
| ---- | --------: | ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| v1   |        20 |   14 |    6 |       70% | Baseline. Các lỗi chủ yếu nằm ở nhóm ambiguous và weak-context: hệ thống có xu hướng trả lời hoặc từ chối ngay thay vì yêu cầu người dùng làm rõ. |
| v2   |        20 |   20 |    0 |      100% | Sau khi điều chỉnh prompt/decision logic để xử lý tốt hơn các trường hợp ambiguous và weak-context bằng `ask_clarify`.                            |

* Kết luận:

  Lượt **v1 đạt 70%**, thấp hơn quality bar 80%. Phân tích lỗi cho thấy failure mode chính nằm ở khả năng nhận diện câu hỏi mơ hồ và context chưa đủ mạnh.

  Sau khi điều chỉnh cách hệ thống xử lý các trường hợp này, **v2 đạt 100% (20/20 cases)** và vượt quality bar đã đặt ra.

## §8. Phân công & kế hoạch

- Nguyễn Bá Chính — Team Lead / Product:
  spec, product scope, Canvas, GitHub integration, checkpoint, pitch.

- Huỳnh Tấn Trung — Research & Evaluation:
  evidence, survey/mining, willing users, golden set, evaluation, validation.

- Trần Anh Vũ — Prototype Engineer:
  user flow, prototype, prompt/AI integration, code, demo.

- Willing users:
  1. Hồ Đình Tuấn Kiệt — Học viên AI20K lớp 3A
  2. Nguyễn X.T Giang — Học viên AI20K lớp 3A

- Kế hoạch validation:
  CP5 cho ít nhất 5 người ngoài nhóm thực hiện cùng một task.
  Ghi lại họ làm gì, kẹt ở đâu, quote nguyên văn và quyết định sửa gì.

- Multi-prototype:
  Không làm nếu không đủ thời gian.
  Tập trung một prototype working hoàn chỉnh thay vì nhiều bản dở dang.


## §9. Changelog

| Thời điểm | Đổi gì | Vì sao (trỏ về feedback/case nào) |
|---|---|---|
| 16/9 | Chốt lát cắt Grounded VLearn Answer | Thu hẹp scope để tập trung vào một problem có thể build và đo trong hackathon |
| 17/9 | Chạy baseline v1 trên golden set 20 cases | Đo chất lượng thực tế trước khi tiếp tục cải tiến; v1 đạt 14/20 = 70% |
| 17/9 | Điều chỉnh prompt/decision logic cho ambiguous và weak-context | 6 case fail của v1 tập trung ở hai nhóm này; hệ thống trả lời/refuse thay vì `ask_clarify` |
| 17/9 | Chạy lại evaluation v2 | Xác minh thay đổi; v2 đạt 20/20 = 100% trên golden set hiện tại |
| 17/9 | Chốt quality bar ≥80% + zero unsupported answer cho no-evidence cases | Khóa tiêu chuẩn đánh giá cho CP4 |
