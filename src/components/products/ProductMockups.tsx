import type { ReactNode } from 'react'
import {
  ArrowRightLeft,
  BookOpen,
  Captions,
  Mic,
  Music2,
  PhoneCall,
  Send,
  Sparkles,
  Type,
  Video,
} from 'lucide-react'
import type { ProductVisualKind } from '@/data/products'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/common/Reveal'

function MockWindow({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <figure className={cn('overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/15', className)}>
      <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
        </div>
        <figcaption className="truncate font-mono text-[11px] text-subtle-foreground">{title}</figcaption>
        <span className="ml-auto rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-subtle-foreground uppercase">
          Concept
        </span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </figure>
  )
}

function Bubble({ who, label, children }: { who: 'agent' | 'caller'; label?: string; children: ReactNode }) {
  return (
    <div className={cn('flex', who === 'caller' && 'justify-end')}>
      <div
        className={cn(
          'max-w-[85%] rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed',
          who === 'agent' ? 'rounded-tl-sm bg-product-soft text-foreground' : 'rounded-tr-sm bg-muted text-foreground/90',
        )}
      >
        <p className="mb-0.5 font-mono text-[10px] text-subtle-foreground uppercase">{label ?? (who === 'agent' ? 'AI agent' : 'Caller')}</p>
        {children}
      </div>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border py-2 text-[13px] last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="truncate font-medium">{value}</span>
    </div>
  )
}

function VoiceMockups() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
      <MockWindow title="call-console / live">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-product-soft text-product">
              <PhoneCall className="size-4" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-medium">Incoming call</p>
              <p className="font-mono text-[11px] text-subtle-foreground">Sample conversation</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-product/30 px-2.5 py-1 text-[11px] text-product">
            <Mic className="size-3" aria-hidden /> Listening
          </span>
        </div>
        <div className="flex flex-col gap-2.5">
          <Bubble who="agent">Good evening, thank you for calling. How can I help you today?</Bubble>
          <Bubble who="caller">Hi, do you have a room available for two adults this weekend?</Bubble>
          <Bubble who="agent">
            Let me check that for you. Could I have your name and preferred check-in date?
          </Bubble>
        </div>
      </MockWindow>
      <div className="flex flex-col gap-5">
        <MockWindow title="enquiry / captured">
          <Field label="Request" value="Room booking" />
          <Field label="Guests" value="2 adults" />
          <Field label="Dates" value="This weekend" />
          <Field label="Contact" value="Collected" />
          <span className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border py-2 text-[13px] text-muted-foreground">
            <ArrowRightLeft className="size-3.5" aria-hidden /> Transfer to staff
          </span>
        </MockWindow>
        <MockWindow title="knowledge / faqs">
          <ul className="flex flex-col gap-2 text-[13px]">
            {['Check-in & check-out times', 'Room types & amenities', 'Parking and directions'].map((q) => (
              <li key={q} className="flex items-center gap-2 text-foreground/85">
                <BookOpen className="size-3.5 text-product" aria-hidden />
                {q}
              </li>
            ))}
          </ul>
        </MockWindow>
      </div>
    </div>
  )
}

function ReelMockups() {
  const scenes = ['Hook', 'Problem', 'Product', 'Call to action']
  return (
    <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
      <MockWindow title="studio / brief">
        <p className="mb-2 font-mono text-[10px] text-subtle-foreground uppercase">Your brief</p>
        <div className="rounded-xl border border-border bg-background p-3 text-[13px] leading-relaxed text-foreground/85">
          A 20-second reel introducing our new weekend brunch menu. Warm, upbeat, and on-brand.
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { icon: Sparkles, t: 'Brand kit applied' },
            { icon: Type, t: 'Script drafted' },
            { icon: Captions, t: 'Captions' },
          ].map(({ icon: Icon, t }) => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-[11px] text-muted-foreground">
              <Icon className="size-3 text-product" aria-hidden />
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-end">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-product px-3 py-1.5 text-[12px] font-medium text-product-foreground">
            <Send className="size-3" aria-hidden /> Generate storyboard
          </span>
        </div>
      </MockWindow>
      <MockWindow title="studio / storyboard">
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {scenes.map((s, i) => (
            <div key={s} className="flex flex-col gap-2">
              <div
                className={cn(
                  'relative flex aspect-[9/16] items-end overflow-hidden rounded-lg border p-1.5',
                  i === 0 ? 'border-product/40' : 'border-border',
                )}
                style={{
                  background: `linear-gradient(${160 + i * 20}deg, color-mix(in oklab, var(--product) ${28 - i * 5}%, transparent), var(--muted))`,
                }}
              >
                <span className="h-1 w-3/4 rounded-full bg-foreground/30" />
              </div>
              <p className="truncate font-mono text-[10px] text-subtle-foreground">
                {String(i + 1).padStart(2, '0')} {s}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-2">
          {[
            { icon: Video, w: ['w-[24%]', 'w-[22%]', 'w-[30%]', 'w-[20%]'] },
            { icon: Mic, w: ['w-[70%]'] },
            { icon: Music2, w: ['w-full'] },
          ].map(({ icon: Icon, w }, row) => (
            <div key={row} className="flex items-center gap-2">
              <Icon className="size-3.5 shrink-0 text-subtle-foreground" aria-hidden />
              <div className="flex flex-1 gap-1">
                {w.map((cls, j) => (
                  <span
                    key={j}
                    className={cn('h-4 rounded', cls, row === 0 ? 'bg-product/60' : 'bg-muted')}
                    style={row === 0 ? { opacity: 1 - j * 0.15 } : undefined}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </MockWindow>
    </div>
  )
}

function FinanceMockups() {
  const categories = [
    { label: 'Housing', w: 82 },
    { label: 'Food & dining', w: 54 },
    { label: 'Transport', w: 36 },
    { label: 'Subscriptions', w: 18 },
  ]
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <MockWindow title="cfo / overview">
        <p className="font-mono text-[10px] text-subtle-foreground uppercase">Spending by category · sample</p>
        <ul className="mt-4 flex flex-col gap-3.5">
          {categories.map((c, i) => (
            <li key={c.label}>
              <div className="mb-1.5 flex justify-between text-[13px]">
                <span>{c.label}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-product" style={{ width: `${c.w}%`, opacity: 1 - i * 0.18 }} />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-5 rounded-xl border border-border bg-background p-3 text-[13px] text-muted-foreground">
          <span className="font-medium text-foreground">Goal · Emergency fund</span> — on track
        </div>
      </MockWindow>
      <MockWindow title="cfo / chat">
        <div className="flex flex-col gap-2.5">
          <Bubble who="caller" label="You">How did my dining spend this month compare to last month?</Bubble>
          <Bubble who="agent" label="CFO Agent">
            It’s a little higher than last month, mostly from weekend restaurant visits. Want me to suggest a dining
            budget for next month?
          </Bubble>
          <Bubble who="caller" label="You">Yes, and show my subscriptions too.</Bubble>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-[13px] text-subtle-foreground">
          Ask about your finances…
          <Send className="ml-auto size-3.5" aria-hidden />
        </div>
      </MockWindow>
    </div>
  )
}

const mockups: Record<ProductVisualKind, () => React.JSX.Element> = {
  voice: VoiceMockups,
  reel: ReelMockups,
  finance: FinanceMockups,
}

export function ProductMockups({ kind }: { kind: ProductVisualKind }) {
  const Mockups = mockups[kind]
  return (
    <Reveal>
      <Mockups />
    </Reveal>
  )
}
