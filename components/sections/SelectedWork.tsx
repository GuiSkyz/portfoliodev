import React from "react";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function SelectedWork() {
  return (
    <section id="projetos" className="py-20 px-5 sm:px-8 max-w-6xl mx-auto">
      <SectionHeader
        eyebrow="Selected Work • Cases"
        title="Projetos construídos para resolver problemas reais."
        description="Aplicações de ponta a ponta, jogos colaborativos e arquiteturas de automação desenvolvidas com foco em produto, usabilidade e estabilidade técnica."
      />

      <div className="space-y-12 sm:space-y-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
