import { Link } from 'react-router-dom'
import { profile } from '@/data/profile'
import { products } from '@/data/products'
import { Logo } from '@/components/common/Logo'
import { SocialLinks } from '@/components/common/SocialLinks'

const footerColumns = [
  {
    title: 'Products',
    links: products.map((p) => ({ label: p.name, to: `/products/${p.slug}` })),
  },
  {
    title: 'Site',
    links: [
      { label: 'About', to: '/#about' },
      { label: 'Projects', to: '/#projects' },
      { label: 'Experience', to: '/#experience' },
      { label: 'Contact', to: '/#contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-10 py-12 sm:py-14">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div className="flex flex-col gap-3">
            <Logo className="text-xl" />
            <p className="max-w-xs text-sm text-muted-foreground">{profile.footer.motto}</p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-14 text-sm">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <p className="font-mono text-[11px] tracking-[0.16em] text-subtle-foreground uppercase">{col.title}</p>
                <ul className="flex flex-col gap-2">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-subtle-foreground">
            {profile.footer.credit} <span className="mx-1">·</span> © {new Date().getFullYear()}
          </p>
          <SocialLinks size="sm" className="-ml-2 sm:ml-0" />
        </div>
      </div>
    </footer>
  )
}
