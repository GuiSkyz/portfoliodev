import React from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      <div
        className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-[11px] font-mono uppercase tracking-widest text-blue-400 mb-3"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-status-pulse" />
        {eyebrow}
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
