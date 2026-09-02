import React from "react";
import { journeyMilestones } from "@/data/journey";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap, ArrowRight, ShieldCheck, Lightbulb } from "lucide-react";

export function AboutJourney() {
  return (
    <section id="trajetoria" className="py-20 px-5 sm:px-8 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="Journey • About"
        title="Evolução, contexto e mentalidade de construção."
        description="Uma trajetória pautada por aprendizado contínuo, curiosidade técnica e o compromisso de entregar produtos bem acabados."
      />

      {/* Main Philosophy Card */}
      <div className="rounded-3xl border border-zinc-800/80 bg-zinc-950/70 p-6 sm:p-8 md:p-10 mb-12 relative overflow-hidden backdrop-blur-sm shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold block mb-3">
            Manifesto Pessoal
          </span>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight leading-snug">
            “Ainda estou no começo da minha carreira. Mas já não estou no começo da minha construção.”
          </blockquote>

          <p className="mt-5 text-sm sm:text-base text-zinc-300 leading-relaxed">
            Minha paixão está na intersecção entre <strong>design de produto</strong>, <strong>engenharia de software</strong> e <strong>inteligência artificial</strong>. Gosto de entender a dor do usuário, arquitetar os fluxos e transformar ideias em aplicações funcionais que as pessoas gostam de usar no dia a dia.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-zinc-850">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
              <div>
                <p className="text-xs font-bold text-zinc-200">Visão de Produto</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">O código é a ferramenta; resolver a necessidade do usuário é o objetivo principal.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
              <div>
                <p className="text-xs font-bold text-zinc-200">Atenção ao Acabamento</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">Cuidado minucioso com tipografia, contrastes, estados de erro e micro-interações.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <GraduationCap className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
              <div>
                <p className="text-xs font-bold text-zinc-200">Formação ADS</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">Análise e Desenvolvimento de Sistemas, com base estruturada em computação.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {journeyMilestones.map((step, idx) => (
          <div
            key={step.period}
            className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-5 flex flex-col justify-between hover:border-zinc-700/80 hover:bg-zinc-900/30 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-blue-400 font-semibold">
                  {step.period}
                </span>
                <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded-full">
                  0{idx + 1}
                </span>
              </div>

              <h4 className="text-sm font-bold text-zinc-100 group-hover:text-blue-300 transition-colors">
                {step.title}
              </h4>

              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                {step.summary}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-850/80">
              <p className="text-[11px] font-mono text-zinc-300 flex items-center gap-1">
                <ArrowRight className="w-3 h-3 text-blue-400 shrink-0" />
                <span>{step.takeaway}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
