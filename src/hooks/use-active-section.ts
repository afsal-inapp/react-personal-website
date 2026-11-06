import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently nearest the top of the viewport.
 * Pass `enabled: false` on pages that don't contain the sections.
 */
export function useActiveSection(ids: string[], enabled = true) {
  const [active, setActive] = useState<string>(ids[0] ?? '')
  const key = ids.join('|')

  useEffect(() => {
    if (!enabled) return
    const sectionIds = key.split('|')

    const update = () => {
      const offset = window.innerHeight * 0.35
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) current = sectionIds[sectionIds.length - 1]
      setActive(current)
    }

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [key, enabled])

  return active
}
