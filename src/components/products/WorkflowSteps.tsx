import type { Product } from '@/data/products'
import { Reveal } from '@/components/common/Reveal'

export function WorkflowSteps({ steps }: { steps: Product['workflow'] }) {
  return (
    <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step.title} className="relative">
          <Reveal
            delay={0.05 * i}
            className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-product/30"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex size-8 items-center justify-center rounded-full border border-product/30 bg-product-soft font-mono text-xs font-medium text-product tabular-nums">
                {i + 1}
              </span>
              {i < steps.length - 1 && <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" aria-hidden />}
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
