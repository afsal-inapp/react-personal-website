import { capabilities } from '@/data/skills'
import { Reveal } from '@/components/common/Reveal'
import { Section, SectionHeading } from '@/components/common/Section'

export function Expertise() {
  return (
    <Section id="expertise" aria-labelledby="expertise-title" className="border-t border-border">
      <SectionHeading
        index="02"
        eyebrow="What I do"
        id="expertise-title"
        title="From the model to the metal."
        description="I work across four connected disciplines — the layers it takes to turn an AI idea into a dependable product."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {capabilities.map((cap, i) => {
          const Icon = cap.icon
          return (
            <Reveal key={cap.id} delay={0.06 * i} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-foreground/15 sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: 'color-mix(in oklab, var(--brand) 14%, transparent)' }}
                />
                <div className="relative flex items-start justify-between">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors group-hover:text-brand">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-mono text-xs text-subtle-foreground">0{i + 1}</span>
                </div>
                <h3 className="relative mt-6 text-xl font-semibold tracking-tight">{cap.title}</h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-muted-foreground">{cap.description}</p>
                <ul className="relative mt-6 flex flex-wrap gap-1.5">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-background/60 px-2 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
