import type { Product } from '@/data/products'
import { Reveal } from '@/components/common/Reveal'

export function AudienceGrid({ audience }: { audience: Product['audience'] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {audience.segments.map((seg, i) => {
        const Icon = seg.icon
        return (
          <li key={seg.label}>
            <Reveal
              delay={0.03 * i}
              className="inline-flex items-center gap-3 rounded-full border border-border bg-card py-2 pr-5 pl-2 transition-colors hover:border-product/30"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-product-soft text-product">
                <Icon className="size-4" aria-hidden />
              </span>
              <span className="text-[15px] font-medium tracking-tight">{seg.label}</span>
            </Reveal>
          </li>
        )
      })}
    </ul>
  )
}
