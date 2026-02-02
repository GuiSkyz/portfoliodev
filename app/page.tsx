import Image from "next/image";

export default function Home() {
  const links = {
    github: "https://github.com/GuiSkyz",
    linkedin:
      "https://www.linkedin.com/in/guilherme-silvestre-fernandes-menezes-93b237254/",
    email: "mailto:guisilvestrefm@gmail.com",
    whatsapp: "https://wa.me/5511943017328",
  };

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 85 },
    { name: "React", level: 75 },
    { name: "Next.js", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "PHP", level: 70 },
    { name: "Java", level: 65 },
    { name: "n8n", level: 70 },
    { name: "Inteligência Artificial", level: 70 },
  ];

  const projects = [
    {
      title: "MinervaFlow",
      badge: "Em desenvolvimento",
      description:
        "Plataforma de organização acadêmica em Kanban semanal (dias da semana), focada em produtividade, clareza e evolução do aluno — com visão futura de IA, gamificação e colaboração.",
      stack: ["Next.js", "TypeScript", "Supabase", "Postgres"],
      demo: "https://minerva-flow-application.vercel.app/",
      repo: links.github,
    },
    {
      title: "Decode",
      badge: "Jogo Interativo",
      description:
        "Jogo em equipe sobre empreendedorismo: um participante adivinha e o time dá dicas para descobrir palavras. Vence quem acertar mais — formato descontraído para estimular estudo e testar conhecimentos.",
      stack: ["Web App", "UI/UX", "Gamificação"],
      demo: "https://decode-inky.vercel.app/",
      repo: links.github,
    },
  ];

  // Tokens curtos, sem nomes longos tipo "function"
  const tokens = [
    "</>","<div/>", "{}","()","[]", "=>", "===", "&&","||","var","let","const","async","await","null",
    "true","false",";","::","#","return","if","else","for","while","+","-","*","/","%","<>","<=",">=", "++", "--",
    "import","from","export","class","new","this","try", "catch", "finally","throw","switch","case","break","continue","...",
  ];

  // Quantidade de tokens simultâneos na tela (mais = mais “chuva”)
  const TOKEN_COUNT = 90;

  // “Pseudo-random” determinístico (estável no SSR)
  const prand = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  // Configuração dos tokens “soltos”
  const rainItems = Array.from({ length: TOKEN_COUNT }, (_, i) => {
    const r1 = prand(i * 11.7);
    const r2 = prand(i * 23.3);
    const r3 = prand(i * 37.9);
    const r4 = prand(i * 51.1);
    const r5 = prand(i * 71.7);

    return {
      id: i,
      text: tokens[Math.floor(r1 * tokens.length)],
      left: `${r2 * 100}%`, // posição horizontal
      size: 12 + Math.floor(r3 * 13), // 12..25px
      duration: 8 + r4 * 12, // 8..20s  
      delay: -(r5 * 20), // delay negativo pra já nascer “rodando”
      opacity: 0.05 + (r3 * 0.15), // bem sutil
      blur: r1 > 0.85 ? 0.6 : 0.2, // alguns levemente mais suaves
    };
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      {/* Fundo aurora (preto ↔ roxo) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/10 blur-3xl animate-[float2_10s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950 to-zinc-950" />
      </div>

      {/* Chuva de tokens SOLTA */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true" role="presentation" >
        {/* Fade topo/baixo (dá profundidade e não polui leitura) */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />

        {rainItems.map((it) => (
          <span
            aria-hidden="true"
            key={it.id}
            className="code-rain-float"
            style={{
              left: it.left,
              fontSize: `${it.size}px`,
              opacity: it.opacity,
              animationDuration: `${it.duration}s`,
              animationDelay: `${it.delay}s`,
              filter: `blur(${it.blur}px)`,
            }}
          >
            {it.text}
          </span>
        ))}
      </div>

      {/* Conteúdo acima do fundo */}
      <div className="relative">
        <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/70 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
            <a href="#" className="font-semibold tracking-tight">
              Guilherme Silvestre
            </a>

            <nav className="hidden gap-5 text-sm text-zinc-300 sm:flex">
              <a className="hover:text-white" href="#projetos">
                Projetos
              </a>
              <a className="hover:text-white" href="#stacks">
                Stacks
              </a>
              <a className="hover:text-white" href="#sobre">
                Sobre
              </a>
              <a className="hover:text-white" href="#contato">
                Contato
              </a>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section className="mx-auto max-w-5xl px-5 pt-14 pb-10">
          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/30 p-8 shadow-sm backdrop-blur">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm text-zinc-300/80">
                  Portfólio • Fullstack Dev
                </p>

                <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight">
                  Eu crio sistemas e experiências web com foco em utilidade,
                  clareza e evolução constante.
                </h1>

                <p className="mt-4 text-zinc-200/90">
                  Sou extrovertido, criativo e resiliente — curto academia,
                  desafios e transformar ideias em produto. Tenho sede em
                  aprender e crescer, e meu objetivo é me tornar referência em
                  tecnologia ajudando pessoas através de sistemas que resolvem
                  problemas de verdade. Busco sempre inovar e estou em busca de
                  uma oportunidade onde eu consiga agregar junto à equipe.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="group relative inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-zinc-950"
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-95 transition group-hover:opacity-100" />
                    <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-30 blur transition group-hover:opacity-45" />
                    <span className="relative">Falar no LinkedIn</span>
                  </a>

                  <a
                    className="rounded-xl border border-zinc-700/80 bg-zinc-950/30 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900/40"
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    className="rounded-xl border border-zinc-700/80 bg-zinc-950/30 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900/40"
                    href={links.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>

                  <a
                    className="rounded-xl border border-zinc-700/80 bg-zinc-950/30 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900/40"
                    href={links.email}
                  >
                    Email
                  </a>

                  <a
                    className="rounded-xl border border-zinc-700/80 bg-zinc-950/30 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900/40"
                    href="#projetos"
                  >
                    Ver projetos
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 text-xs text-zinc-300/70">
                  {["Next.js", "React", "Node.js", "MongoDB", "MySQL", "n8n", "IA"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full border border-zinc-800/70 bg-zinc-950/20 px-3 py-1"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="flex shrink-0 justify-start md:justify-end">
                <div className="relative h-28 w-28 md:h-36 md:w-36">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-500/40 to-fuchsia-500/30 blur" />
                  <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/40">
                    <Image
                      src="/me.jpeg"
                      alt="Foto do Guilherme"
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="mx-auto max-w-5xl px-5 py-10">
          <h2 className="text-2xl font-semibold tracking-tight">Projetos</h2>
          <p className="mt-2 text-zinc-300">
            Dois projetos que representam meu estilo: produto, execução e aprendizado rápido.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-6 hover:bg-zinc-900/30 backdrop-blur"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">
                    {p.badge}
                  </span>
                </div>

                <p className="mt-3 text-sm text-zinc-300">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  <a
                    className="group relative inline-flex items-center justify-center rounded-xl px-3 py-2 font-semibold text-zinc-950"
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-90 transition group-hover:opacity-100" />
                    <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-20 blur transition group-hover:opacity-35" />
                    <span className="relative">Abrir demo</span>
                  </a>

                  <a
                    className="rounded-xl border border-zinc-700/80 bg-zinc-950/30 px-3 py-2 font-medium text-white hover:bg-zinc-900/40"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* STACKS */}
        <section id="stacks" className="mx-auto max-w-5xl px-5 py-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Stacks e domínio
          </h2>
          <p className="mt-2 text-zinc-300">
            Autoavaliação visual baseada no que eu uso/pratico com mais frequência.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-5 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-zinc-400">{skill.level}%</span>
                </div>

                <div className="mt-3 h-2 w-full rounded-full bg-zinc-800">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-purple-300 to-fuchsia-300 transition-all"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="mt-3 text-xs text-zinc-400">
                  {skill.level >= 85
                    ? "Alta confiança e uso frequente."
                    : skill.level >= 70
                    ? "Boa base e aplicação prática."
                    : "Base sólida em evolução contínua."}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="mx-auto max-w-5xl px-5 py-10">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold tracking-tight">Sobre mim</h2>

            <p className="mt-3 text-zinc-300">
              Eu curto construir coisa de verdade: sistemas que ajudam pessoas e deixam o dia a dia mais simples.
              Sou extrovertido, gosto de trabalhar em equipe, tenho criatividade pra pensar soluções e resiliência
              pra executar até o fim.
            </p>

            <p className="mt-3 text-zinc-300">
              Busco sempre inovar e aprender rápido. Meu objetivo é crescer na área, me tornar referência em
              tecnologia e agregar muito junto a um time que valorize evolução, colaboração e produto bem feito.
            </p>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="mx-auto max-w-5xl px-5 pt-10 pb-16">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold tracking-tight">Contato</h2>
            <p className="mt-2 text-zinc-300">
              Se você tem uma oportunidade e quer alguém com energia, vontade e execução, bora conversar.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="group relative inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-zinc-950"
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-95 transition group-hover:opacity-100" />
                <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-25 blur transition group-hover:opacity-40" />
                <span className="relative">LinkedIn</span>
              </a>

              <a
                className="rounded-xl border border-zinc-700/80 bg-zinc-950/30 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900/40"
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>

              <a
                className="rounded-xl border border-zinc-700/80 bg-zinc-950/30 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900/40"
                href={links.email}
              >
                Email
              </a>

              <a
                className="rounded-xl border border-zinc-700/80 bg-zinc-950/30 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900/40"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <p className="mt-8 text-xs text-zinc-500">
              © {new Date().getFullYear()} Guilherme Silvestre • Next.js + Tailwind
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
