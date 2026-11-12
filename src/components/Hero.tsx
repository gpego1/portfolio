import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { Button, Tag } from "./ui";
import { GithubIcon, LinkedinIcon } from "./icons/Brand";
import profile from "../assets/profile.jpg";

const stack = ["Java", "Python", "AWS", "FastAPI", "Flask", "LangChain", "Ollama", "Kafka", "React"];

export default function Hero() {
  return <section id="top" className="hero">
    <div className="hero-ambient hero-ambient--one" aria-hidden="true" /><div className="hero-ambient hero-ambient--two" aria-hidden="true" />
    <svg className="hero-wire" viewBox="0 0 640 640" fill="none" aria-hidden="true"><circle cx="320" cy="320" r="250"/><circle cx="320" cy="320" r="184"/><ellipse cx="320" cy="320" rx="285" ry="100" transform="rotate(-28 320 320)"/><ellipse cx="320" cy="320" rx="285" ry="100" transform="rotate(48 320 320)"/><path d="M70 320h500M320 70v500"/><circle className="wire-node" cx="570" cy="320" r="5"/><circle className="wire-node" cx="320" cy="70" r="5"/><circle className="wire-node" cx="141" cy="499" r="5"/></svg>
    <div className="container hero-layout">
      <div className="hero-copy reveal">
        <p className="hero-eyebrow"><span className="status-pulse" />Backend · AWS · AI Agents</p>
        <p className="hero-availability">Disponível para novas oportunidades <span>↗</span></p>
        <h1>Gabriel<br /><span>Pego Feitosa</span></h1>
        <p className="hero-role">Desenvolvedor de software <span>·</span> AI Engineering</p>
        <p className="hero-intro">Desenvolvedor de Software Júnior com foco em <strong>AI Engineering</strong>. Integro <strong>LLMs, RAG e tool calling</strong> a APIs e automações para criar soluções de IA conectadas a problemas reais.</p>
        <div className="hero-actions"><Button href="#projetos">Ver projetos <ArrowRight size={17} aria-hidden="true" /></Button><Button href="#contato" variant="secondary"><Mail size={16} aria-hidden="true" /> Contato</Button></div>
        <div className="hero-socials"><a href="https://github.com/gpego1" target="_blank" rel="noreferrer" aria-label="GitHub de Gabriel Pego"><GithubIcon size={17} /><span>GitHub</span></a><a href="https://www.linkedin.com/in/gabrielpego01" target="_blank" rel="noreferrer" aria-label="LinkedIn de Gabriel Pego"><LinkedinIcon size={17} /><span>LinkedIn</span></a></div>
        <div className="hero-credentials"><Tag>Oracle Certified · OCI Foundations Associate</Tag><Tag>UTFPR · Engenharia de Software</Tag></div>
      </div>
      <div className="hero-visual reveal">
        <div className="portrait-frame"><span className="portrait-corner portrait-corner--tl"/><span className="portrait-corner portrait-corner--br"/><img src={profile} alt="Gabriel Pego, desenvolvedor de software" width={400} height={400} fetchPriority="high" /></div>
        <div className="portrait-badge portrait-badge--top"><span className="badge-mark">GP</span><span>Engenharia<br />de software</span></div>
        <div className="portrait-badge portrait-badge--bottom"><span className="badge-label">FOCO ATUAL</span><strong>Sistemas de IA <span>↗</span></strong></div>
        <div className="portrait-coordinate" aria-hidden="true">PR · BR<br />DOIS VIZINHOS</div>
      </div>
    </div>
    <div className="container hero-bottom"><div className="hero-stack-label"><span>STACK</span><span>01 — 09</span></div><div className="hero-stack-viewport"><div className="hero-stack-track"><div className="hero-stack-list">{stack.map((item) => <span key={item}>{item}</span>)}</div><div className="hero-stack-list" aria-hidden="true">{stack.map((item) => <span key={item}>{item}</span>)}</div></div></div><a href="#sobre" className="scroll-cue"><span>Role para explorar</span><ArrowDown size={15} aria-hidden="true" /></a></div>
  </section>;
}
