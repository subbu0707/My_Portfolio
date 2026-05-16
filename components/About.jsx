import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

export default function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About Me"
          title="About"
          description="Computer Science student from VVIT, Guntur with a strong interest in frontend engineering, responsive UI design, and modern web app development."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <TiltCard className="reveal">
            <div className="neon-frame panel-gradient texture rounded-[2rem] border border-white/8 p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/70">
                Profile
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/78 sm:text-xl">
                I build responsive web applications that balance usability,
                motion, and structure. My focus is on turning ideas into clear
                interfaces that feel modern and reliable.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-white/68 sm:text-xl">
                Outside of coding, I keep learning through projects, tools, and
                real-world UI patterns that improve the user experience.
              </p>
            </div>
          </TiltCard>

          <div className="grid gap-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="neon-frame glass rounded-[1.5rem] border border-white/8 p-5">
                <h3 className="text-xl font-semibold text-white">Frontend</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "Bootstrap", "React"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-sm text-white/82"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
              <div className="neon-frame glass rounded-[1.5rem] border border-white/8 p-5">
                <h3 className="text-xl font-semibold text-white">Backend</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Java", "Node.js", "Express.js", "MongoDB"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-sm text-white/82"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <TiltCard>
              <div className="neon-frame glass rounded-[1.5rem] border border-white/8 p-5">
                <h3 className="text-xl font-semibold text-white">Tools</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Git", "GitHub", "VS Code"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-sm text-white/82"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
