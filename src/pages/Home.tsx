import { useSeo } from '@/hooks/use-seo'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Expertise } from '@/components/sections/Expertise'
import { ProductsPreview } from '@/components/sections/ProductsPreview'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { TechStack } from '@/components/sections/TechStack'
import { BuildingInPublic } from '@/components/sections/BuildingInPublic'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  useSeo()
  return (
    <SiteLayout>
      <Hero />
      <About />
      <Expertise />
      <ProductsPreview />
      <Projects />
      <Experience />
      <TechStack />
      <BuildingInPublic />
      <Contact />
    </SiteLayout>
  )
}
