import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to the URL hash target on navigation, or to the top for new pages. */
export function useScrollRestoration() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      let attempts = 0
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        else if (attempts++ < 20) requestAnimationFrame(tryScroll)
      }
      tryScroll()
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
}
