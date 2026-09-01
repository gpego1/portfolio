export type ExperienceItem = {
  period: string;
  title: string;
  place: string;
  description: string;
  type: "work" | "education";
};

export const experience: ExperienceItem[] = [
  {
    period: "Anterior",
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
    period: "Em andamento — previsão 2029",
    title: "Bacharelado em Engenharia de Software",
    place: "UTFPR - Universidade Tecnológica Federal do Paraná",
    description: "Formação em andamento com foco em arquitetura de software, engenharia e boas práticas de desenvolvimento. Conclusão prevista para 2029.",
    type: "education",
  },
  {
    period: "Concluído",
    title: "Técnico em Informática",
    place: "FIEC - Fundação Indaiatubana de Educação e Cultura",
    description:
      "Formação técnica concluída, com TCC em plataforma de eventos e ingressos (musicApp / Projeto Sonora).",
    type: "education",
  },
];
