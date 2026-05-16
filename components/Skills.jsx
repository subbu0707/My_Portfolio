import SectionTitle from "./SectionTitle";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", value: 96 },
      { name: "CSS", value: 94 },
      { name: "JavaScript", value: 88 },
      { name: "Bootstrap", value: 84 },
    ],
  },
  {
    title: "Programming",
    items: [
      { name: "C", value: 90 },
      { name: "Java", value: 86 },
      { name: "Problem Solving", value: 91 },
      { name: "Teamwork", value: 92 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", value: 90 },
      { name: "GitHub", value: 88 },
      { name: "VS Code", value: 95 },
      { name: "MongoDB", value: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Capabilities"
          title="Skills"
          description="Core tools and technologies used in projects and coursework."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className={`neon-frame glass reveal rounded-[1.6rem] p-6 reveal-delay-${Math.min(index + 1, 3)}`}
            >
              <h3 className="text-xl font-semibold text-white">
                {group.title}
              </h3>
              <div className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="mb-2 flex items-center justify-between text-sm font-medium text-white/70">
                      <span>{item.name}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/8">
                      <div
                        className="skill-bar h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 shadow-[0_0_18px_rgba(43,184,255,0.22)]"
                        style={{ "--bar-width": `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
