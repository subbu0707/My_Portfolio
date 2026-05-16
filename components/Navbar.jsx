const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#070816]/75 px-4 py-4 backdrop-blur-2xl sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/8 bg-white/5 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)] sm:px-6">
        <a
          href="#home"
          className="text-lg font-semibold tracking-wide headline-gradient"
        >
          Portfolio
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-white/75 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-[#61e6d1]"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-cyan-300/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}
