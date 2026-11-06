import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Check, X } from 'lucide-react'
import { getProduct, products, type Product } from '@/data/products'
import { useSeo } from '@/hooks/use-seo'
import { productThemeStyle } from '@/lib/products'
import { Footer } from '@/components/layout/Footer'
import { Reveal } from '@/components/common/Reveal'
import { Section, SectionHeading } from '@/components/common/Section'
import { Button } from '@/components/ui/button'
import { ProductNav } from '@/components/products/ProductNav'
import { ProductHero } from '@/components/products/ProductHero'
import { FeatureGrid } from '@/components/products/FeatureGrid'
import { WorkflowSteps } from '@/components/products/WorkflowSteps'
import { ArchitectureDiagram } from '@/components/products/ArchitectureDiagram'
import { AudienceGrid } from '@/components/products/AudienceGrid'
import { ProductMockups } from '@/components/products/ProductMockups'
import { ProductCTA } from '@/components/products/ProductCTA'
import { ProductCard } from '@/components/products/ProductCard'
import NotFound from './NotFound'

function ProblemSolution({ product }: { product: Product }) {
  const { problem, solution } = product
  return (
    <Section id="problem" aria-labelledby="problem-title" className="border-t border-border">
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 sm:p-10">
            <p className="font-mono text-xs tracking-[0.16em] text-subtle-foreground uppercase">The problem</p>
            <h2 id="problem-title" className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-balance sm:text-3xl">
              {problem.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">{problem.text}</p>
            <ul className="mt-8 flex flex-col gap-3">
              {problem.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-foreground/85">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-subtle-foreground">
                    <X className="size-3" aria-hidden />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="h-full">
          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-product/25 bg-card p-6 sm:p-10">
            <div
              aria-hidden
              className="absolute -top-32 -right-32 size-80 rounded-full blur-3xl"
              style={{ background: 'color-mix(in oklab, var(--product) 16%, transparent)' }}
            />
            <p className="relative font-mono text-xs tracking-[0.16em] text-product uppercase">The solution</p>
            <h2 className="relative mt-5 text-2xl font-semibold tracking-[-0.03em] text-balance sm:text-3xl">
              {solution.heading}
            </h2>
            <p className="relative mt-4 leading-relaxed text-pretty text-muted-foreground">{solution.text}</p>
            <ul className="relative mt-8 flex flex-col gap-3">
              {solution.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-foreground/90">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-product-soft text-product">
                    <Check className="size-3" aria-hidden />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

function ProductPage({ product }: { product: Product }) {
  useSeo({ title: product.seo.title, description: product.seo.description })
  const others = products.filter((p) => p.slug !== product.slug)

  return (
    <div data-product style={productThemeStyle(product)}>
      <ProductNav product={product} />
      <main id="main" tabIndex={-1} className="outline-none">
        <ProductHero product={product} />
        <ProblemSolution product={product} />

        <Section id="features" aria-labelledby="features-title" className="border-t border-border">
          <SectionHeading
            eyebrow="Key features"
            id="features-title"
            title="Everything it’s designed to do."
            description={
              product.status === 'live'
                ? undefined
                : 'Each capability is labelled with its current status, so it’s clear what exists today and what is planned.'
            }
          />
          <FeatureGrid features={product.features} />
        </Section>

        <Section id="how-it-works" aria-labelledby="how-title" className="border-t border-border">
          <SectionHeading eyebrow="How it works" id="how-title" title={`${product.name}, step by step.`} />
          <WorkflowSteps steps={product.workflow} />
        </Section>

        <Section id="architecture" aria-labelledby="arch-title" className="border-t border-border">
          <SectionHeading
            eyebrow="Architecture"
            id="arch-title"
            title={product.architecture.heading}
            description={product.architecture.description}
          />
          <ArchitectureDiagram architecture={product.architecture} />
        </Section>

        <Section id="audience" aria-labelledby="audience-title" className="border-t border-border">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Who it’s for"
              id="audience-title"
              title={product.audience.heading}
              description={product.audience.description}
              className="mb-0 sm:mb-0"
            />
            <AudienceGrid audience={product.audience} />
          </div>
        </Section>

        <Section id="preview" aria-labelledby="preview-title" className="border-t border-border">
          <SectionHeading
            eyebrow="Product preview"
            id="preview-title"
            title={product.mockups.heading}
            description={product.mockups.description}
          />
          <ProductMockups kind={product.visual} />
        </Section>

        <ProductCTA product={product} />

        <section aria-labelledby="more-title" className="border-t border-border py-20 sm:py-24">
          <div className="container-page">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs tracking-[0.16em] text-subtle-foreground uppercase">More products</p>
                <h2 id="more-title" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Also building
                </h2>
              </div>
              <Button asChild variant="outline" size="sm" className="self-start sm:self-auto">
                <Link to="/">
                  <ArrowLeft />
                  Back to portfolio
                </Link>
              </Button>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {others.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
            <p className="mt-10 text-sm text-muted-foreground">
              Built by{' '}
              <Link to="/" className="inline-flex items-center gap-0.5 font-medium text-foreground hover:underline">
                Mohammed Afsal
                <ArrowUpRight className="size-3.5" aria-hidden />
              </Link>{' '}
              — AI Forward-Deployed Engineer.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function ProductDetails() {
  const { slug } = useParams()
  const product = getProduct(slug)
  if (!product) return <NotFound />
  return <ProductPage key={product.slug} product={product} />
}
