import Image from "next/image";
import TiltCard from "./TiltCard";
import profileImage from "../linked.png";

export default function Hero() {
  return (
    <section id="home" className="px-4 pb-20 pt-10 sm:px-8 sm:pt-12 lg:pt-14">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative">
          <div className="reveal mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:gap-8">
            <h1 className="max-w-2xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              <span className="headline-gradient">Rachabattuni</span>
              <br />
              <span className="headline-gradient">Subbarao</span>
            </h1>
            <div className="shrink-0 self-start lg:absolute lg:left-[calc(100%+15rem)] lg:top-10">
              <div className="h-32 w-32 overflow-hidden rounded-full border border-white/15 bg-white/5 p-1 shadow-[0_18px_45px_rgba(0,0,0,0.45)] sm:h-36 sm:w-36 lg:h-52 lg:w-52">
                <Image
                  src={profileImage}
                  alt="Profile photo of Rachabattuni Subbarao"
                  className="h-full w-full rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <p className="reveal reveal-delay-1 mt-6 text-2xl font-medium text-white/85 sm:text-3xl">
            Full Stack Developer
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_34px_rgba(43,184,255,0.25)] transition hover:scale-[1.02]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <TiltCard className="float-gentle reveal relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-10 right-0 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="neon-frame texture panel-gradient relative overflow-hidden rounded-[2rem] border border-white/8 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.55)] sm:p-7">
            <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/55">
              <span>3D Developer Panel</span>
              <span>React / Next.js / UI</span>
            </div>
            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.6rem] border border-white/8 bg-black/20 p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/65">
                  const developer = &quot;passionate&quot;
                </p>
                <div className="mt-5 space-y-2 font-mono text-sm leading-relaxed text-white/82 sm:text-base">
                  <p>
                    <span className="text-fuchsia-300">function</span>{" "}
                    <span className="text-cyan-200">createAmazingApps</span>(){" "}
                    {"{"}
                  </p>
                  <p className="pl-5 text-white/68">
                    return &quot;building interfaces that feel premium&quot;;
                  </p>
                  <p>{"}"}</p>
                </div>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-white/68 sm:text-base">
                  Dark, cinematic layouts with subtle motion, layered depth, and
                  a clear focus on performance and usability.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-[radial-gradient(circle_at_30%_18%,rgba(43,184,255,0.24),transparent_28%),radial-gradient(circle_at_70%_80%,rgba(141,107,255,0.18),transparent_30%),linear-gradient(180deg,rgba(9,11,22,0.92),rgba(9,11,22,0.68))] p-5 sm:p-6">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-300/15 blur-2xl" />
                <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-violet-500/15 blur-3xl" />
                <div className="relative flex h-full min-h-[320px] flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                      Featured Stack
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-white/85">
                      {[
                        "React",
                        "Next.js",
                        "Tailwind",
                        "Node.js",
                        "3D Motion",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/6 px-3 py-2"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.2rem] border border-white/10 bg-black/25 p-4 backdrop-blur-sm">
                    <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/65">
                      Location
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Tenali, Andhra Pradesh
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/68">
                      Building internship-ready products with a modern frontend
                      mindset and a strong visual direction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
