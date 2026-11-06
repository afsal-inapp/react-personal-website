import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import type { Product } from '@/data/products'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { ProductLogo } from './ProductLogo'

export const productSections = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'preview', label: 'Preview' },
]

export function ProductNav({ product }: { product: Product }) {
  const ctaSection = product.form ? 'integrate' : 'get-started'
  const ids = [...productSections.map((s) => s.id), ctaSection]
  const active = useActiveSection(ids)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/75 backdrop-blur-xl backdrop-saturate-150">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <nav aria-label={`${product.name} navigation`} className="container-page flex h-16 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-2">
          <Link
            to="/products"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Back to all products"
            title="All products"
          >
            <ArrowLeft className="size-4" />
          </Link>
          <Link to="/" className="hidden text-base font-bold tracking-[-0.06em] sm:inline" aria-label="Mohammed Afsal — home">
            AF<span className="text-brand">.</span>
          </Link>
          <span className="hidden text-subtle-foreground sm:inline" aria-hidden>
            /
          </span>
          <a href="#overview" className="flex min-w-0 items-center gap-2.5">
            <ProductLogo product={product} size="sm" />
            <span className="truncate text-[15px] font-semibold tracking-tight">{product.name}</span>
          </a>
        </div>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {productSections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? 'true' : undefined}
                className={cn(
                  'rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors',
                  active === s.id ? 'bg-product-soft text-product' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-1">
          <ThemeToggle />
          <Button asChild variant="brand" size="sm" className="ml-1">
            <a href={`#${ctaSection}`}>{product.form ? 'Get started' : product.cta.primary.label}</a>
          </Button>
        </div>
      </nav>
    </header>
  )
}
