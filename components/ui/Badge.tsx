import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline" | "muted" | "success" | "mono";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "default",
  className = "",
  size = "sm",
}: BadgeProps) {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
  };

  const variantStyles = {
    default: "bg-zinc-900/90 text-zinc-300 border border-zinc-800 shadow-xs",
    accent: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    outline:
      "bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-700 transition-colors",
    muted: "bg-zinc-900/50 text-zinc-400 border border-zinc-800/60",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    mono: "font-mono uppercase tracking-wider bg-zinc-900/80 text-zinc-300 border border-zinc-800/80",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full transition-all duration-200 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
