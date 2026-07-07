import { useState, useEffect, useRef, useCallback } from 'react'

// ─── useScrollY ──────────────────────────────────────────────────────────────
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrollY(y)
      setIsScrolled(y > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollY, isScrolled }
}

// ─── useCounter ──────────────────────────────────────────────────────────────
export function useCounter(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start)
  const [hasStarted, setHasStarted] = useState(false)
  const rafRef = useRef(null)

  const startCounter = useCallback(() => {
    if (hasStarted) return
    setHasStarted(true)

    const startTime = performance.now()
    const range = end - start

    const update = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(start + range * eased))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(update)
      }
    }
    rafRef.current = requestAnimationFrame(update)
  }, [end, start, duration, hasStarted])

  useEffect(() => {
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  return { count, startCounter }
}

// ─── useIntersection ─────────────────────────────────────────────────────────
export function useIntersection(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        if (options.once !== false) observer.unobserve(element)
      }
    }, { threshold: options.threshold || 0.2, rootMargin: options.rootMargin || '-60px' })

    observer.observe(element)
    return () => observer.unobserve(element)
  }, [options.once, options.threshold, options.rootMargin])

  return { ref, isIntersecting }
}

// ─── useMediaQuery ────────────────────────────────────────────────────────────
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(query)
    setMatches(mq.matches)
    const handler = (e) => setMatches(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [query])

  return matches
}

// ─── useLocalStorage ─────────────────────────────────────────────────────────
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setStoredValue = (newValue) => {
    try {
      setValue(newValue)
      window.localStorage.setItem(key, JSON.stringify(newValue))
    } catch { /* silent */ }
  }

  return [value, setStoredValue]
}
