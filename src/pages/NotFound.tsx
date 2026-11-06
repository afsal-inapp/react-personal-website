import { Link } from 'react-router-dom'
import { ArrowLeft, Boxes } from 'lucide-react'
import { useSeo } from '@/hooks/use-seo'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  useSeo({ title: 'Page not found — Mohammed Afsal', noindex: true })
  return (
    <SiteLayout>
      <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-24 pb-16">
        <div
          aria-hidden
          className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
        />
        <div className="container-page flex flex-col items-center text-center">
          <p className="font-mono text-sm text-brand">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">This route isn’t deployed.</h1>
          <p className="mt-5 max-w-md text-muted-foreground sm:text-lg">
            The page you’re looking for doesn’t exist or has moved. Let’s get you back to something that ships.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/">
                <ArrowLeft />
                Back to home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/products">
                <Boxes />
                View products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
