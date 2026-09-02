import React from "react";
import { ArrowUpRight, Lock, CheckCircle2, Sparkles, Terminal } from "lucide-react";
import { Project } from "@/data/projects";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { GithubIcon } from "./Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 !== 0;

  return (
    <article className="group relative rounded-3xl border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/20 backdrop-blur-sm shadow-xl">
      {/* Background subtle radial glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial-gradient" />

      <div
        className={`relative grid gap-8 lg:gap-12 items-center ${
          isReversed ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]"
        }`}
      >
        {/* TEXT CONTENT */}
        <div className={`flex flex-col ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
          {/* Header & Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <Badge variant={project.isPrivate ? "muted" : "accent"} size="md">
              {project.badge}
            </Badge>
            {project.highlightMetric && (
              <span className="text-xs font-mono text-zinc-400 bg-zinc-900/90 border border-zinc-800 px-2.5 py-0.5 rounded-full">
                {project.highlightMetric}
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            {project.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            {project.tagline}
          </p>

          {/* Problem & Solution Cards */}
          <div className="mt-6 space-y-3">
            <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-3.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                Problema
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-3.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold block mb-1">
                Solução & Produto
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* My Role / Atuação */}
          <div className="mt-4 text-xs sm:text-sm text-zinc-400">
            <span className="font-semibold text-zinc-300">Minha atuação: </span>
            {project.role}
          </div>

          {/* Technologies Stack */}
          <div className="mt-6">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
              Stack & Ferramentas
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-300 transition-colors group-hover:border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.demoUrl && (
              <Button
                href={project.demoUrl}
                variant="primary"
                size="md"
                icon={<ArrowUpRight className="w-4 h-4" />}
                ariaLabel={`Abrir demo do projeto ${project.title}`}
              >
                Abrir aplicação
              </Button>
            )}

            {project.githubUrl && !project.isPrivate && (
              <Button
                href={project.githubUrl}
                variant="secondary"
                size="md"
                icon={<GithubIcon className="w-4 h-4" />}
                ariaLabel={`Ver repositório do projeto ${project.title}`}
              >
                Código / Repo
              </Button>
            )}

            {project.isPrivate && (
              <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3 py-2 rounded-xl">
                <Lock className="w-3.5 h-3.5 text-zinc-400" />
                <span>Case study corporativo sob consulta</span>
              </div>
            )}
          </div>
        </div>

        {/* VISUAL SHOWCASE / MOCKUP CONTAINER */}
        <div
          className={`relative rounded-2xl border border-zinc-800/90 bg-zinc-900/70 p-4 sm:p-5 shadow-2xl overflow-hidden ${
            isReversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {/* Mockup Top Window Bar */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            </div>

            <div className="rounded-md bg-zinc-950/80 border border-zinc-800/80 px-3 py-1 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {project.id === "minervaflow" && "minervaflow.app/workspace"}
              {project.id === "decode" && "decode.game/play"}
              {project.id === "crossops" && "crossops.internal/orchestrator"}
            </div>

            <div className="text-[10px] font-mono text-zinc-400">
              {project.id === "minervaflow" ? "PROD v1.2" : "LIVE"}
            </div>
          </div>

          {/* PROJECT SPECIFIC INTERACTIVE PREVIEW */}
          {project.id === "minervaflow" && (
            <div className="space-y-3.5 text-xs select-none">
              {/* Kanban Mockup Header */}
              <div className="flex items-center justify-between bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-200">Semestre Ativo • Semana 04</div>
                    <div className="text-[10px] text-zinc-400">6 tarefas pendentes • 2 entregas hoje</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                  83% concluído
                </span>
              </div>

              {/* Kanban Columns Grid */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {/* Seg */}
                <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/60 p-2.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-300 pb-1 border-b border-zinc-800/60">
                    <span>Segunda</span>
                    <span className="text-[10px] text-zinc-400 font-mono">2</span>
                  </div>
                  <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-2 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-emerald-400">Entrega</span>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    </div>
                    <p className="text-[11px] font-medium text-zinc-200">Trabalho de Sistemas</p>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-2">
                    <p className="text-[11px] text-zinc-300">Revisão de Arquitetura</p>
                  </div>
                </div>

                {/* Ter */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-2.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-blue-300 pb-1 border-b border-blue-500/20">
                    <span>Terça (Hoje)</span>
                    <span className="text-[10px] text-blue-400 font-mono">3</span>
                  </div>
                  <div className="rounded-lg border border-blue-500/40 bg-zinc-950/90 p-2 space-y-1 shadow-sm">
                    <span className="text-[10px] font-mono text-blue-400 block">Alta Prioridade</span>
                    <p className="text-[11px] font-medium text-zinc-100">Implementar API de Auth</p>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2">
                    <p className="text-[11px] text-zinc-300">Estudo de Casos de Uso</p>
                  </div>
                </div>

                {/* Qua / Qui */}
                <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/60 p-2.5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-300 pb-1 border-b border-zinc-800/60">
                    <span>Quarta</span>
                    <span className="text-[10px] text-zinc-400 font-mono">1</span>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-2 space-y-1">
                    <span className="text-[10px] font-mono text-zinc-400 block">Pesquisa</span>
                    <p className="text-[11px] text-zinc-300">Apresentação Produto</p>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Pill */}
              <div className="flex items-center justify-between text-[11px] text-zinc-400 bg-zinc-950/70 border border-zinc-800/70 rounded-xl px-3 py-2">
                <span className="flex items-center gap-1.5 text-zinc-300 font-mono text-[10px]">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  Supabase Realtime Sync
                </span>
                <span className="text-[10px] text-blue-400 font-medium">Kanban Dinâmico</span>
              </div>
            </div>
          )}

          {project.id === "decode" && (
            <div className="space-y-3.5 text-xs select-none">
              {/* Game Lobby Bar */}
              <div className="flex items-center justify-between bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                    D
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-200">Rodada 03 • Empreendedorismo</div>
                    <div className="text-[10px] text-zinc-400">Tempo restante: 45s</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-md">
                  <span>Placar: 1.450 pts</span>
                </div>
              </div>

              {/* Secret Word Deduction Box */}
              <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-4 text-center space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-semibold block">
                  Palavra Oculta para o Jogador 1
                </span>
                <div className="text-xl sm:text-2xl font-mono tracking-widest font-bold text-zinc-100 bg-zinc-950/80 py-2 px-4 rounded-xl border border-zinc-800 inline-block">
                  P _ V _ T
                </div>
                <p className="text-[11px] text-zinc-400">Dicas da equipe em tempo real:</p>
              </div>

              {/* Clues Stream */}
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-2.5">
                  <span className="text-[10px] font-mono text-zinc-400 block">Dica 01 • Time A</span>
                  <p className="text-[11px] font-medium text-zinc-200 mt-0.5">&ldquo;Mudança de estratégia&rdquo;</p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-2.5">
                  <span className="text-[10px] font-mono text-zinc-400 block">Dica 02 • Time A</span>
                  <p className="text-[11px] font-medium text-zinc-200 mt-0.5">&ldquo;Startup / Modelo Lean&rdquo;</p>
                </div>
              </div>

              {/* Feedback Pill */}
              <div className="flex items-center justify-between text-[11px] text-zinc-400 bg-zinc-950/70 border border-zinc-800/70 rounded-xl px-3 py-2">
                <span className="font-mono text-[10px] text-zinc-300">UX: Feedback em milissegundos</span>
                <span className="text-[10px] text-indigo-400 font-medium">Resposta Correta: PIVOT</span>
              </div>
            </div>
          )}

          {project.id === "crossops" && (
            <div className="space-y-3.5 text-xs select-none">
              {/* Orchestrator Header */}
              <div className="flex items-center justify-between bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="font-semibold text-zinc-200">Pipeline de Integração AI</div>
                    <div className="text-[10px] text-zinc-400">Webhook Trigger → Agent → DB</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                  Active 24/7
                </span>
              </div>

              {/* Node Graph Mockup */}
              <div className="space-y-2 rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 font-mono text-[11px]">
                <div className="flex items-center justify-between text-zinc-300 border-b border-zinc-800/80 pb-2">
                  <span>[01] Ingest Webhook</span>
                  <span className="text-emerald-400">200 OK (14ms)</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300 border-b border-zinc-800/80 pb-2">
                  <span>[02] LLM Classifier & Parse</span>
                  <span className="text-emerald-400">Completed (120ms)</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span>[03] PostgreSQL Upsert</span>
                  <span className="text-emerald-400">Committed</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-zinc-400 bg-zinc-950/70 border border-zinc-800/70 rounded-xl px-3 py-2">
                <span className="font-mono text-[10px] text-zinc-300">Automated Pipeline</span>
                <span className="text-[10px] text-emerald-400 font-medium">Zero Manual Overhead</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
