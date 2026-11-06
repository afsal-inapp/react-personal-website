import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Menu } from 'lucide-react'
import { navItems, type NavItem } from '@/data/navigation'
import { mailto } from '@/data/profile'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/common/Logo'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { SocialLinks } from '@/components/common/SocialLinks'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const sectionIds = navItems.map((n) => n.id)

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

function NavLink({
  item,
  isHome,
  active,
  onNavigate,
  className,
  children,
}: {
  item: NavItem
  isHome: boolean
  active: boolean
  onNavigate?: () => void
  className?: string
  children: React.ReactNode
}) {
  const common = {
    className,
    onClick: onNavigate,
    'aria-current': active ? ('true' as const) : undefined,
  }
  if (isHome) {
    return (
      <a href={`#${item.id}`} {...common}>
        {children}
      </a>
    )
  }
  const to = item.id === 'home' ? '/' : item.id === 'products' ? '/products' : `/#${item.id}`
  return (
    <Link to={to} {...common}>
      {children}
    </Link>
  )
}

export function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const sectionActive = useActiveSection(sectionIds, isHome)
  const active = isHome ? sectionActive : pathname.startsWith('/products') ? 'products' : ''

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled || !isHome
          ? 'border-b border-border bg-background/75 backdrop-blur-xl backdrop-saturate-150'
          : 'border-b border-transparent',
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <ul className="hidden items-center gap-0.5 rounded-full border border-border bg-card/40 p-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id} className="relative">
                <NavLink
                  item={item}
                  isHome={isHome}
                  active={isActive}
                  className={cn(
                    'relative z-10 block rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {item.label}
                </NavLink>
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-accent shadow-[inset_0_0_0_1px_var(--border)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    aria-hidden
                  />
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="sm" className="ml-1 hidden sm:inline-flex">
            <a href={mailto('Hello Afsal')}>
              Let’s talk
              <ArrowUpRight />
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <SheetDescription className="sr-only">Site sections and pages</SheetDescription>
              <div className="flex h-9 items-center">
                <Logo onClick={() => setOpen(false)} />
              </div>
              <ul className="mt-6 flex flex-col">
                {navItems.map((item) => {
                  const isActive = active === item.id
                  return (
                    <li key={item.id} className="border-b border-border last:border-0">
                      <NavLink
                        item={item}
                        isHome={isHome}
                        active={isActive}
                        onNavigate={() => setOpen(false)}
                        className={cn(
                          'flex items-center justify-between py-3.5 text-lg font-medium tracking-tight transition-colors',
                          isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                        )}
                      >
                        {item.label}
                        {isActive && <span className="size-1.5 rounded-full bg-brand" aria-hidden />}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <SocialLinks />
                <Button asChild size="sm">
                  <a href={mailto('Hello Afsal')}>Let’s talk</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
