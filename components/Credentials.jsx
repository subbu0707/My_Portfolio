import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

const education = [
  {
    title: "B.Tech in Computer Science and Engineering",
    place: "VVIT, Guntur",
    meta: "2023 - 2027 · CGPA: 9.0",
  },
  {
    title: "Intermediate",
    place: "Sri Chaitanya Junior College, Tenali",
    meta: "2021 - 2023 · 96%",
  },
  {
    title: "SSC",
    place: "ZP High School, Tenali",
    meta: "2020 - 2021 · GPA: 9.5",
  },
];

const highlights = [
  {
    title: "Virtual Internship",
    lines: [
      "Full Stack Intern (MERN)",
      "SmartBridge Education Services Pvt. Ltd. (APSCHE Collaboration)",
      "May 2025 - Jun 2025",
      "Built responsive React front ends and translated UI/UX into working pages.",
    ],
  },
  {
    title: "Certifications",
    lines: [
      "Object Oriented Programming through Java - Codetantra",
      "HTML, CSS & JavaScript: Building the Web - LinkedIn Learning",
      "Responsive Web Design - freeCodeCamp",
      "Git/GitHub - CodeChef",
      "Oracle Autonomous Database Cloud - Oracle",
    ],
  },
  {
    title: "Achievement",
    lines: ["Participated in Smart India Hackathon (SIH)"],
  },
];

export default function Credentials() {
  return (
    <section id="resume" className="px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Resume"
          title="Professional Profile"
          description="Education, internship experience, certifications, and achievements."
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <TiltCard className="reveal lg:h-full">
            <div className="neon-frame panel-gradient rounded-[2rem] border border-white/8 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white">
                Download Resume
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/68">
                Keep a polished PDF ready for internship applications and quick
                sharing.
              </p>
              <div className="mt-6">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                >
                  Download PDF
                </a>
              </div>
              <h4 className="mt-8 text-lg font-semibold text-white">
                Education
              </h4>
              <div className="mt-5 space-y-4">
                {education.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/8 bg-white/5 p-4"
                  >
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-white/68">{item.place}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cyan-200/60">
                      {item.meta}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>

          <div className="flex flex-col gap-5 lg:h-full lg:self-stretch">
            {highlights.map((item, index) => (
              <TiltCard
                key={item.title}
                className={`reveal reveal-delay-${Math.min(index + 1, 3)} ${index === highlights.length - 1 ? "lg:mt-auto" : ""}`}
              >
                <div className="neon-frame glass rounded-[2rem] border border-white/8 p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/72">
                    {item.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
