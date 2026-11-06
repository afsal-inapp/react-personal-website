import { motion } from 'framer-motion'
import { products, productStatusMeta, type ProductStatus } from '@/data/products'
import { useSeo } from '@/hooks/use-seo'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { Reveal } from '@/components/common/Reveal'
import { ProductCard } from '@/components/products/ProductCard'
import { ProductStatusBadge } from '@/components/products/ProductStatusBadge'

const statuses = Object.keys(productStatusMeta) as ProductStatus[]

export default function Products() {
  useSeo({
    title: 'Products — Mohammed Afsal',
    description: 'AI products built by Mohammed Afsal: AI Calling Agent, AI Reel Studio, and Personal CFO Agent.',
  })

  return (
    <SiteLayout>
      <section aria-labelledby="products-page-title" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div
          aria-hidden
          className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]"
        />
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 flex flex-col gap-5 sm:mb-20"
          >
            <p className="font-mono text-xs tracking-[0.18em] text-brand uppercase">Products</p>
            <h1
              id="products-page-title"
              className="max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.045em] text-balance sm:text-6xl"
            >
              Software I’m building, <span className="text-muted-foreground">one real problem at a time.</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              Each product is its own focused bet — designed, engineered, and shipped end-to-end. Statuses are kept
              honest: nothing is marked live until it is.
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
              {statuses.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <ProductStatusBadge status={s} />
                  <span>{productStatusMeta[s].description}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={0.06 * i} className="h-full">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
