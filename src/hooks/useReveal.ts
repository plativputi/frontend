import { useEffect, useRef, useState } from 'react'

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let observer: IntersectionObserver | null = null

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer?.unobserve(entry.target)
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px 0px 0px' },
    )
    observer.observe(el)

    const fallback = window.setTimeout(() => setVisible(true), 800)

    return () => {
      observer?.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return { ref, visible }
}
