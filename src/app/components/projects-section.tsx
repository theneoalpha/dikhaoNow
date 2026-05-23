import Image from "next/image";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import type { HomePageContent, ProjectCard } from "../types";

interface ProjectsSectionProps {
  projects: ProjectCard[];
  content: Pick<HomePageContent, "projectsEyebrow" | "projectsTitle" | "projectsDescription" | "projectsButtonText">;
}

export function ProjectsSection({ projects, content }: ProjectsSectionProps) {
  if (!projects.length) return null;

  return (
    <Section id="projects" spacing="lg">
      <div className="mb-20 flex flex-col items-end justify-between gap-10 md:flex-row">
        <div className="space-y-6">
          <div className="text-primary text-sm font-black uppercase tracking-[0.2em]">
            {content.projectsEyebrow}
          </div>
          <h2 className="text-4xl font-black leading-[0.9] tracking-tighter sm:text-7xl">
            {content.projectsTitle}
          </h2>
          <p className="max-w-xl text-xl font-medium text-balance text-muted-foreground opacity-80">
            {content.projectsDescription}
          </p>
        </div>
        <Button variant="outline" size="lg" className="rounded-full px-10">
          {content.projectsButtonText}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className={`group relative overflow-hidden rounded-[2.5rem] bg-muted transition-all duration-700 hover:shadow-3xl hover:shadow-primary/10 ${
              index === 1 ? "md:translate-y-10" : ""
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
            </div>

            <div className="absolute inset-0 flex translate-y-4 flex-col justify-end p-10 transition-transform duration-500 group-hover:translate-y-0">
              <div className="space-y-4">
                <span className="inline-block rounded-full border border-white/10 bg-primary/20 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary-foreground backdrop-blur-md">
                  {project.category}
                </span>
                <h3 className="text-3xl font-black leading-tight tracking-tighter text-white italic">
                  {project.title}
                </h3>
                <p className="line-clamp-2 text-sm font-medium leading-relaxed text-white/70 opacity-0 transition-opacity duration-700 delay-100 group-hover:opacity-100">
                  {project.description}
                </p>
                {project.link ? (
                  <div className="pt-4 opacity-0 transition-all duration-500 delay-200 group-hover:opacity-100">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white transition-colors hover:text-primary"
                    >
                      Case Study <span>→</span>
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
