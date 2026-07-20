import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre", num: "01" },
  { href: "#skills", label: "Skills", num: "02" },
  { href: "#projetos", label: "Projetos", num: "03" },
  { href: "#trajetoria", label: "Trajetória", num: "04" },
  { href: "#contato", label: "Contato", num: "05" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-bg/75 backdrop-blur-md border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold text-lg tracking-tight text-ink flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-violet-glow shadow-[0_0_12px_2px_rgba(168,85,247,0.7)]" />
          gabriel<span className="text-violet-glow">.pego</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 glass-panel rounded-full px-2 py-1.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                active === link.href
                  ? "text-ink bg-white/5"
                  : "text-muted hover:text-ink"
              }`}
            >
              <span className="font-mono text-[10px] text-violet-glow mr-1.5">
                {link.num}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-deep to-fuchsia-glow px-5 py-2.5 text-sm font-semibold text-ink glow-border hover:brightness-110 transition"
        >
          Vamos conversar
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden glass-panel rounded-xl p-2.5 text-ink"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden mx-5 mt-3 glass-panel rounded-2xl p-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-medium text-muted hover:text-ink hover:bg-white/5 transition-colors"
            >
              <span className="font-mono text-xs text-violet-glow mr-2">
                {link.num}
              </span>
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 text-center rounded-xl bg-gradient-to-r from-violet-deep to-fuchsia-glow px-5 py-3 text-sm font-semibold text-ink"
          >
            Vamos conversar
          </a>
        </nav>
      )}
    </header>
  );
}
