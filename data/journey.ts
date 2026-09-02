export interface JourneyStep {
  period: string;
  badge: string;
  title: string;
  summary: string;
  takeaway: string;
}

export const journeyMilestones: JourneyStep[] = [
  {
    period: "Fundação",
    badge: "Formação & Base",
    title: "Análise e Desenvolvimento de Sistemas (ADS)",
    summary:
      "Construção da base sólida em lógica, estruturas de dados, orientação a objetos, bancos de dados relacionais e modelagem de software.",
    takeaway: "Domínio dos fundamentos essenciais de computação.",
  },
  {
    period: "Construção",
    badge: "Full Stack Development",
    title: "Do backend à interface do usuário",
    summary:
      "Evolução prática desenvolvendo APIs, autenticação, bancos de dados e interfaces dinâmicas, conectando ponta a ponta cada camada de uma aplicação.",
    takeaway: "Capacidade de criar aplicações completas e funcionais.",
  },
  {
    period: "Refinamento",
    badge: "Product & Frontend",
    title: "Foco em experiência de usuário e produto",
    summary:
      "Aprofundamento em Next.js, ecossistema React, Tailwind CSS, micro-interações, acessibilidade e arquitetura de componentes de alto nível.",
    takeaway: "Transformação de funcionalidades técnicas em produtos agradáveis de usar.",
  },
  {
    period: "Presente & Futuro",
    badge: "Sistemas Inteligentes",
    title: "IA Aplicada, Automações e Escalabilidade",
    summary:
      "Integração de inteligência artificial em produtos reais, orquestração de fluxos automatizados com n8n e exploração de novas interfaces cognitivas.",
    takeaway: "Construindo a próxima geração de produtos digitais.",
  },
];

export interface HowIBuildStep {
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export const howIBuildSteps: HowIBuildStep[] = [
  {
    number: "01",
    title: "Understand",
    headline: "Compreender o problema antes de digitar código",
    description:
      "Mergulho profundo no contexto do usuário, regras de negócio e restrições técnicas. Nenhum produto tem sucesso sem clareza do problema que se propõe a resolver.",
    deliverables: ["Mapeamento de escopo", "Casos de uso principais", "Critérios de sucesso"],
  },
  {
    number: "02",
    title: "Design",
    headline: "Estruturar o fluxo, arquitetura e interface",
    description:
      "Desenho da jornada do usuário, definição dos modelos de dados, contratos de API e componentes de UI consistentes, garantindo harmonia visual e funcional.",
    deliverables: ["Fluxo de navegação (UX)", "Modelagem de dados", "Arquitetura de componentes"],
  },
  {
    number: "03",
    title: "Build",
    headline: "Desenvolver com precisão Full Stack",
    description:
      "Implementação limpa e performática unindo frontend moderno (Next.js/React), backend estruturado, persistência e integrações com IA ou automações.",
    deliverables: ["Código modular e tipado", "Integrações de APIs", "Fidelidade de interface"],
  },
  {
    number: "04",
    title: "Iterate",
    headline: "Testar, observar e evoluir continuamente",
    description:
      "Publicação rápida em ambiente de produção, análise de feedback real, refinamento de usabilidade e evolução constante do produto.",
    deliverables: ["Deploy contínuo", "Refinamento visual", "Otimização de performance"],
  },
];
