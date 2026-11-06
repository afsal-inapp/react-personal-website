import { capabilityStatusMeta, type CapabilityStatus, type ProductFeature } from '@/data/products'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/common/Reveal'

const order: CapabilityStatus[] = ['available', 'in-development', 'planned']

const statusStyle: Record<CapabilityStatus, string> = {
  available: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  'in-development': 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400',
  planned: 'border-border bg-muted text-muted-foreground',
}

export function CapabilityBadge({ status }: { status: CapabilityStatus }) {
  return (
    <span className={cn('rounded-full border px-2 py-0.5 text-[10.5px] font-medium whitespace-nowrap', statusStyle[status])}>
      {capabilityStatusMeta[status].label}
    </span>
  )
}

export function FeatureGrid({ features }: { features: ProductFeature[] }) {
  const groups = order
    .map((status) => ({ status, items: features.filter((f) => f.status === status) }))
    .filter((g) => g.items.length > 0)

  return (
    <div className="flex flex-col gap-12">
      {groups.map((group) => (
        <div key={group.status}>
          {groups.length > 1 && (
            <h3 className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-subtle-foreground uppercase">
              {capabilityStatusMeta[group.status].label}
              <span className="h-px flex-1 bg-border" aria-hidden />
            </h3>
          )}
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((f, i) => {
              const Icon = f.icon
              return (
                <li key={f.title}>
                  <Reveal
                    delay={0.03 * (i % 6)}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-product/30"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-product-soft text-product">
                        <Icon className="size-[18px]" aria-hidden />
                      </span>
                      <CapabilityBadge status={f.status} />
                    </div>
                    <h4 className="mt-5 font-semibold tracking-tight">{f.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
