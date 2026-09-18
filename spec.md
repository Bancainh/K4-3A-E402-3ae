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

  Học viên gặp khó khăn khi cần tìm lại kiến thức trong slide/video hoặc khi sử dụng
  AI ngoài như ChatGPT/Gemini nhưng không biết câu trả lời có thực sự đúng và dựa trên
  tài liệu khóa học hay không.

  Điều này làm tăng thời gian tìm kiếm, kiểm chứng và có nguy cơ khiến học viên
  tiếp nhận thông tin sai.

* Evidence:

  * Khảo sát nội bộ học viên ngoài nhóm trong khóa, **n = 21**, thực hiện trong ngày **16–17/9/2026**.

  * **71.4% (15/21)** cho biết gặp khó khăn từ mức "thỉnh thoảng" trở lên khi xác định câu trả lời có căn cứ trong tài liệu hay không; trong đó **23.8% (5/21)** gặp ở mức thường xuyên hoặc rất thường xuyên.

  * **66.7% (14/21)** đã sử dụng AI ngoài như ChatGPT/Gemini như một workaround khi gặp vấn đề, nhưng các công cụ này không có đầy đủ ngữ cảnh của khóa học.

  * **76.2% (16/21)** cần tìm lại thông tin cụ thể trong tài liệu ít nhất 3 lần/tháng; **14.3% (3/21)** thực hiện việc này hơn 10 lần/tháng.

  * **61.9% (13/21)** mất ít nhất 5 phút cho mỗi lần tìm hoặc kiểm tra lại thông tin; **19.0% (4/21)** mất ít nhất 10 phút.

  * Hai nguyên nhân được lựa chọn nhiều nhất:

    * **Không biết câu trả lời nằm ở slide/video nào: 38.1% (8/21).**
    * **Tài liệu quá dài: 33.3% (7/21).**

  * **85.7% (18/21)** cho biết sẵn sàng thử prototype.

  * Quote/ví dụ nguyên văn từ người khảo sát:

        1. U1: "Quá nhiều tài liệu, chả biết thông tin cần tìm ở file nào cho đầy đủ thông tin để hiểu"

        2. U2: "Tra lại với công cụ AI khác và thời gian mất khoảng 1->5 phút"

        3. U3: "Bỏ cuộc"

        4. U4: "Thông tin về khóa học AI cũng như các kiến thức quan trọng đôi khi bị sai. Tôi phải tìm đến khóa học gốc tìm từng kiến thức để verify"

        5. U5: "Phải kiểm tra nhiều nguồn"

  * Full survey response log được nhóm lưu lại để có thể kiểm tra lại số đếm và các quote khi cần.

- Full survey response log: `evidence/survey_log.csv`

## §2. Impact & quyết định chọn

| Ứng viên vấn đề                                                 | Evidence                                                                              | Tần suất / mức độ                                    | Tốn gì mỗi lần                                                     | Khả thi |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------ | ------- |
| Khó xác định thông tin nằm ở slide/video nào                    | 38.1% (8/21) chọn đây là một nguyên nhân chính                                        | 76.2% cần tìm lại thông tin cụ thể ≥3 lần/tháng      | Tốn thời gian dò nhiều slide/video/tài liệu                        | Cao     |
| Tài liệu quá dài, khó tìm đúng đoạn cần dùng                    | 33.3% (7/21) chọn đây là một nguyên nhân chính                                        | Xuất hiện như một trong hai root cause phổ biến nhất | Tốn thời gian đọc và tìm kiếm lại                                  | Cao     |
| Khó biết câu trả lời từ AI ngoài có đúng và có căn cứ hay không | 71.4% gặp khó khăn từ mức thỉnh thoảng trở lên; 66.7% đã dùng AI ngoài làm workaround | 23.8% gặp vấn đề thường xuyên/rất thường xuyên       | 61.9% mất ≥5 phút/lần để tìm hoặc kiểm tra lại; 19.0% mất ≥10 phút | Cao     |

