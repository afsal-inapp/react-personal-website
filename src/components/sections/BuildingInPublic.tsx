import { ArrowUpRight, BookOpen, Hammer, Share2 } from 'lucide-react'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/button'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons'
import { Reveal } from '@/components/common/Reveal'

const themeIcons = [BookOpen, Hammer, Share2]

export function BuildingInPublic() {
  const { buildingInPublic: content, social } = profile
  return (
    <section id="building" aria-labelledby="building-title" className="relative border-t border-border py-24 sm:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_100%_0%,black,transparent)]"
          />
          <div
            aria-hidden
            className="absolute -top-40 -right-32 size-[28rem] rounded-full opacity-[var(--glow-strength)] blur-3xl"
            style={{ background: 'radial-gradient(closest-side, color-mix(in oklab, var(--brand) 18%, transparent), transparent)' }}
          />

          <div className="relative grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal className="flex flex-col items-start">
              <p className="font-mono text-xs tracking-[0.18em] text-subtle-foreground uppercase">
                <span className="text-brand">07</span> <span className="mx-2">—</span> Building in public
              </p>
              <h2
                id="building-title"
                className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl"
              >
                {content.heading}
              </h2>
              <div className="mt-6 flex max-w-md flex-col gap-3 text-muted-foreground sm:text-lg">
                {content.paragraphs.map((p) => (
                  <p key={p} className="leading-relaxed text-pretty">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <a href={social.github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                    GitHub
                    <ArrowUpRight className="opacity-60" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                    LinkedIn
                    <ArrowUpRight className="opacity-60" />
                  </a>
                </Button>
              </div>
            </Reveal>

            <ol className="flex flex-col gap-3 self-end">
              {content.themes.map((t, i) => {
                const Icon = themeIcons[i % themeIcons.length]
                return (
                  <li key={t.title}>
                    <Reveal
                      delay={0.08 * i}
                      className="group flex gap-5 rounded-2xl border border-border bg-background/70 p-5 transition-colors hover:border-foreground/15 sm:p-6"
                    >
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors group-hover:text-brand">
                        <Icon className="size-[18px]" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight">{t.title}</h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{t.text}</p>
                      </div>
                    </Reveal>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
