// Build script (chạy 1 lần bằng Node.js, KHÔNG chạy trong trình duyệt):
// Đọc 6 file transcript-0{1..6}-clean.md, tách thành các đoạn theo mã [Txx-NNN],
// và gộp thành 1 file JSON tĩnh (transcripts-data.json) để index.html load bằng
// fetch() lúc chạy trên trình duyệt (trình duyệt không đọc được file hệ thống).
//
// Chạy lại mỗi khi nội dung transcript trong data/vlearn-pack/transcript/ thay đổi:
//   node scripts/build-transcripts.js

const fs = require("fs");
const path = require("path");

const TRANSCRIPT_DIR = path.join(__dirname, "..", "data", "vlearn-pack", "transcript");
const OUTPUT_PATH = path.join(__dirname, "..", "transcripts-data.json");
const FILES = [
  "transcript-01-clean.md",
  "transcript-02-clean.md",
  "transcript-03-clean.md",
  "transcript-04-clean.md",
  "transcript-05-clean.md",
  "transcript-06-clean.md"
];

function extractSegments(content, fileName) {
  // Mỗi đoạn bắt đầu bằng **[Txx-NNN]** hoặc [Txx-NNN] ở đầu dòng, kết thúc khi
  // gặp mã đoạn tiếp theo hoặc hết file.
  const pattern = /^\s*\*{0,2}\[(T\d{2}-\d{3})\]\*{0,2}\s*/gm;
  const starts = []; // { code, markerStart, contentStart }
  let m;
  while ((m = pattern.exec(content)) !== null) {
    starts.push({ code: m[1], markerStart: m.index, contentStart: m.index + m[0].length });
  }

  const segments = [];
  for (let i = 0; i < starts.length; i++) {
    const cur = starts[i];
    const next = starts[i + 1];
    const end = next ? next.markerStart : content.length;
    let text = content.slice(cur.contentStart, end);
    // Bỏ các dòng heading markdown (## ...) lọt vào giữa đoạn này và marker kế tiếp
    // (heading thường nằm ngay trước một nhóm đoạn mới, không phải nội dung của đoạn hiện tại).
    text = text.replace(/^#{1,6}\s.*$/gm, "").trim();
    if (!text) continue;
    segments.push({ id: "[" + cur.code + "]", text: text, file: fileName });
  }
  return segments;
}

function main() {
  const allSegments = [];
  const summary = [];

  FILES.forEach(function (fileName) {
    const filePath = path.join(TRANSCRIPT_DIR, fileName);
    if (!fs.existsSync(filePath)) {
      console.warn("[build-transcripts] CẢNH BÁO: không tìm thấy " + filePath + " - bỏ qua.");
      return;
    }
    const content = fs.readFileSync(filePath, "utf8");
    const segments = extractSegments(content, fileName);
    allSegments.push.apply(allSegments, segments);
    summary.push({ file: fileName, segments: segments.length });
  });

  const output = {
    generatedAt: new Date().toISOString(),
    sourceDir: "data/vlearn-pack/transcript",
    totalSegments: allSegments.length,
    segments: allSegments
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf8");

  console.log("[build-transcripts] Đã ghi " + OUTPUT_PATH);
  summary.forEach(function (s) {
    console.log("  - " + s.file + ": " + s.segments + " đoạn");
  });
  console.log("  => Tổng cộng: " + allSegments.length + " đoạn");
}

main();
