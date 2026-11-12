export type SkillGroup = {
  title: string;
  span: "lg" | "md" | "sm";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Linguagens", span: "sm", items: ["Python", "TypeScript", "JavaScript", "Java"] },
  { title: "Backend & Arquitetura", span: "lg", items: ["Node.js", "FastAPI", "Flask", "Express", "Spring Boot", "Spring Security", "APIs REST", "Kafka", "JWT", "OAuth2"] },
  { title: "Frontend", span: "sm", items: ["React", "Vite", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Cloud & DevOps", span: "md", items: ["AWS EC2", "AWS S3", "AWS RDS", "Oracle Cloud", "Docker", "GitHub Actions", "Terraform"] },
  { title: "IA & Automação", span: "md", items: ["Pandas", "OpenAI SDK", "Groq SDK", "Ollama", "Gemini", "Agentes de IA", "AI Engineering", "NLP"] },
  { title: "Ferramentas", span: "md", items: ["Cursor", "Git", "GitHub Actions"] },
  { title: "Testes", span: "sm", items: ["Jest", "Testes Unitários", "Testes de Integração"] },
  { title: "Banco de Dados", span: "sm", items: ["PostgreSQL", "MongoDB", "MySQL"] },
];
