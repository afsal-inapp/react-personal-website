import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { useScrollRestoration } from '@/hooks/use-scroll-restoration'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

const Products = lazy(() => import('@/pages/Products'))
const ProductDetails = lazy(() => import('@/pages/ProductDetails'))

function PageLoader() {
  return (
    <div role="status" aria-label="Loading" className="flex min-h-svh items-center justify-center">
      <span className="size-5 animate-spin rounded-full border-2 border-border border-t-brand" />
    </div>
  )
}

export default function App() {
  useScrollRestoration()
  return (
    <MotionConfig reducedMotion="user">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </MotionConfig>
  )
}
