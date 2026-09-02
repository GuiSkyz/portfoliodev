"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, MessageCircle, Copy, Check } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.links.emailRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-24 px-5 sm:px-8 max-w-6xl mx-auto">
      <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 sm:p-12 md:p-16 overflow-hidden backdrop-blur-md shadow-2xl text-center">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-600/10 rounded-full blur-[100px]" />
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[11px] font-mono uppercase tracking-widest text-blue-400 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-status-pulse" />
          Vamos Construir Juntos • Contact
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 max-w-2xl mx-auto leading-tight">
          Tem uma ideia, produto ou desafio técnico em mente?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Estou disponível para novos projetos, posições de engenharia e parcerias para desenvolver produtos digitais modernos e inteligentes.
        </p>

        {/* Email Quick Action Bar */}
        <div className="mt-10 max-w-md mx-auto flex items-center justify-between gap-2 p-2 rounded-2xl border border-zinc-800 bg-zinc-900/90 shadow-inner">
          <div className="flex items-center gap-2.5 px-3 overflow-hidden text-left">
            <Mail className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-xs sm:text-sm font-mono text-zinc-200 truncate">
              {siteConfig.links.emailRaw}
            </span>
          </div>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-zinc-800 hover:bg-zinc-750 text-zinc-200 hover:text-white transition-all cursor-pointer shrink-0 border border-zinc-700/60"
            aria-label="Copiar email para a área de transferência"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>

        {/* Action Buttons Grid */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
          <Button
            href={siteConfig.links.email}
            variant="primary"
            size="lg"
            icon={<Mail className="w-4 h-4" />}
            iconPosition="left"
          >
            Enviar email direto
          </Button>

          <Button
            href={siteConfig.links.linkedin}
            variant="secondary"
            size="lg"
            icon={<LinkedinIcon className="w-4 h-4" />}
            iconPosition="left"
          >
            LinkedIn
          </Button>

          <Button
            href={siteConfig.links.github}
            variant="outline"
            size="lg"
            icon={<GithubIcon className="w-4 h-4" />}
            iconPosition="left"
          >
            GitHub
          </Button>

          <Button
            href={siteConfig.links.whatsapp}
            variant="ghost"
            size="lg"
            icon={<MessageCircle className="w-4 h-4" />}
            iconPosition="left"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
