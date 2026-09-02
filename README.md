# Guilherme Silvestre — Portfolio v2
> **Full Stack Developer • Frontend · Product · AI**  
> *"Transformo ideias em produtos que as pessoas realmente querem usar."*

---

## 🎯 Sobre o Projeto

Este repositório contém o código-fonte do portfólio profissional de **Guilherme Silvestre**, desenvolvido com foco em demonstrar capacidade técnica de engenharia ponta a ponta (Full Stack), alto rigor visual e usabilidade (Frontend & Product) e aplicação prática de Inteligência Artificial e automações.

O design adota uma estética editorial, minimalista e tecnológica inspirada em interfaces modernas de SaaS (Linear, Vercel, Raycast), priorizando tipografia nítida, contrastes precisos, micro-interações fluidas e total responsividade.

---

## 🚀 Principais Projetos em Destaque

- **[MinervaFlow](https://minerva-flow-application.vercel.app/)**: Plataforma de organização e produtividade acadêmica em Kanban semanal (dias da semana), concebida para clareza de entregas e estruturada para futuras integrações com IA.
- **[Decode](https://decode-inky.vercel.app/)**: Web game colaborativo e experiência gamificada de dedução de palavras em equipe, voltado para aprendizado ágil de conceitos de negócios e empreendedorismo.
- **CrossOps & Case Studies Privados**: Arquiteturas de orquestração de fluxos, webhooks e agentes de IA para automação de processos corporativos.

---

## 🛠️ Stack Tecnológica & Arquitetura

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) — Server Components por padrão para máxima performance e SEO.
- **Biblioteca UI**: [React 19](https://react.dev/) com suporte a [React Compiler](https://react.dev/learn/react-compiler).
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/) — Tipagem estrita de dados e contratos de componentes.
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) — Design tokens customizados, tema dark mode nativo (`#09090b`) e utilities modernos.
- **Tipografia**: [`Geist Sans` & `Geist Mono`](https://vercel.com/font) via `next/font`.
- **Ícones**: [Lucide React](https://lucide.dev/) — Ícones SVG limpos e acessíveis.

---

## 📂 Estrutura de Diretórios

```bash
portfoliodev/
├── app/
│   ├── globals.css          # Design tokens, paleta dark mode e utilitários de animação
│   ├── layout.tsx           # Layout raiz, SEO metadata, OpenGraph e fontes Geist
│   └── page.tsx             # Composição principal das seções (Server Component)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navegação sticky com blur e menu responsivo
│   │   └── Footer.tsx       # Encerramento minimalista com links e copyright
│   ├── sections/
│   │   ├── Hero.tsx         # Headline editorial, foto em moldura e CTAs principais
│   │   ├── CurrentlyStatus.tsx # Painel de momento atual ("Currently building...")
│   │   ├── SelectedWork.tsx # Showcase editorial com alternância de layouts
│   │   ├── HowIBuild.tsx    # 4 fases do método de construção (Understand → Design → Build → Iterate)
│   │   ├── Capabilities.tsx # Habilidades agrupadas por domínios técnicos
│   │   ├── AboutJourney.tsx # Trajetória profissional, mentalidade e formação ADS
│   │   └── Contact.tsx      # Chamada para ação com cópia rápida de e-mail
│   └── ui/
│       ├── Badge.tsx        # Tags e pills customizadas
│       ├── Button.tsx       # Botões com micro-interações e variantes de estilo
│       ├── ProjectCard.tsx  # Card de case study com preview interativo
│       └── SectionHeader.tsx # Cabeçalhos de seção padronizados
├── data/
│   ├── siteConfig.ts        # Dados globais do perfil e links de contato
│   ├── projects.ts          # Dados estruturados dos projetos e cases
│   ├── capabilities.ts      # Dados das stacks por área de atuação
│   └── journey.ts           # Marcos da trajetória e passos da metodologia
└── public/
    ├── me.jpeg              # Foto de perfil editorial
    ├── og.png               # Imagem OpenGraph para compartilhamento social
    └── icon.png             # Favicon e ícone do app
```

---

## 💻 Como Executar Localmente

### Pré-requisitos
- Node.js 18.18+ ou 20+
- npm, yarn ou pnpm

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/GuiSkyz/portfoliodev.git
   cd portfoliodev
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🔍 Scripts Disponíveis

- `npm run dev`: Inicia o servidor local de desenvolvimento.
- `npm run build`: Executa o build de produção e otimização de páginas estáticas.
- `npm run start`: Executa o build gerado em modo produção.
- `npm run lint`: Executa a verificação estática do ESLint.
- `npx tsc --noEmit`: Valida a tipagem estrita do TypeScript sem emitir arquivos.

---

## 🌐 Deploy

Este projeto está configurado para deploy contínuo na [Vercel](https://vercel.com) com otimização automática de imagens e assets estáticos via CDN global.

---

## 📬 Contato & Redes

- **GitHub**: [github.com/GuiSkyz](https://github.com/GuiSkyz)
- **LinkedIn**: [linkedin.com/in/guilherme-silvestre-fernandes-menezes-93b237254](https://www.linkedin.com/in/guilherme-silvestre-fernandes-menezes-93b237254/)
- **Email**: `guisilvestrefm@gmail.com`
- **WhatsApp**: [Conversar no WhatsApp](https://wa.me/5511943017328)

---

Desenvolvido por **Guilherme Silvestre** © 2026.
