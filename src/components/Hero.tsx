import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/Brand";
import profile from "../assets/profile.jpg";

const stack = [
  "Java",
  "Spring Boot",
  "TypeScript",
  "React",
  "Python",
  "AWS",
  "Docker",
  "Kafka",
  "PostgreSQL",
  "Terraform",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-dvh flex flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-backdrop pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-violet-glow/25 blur-[140px] pointer-events-none" />
      <div className="absolute top-40 right-0 w-[420px] h-[420px] rounded-full bg-fuchsia-glow/15 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-mono text-violet-glow mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-glow animate-pulse" />
            disponível para novas oportunidades
          </div>

          <h1 className="font-display font-bold leading-[0.98] text-[13vw] sm:text-6xl lg:text-7xl tracking-tight">
            <span className="block text-ink">Gabriel Pego</span>
            <span className="block text-gradient">Feitosa</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted max-w-xl">
            Engenheiro de Software Júnior. Construo{" "}
            <span className="text-ink font-medium">APIs</span>,{" "}
            <span className="text-ink font-medium">microsserviços orientados a eventos</span>{" "}
            e integro <span className="text-ink font-medium">Inteligência Artificial</span> a
            produtos reais — do código à nuvem.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-deep via-violet-glow to-fuchsia-glow px-7 py-3.5 font-semibold text-ink glow-border hover:brightness-110 transition"
            >
              Ver projetos
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full glass-panel px-7 py-3.5 font-semibold text-ink hover:border-violet-glow/60 transition"
            >
              <Mail size={16} />
              Contato
            </a>

            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://github.com/gpego1"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub de Gabriel Pego"
                className="p-3 rounded-full glass-panel text-muted hover:text-ink hover:border-violet-glow/60 transition"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/gabrielpego01"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn de Gabriel Pego"
                className="p-3 rounded-full glass-panel text-muted hover:text-ink hover:border-violet-glow/60 transition"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto">
          <div className="absolute inset-0 scale-110 rounded-[2.5rem] bg-gradient-to-br from-violet-glow/40 to-fuchsia-glow/20 blur-3xl" />
          <div className="relative w-64 sm:w-80 aspect-[4/5] rounded-[2rem] overflow-hidden glow-border">
            <img
              src={profile}
              alt="Foto de Gabriel Pego, Engenheiro de Software"
              className="w-full h-full object-cover"
              width={320}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 -left-5 sm:-left-8 glass-panel rounded-2xl px-4 py-3 font-mono text-xs text-muted">
            <span className="text-violet-glow">const</span> role ={" "}
            <span className="text-fuchsia-glow">"SWE Jr"</span>;
          </div>
        </div>
      </div>

      <div className="relative mt-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex overflow-hidden mask-fade py-6">
            <div className="flex gap-10 animate-[marquee_28s_linear_infinite] shrink-0">
              {[...stack, ...stack].map((tech, i) => (
                <span
                  key={i}
                  className="font-mono text-sm text-faint whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
