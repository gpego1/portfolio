import type { PointerEvent } from "react";
import { ArrowUpRight, Link2 } from "lucide-react";
import type { Project } from "../data/projects";
import { Button, Tag } from "./ui";
import { GithubIcon } from "./icons/Brand";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const moveCard = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--tilt-x", `${y * -4}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 4}deg`);
    event.currentTarget.style.setProperty("--spot-x", `${(x + 0.5) * 100}%`);
    event.currentTarget.style.setProperty("--spot-y", `${(y + 0.5) * 100}%`);
  };
  const resetCard = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return <article className={`project-card project-card--${project.slug}`} onPointerMove={moveCard} onPointerLeave={resetCard} style={{ animationDelay: `${index * 90}ms` }}>
    <div className={`project-visual project-visual--${project.slug}`} aria-hidden="true">
      <span className="visual-index">0{index + 1} <i /> {project.category}</span>
      <div className="flow-lines"><span /><span /><span /></div>
      <div className="flow-nodes">{project.flow.map((step, stepIndex) => <div className="flow-node" key={step}><span className="flow-node-dot" /><span>{step}</span>{stepIndex < project.flow.length - 1 && <ArrowUpRight className="flow-arrow" size={14} />}</div>)}</div>
      <div className="visual-orbit visual-orbit--one" /><div className="visual-orbit visual-orbit--two" />
      <span className="visual-spark visual-spark--one" /><span className="visual-spark visual-spark--two" />
    </div>
    <div className="project-content">
      <div className="project-title-row"><div><p className="project-category">{project.category}</p><h3>{project.name}</h3></div><a className="project-open" href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`Abrir repositório ${project.name}`}><ArrowUpRight size={19} aria-hidden="true" /></a></div>
      <p className="project-tagline">{project.tagline}</p>
      <p className="project-description">{project.description}</p>
      {project.integration && <a className="project-integration" href={project.integration.repoUrl} target="_blank" rel="noreferrer"><Link2 size={14} aria-hidden="true"/><span>{project.integration.label}</span><ArrowUpRight size={13} aria-hidden="true"/></a>}
      <ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
      <div className="project-tags">{project.stack.map((tech) => <Tag key={tech}>{tech}</Tag>)}</div>
      <div className="project-actions"><Button href={project.repoUrl} variant="secondary" target="_blank" rel="noreferrer"><GithubIcon size={16} /> Ver repositório <ArrowUpRight size={15} aria-hidden="true" /></Button></div>
    </div>
  </article>;
}
