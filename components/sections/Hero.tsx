import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { CurrentlyStatus } from "./CurrentlyStatus";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 px-5 sm:px-8 max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-center">
        {/* Left Column: Editorial Headline & Copy */}
        <div className="flex flex-col items-start">
          {/* Eyebrow / Positioning Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 text-[11px] font-mono uppercase tracking-wider text-zinc-300 mb-6 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-status-pulse" />
            <span className="font-semibold text-blue-400">Full Stack Developer</span>
            <span className="text-zinc-600">•</span>
            <span>Frontend · Product · AI</span>
          </div>

          {/* Big Editorial Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-zinc-100 leading-[1.12]">
            Transformo ideias em{" "}
            <span className="text-gradient-accent">produtos digitais</span> que as
            pessoas realmente querem usar.
          </h1>

          {/* Subheadline */}
          <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
            {siteConfig.subheadline}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              href="#projetos"
              variant="primary"
              size="lg"
              icon={<ArrowDown className="w-4 h-4" />}
            >
              Explorar projetos
            </Button>

            <Button
              href={siteConfig.links.github}
              variant="secondary"
              size="lg"
              icon={<GithubIcon className="w-4 h-4" />}
            >
              GitHub
            </Button>

            <Button
              href={siteConfig.links.linkedin}
              variant="outline"
              size="lg"
              icon={<LinkedinIcon className="w-4 h-4" />}
            >
              LinkedIn
            </Button>
          </div>

          {/* Quick Pillars Microcopy */}
          <div className="mt-10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400 font-mono pt-6 border-t border-zinc-850/80 w-full">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              Arquitetura End-to-End
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              Experiência & UI Refinada
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              Soluções Inteligentes com IA
            </span>
          </div>
        </div>

        {/* Right Column: Editorial Photo Frame Composition */}
        <div className="flex flex-col items-center lg:items-end justify-center">
          <div className="relative group w-full max-w-[320px] sm:max-w-[340px]">
            {/* Ambient accent border glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-blue-500/20 via-blue-600/10 to-transparent blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Photo Card Container */}
            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/80 p-3 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Photo Frame */}
              <div className="relative aspect-[4/4.8] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80">
                <Image
                  src="/me.jpeg"
                  alt="Guilherme Silvestre — Full Stack Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover grayscale contrast-[1.05] brightness-95 hover:grayscale-0 hover:scale-[1.02] transition-all duration-500"
                  priority
                />

                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* Micro caption over photo */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-zinc-950/80 backdrop-blur-md px-3 py-2 rounded-xl border border-zinc-800/80">
                  <div>
                    <p className="text-xs font-semibold text-zinc-100">Guilherme Silvestre</p>
                    <p className="text-[10px] font-mono text-zinc-400">Product & Systems Engineer</p>
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Currently Section Integrated */}
      <div className="mt-14">
        <CurrentlyStatus />
      </div>
    </section>
  );
}
