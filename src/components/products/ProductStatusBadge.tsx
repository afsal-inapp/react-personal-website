import { productStatusMeta, type ProductStatus } from '@/data/products'
import { cn } from '@/lib/utils'

const dot: Record<ProductStatus, string> = {
  live: 'bg-emerald-500',
  building: 'bg-amber-500',
  experimental: 'bg-violet-400',
}

export function ProductStatusBadge({ status, className }: { status: ProductStatus; className?: string }) {
  const meta = productStatusMeta[status]
  return (
    <span
      title={meta.description}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground',
        className,
      )}
    >
      <span className={cn('size-1.5 rounded-full', dot[status])} aria-hidden />
      <span className="sr-only">Status: </span>
      {meta.label}
    </span>
  )
}
