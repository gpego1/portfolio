import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const filters = ["Todos", "AI Engineering", "Backend & Cloud"] as const;
type Filter = (typeof filters)[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const visibleProjects = projects.filter((project) => filter === "Todos" || project.category === filter);

  return <section id="projetos" className="section section-projects"><div className="container">
    <SectionHeading num="03 \u2014 Projetos" title="IA aplicada, da integra\u00e7\u00e3o \u00e0 experi\u00eancia." description="Projetos que exploram aplica\u00e7\u00f5es com LLMs, RAG, agentes e automa\u00e7\u00e3o, junto a APIs e arquiteturas backend que conectam os modelos a fluxos de trabalho reais." />
    <div className="project-controls" role="group" aria-label="Filtrar projetos">
      {filters.map((item) => <button key={item} type="button" className={`filter-button${filter === item ? " is-active" : ""}`} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}<span>{item === "Todos" ? projects.length : projects.filter((project) => project.category === item).length}</span></button>)}
    </div>
    <div className="project-grid" aria-live="polite">{visibleProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
  </div></section>;
}
