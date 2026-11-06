import { Fragment } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import type { Product } from '@/data/products'
import { Reveal } from '@/components/common/Reveal'

export function ArchitectureDiagram({ architecture }: { architecture: Product['architecture'] }) {
  const { layers } = architecture
  return (
    <Reveal>
      <div className="bg-grid relative overflow-hidden rounded-3xl border border-border bg-card p-4 sm:p-8">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: 'radial-gradient(70% 60% at 50% 50%, color-mix(in oklab, var(--product) 8%, transparent), transparent)' }}
        />
        <div
          role="img"
          aria-label={`Architecture: ${layers.map((l) => `${l.label} (${l.nodes.join(', ')})`).join(' → ')}`}
          className="relative flex flex-col items-stretch gap-3 lg:flex-row lg:items-center"
        >
          {layers.map((layer, i) => (
            <Fragment key={layer.label}>
              <div className="flex-1 rounded-2xl border border-border bg-background/80 p-4 backdrop-blur-sm">
                <p className="mb-3 flex items-center justify-between font-mono text-[10.5px] tracking-[0.14em] text-subtle-foreground uppercase">
                  {layer.label}
                  <span className="text-product">{String(i + 1).padStart(2, '0')}</span>
                </p>
                <ul className="flex flex-col gap-2">
                  {layer.nodes.map((node, j) => (
                    <li
                      key={node}
                      className={
                        i === 1 && j === Math.floor(layer.nodes.length / 2)
                          ? 'rounded-lg border border-product/40 bg-product-soft px-3 py-2 text-[13px] font-medium text-foreground'
                          : 'rounded-lg border border-border bg-card px-3 py-2 text-[13px] text-foreground/85'
                      }
                    >
                      {node}
                    </li>
                  ))}
                </ul>
              </div>
              {i < layers.length - 1 && (
                <div className="flex shrink-0 items-center justify-center text-product" aria-hidden>
                  <ArrowDown className="size-4 lg:hidden" />
                  <ArrowRight className="hidden size-4 lg:block" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
