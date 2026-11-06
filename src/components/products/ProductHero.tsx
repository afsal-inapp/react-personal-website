import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight, Info } from 'lucide-react'
import { productStatusMeta, type Product } from '@/data/products'
import { resolveCta } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { ProductArt } from './ProductArt'
import { ProductLogo } from './ProductLogo'
import { ProductStatusBadge } from './ProductStatusBadge'

const ease = [0.22, 1, 0.36, 1] as const

export function CtaButton({
  cta,
  product,
  variant = 'brand',
  size = 'lg',
}: {
  cta: Product['hero']['primaryCta']
  product: Product
  variant?: 'brand' | 'outline'
  size?: 'lg' | 'default'
}) {
  const { href, external } = resolveCta(cta, product)
  return (
    <Button asChild size={size} variant={variant} className="w-full sm:w-auto">
      <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {cta.label}
        {variant === 'brand' && <ArrowRight />}
      </a>
    </Button>
  )
}

export function ProductHero({ product }: { product: Product }) {
  const { hero } = product
  return (
    <section id="overview" aria-labelledby="product-title" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="absolute top-[-25%] left-1/2 -z-10 h-[38rem] w-[64rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, color-mix(in oklab, var(--product) 20%, transparent), transparent)' }}
      />

      <div className="container-page">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <Link to="/" className="transition-colors hover:text-foreground">
                Mohammed Afsal
              </Link>
              <ChevronRight className="size-3.5 opacity-50" aria-hidden />
            </li>
            <li className="flex items-center gap-1.5">
              <Link to="/products" className="transition-colors hover:text-foreground">
                Products
              </Link>
              <ChevronRight className="size-3.5 opacity-50" aria-hidden />
            </li>
            <li aria-current="page" className="text-foreground">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="flex flex-col items-start"
          >
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <ProductLogo product={product} size="md" />
              <div>
                <p className="font-semibold tracking-tight">{product.name}</p>
                <p className="font-mono text-[11px] tracking-[0.14em] text-product uppercase">{hero.eyebrow}</p>
              </div>
            </div>
            <h1
              id="product-title"
              className="text-[2.6rem] leading-[1.03] font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-[4rem]"
            >
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {hero.subheading}
            </p>
            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <CtaButton cta={hero.primaryCta} product={product} />
              <CtaButton cta={hero.secondaryCta} product={product} variant="outline" />
            </div>
            <div className="mt-8 flex max-w-xl items-start gap-3 rounded-xl border border-border bg-card/60 p-3.5 text-[13px] leading-relaxed text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0 text-product" aria-hidden />
              <p>
                <ProductStatusBadge status={product.status} className="mr-1.5 align-[1px]" />
                {productStatusMeta[product.status].description}{' '}
                {product.status !== 'live' && 'Capabilities on this page describe the planned product.'}
                {product.disclaimer && <> {product.disclaimer}</>}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
          >
            <ProductArt kind={product.visual} className="aspect-square rounded-3xl shadow-2xl shadow-black/20 sm:aspect-[5/4] lg:aspect-square"
              artClassName="scale-125 sm:scale-150"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
