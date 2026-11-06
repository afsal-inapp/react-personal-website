import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail, MapPin } from 'lucide-react'
import { profile, mailto } from '@/data/profile'
import { Button } from '@/components/ui/button'
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons'
import { Reveal } from '@/components/common/Reveal'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = mailto()
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-border py-28 sm:py-40">
      <div
        aria-hidden
        className="absolute bottom-[-30%] left-1/2 -z-10 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full opacity-[calc(var(--glow-strength)*0.6)] blur-3xl"
        style={{ background: 'radial-gradient(closest-side, color-mix(in oklab, var(--brand) 22%, transparent), transparent)' }}
      />
      <div className="container-page flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <p className="font-mono text-xs tracking-[0.18em] text-subtle-foreground uppercase">
            <span className="text-brand">08</span> <span className="mx-2">—</span> Contact
          </p>
          <h2
            id="contact-title"
            className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-6xl"
          >
            {profile.contact.heading}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {profile.contact.description}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={mailto('Hello Afsal')}>
              <Mail />
              Email Me
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
              LinkedIn
              <ArrowUpRight className="opacity-60" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              GitHub
              <ArrowUpRight className="opacity-60" />
            </a>
          </Button>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-col items-center gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-5">
          <button
            type="button"
            onClick={copyEmail}
            className="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[13px] transition-colors hover:bg-accent hover:text-foreground"
            aria-label={`Copy email address ${profile.email}`}
          >
            {profile.email}
            {copied ? <Check className="size-3.5 text-emerald-500" /> : <Copy className="size-3.5 opacity-50 group-hover:opacity-100" />}
          </button>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4" aria-hidden />
            {profile.location}
          </span>
          <span role="status" aria-live="polite" className="sr-only">
            {copied ? 'Email address copied to clipboard' : ''}
          </span>
        </Reveal>
      </div>
    </section>
  )
}
