export interface CapabilityGroup {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    highlight?: boolean;
  }[];
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "frontend-product",
    title: "Frontend & Product",
    tagline: "Interfaces, Usabilidade & Experiência",
    description:
      "Criação de interfaces modernas, fluidas e acessíveis, unindo rigor visual a código escalável e foco total no usuário final.",
    iconName: "Layout",
    skills: [
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript" },
      { name: "Tailwind CSS", highlight: true },
      { name: "UI/UX Design" },
      { name: "Design Systems" },
      { name: "Responsive Layouts" },
      { name: "Component Architecture" },
    ],
  },
  {
    id: "fullstack-systems",
    title: "Full Stack & Architecture",
    tagline: "Aplicações de Ponta a Ponta",
    description:
      "Arquitetura de software estruturada, APIs REST seguras, modelagem de banco de dados e fluxos de autenticação completos.",
    iconName: "Layers",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js" },
      { name: "Supabase", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "MongoDB" },
      { name: "Prisma ORM" },
      { name: "RESTful APIs", highlight: true },
      { name: "Auth & Security" },
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    tagline: "Inteligência & Produtividade",
    description:
      "Integração prática de modelos de linguagem, agentes autônomos e pipelines de automação para enriquecer produtos digitais.",
    iconName: "Sparkles",
    skills: [
      { name: "LLM Integrations", highlight: true },
      { name: "n8n Workflows", highlight: true },
      { name: "AI Automation" },
      { name: "Prompt Engineering" },
      { name: "Webhooks & Sync" },
      { name: "RAG & Agents" },
    ],
  },
  {
    id: "data-delivery",
    title: "Data & Delivery",
    tagline: "Infraestrutura & Analytics",
    description:
      "Deploy contínuo, conteinerização, versionamento ágil e análise de dados para embasar decisões de produto.",
    iconName: "Server",
    skills: [
      { name: "Docker", highlight: true },
      { name: "Git & GitHub", highlight: true },
      { name: "Vercel" },
      { name: "Render" },
      { name: "SQL Modeling" },
      { name: "Power BI & Looker" },
    ],
  },
];
