import { Code, Layers, Workflow } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: Code,
    title: "Autodidata por natureza",
    text: "Comecei a programar de forma autodidata e segui para uma formação formal em Engenharia de Software — a curiosidade continua sendo meu maior motor de aprendizado.",
  },
  {
    icon: Workflow,
    title: "Resolução de problemas",
    text: "Foco em entender o problema antes da solução: escolher a arquitetura certa importa mais do que escrever a linha de código mais bonita.",
  },
  {
    icon: Layers,
    title: "Do código à nuvem",
    text: "Experiência prática com integração de APIs, microsserviços orientados a eventos e pipelines de CI/CD — pensando no produto de ponta a ponta.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-28 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          num="01 — Sobre"
          title="Desenvolvimento de software com raízes autodidatas."
          description="Sou Gabriel Pego Feitosa, Desenvolvedor de Software Júnior de Indaiatuba/SP. Gosto de transformar problemas reais em sistemas confiáveis, escaláveis e bem instrumentados."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group glass-panel rounded-3xl p-7 hover:border-violet-glow/50 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-deep to-fuchsia-glow/60 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Icon size={20} className="text-ink" />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink mb-2">
                {title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
