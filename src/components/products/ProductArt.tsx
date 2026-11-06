import { useId } from 'react'
import { Ellipsis, PhoneIncoming, Play } from 'lucide-react'
import type { ProductVisualKind } from '@/data/products'
import { cn } from '@/lib/utils'

const bars = [6, 14, 22, 12, 30, 18, 36, 24, 40, 20, 32, 14, 26, 10, 18, 8, 22, 12, 6]

function VoiceArt() {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-center gap-2 rounded-full border border-product/25 bg-background/80 px-3 py-1.5 text-[11px] text-foreground/90 shadow-lg backdrop-blur">
        <PhoneIncoming className="size-3.5 text-product" aria-hidden />
        Incoming call
        <span className="font-mono text-subtle-foreground">00:42</span>
      </div>
      <div className="flex h-12 items-center gap-[3px]">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-[3px] rounded-full bg-product"
            style={{ height: h, opacity: 0.35 + (h / 40) * 0.65 }}
          />
        ))}
      </div>
    </div>
  )
}

function ReelArt() {
  return (
    <div className="flex items-end gap-3">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            'relative flex aspect-[9/16] w-14 flex-col justify-end overflow-hidden rounded-lg border border-border bg-background p-1.5 shadow-lg sm:w-16',
            i === 1 && 'mb-4 w-16 border-product/40 sm:w-20',
          )}
          style={{
            background:
              i === 1
                ? 'linear-gradient(180deg, color-mix(in oklab, var(--product) 30%, transparent), var(--background))'
                : undefined,
          }}
        >
          {i === 1 && (
            <span className="absolute top-1/2 left-1/2 inline-flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-product text-product-foreground">
              <Play className="size-3 fill-current" aria-hidden />
            </span>
          )}
          <span className="h-1 w-3/4 rounded-full bg-foreground/30" />
          <span className="mt-1 h-1 w-1/2 rounded-full bg-foreground/15" />
        </div>
      ))}
    </div>
  )
}

function FinanceArt() {
  const gradientId = useId()
  return (
    <div className="w-48 rounded-xl border border-border bg-background/90 p-3 shadow-lg sm:w-56">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] text-subtle-foreground uppercase">This month</span>
        <Ellipsis className="size-3.5 text-subtle-foreground" aria-hidden />
      </div>
      <svg viewBox="0 0 200 60" className="mt-2 h-14 w-full" aria-hidden>
        <defs>
          <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--product)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--product)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 48 C 25 44, 35 30, 60 34 S 100 18, 125 24 S 170 8, 200 12 L200 60 L0 60 Z" fill={`url(#${gradientId})`} />
        <path d="M0 48 C 25 44, 35 30, 60 34 S 100 18, 125 24 S 170 8, 200 12" fill="none" stroke="var(--product)" strokeWidth="2" />
      </svg>
      <div className="mt-2 flex gap-1">
        {[46, 26, 16, 12].map((w, i) => (
          <span key={i} className="h-1.5 rounded-full bg-product" style={{ width: `${w}%`, opacity: 1 - i * 0.22 }} />
        ))}
      </div>
    </div>
  )
}

const art: Record<ProductVisualKind, () => React.JSX.Element> = {
  voice: VoiceArt,
  reel: ReelArt,
  finance: FinanceArt,
}

export function ProductArt({
  kind,
  className,
  artClassName,
}: {
  kind: ProductVisualKind
  className?: string
  artClassName?: string
}) {
  const Art = art[kind]
  return (
    <div
      className={cn(
        'bg-grid relative flex items-center justify-center overflow-hidden rounded-xl border border-border bg-background',
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(60% 70% at 50% 40%, color-mix(in oklab, var(--product) 16%, transparent), transparent)' }}
      />
      <div className={cn('relative', artClassName)}>
        <Art />
      </div>
    </div>
  )
}
