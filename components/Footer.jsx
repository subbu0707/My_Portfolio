export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-5 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-sm text-white/55 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Rachabattuni Subbarao. Crafted for
          internship opportunities.
        </p>
      </div>
    </footer>
  );
}
