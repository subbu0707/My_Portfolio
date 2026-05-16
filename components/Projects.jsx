import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";
import Image from "next/image";

const projects = [
  {
    name: "College Events Management System",
    description:
      "Centralized platform for event browsing, registration, scheduling, user authentication, and database-driven participant management.This system reduces manual work.",
    tech: ["Node", "Express", "React", "MongoDB"],
    image:
      "https://cdn.slidesharecdn.com/ss_thumbnails/collegeeventmanagement-presentation-210413110429-thumbnail.jpg?width=640&height=640&fit=bounds",
    demo: "https://college-event-management-blue.vercel.app/",
    code: "https://github.com/subbu0707/College_Event_Management",
  },
  {
    name: "Village Job Search Portal",
    description:
      "Accessible portal connecting rural job seekers with nearby employers through a simple, user-friendly interface. The goal is to reduce unemployment in villages by providing a simple, accessible, and centralized system for job discovery and hiring.",
    tech: ["React", "Node", "MongoDB"],
    image:
      "https://social-img.staticblitz.com/projects/angular-karfyk/b8aa495c9c849320743ac146b51f718e",
    demo: "#contact",
    code: "https://github.com/subbu0707/Village_Job_Search_Portal",
  },
  {
    name: "TravelTrek",
    description:
      "TravelTrek is a Frontend web application designed to simplify travel planning and booking. It provides users with a seamless platform to explore destinations, view detailed travel information, and book trips-all in one place.",
    tech: ["React.js", "Tailwind CSS", "Responsive UI"],
    image:
      "https://blog.dookinternational.com/images/post-media/hvGOY1688470246.jpg",
    demo: "https://travel-trek-beige.vercel.app/",
    code: "https://github.com/subbu0707/TravelTrek  ",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Featured Projects"
          title="Projects"
          description="Selected projects with key features and technologies."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <TiltCard
              key={project.name}
              className={`reveal reveal-delay-${Math.min(index + 1, 3)}`}
            >
              <article className="neon-frame panel-gradient group overflow-hidden rounded-[1.8rem] border border-white/8 p-5 transition hover:-translate-y-1">
                <div className="mb-4 h-40 overflow-hidden rounded-[1.4rem] border border-white/8 bg-[radial-gradient(circle_at_30%_30%,rgba(43,184,255,0.24),transparent_28%),radial-gradient(circle_at_75%_65%,rgba(141,107,255,0.18),transparent_30%),linear-gradient(135deg,rgba(9,11,22,0.94),rgba(13,16,32,0.72))]">
                  {project.image ? (
                    <div className="relative h-full w-full">
                      <Image
                        src={project.image}
                        alt={`${project.name} project preview`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 320px, 100vw"
                      />
                    </div>
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-3xl">
                        ◌
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/68">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-100/85"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-4 text-sm font-semibold">
                  <a
                    href={project.demo}
                    className="rounded-full border border-cyan-300/25 px-4 py-2 text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="rounded-full border border-white/10 px-4 py-2 text-white/85 transition hover:border-violet-300/60 hover:bg-violet-300/10"
                  >
                    GitHub
                  </a>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
