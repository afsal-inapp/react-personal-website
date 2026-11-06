import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Product } from '@/data/products'
import { productThemeStyle } from '@/lib/products'
import { cn } from '@/lib/utils'
import { ProductArt } from './ProductArt'
import { ProductLogo } from './ProductLogo'
import { ProductStatusBadge } from './ProductStatusBadge'

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  return (
    <article
      data-product
      style={productThemeStyle(product)}
      className={cn(
        'group relative flex h-full flex-col rounded-3xl border border-border bg-card p-3 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-product/30 hover:shadow-[0_24px_60px_-30px_var(--product)]',
        className,
      )}
    >
      <ProductArt kind={product.visual} className="aspect-[16/10] rounded-2xl" />
      <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <ProductLogo product={product} size="sm" />
            <p className="font-mono text-[11px] tracking-[0.12em] text-subtle-foreground uppercase">{product.category}</p>
          </div>
          <ProductStatusBadge status={product.status} />
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">
          <Link
            to={`/products/${product.slug}`}
            className="outline-none after:absolute after:inset-0 after:rounded-3xl focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-product"
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-pretty text-muted-foreground">{product.shortDescription}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-foreground">
          View Product
          <ArrowRight className="size-4 text-product transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </article>
  )
}
