export type ExperienceItem = {
  period: string;
  title: string;
  place: string;
  description: string;
  type: "work" | "education";
};

export const experience: ExperienceItem[] = [
  {
    period: "Atual",
    title: "Estagiário de TI — Automações, Chatbots e Integrações Web",
    place: "",
    description:
      "Foco na redução de processos manuais via scripts (Python/JS) e implementações seguras via OAuth2, resultando em mais estabilidade e disponibilidade dos sistemas.",
    type: "work",
  },
  {
    period: "Anterior",
    title: "Analista de Suporte Técnico Jr",
    place: "",
    description:
      "Atuação em resolução ágil de incidentes, padronização de diagnósticos e melhorias estruturais em monitoramento.",
    type: "work",
  },
  {
    period: "Em andamento",
    title: "Bacharelado em Engenharia de Software",
    place: "CEUNSP",
    description: "Formação em andamento com foco em arquitetura de software, engenharia e boas práticas de desenvolvimento.",
    type: "education",
  },
  {
    period: "Concluído",
    title: "Técnico em Informática",
    place: "FIEC",
    description:
      "Formação técnica concluída, com TCC em plataforma de eventos e ingressos (musicApp / Projeto Sonora).",
    type: "education",
  },
];
