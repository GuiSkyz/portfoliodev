import React from "react";
import { capabilityGroups } from "@/data/capabilities";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Layout, Layers, Sparkles, Server } from "lucide-react";

export function Capabilities() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Layout":
        return <Layout className="w-5 h-5 text-blue-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-emerald-400" />;
      default:
        return null;
    }
  };

  return (
    <section id="capacidades" className="py-20 px-5 sm:px-8 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="Capabilities • Stack"
        title="Domínios técnicos e ferramentas de construção."
        description="Em vez de métricas abstratas de conhecimento, aqui estão as áreas em que atuo e as tecnologias que utilizo diariamente para criar soluções de ponta a ponta."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilityGroups.map((group) => (
          <div
            key={group.id}
            className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-700/80 hover:bg-zinc-900/30 transition-all duration-300 backdrop-blur-sm"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 shrink-0">
                  {getIcon(group.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-blue-300 transition-colors">
                    {group.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    {group.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-6">
                {group.description}
              </p>
            </div>

            {/* Skills Pills */}
            <div className="pt-4 border-t border-zinc-850/85">
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs px-3 py-1 rounded-lg border transition-colors ${
                      skill.highlight
                        ? "bg-zinc-900/90 border-blue-500/30 text-blue-300 font-medium"
                        : "bg-zinc-950/70 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                    }`}
                  >
                    {skill.name}
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
