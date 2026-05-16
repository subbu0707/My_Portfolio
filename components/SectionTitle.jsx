export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="reveal w-fit rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
        {eyebrow}
      </p>
      <h2 className="reveal reveal-delay-1 mt-4 text-4xl font-semibold text-white sm:text-5xl">
        {title}
      </h2>
      <p className="reveal reveal-delay-2 mt-3 text-base leading-relaxed text-white/72 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
