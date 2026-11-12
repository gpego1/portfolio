import { useState } from "react";
import { Layers3 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";
import { Tag } from "./ui";

const categories = ["Tudo", "IA & Automação", "Backend & Arquitetura", "Cloud & DevOps", "Ferramentas"] as const;
type Category = (typeof categories)[number];
const matchesCategory = (title: string, category: Category) => category === "Tudo" || title === category || (category === "Backend & Arquitetura" && ["Linguagens", "Banco de Dados"].includes(title)) || (category === "Ferramentas" && ["Frontend", "Testes"].includes(title));

export default function Skills() {
  const [category, setCategory] = useState<Category>("Tudo");
  const visibleGroups = skillGroups.filter((group) => matchesCategory(group.title, category));
  return <section id="skills" className="section section-skills"><div className="container">
    <SectionHeading num="02 — Stack" title="A stack por trás das aplicações com IA." description="Modelos, frameworks e serviços que uso para integrar LLMs, criar agentes e RAG, automatizar fluxos e sustentar aplicações via APIs e infraestrutura cloud." />
    <div className="skills-intro"><div className="skills-glyph"><Layers3 size={23} aria-hidden="true" /></div><span className="skills-count">{skillGroups.reduce((total, group) => total + group.items.length, 0)} tecnologias</span></div>
    <div className="skill-filters" role="group" aria-label="Filtrar tecnologias">{categories.map((item) => <button key={item} type="button" className={`skill-filter${category === item ? " is-active" : ""}`} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
    <div className="skills-grid" aria-live="polite">{visibleGroups.map((group, index) => <article className="skill-group" key={group.title} style={{ animationDelay: `${index * 70}ms` }}><h3><span>{String(index + 1).padStart(2, "0")}</span>{group.title}</h3><div className="skill-tags">{group.items.map((item) => <Tag key={item}>{item}</Tag>)}</div></article>)}</div>
  </div></section>;
}
