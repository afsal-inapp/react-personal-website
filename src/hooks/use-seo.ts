import { useEffect } from 'react'
import { profile } from '@/data/profile'

type SeoOptions = {
  title?: string
  description?: string
  image?: string
  noindex?: boolean
}

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const setCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

export function useSeo({ title, description, image = '/og-image.png', noindex = false }: SeoOptions = {}) {
  useEffect(() => {
    const fullTitle = title ?? profile.seo.title
    const desc = description ?? profile.seo.description
    const url = window.location.origin + window.location.pathname
    const imageUrl = new URL(image, window.location.origin).href

    document.title = fullTitle
    setMeta('name', 'description', desc)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', imageUrl)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)
    setMeta('name', 'twitter:image', imageUrl)
    setMeta('name', 'robots', noindex ? 'noindex' : 'index, follow')
    setCanonical(url)
  }, [title, description, image, noindex])
}
