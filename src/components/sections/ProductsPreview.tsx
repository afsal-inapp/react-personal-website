import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/common/Reveal'
import { Section, SectionHeading } from '@/components/common/Section'
import { ProductCard } from '@/components/products/ProductCard'

export function ProductsPreview() {
  return (
    <Section id="products" aria-labelledby="products-title" className="border-t border-border">
      <SectionHeading
        index="03"
        eyebrow="Products"
        id="products-title"
        title="Products I’m building."
        description="Alongside client and team work, I build my own AI products — each one a focused attempt at a real problem."
      >
        <Button asChild variant="outline" size="sm" className="mt-2 self-start">
          <Link to="/products">
            View all products
            <ArrowRight />
          </Link>
        </Button>
      </SectionHeading>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={0.06 * i} className="h-full">
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
