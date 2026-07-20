import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/Brand";

const channels = [
  {
    icon: Mail,
    label: "E-mail",
    value: "pegogabriel30@gmail.com",
    href: "mailto:pegogabriel30@gmail.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/gpego1",
    href: "https://github.com/gpego1",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/gabrielpego01",
    href: "https://www.linkedin.com/in/gabrielpego01",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="relative py-28 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative glass-panel rounded-[2.5rem] p-10 sm:p-16 overflow-hidden text-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-violet-glow/25 blur-[130px] pointer-events-none" />

          <div className="relative">
            <span className="font-mono text-sm text-violet-glow">05 — Contato</span>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-6xl tracking-tight text-ink">
              Vamos construir
              <br />
              <span className="text-gradient">algo relevante.</span>
            </h2>
            <p className="mt-6 text-muted text-lg max-w-xl mx-auto">
              Aberto a oportunidades como Engenheiro de Software Júnior, projetos
              freelance e colaborações técnicas. Bora trocar uma ideia?
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-6 hover:border-violet-glow/50 hover:bg-white/[0.04] transition-colors"
                >
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-deep to-fuchsia-glow/60 flex items-center justify-center">
                    <Icon size={17} className="text-ink" />
                  </span>
                  <div>
                    <p className="text-xs font-mono text-faint uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-sm text-ink mt-1 flex items-center gap-1 justify-center">
                      {value}
                      <ArrowUpRight
                        size={14}
                        className="text-faint group-hover:text-violet-glow transition-colors"
                      />
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
