import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/Brand";
import SectionHeading from "./SectionHeading";

const channels = [
  { icon: Mail, label: "E-mail", value: "gpego786@gmail.com", href: "mailto:gpego786@gmail.com" },
  { icon: GithubIcon, label: "GitHub", value: "github.com/gpego1", href: "https://github.com/gpego1" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "in/gabrielpego01", href: "https://www.linkedin.com/in/gabrielpego01" },
];

export default function Contact() {
  return <section id="contato" className="section section-contact"><div className="container contact-layout">
    <div className="contact-copy"><SectionHeading num="05 — Contato" title="Vamos levar uma ideia de IA para a prática?" description="Aberto a oportunidades em AI Engineering e desenvolvimento de software, projetos freelance e colaborações técnicas. Vamos conversar sobre o desafio."/><a className="contact-email" href="mailto:gpego786@gmail.com">gpego786@gmail.com <ArrowUpRight size={18} aria-hidden="true"/></a></div>
    <div className="contact-channels">{channels.map(({ icon: Icon, label, value, href }, index) => <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" className="contact-channel" style={{ animationDelay: `${index * 80}ms` }}><span className="contact-channel-icon" aria-hidden="true"><Icon size={19}/></span><span className="contact-channel-text"><small>{label}</small><strong>{value}</strong></span><ArrowUpRight className="contact-channel-arrow" size={17} aria-hidden="true"/></a>)}</div>
  </div></section>;
}
