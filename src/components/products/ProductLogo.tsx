import type { Product } from '@/data/products'
import { cn } from '@/lib/utils'

export function ProductLogo({ product, size = 'md', className }: { product: Product; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const Icon = product.icon
  const sizes = {
    sm: 'size-7 rounded-lg [&_svg]:size-3.5',
    md: 'size-10 rounded-xl [&_svg]:size-[18px]',
    lg: 'size-14 rounded-2xl [&_svg]:size-6',
  }
  return (
    <span
      aria-hidden
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center border border-product/30 text-product',
        sizes[size],
        className,
      )}
      style={{
        background:
          'linear-gradient(145deg, color-mix(in oklab, var(--product) 22%, transparent), color-mix(in oklab, var(--product) 6%, transparent))',
      }}
    >
      <Icon strokeWidth={2} />
    </span>
  )
}
