import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projetos" className="relative py-28 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          num="03 — Projetos"
          title="Projetos em destaque."
          description="Uma seleção de projetos práticos que mostram arquitetura orientada a eventos, cloud-native serverless e produtos de dados com IA — do repositório ao deploy."
        />

        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
