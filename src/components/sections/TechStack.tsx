import { techStack } from '@/data/skills'
import { Reveal } from '@/components/common/Reveal'
import { Section, SectionHeading } from '@/components/common/Section'

export function TechStack() {
  return (
    <Section id="stack" aria-labelledby="stack-title" className="border-t border-border">
      <SectionHeading
        index="06"
        eyebrow="Technical stack"
        id="stack-title"
        title="Tools I reach for."
        description="Chosen for the problem, not the hype. This is the stack I use most often to build and ship."
      />

      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {techStack.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.id}
                className="grid gap-4 border-b border-border p-5 last:border-0 sm:grid-cols-[13rem_1fr] sm:items-center sm:gap-8 sm:px-7 sm:py-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <h3 className="font-medium tracking-tight">{cat.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-[13px] text-foreground/85 transition-colors hover:border-foreground/20 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Reveal>
    </Section>
  )
}