* Ứng viên ĐÃ LOẠI + vì sao:

  Không chọn xây hệ thống quản lý/tìm kiếm toàn bộ tài liệu VLearn vì scope quá lớn
  cho thời gian hackathon và không cần thiết để kiểm chứng giả thuyết cốt lõi.

* Ứng viên CHỌN + vì sao:

  Chọn vấn đề **"khó kiểm chứng câu trả lời và tìm lại căn cứ trong tài liệu học"**.

  Lý do:

  * **71.4% (15/21)** gặp khó khăn từ mức thỉnh thoảng trở lên khi xác định câu trả lời có căn cứ trong tài liệu.
  * **23.8% (5/21)** gặp khó khăn ở mức thường xuyên hoặc rất thường xuyên.
  * **66.7% (14/21)** đã phải dùng AI ngoài như ChatGPT/Gemini làm workaround.
  * **61.9% (13/21)** mất ít nhất 5 phút mỗi lần tìm hoặc kiểm tra lại thông tin.
  * Hai root cause phổ biến nhất là **không biết thông tin nằm ở slide/video nào (38.1%)** và **tài liệu quá dài (33.3%)**.
  * **85.7% (18/21)** sẵn sàng thử prototype.
  * Qualitative evidence cũng cho thấy người học phải kiểm tra nhiều nguồn, quay lại tài liệu gốc để verify hoặc thậm chí bỏ cuộc khi việc tìm kiếm quá khó.


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

* §4b. Nguyên tắc HAX/PAIR đã áp dụng:

| Nguyên tắc                               | Áp cụ thể vào đâu trong prototype                                                                                                                                  |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **G1 — Làm rõ hệ thống làm được gì**     | UI nói rõ Grounded VLearn Answer chỉ trả lời dựa trên tài liệu khóa học được cung cấp, không phải trợ lý kiến thức tổng quát.                                      |
| **G2 — Làm rõ hệ thống làm tốt đến đâu** | Câu trả lời hiển thị citation/evidence để người dùng biết căn cứ đến từ đâu; khi evidence chưa đủ, hệ thống không thể hiện câu trả lời như một kết luận chắc chắn. |
| **G9 — Sửa dễ dàng**                     | Người dùng có thể sửa, bổ sung hoặc diễn đạt lại câu hỏi khi kết quả chưa đúng ý; hệ thống dùng input đã sửa để chạy lại retrieval và tạo câu trả lời mới.         |
| **G10 — Thu hẹp phạm vi khi nghi ngờ**   | Khi câu hỏi mơ hồ hoặc evidence yếu, hệ thống không đoán; thay vào đó dùng `ask_clarify` để yêu cầu người dùng bổ sung thông tin hoặc báo chưa đủ căn cứ.          |
| **G11 — Giải thích vì sao**              | Khi trả lời, hệ thống hiển thị citation/đoạn evidence liên quan để người dùng có thể kiểm tra vì sao câu trả lời được đưa ra.                                      |

* **PAIR — Explainability + Trust / Errors + Graceful Failure:**
  Citation giúp người dùng tự kiểm chứng thay vì yêu cầu họ tin AI một cách tuyệt đối. Khi hệ thống không tìm thấy đủ evidence, hệ thống chuyển sang trạng thái không đủ căn cứ hoặc hỏi làm rõ thay vì tạo câu trả lời không được hỗ trợ.


## §5. Kiểu lỗi — 4 lớp chỗ khó + kịch bản

