import { useEffect, useState } from "react";
import { ArrowUp, Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const progress = distance > 0 ? Math.min(window.scrollY / distance, 1) : 0;
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href)).filter((element): element is Element => Boolean(element));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(`#${entry.target.id}`); }), { rootMargin: "-42% 0px -48% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const backToTop = () => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  return <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
    <div className="nav-shell container">
      <a className="site-brand" href="#top" aria-label="Gabriel Pego, início"><BrandMark className="brand-mark"/><span>gabriel.pego<span className="brand-dot">.</span></span></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{links.map((link) => <a key={link.href} href={link.href} aria-current={active === link.href ? "location" : undefined}>{link.label}</a>)}</nav>
      <a className="nav-cta" href="#contato">Vamos conversar <span>↗</span></a>
      <button className="mobile-toggle" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>{open ? <X size={20} aria-hidden="true"/> : <Menu size={20} aria-hidden="true"/>}</button>
    </div>
    {open && <nav className="mobile-nav" id="mobile-navigation" aria-label="Navegação móvel">{links.map((link) => <a key={link.href} href={link.href} aria-current={active === link.href ? "location" : undefined} onClick={() => setOpen(false)}>{link.label}<span>↗</span></a>)}<a className="mobile-contact" href="#contato" onClick={() => setOpen(false)}>Vamos conversar <span>↗</span></a></nav>}
    {scrolled && <button className="back-top" type="button" onClick={backToTop} aria-label="Voltar ao topo"><ArrowUp size={18} aria-hidden="true"/></button>}
  </header>;
}
