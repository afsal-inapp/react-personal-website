import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
  'aria-labelledby'?: string
}

export function Section({ id, className, children, ...rest }: SectionProps) {
  return (
    <section id={id} className={cn('relative py-24 sm:py-32', className)} {...rest}>
      <div className="container-page">{children}</div>
    </section>
  )
}

type SectionHeadingProps = {
  eyebrow?: string
  index?: string
  title: ReactNode
  description?: ReactNode
  id?: string
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  id,
  align = 'left',
  className,
  children,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'mb-12 flex flex-col gap-4 sm:mb-16',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {(eyebrow || index) && (
        <p className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-subtle-foreground uppercase">
          {index && <span className="text-product">{index}</span>}
          {index && eyebrow && <span className="h-px w-6 bg-border" aria-hidden />}
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]"
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
      {children}
    </Reveal>
  )
}
