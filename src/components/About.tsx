import { ArrowUpRight, Code2, Layers3, Workflow } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Panel } from "./ui";

const pillars = [
  { icon: Code2, index: "01", title: "Aprendizado aplicado", text: "Da formação em Engenharia de Software à experimentação com modelos e ferramentas de IA, transformo estudo em protótipos funcionais e projetos documentados." },
  { icon: Workflow, index: "02", title: "IA conectada a sistemas", text: "Integro LLMs com APIs, recuperação de contexto e chamadas de ferramentas para que os modelos executem tarefas úteis dentro de aplicações reais." },
  { icon: Layers3, index: "03", title: "Engenharia além do prompt", text: "Desenvolvo soluções considerando orquestração, persistência, integrações e infraestrutura — os componentes que tornam uma aplicação com IA utilizável." },
];

export default function About() {
  return <section id="sobre" className="section section-about"><div className="container">
    <SectionHeading num="01 — Sobre" title="Construindo aplicações inteligentes com engenharia de software." description="Sou Gabriel Pego Feitosa, Desenvolvedor de Software Júnior de Dois Vizinhos/PR, em formação em Engenharia de Software. Meu foco é integrar modelos de IA a sistemas confiáveis, com APIs, dados e automações que resolvem problemas reais." />
    <div className="about-grid">{pillars.map(({ icon: Icon, index, title, text }) => <Panel key={index} className="about-card"><div className="about-card-top"><span>{index}</span><ArrowUpRight size={17} aria-hidden="true" /></div><Icon size={25} strokeWidth={1.6} aria-hidden="true"/><h3>{title}</h3><p>{text}</p></Panel>)}</div>
  </div></section>;
}
