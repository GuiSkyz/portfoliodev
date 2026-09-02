import React from "react";
import { howIBuildSteps } from "@/data/journey";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Compass, PenTool, Code2, RefreshCw } from "lucide-react";

export function HowIBuild() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5 text-blue-400" />;
      case 1:
        return <PenTool className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 3:
        return <RefreshCw className="w-5 h-5 text-emerald-400" />;
      default:
        return null;
    }
  };

  return (
    <section id="como-construo" className="py-20 px-5 sm:px-8 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="Methodology • How I Build"
        title="Como penso e transformo ideias em software funcional."
        description="Construir bons produtos exige mais do que apenas escrever código. Exige método, visão sistêmica, rigor estético e obsessão por resolver problemas."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {howIBuildSteps.map((step, idx) => (
          <div
            key={step.number}
            className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 flex flex-col justify-between hover:border-zinc-700/80 hover:bg-zinc-900/30 transition-all duration-300"
          >
            {/* Ambient accent hover line */}
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-2xl font-mono font-bold text-zinc-600 group-hover:text-blue-400 transition-colors">
                  {step.number}
                </span>
                <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800">
                  {getIcon(idx)}
                </div>
              </div>

              {/* Title & Headline */}
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-blue-300 transition-colors">
                {step.title}
              </h3>
              <p className="mt-1 text-xs font-mono text-zinc-400">
                {step.headline}
              </p>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>

            {/* Deliverables tags */}
            <div className="mt-6 pt-4 border-t border-zinc-850/80">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2 font-semibold">
                Foco & Entregáveis
              </span>
              <div className="flex flex-wrap gap-1.5">
                {step.deliverables.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-800 px-2 py-0.5 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
