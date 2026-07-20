export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  videoId?: string;
};

export const projects: Project[] = [
  {
    slug: "spring-event-driven-ecommerce",
    name: "spring-event-driven-ecommerce",
    tagline: "E-commerce orientado a eventos",
    description:
      "Simulação de e-commerce construída em torno de um produtor Kafka: cada pedido criado é serializado e publicado no tópico order.created, permitindo que serviços de notificação, e-mail e analytics consumam o evento de forma assíncrona e desacoplada.",
    highlights: [
      "Arquitetura orientada a eventos (Event-Driven) com Apache Kafka",
      "Serialização de eventos com StringSerializer + JsonSerializer",
      "Comunicação assíncrona desacoplada entre microsserviços",
      "Infraestrutura via Docker Compose",
    ],
    stack: ["Java", "Spring Boot", "Spring Kafka", "Apache Kafka", "Docker"],
    repoUrl: "https://github.com/gpego1/spring-event-driven-ecommerce",
  },
  {
    slug: "cli-ai-productivity",
    name: "cli-ai-productivity",
    tagline: "Produtividade via IA, serverless na AWS",
    description:
      "API voltada para o aumento de produtividade através da integração com LLMs, com uma versão CLI em Python (comandos summarize, ask e report sobre arquivos locais) e uma arquitetura cloud-native serverless na AWS: exposição via API Gateway e processamento via Lambda a partir de imagem Docker customizada no Amazon ECR.",
    highlights: [
      "Arquitetura Cloud-Native e Serverless na AWS (API Gateway + Lambda)",
      "Imagem Docker customizada publicada no Amazon ECR",
      "Comandos de IA sobre arquivos locais: resumir, perguntar e gerar relatórios",
      "Integração com SDKs de LLM (OpenAI-compatible)",
    ],
    stack: ["Python", "AWS Lambda", "API Gateway", "Docker", "Amazon ECR"],
    repoUrl: "https://github.com/gpego1/cli-ai-productivity",
    videoId: "atlemnWqpPA",
  },
  {
    slug: "musicapp",
    name: "musicApp",
    tagline: "TCC · Plataforma de eventos e ingressos",
    description:
      "Backend em Spring Boot desenvolvido como Trabalho de Conclusão de Curso (Informática, FIEC) para o Projeto Sonora: autenticação com controle de acesso por papéis, cadastro de eventos e reserva de ingressos, com busca via Elasticsearch e notificações push via Firebase Cloud Messaging.",
    highlights: [
      "Autenticação com controle de acesso e permissões (roles)",
      "Busca e indexação de eventos/artistas com Elasticsearch",
      "Notificações push com Firebase Cloud Messaging",
      "Deploy na AWS (EC2 + S3) com banco MySQL gerenciado e pipeline de logs",
    ],
    stack: ["Java", "Spring Boot", "MySQL", "Elasticsearch", "AWS EC2", "AWS S3", "Docker"],
    repoUrl: "https://github.com/gpego1/musicApp",
  },
  {
    slug: "url-shortener-analytics",
    name: "url-shortener-analytics",
    tagline: "Encurtador de URLs com métricas em tempo real",
    description:
      "Sistema de encurtamento de URLs incrementado com métricas analíticas de tráfego, evidenciando roteamento eficiente, manipulação otimizada de banco de dados e tratamento de requisições — com frontend e backend implantados em produção.",
    highlights: [
      "Coleta de métricas analíticas de tráfego por link encurtado",
      "Separação clara entre frontend e backend (TypeScript)",
      "Deploy real em produção, acessível publicamente",
    ],
    stack: ["TypeScript", "Node.js", "React", "CSS"],
    repoUrl: "https://github.com/gpego1/url-shortener-analytics",
    demoUrl: "https://url-shortener-analytics-three.vercel.app/",
  },
];