| # | Lớp chỗ khó                  | Kịch bản                                                                                 | Rủi ro                                                                            | Hành vi mong muốn                                                               |
| - | ---------------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 1 | ① Nguồn sự thật              | Có tài liệu liên quan nhưng retrieval lấy sai đoạn                                       | Citation không thực sự hỗ trợ câu trả lời                                         | Không coi case là pass; chỉ trả lời khi citation chứa evidence hỗ trợ trực tiếp |
| 2 | ① Nguồn sự thật              | Không tìm thấy tài liệu liên quan                                                        | Hallucination hoặc trả lời không có căn cứ                                        | Báo không đủ căn cứ và không tự suy đoán                                        |
| 3 | ② Mơ hồ / thiếu thông tin    | Câu hỏi của người dùng quá ngắn hoặc có nhiều cách hiểu                                  | Hệ thống trả lời sai ý người dùng                                                 | Yêu cầu người dùng làm rõ trước khi trả lời                                     |
| 4 | ② Mơ hồ / thiếu thông tin    | Có context nhưng evidence yếu hoặc mâu thuẫn                                             | Hệ thống trả lời quá tự tin từ evidence chưa đủ                                   | Báo chưa đủ căn cứ hoặc hỏi lại để làm rõ                                       |
| 5 | ③ Ngoài phạm vi / thẩm quyền | Người dùng hỏi kiến thức ngoài phạm vi tài liệu khóa học                                 | Hệ thống trả lời ngoài domain đã cam kết                                          | Từ chối nhẹ và nói rõ phạm vi hệ thống                                          |
| 6 | ③ Ngoài phạm vi / thẩm quyền | Người dùng yêu cầu hệ thống suy luận hoặc bổ sung kiến thức không có trong tài liệu      | Câu trả lời có thể đúng theo kiến thức chung nhưng không còn grounded trên VLearn | Không bổ sung thông tin ngoài nguồn; nói rõ chưa có căn cứ trong tài liệu       |
| 7 | ④ Đặc thù domain             | Context đúng nhưng câu trả lời thêm thông tin không được source hỗ trợ                   | Học viên có thể học sai kiến thức                                                 | Chỉ sử dụng thông tin được evidence hỗ trợ                                      |
| 8 | ④ Đặc thù domain             | Citation được hiển thị nhưng đoạn nguồn không thực sự chứng minh claim trong câu trả lời | Người học tưởng câu trả lời đã được kiểm chứng trong khi citation sai             | Citation phải hỗ trợ trực tiếp claim tương ứng; nếu không thì case fail         |


## §6. Bốn đường đi của trải nghiệm

- Happy path:

  User hỏi câu rõ → retrieval tìm thấy evidence phù hợp →
  hệ thống trả lời ngắn gọn + citation →
  user có thể mở nguồn để kiểm tra.

- Weak/insufficient evidence:

  Câu hỏi rõ nhưng retrieval chỉ tìm được context yếu →
  không trả lời khẳng định →
  báo chưa đủ căn cứ hoặc đề nghị user bổ sung thông tin.

- Failure/không căn cứ:

  Không tìm thấy nguồn phù hợp →
  không sinh câu trả lời kiến thức →
  nói rõ không tìm thấy thông tin trong tài liệu hiện có.

- Correction:

  User nói "ý mình hỏi là..." hoặc chỉ ra câu trả lời chưa đúng →
  hệ thống dùng câu hỏi đã sửa → chạy lại retrieval → trả lời lại.

## §7. Kiểm thử

- Chiều chất lượng:

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

* Willing users cho validation:

  Trong khảo sát có **18/21 người (85.7%)** cho biết sẵn sàng thử prototype.

  Nhóm sẽ chọn ít nhất 5 người ngoài nhóm từ pool willing users này để thực hiện validation tại CP5.

* Kế hoạch validation:

  CP5 cho ít nhất 5 người ngoài nhóm thực hiện cùng một task.
  

  Ghi lại:

  * người dùng đã làm gì;
  * họ bị kẹt ở đâu;
  * quote nguyên văn;
  * task pass/fail;
  * nhóm quyết định sửa gì sau observation.


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
| 17/9 | Hoàn thiện evidence survey n=21 + ≥5 quotes nguyên văn | 15/21 gặp pain từ mức thỉnh thoảng trở lên; 14/21 dùng AI ngoài; 18/21 willing users |
| 18/9 | Ưu tiên cải thiện citation thay vì animation/chat history | Validation P2 cho thấy citation có mã nguồn nhưng không click được, khiến người dùng vẫn phải tự tìm nguồn; đây là vấn đề trực tiếp với core value kiểm chứng câu trả lời |
| 18/9 | CP5 validation hoàn thành 2/5 participant dự kiến | Do giới hạn thời gian trước checkpoint; giữ nguyên log thực tế, không bổ sung dữ liệu giả |