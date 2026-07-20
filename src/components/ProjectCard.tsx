import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons/Brand";
import type { Project } from "../data/projects";

export default function ProjectCard({
  project,
  reverse,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <article
      className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center py-14 border-t border-white/5 first:border-t-0 first:pt-0`}
    >
      <div className={reverse ? "lg:order-2" : ""}>
        {project.videoId ? (
          <div className="rounded-2xl overflow-hidden glow-border bg-surface">
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-surface-2 border-b border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-[11px] text-faint truncate">
                demo — {project.name}
              </span>
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title={`Demo em vídeo do projeto ${project.name}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <div className="rounded-2xl overflow-hidden glow-border bg-gradient-to-br from-surface to-surface-2 aspect-video flex items-center justify-center relative">
            <div className="absolute inset-0 grid-backdrop opacity-60" />
            <span className="relative font-mono text-sm sm:text-base text-violet-glow/90 px-6 text-center">
              {project.tagline}
            </span>
          </div>
        )}
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3 mb-3">
          <h3 className="font-display text-2xl font-bold text-ink">
            {project.name}
          </h3>
        </div>
        <p className="font-mono text-sm text-fuchsia-glow/90 mb-4">
          {project.tagline}
        </p>
        <p className="text-muted leading-relaxed mb-5">{project.description}</p>

        <ul className="space-y-2 mb-6">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-ink/85">
              <span className="mt-2 w-1 h-1 rounded-full bg-violet-glow shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-7">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-muted bg-white/[0.03] border border-white/5 rounded-md px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass-panel px-5 py-2.5 text-sm font-semibold text-ink hover:border-violet-glow/60 transition"
          >
            <GithubIcon size={16} />
            Repositório
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-deep to-fuchsia-glow px-5 py-2.5 text-sm font-semibold text-ink hover:brightness-110 transition"
            >
              <ExternalLink size={16} />
              Ver demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
