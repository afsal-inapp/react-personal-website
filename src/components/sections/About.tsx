import { profile } from '@/data/profile'
import { Reveal } from '@/components/common/Reveal'
import { Section, SectionHeading } from '@/components/common/Section'

export function About() {
  const { about, intro } = profile
  return (
    <Section id="about" aria-labelledby="about-title">
      <SectionHeading index="01" eyebrow="About" id="about-title" title={about.heading} />

      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="flex flex-col gap-6">
          <Reveal>
            <p className="text-xl leading-relaxed font-medium tracking-tight text-pretty text-foreground sm:text-2xl sm:leading-relaxed">
              {intro[0]}
            </p>
          </Reveal>
          {[intro[1], ...about.paragraphs].map((p, i) => (
            <Reveal key={i} delay={0.05 * (i + 1)}>
              <p className="leading-relaxed text-pretty text-muted-foreground sm:text-[17px]">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <blockquote className="mt-4 border-l-2 border-brand pl-5 text-lg font-medium tracking-tight text-foreground">
              {about.highlight}
            </blockquote>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
              <p className="font-mono text-[11px] tracking-[0.16em] text-subtle-foreground uppercase">
                Engineering lifecycle
              </p>
              <span className="font-mono text-[11px] text-subtle-foreground">end-to-end</span>
            </div>
            <ol className="relative">
              {about.lifecycle.map((step, i) => (
                <li
                  key={step.title}
                  className="group flex items-start gap-4 border-b border-border px-5 py-4 transition-colors last:border-0 hover:bg-accent/50"
                >
                  <span className="mt-0.5 font-mono text-xs text-subtle-foreground tabular-nums group-hover:text-brand">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-medium tracking-tight">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
