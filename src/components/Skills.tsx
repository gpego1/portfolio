import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";

const spanClass: Record<string, string> = {
  lg: "md:col-span-4",
  md: "md:col-span-3",
  sm: "md:col-span-2",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          num="02 — Stack"
          title="Ferramentas que uso no dia a dia."
          description="Uma stack full-stack orientada a produtos: do backend orientado a eventos até interfaces rápidas, passando por cloud, dados e IA."
        />

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`glass-panel rounded-3xl p-6 col-span-2 ${spanClass[group.span]} hover:border-violet-glow/50 transition-colors duration-300`}
            >
              <h3 className="font-mono text-xs text-violet-glow uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-ink/90 bg-white/[0.04] border border-white/5 rounded-lg px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
