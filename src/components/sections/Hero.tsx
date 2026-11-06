import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { AvailabilityPill } from '@/components/common/StatusPill'
import { SocialLinks } from '@/components/common/SocialLinks'

const ease = [0.22, 1, 0.36, 1] as const

/** Portrait as an atmospheric background: visible, but shaded and faded into the page so the copy stays readable. */
function HeroBackground() {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const { photo } = profile

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <picture>
        <source type="image/webp" srcSet={`${photo.webpSmall} 640w, ${photo.webp} 1100w`} sizes="(min-width: 1024px) 58vw, 100vw" />
        <img
          ref={imgRef}
          src={photo.src}
          alt=""
          width={photo.width}
          height={photo.height}
          fetchPriority="high"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={cn(
            'absolute inset-y-0 right-0 h-full w-full object-cover object-[72%_18%] transition-opacity duration-700 sm:w-[80%] sm:object-[64%_14%] lg:w-[64%] lg:object-[center_12%]',
            loaded ? 'opacity-100' : 'opacity-0',
          )}
        />
      </picture>
      {/* Dark shade over the photograph, fading out toward the copy. */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 hidden w-[80%] bg-gradient-to-l from-black/50 via-black/25 to-transparent sm:block lg:w-[64%]"
      />
      {/* Phone: shade the left, where the headline sits, and let the portrait show through on the right. */}
      <div
        aria-hidden
        className="absolute inset-0 sm:hidden"
        style={{
          background:
            'linear-gradient(to right, var(--background) 0%, color-mix(in oklab, var(--background) 70%, transparent) 40%, color-mix(in oklab, var(--background) 18%, transparent) 100%), linear-gradient(to top, var(--background), transparent 20%)',
        }}
      />
      {/* Larger screens: dissolve the photo into the page instead of covering the whole hero. */}
      <div
        aria-hidden
        className="absolute inset-0 hidden sm:block"
        style={{
          background: `
            linear-gradient(to right, var(--background) 0%, var(--background) 32%, color-mix(in oklab, var(--background) 55%, transparent) 52%, transparent 70%),
            linear-gradient(to top, var(--background) 0%, transparent 22%),
            linear-gradient(to bottom, color-mix(in oklab, var(--background) 45%, transparent), transparent 16%)
          `,
        }}
      />
    </div>
  )
}

export function Hero() {
  const [lineOne, lineTwo] = profile.hero.headline
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32 lg:flex lg:min-h-[calc(100svh-4rem)] lg:items-center lg:pt-24 lg:pb-20"
    >
      <HeroBackground />
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_right,black_30%,transparent_62%)]"
      />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex max-w-2xl flex-col items-start lg:max-w-[40rem]"
        >
          <AvailabilityPill className="mb-8" />
          <p className="mb-5 font-mono text-xs font-medium tracking-[0.2em] text-brand uppercase">{profile.label}</p>
          <h1
            id="hero-title"
            className="text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-[4.25rem]"
          >
            <span className="block">{lineOne}</span>
            <span className="block text-muted-foreground">{lineTwo}</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {profile.hero.description}
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg">
              <a href="#projects">
                Explore My Work
                <ArrowDown />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                Let’s Connect
                <ArrowUpRight />
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <SocialLinks className="-ml-2.5" />
            <span className="hidden h-4 w-px bg-border sm:block" aria-hidden />
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" aria-hidden />
              {profile.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
