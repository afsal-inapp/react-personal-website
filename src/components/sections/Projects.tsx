import { ArrowUpRight, Check } from 'lucide-react'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/common/Reveal'
import { Section, SectionHeading } from '@/components/common/Section'
import { ProjectVisual } from '@/components/projects/ProjectVisual'

export function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-title" className="border-t border-border">
      <SectionHeading
        index="04"
        eyebrow="Selected projects"
        id="projects-title"
        title="Systems I’ve engineered."
        description="A selection of platforms I’ve designed and built — spanning AI agents, recommendation engines, real-time infrastructure, and enterprise software."
      />

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.id}>
            <article
              aria-labelledby={`${project.id}-title`}
              className="group grid gap-8 rounded-3xl border border-border bg-card p-4 transition-colors hover:border-foreground/15 sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8"
            >
              <div className={cn(i % 2 === 1 && 'lg:order-2')}>
                <ProjectVisual kind={project.visual} title={project.title} />
              </div>

              <div className="flex flex-col px-1 pb-2 sm:px-0 lg:py-2">
                <div className="flex items-center gap-3 font-mono text-xs text-subtle-foreground">
                  <span className="text-brand">{project.index}</span>
                  <span className="h-px w-6 bg-border" aria-hidden />
                  <span className="tracking-[0.14em] uppercase">{project.category}</span>
                </div>
                <h3 id={`${project.id}-title`} className="mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-[1.75rem]">
                  {project.title}
                </h3>
                <p className="mt-3 leading-relaxed text-pretty text-muted-foreground">{project.description}</p>

                <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {project.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
                    {project.technologies.map((t) => (
                      <li key={t}>
                        <Badge variant="outline" className="font-mono text-[11px]">
                          {t}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                  {project.links && project.links.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-4">
                      {project.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline"
                        >
                          {l.label}
                          <ArrowUpRight className="size-4" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
