import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Sparkles, MapPin, Layers, Terminal } from "lucide-react";

export function CurrentlyStatus() {
  return (
    <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/60">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-semibold">
            Momento Atual • Currently
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
          <MapPin className="w-3.5 h-3.5 text-zinc-500" />
          <span>{siteConfig.currently.location}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
        {siteConfig.currently.building.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-2.5 p-3 rounded-xl border border-zinc-850 bg-zinc-950/60 text-xs text-zinc-300"
          >
            <div className="mt-0.5 shrink-0 text-blue-400">
              {idx === 0 && <Layers className="w-3.5 h-3.5" />}
              {idx === 1 && <Sparkles className="w-3.5 h-3.5" />}
              {idx === 2 && <Terminal className="w-3.5 h-3.5" />}
            </div>
            <span className="leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
