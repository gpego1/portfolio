export type SkillGroup = {
  title: string;
  span: "lg" | "md" | "sm";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Linguagens",
    span: "sm",
    items: ["Python", "TypeScript", "JavaScript", "Java"],
  },
  {
    title: "Backend & Arquitetura",
    span: "lg",
    items: [
      "Node.js",
      "Express",
      "Spring Boot",
      "Spring Security",
      "APIs REST",
      "Kafka",
      "JWT",
      "OAuth2",
    ],
  },
  {
    title: "Frontend",
    span: "sm",
    items: ["React", "Vite", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Cloud & DevOps",
    span: "md",
    items: ["AWS EC2", "AWS S3", "AWS RDS", "Docker", "GitHub Actions", "Terraform"],
  },
  {
    title: "IA & Automação",
    span: "md",
    items: ["Pandas", "OpenAI SDK", "Gemini", "Agentes de IA", "NLP"],
  },
  {
    title: "Testes",
    span: "sm",
    items: ["Jest", "Testes Unitários", "Testes de Integração"],
  },
  {
    title: "Banco de Dados",
    span: "sm",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
];
