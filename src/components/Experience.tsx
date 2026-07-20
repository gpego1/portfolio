import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="trajetoria" className="relative py-28 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          num="04 — Trajetória"
          title="Experiência e formação."
          description="Da automação de processos ao suporte técnico, com uma formação que caminha lado a lado com a prática."
        />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-glow/70 via-violet-glow/20 to-transparent" />

          <div className="space-y-10">
            {experience.map((item) => {
              const Icon = item.type === "work" ? Briefcase : GraduationCap;
              return (
                <div key={item.title} className="relative">
                  <div className="absolute -left-8 sm:-left-10 top-0.5 w-6 h-6 rounded-full glass-panel flex items-center justify-center">
                    <Icon size={12} className="text-violet-glow" />
                  </div>
                  <span className="font-mono text-xs text-violet-glow uppercase tracking-wider">
                    {item.period}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-ink mt-1">
                    {item.title}
                    {item.place && (
                      <span className="text-muted font-normal"> · {item.place}</span>
                    )}
                  </h3>
                  <p className="text-muted text-sm sm:text-base mt-1.5 max-w-2xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
