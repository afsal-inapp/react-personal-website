import type { CSSProperties } from 'react'
import type { Cta, Product } from '@/data/products'
import { mailto, profile } from '@/data/profile'

/** Inline CSS variables that give a subtree the product's accent colour. Pair with `data-product`. */
export const productThemeStyle = (product: Product) =>
  ({ '--p-dark': product.theme.dark, '--p-light': product.theme.light }) as CSSProperties

/** Resolves CTA shorthand tokens (`mailto`, `linkedin`, `github`) into real URLs. */
export function resolveCta(cta: Cta, product: Product) {
  switch (cta.href) {
    case 'mailto':
      return { href: mailto(`${product.name} — ${cta.label}`), external: false }
    case 'linkedin':
      return { href: profile.social.linkedin, external: true }
    case 'github':
      return { href: profile.social.github, external: true }
    default:
      return { href: cta.href, external: /^https?:\/\//.test(cta.href) }
  }
}
