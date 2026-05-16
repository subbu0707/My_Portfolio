import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "public");
const outFile = path.join(outDir, "resume.pdf");

const lines = [
  "RACHABATTUNI SUBBARAO",
  "+91-8522809197 | Tenali, Andhra Pradesh",
  "subbaraorachabattuni0@gmail.com | GitHub | LinkedIn",
  "",
  "OBJECTIVE",
  "Motivated CSE student with strong interest in web development.",
  "Skilled in responsive and user-friendly web applications.",
  "Seeking internship opportunities to solve real-world problems.",
  "",
  "EDUCATION",
  "B.Tech CSE, VVIT, Guntur (2023 - 2027) - CGPA: 9.0",
  "Intermediate, Sri Chaitanya Junior College (2021 - 2023) - 96%",
  "SSC, ZP High School, Tenali (2020 - 2021) - GPA: 9.5",
  "",
  "SKILLS",
  "Languages: C, Java",
  "Web: HTML, CSS, JavaScript, Bootstrap",
  "Databases: SQL, MongoDB",
  "Tools: Git, GitHub, Visual Studio Code",
  "Soft Skills: Communication, Problem Solving, Teamwork",
  "",
  "INTERNSHIP EXPERIENCE",
  "Full Stack Intern (MERN) - SmartBridge (May 2025 - Jun 2025)",
  "Built responsive React front-end applications with reusable components.",
  "Translated UI/UX designs into responsive pages using HTML/CSS/JS.",
  "",
  "PROJECTS",
  "College Events Management System",
  "Village Job Search Portal",
  "",
  "CERTIFICATIONS",
  "OOP through Java - Codetantra",
  "HTML, CSS & JavaScript: Building the Web - LinkedIn Learning",
  "Responsive Web Design - freeCodeCamp",
  "",
  "ACHIEVEMENTS",
  "Participated in Smart India Hackathon (SIH)",
];

const escapePdf = (text) =>
  text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

const startY = 790;
const lineHeight = 17;
const streamLines = ["BT", "/F1 11 Tf", "1 0 0 1 48 0 Tm"];

lines.forEach((line, index) => {
  const y = startY - index * lineHeight;
  streamLines.push(`1 0 0 1 48 ${y} Tm (${escapePdf(line)}) Tj`);
});

streamLines.push("ET");
const contentStream = streamLines.join("\n") + "\n";

const objects = [
  "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
  "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
  "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n",
  "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
  `5 0 obj\n<< /Length ${Buffer.byteLength(contentStream, "utf8")} >>\nstream\n${contentStream}endstream\nendobj\n`,
];

let pdf = "%PDF-1.4\n";
const xrefPositions = [0];

for (const obj of objects) {
  xrefPositions.push(Buffer.byteLength(pdf, "utf8"));
  pdf += obj;
}

const xrefOffset = Buffer.byteLength(pdf, "utf8");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";

for (let i = 1; i <= objects.length; i += 1) {
  pdf += `${String(xrefPositions[i]).padStart(10, "0")} 00000 n \n`;
}

pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, pdf, "utf8");
console.log(`Created ${outFile}`);
