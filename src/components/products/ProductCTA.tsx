import type { Product } from '@/data/products'
import { Reveal } from '@/components/common/Reveal'
import { CtaButton } from './ProductHero'
import { IntegrationForm } from './IntegrationForm'
import { ProductLogo } from './ProductLogo'

export function ProductCTA({ product }: { product: Product }) {
  const { cta } = product
  const hasForm = Boolean(product.form)

  return (
    <section
      id={hasForm ? 'integrate' : 'get-started'}
      aria-labelledby="product-cta-title"
      className="relative scroll-mt-20 border-t border-border py-24 sm:py-32"
    >
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-6 sm:p-12">
          <div
            aria-hidden
            className="absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(closest-side, color-mix(in oklab, var(--product) 22%, transparent), transparent)' }}
          />
          <div className={hasForm ? 'relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14' : 'relative flex flex-col items-center text-center'}>
            <Reveal className={hasForm ? 'flex flex-col items-start' : 'flex flex-col items-center'}>
              <ProductLogo product={product} size="lg" />
              <h2
                id="product-cta-title"
                className="mt-7 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl"
              >
                {cta.heading}
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-pretty text-muted-foreground sm:text-lg">{cta.description}</p>
              {!hasForm && (
                <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <CtaButton cta={cta.primary} product={product} />
                  <CtaButton cta={cta.secondary} product={product} variant="outline" />
                </div>
              )}
            </Reveal>
            {hasForm && (
              <Reveal delay={0.1}>
                <IntegrationForm product={product} />
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
