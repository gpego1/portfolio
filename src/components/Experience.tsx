import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return <section id="trajetoria" className="section section-experience"><div className="container experience-layout">
    <div className="experience-heading"><SectionHeading num="04 — Trajetória" title="Experiência e formação." description="Da automação de processos ao suporte técnico, com uma formação que caminha lado a lado com a prática."/><div className="experience-seal" aria-hidden="true"><span>GP</span><i/></div></div>
    <div className="experience-list">{experience.map((item, index) => { const Icon = item.type === "work" ? Briefcase : GraduationCap; return <article className="experience-item" key={item.title} style={{ animationDelay: `${index * 100}ms` }}><div className="experience-marker"><Icon size={16} aria-hidden="true"/></div><div className="experience-content"><span className="experience-period">{item.period}</span><h3>{item.title}</h3>{item.place && <p className="experience-place">{item.place}</p>}<p>{item.description}</p></div></article>; })}</div>
  </div></section>;
}
