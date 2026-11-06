import { experience } from '@/data/experience'
import { Reveal } from '@/components/common/Reveal'
import { Section, SectionHeading } from '@/components/common/Section'

export function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-title" className="border-t border-border">
      <SectionHeading
        index="05"
        eyebrow="Experience"
        id="experience-title"
        title="Where I’ve been building."
      />

      <ol className="relative">
        {experience.map((job, i) => (
          <li key={job.company} className="relative">
            <Reveal delay={0.04 * i}>
              <div className="grid gap-3 border-t border-border py-8 sm:grid-cols-[14rem_1fr] sm:gap-10 sm:py-10">
                <div className="flex flex-row items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                  <p className="font-mono text-xs tracking-wide text-subtle-foreground">
                    <time>{job.start}</time> — <time>{job.end}</time>
                  </p>
                  {job.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-brand-soft px-2 py-0.5 text-[11px] font-medium text-brand">
                      <span className="size-1.5 rounded-full bg-brand" aria-hidden />
                      Current
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{job.role}</h3>
                  <p className="mt-1 text-[15px] text-muted-foreground">{job.company}</p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-pretty text-foreground/85">{job.summary}</p>
                  {job.highlights.length > 0 && (
                    <ul className="mt-4 flex max-w-2xl flex-col gap-2">
                      {job.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                          <span className="mt-[0.7em] h-px w-3 shrink-0 bg-subtle-foreground" aria-hidden />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                    {job.tags.map((t) => (
                      <li key={t} className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
