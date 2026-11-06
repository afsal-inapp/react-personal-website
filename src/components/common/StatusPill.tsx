import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

const dotColor = {
  available: 'bg-emerald-500',
  limited: 'bg-amber-500',
  unavailable: 'bg-zinc-500',
} as const

export function AvailabilityPill({ className }: { className?: string }) {
  const { enabled, status, label } = profile.availability
  if (!enabled) return null
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border bg-card/60 py-1 pr-3 pl-2.5 text-xs text-muted-foreground',
        className,
      )}
    >
      <span className="relative flex size-2" aria-hidden>
        {status === 'available' && (
          <span className={cn('absolute inset-0 rounded-full animate-pulse-dot', dotColor[status])} />
        )}
        <span className={cn('relative size-2 rounded-full', dotColor[status])} />
      </span>
      <span className="sr-only">Status: </span>
      {label}
    </span>
  )
}
