import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-850/80 bg-zinc-950/60 py-12 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Signature */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono font-bold text-sm text-zinc-100">
            GS
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-200">{siteConfig.name}</p>
            <p className="text-xs text-zinc-400 font-mono mt-0.5">
              Full Stack Developer • Frontend · Product · AI
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Guilherme Silvestre"
            className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Guilherme Silvestre"
            className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-blue-400 hover:border-zinc-700 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.links.email}
            aria-label="Enviar email para Guilherme Silvestre"
            className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de Guilherme Silvestre"
            className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-zinc-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Location */}
        <div className="text-center md:text-right text-xs text-zinc-400 font-mono">
          <p>© {currentYear} Guilherme Silvestre. Todos os direitos reservados.</p>
          <p className="mt-1 text-zinc-500">
            Construído com Next.js 16, React 19 & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
