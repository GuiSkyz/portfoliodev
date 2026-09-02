export interface Project {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
  featured: boolean;
  highlightMetric?: string;
  accentColor?: string;
}

export const projects: Project[] = [
  {
    id: "minervaflow",
    title: "MinervaFlow",
    tagline: "Gestão inteligente de rotina acadêmica em Kanban semanal",
    badge: "Featured Product",
    problem:
      "Estudantes enfrentam sobrecarga cognitiva e perdem prazos ao usar ferramentas genéricas que não refletem a dinâmica real da semana letiva.",
    solution:
      "Plataforma intuitiva com Kanban distribuído por dias da semana, organização de prioridades, controle de entregas e arquitetura escalável desenhada para futura automação por IA e gamificação.",
    role: "Concepção do produto, design de interface e desenvolvimento Full Stack (Frontend com React/Next.js, modelagem de dados e autenticação com Supabase/Postgres).",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "UI/UX Design",
    ],
    demoUrl: "https://minerva-flow-application.vercel.app/",
    githubUrl: "https://github.com/GuiSkyz",
    featured: true,
    highlightMetric: "Kanban Semanal Ativo",
    accentColor: "blue",
  },
  {
    id: "decode",
    title: "Decode",
    tagline: "Interactive Social Game & Learning Experience",
    badge: "Interactive Game",
    problem:
      "Conceitos de empreendedorismo e negócios costumam ser transmitidos de forma passiva, gerando baixo engajamento e retenção de aprendizado em dinâmicas de grupo.",
    solution:
      "Web game colaborativo de dedução de termos: um jogador descobre a palavra secreta a partir das pistas fornecidas pelo time sob regras ágeis, criando um ambiente competitivo e divertido de fixação de conhecimento.",
    role: "Arquitetura da dinâmica de jogo, lógica de pontuação, experiência do usuário (UX) e desenvolvimento de interface com feedback visual imediato.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Gamificação",
      "State Management",
    ],
    demoUrl: "https://decode-inky.vercel.app/",
    githubUrl: "https://github.com/GuiSkyz",
    featured: true,
    highlightMetric: "Experiência Gamificada",
    accentColor: "indigo",
  },
  {
    id: "crossops",
    title: "CrossOps Orchestration",
    tagline: "Intelligent Workflows & Automated Integrations",
    badge: "Private Case Study",
    problem:
      "Processos operacionais repetitivos entre diferentes plataformas geravam retrabalho, perda de dados e lentidão no atendimento a demandas internas.",
    solution:
      "Pipeline de automação e orquestração conectando APIs, agentes de IA para triagem de dados e webhooks resilientes com monitoramento de execução em tempo real.",
    role: "Desenho da arquitetura de integração, desenvolvimento de nós de automação e integração de modelos de linguagem para processamento de contexto.",
    technologies: [
      "Node.js",
      "n8n",
      "LLM Integration",
      "REST APIs",
      "Docker",
      "PostgreSQL",
    ],
    isPrivate: true,
    featured: false,
    highlightMetric: "Automação Operacional",
    accentColor: "emerald",
  },
];
