export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  repoUrl: string;
  category: "AI Engineering" | "Backend & Cloud";
  flow: string[];
  integration?: { label: string; repoUrl: string };
};

export const projects: Project[] = [
  {
    slug: "chatbot-flask",
    name: "WhatsApp Chatbot com RAG",
    tagline: "Atendimento com busca vetorial e consulta de catálogo",
    description: "Atendente virtual para WhatsApp de uma loja de roupas, construído com Flask. Recebe eventos pela Evolution API, recupera políticas da loja via RAG e usa o Groq com tool calling para consultar produtos no catálogo antes de responder.",
    highlights: ["Busca vetorial no Chroma com embeddings Hugging Face", "Tool calling para consultar preços, tamanhos, cores e estoque", "Webhook Flask integrado à Evolution API para WhatsApp", "Infraestrutura local com Docker Compose, PostgreSQL e Redis"],
    stack: ["Python", "Flask", "LangChain", "Groq", "RAG", "Chroma", "Docker Compose"],
    repoUrl: "https://github.com/gpego1/chatbot-flask",
    category: "AI Engineering",
    flow: ["WHATSAPP", "RAG", "TOOL CALL", "GROQ"],
  },
  {
    slug: "ai-job-hunter",
    name: "AI Job Hunter",
    tagline: "Coleta e análise de vagas com IA local",
    description: "MVP para buscar vagas Java júnior usando APIs públicas de job boards. A API em FastAPI e PostgreSQL é integrada a um workflow no n8n, que usa Ollama para analisar requisitos de forma estruturada.",
    highlights: ["Coleta de vagas por APIs públicas de job boards", "Análise de requisitos com Ollama, executada pelo n8n", "API FastAPI com persistência em PostgreSQL", "Serviços containerizados com Docker Compose"],
    stack: ["Python", "FastAPI", "PostgreSQL", "n8n", "Ollama", "Docker Compose"],
    repoUrl: "https://github.com/gpego1/ai-job-hunter",
    category: "AI Engineering",
    flow: ["JOB BOARDS", "FASTAPI", "OLLAMA", "n8n"],
  },
  {
    slug: "api-ai-productivity",
    name: "API AI Productivity",
    tagline: "Análise de arquivos com LLMs em AWS serverless",
    description: "API Python serverless executada como imagem de contêiner no AWS Lambda e exposta pelo API Gateway. Usa modelos compatíveis com a API da OpenAI para resumir documentos, responder perguntas sobre arquivos e gerar relatórios estatísticos de CSV.",
    highlights: ["Arquitetura AWS Lambda + API Gateway com imagem no Amazon ECR", "Comandos summarize, ask e report para arquivos locais", "Suporte a TXT, Markdown, PDF e CSV", "Integração com provedores compatíveis com OpenAI, incluindo Ollama"],
    stack: ["Python", "AWS Lambda", "API Gateway", "Amazon ECR", "Docker", "OpenAI-compatible APIs"],
    repoUrl: "https://github.com/gpego1/api-ai-productivity",
    category: "AI Engineering",
    flow: ["API GATEWAY", "LAMBDA", "LLM", "RESPONSE"],
  },
  {
    slug: "spring-event-driven-ecommerce",
    name: "spring-event-driven-ecommerce",
    tagline: "E-commerce orientado a eventos",
    description: "Simulação de e-commerce construída em torno de um produtor Kafka: cada pedido criado é serializado e publicado no tópico order.created, permitindo que serviços de notificação, e-mail e analytics consumam o evento de forma assíncrona e desacoplada.",
    highlights: ["Arquitetura orientada a eventos (Event-Driven) com Apache Kafka", "Serialização de eventos com StringSerializer + JsonSerializer", "Comunicação assíncrona desacoplada entre microsserviços", "Infraestrutura via Docker Compose"],
    stack: ["Java", "Spring Boot", "Spring Kafka", "Apache Kafka", "Docker"],
    repoUrl: "https://github.com/gpego1/spring-event-driven-ecommerce",
    category: "Backend & Cloud",
    flow: ["NEW ORDER", "KAFKA", "CONSUMERS", "SERVICES"],
    integration: { label: "Integração Kafka: publica eventos consumidos pelo pipeline Python com IA", repoUrl: "https://github.com/gpego1/python-json-data-to-spreadsheet-with-pandas-and-ai-LLM" },
  },
  {
    slug: "python-json-data-to-spreadsheet-with-pandas-and-ai-llm",
    name: "JSON to Spreadsheet com Pandas e LLM",
    tagline: "Eventos Kafka transformados em planilhas com apoio de IA",
    description: "Pipeline Python que consome via Kafka os eventos JSON publicados pelo e-commerce Spring, processa os dados com Pandas e usa um LLM para gerar planilhas estruturadas.",
    highlights: ["Consumo de eventos JSON via Apache Kafka", "Transformação e organização de dados com Pandas", "Integração com LLM para enriquecer o processamento", "Geração de planilhas a partir dos dados processados"],
    stack: ["Python", "Apache Kafka", "Pandas", "LLM", "JSON", "Spreadsheets"],
    repoUrl: "https://github.com/gpego1/python-json-data-to-spreadsheet-with-pandas-and-ai-LLM",
    category: "AI Engineering",
    flow: ["SPRING EVENT", "KAFKA", "PYTHON + LLM", "XLSX"],
    integration: { label: "Pipeline de dados com IA: eventos Kafka processados com Pandas e LLM", repoUrl: "https://github.com/gpego1/spring-event-driven-ecommerce" },
  },
];
