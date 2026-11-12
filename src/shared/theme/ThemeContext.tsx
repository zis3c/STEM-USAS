import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { flushSync } from 'react-dom'
import { ThemeContext, type Theme } from './useTheme'

type ViewTransitionDocument = Document & {
  startViewTransition?: (updateCallback: () => void) => {
    ready: Promise<void>
    finished: Promise<void>
  }
}

const applyThemeDom = (theme: Theme) => {
  const root = document.documentElement
  root.classList.remove('dark', 'light')
  root.classList.add(theme)
  root.dataset.theme = theme
  const metaTheme = document.querySelector('meta[name="theme-color"]')
  if (metaTheme) {
    metaTheme.setAttribute('content', theme === 'light' ? '#f8fafc' : '#050a18')
  }
}

const getRevealOrigin = (e?: MouseEvent): { x: number; y: number } => {
  if (e && (e.clientX !== 0 || e.clientY !== 0)) {
    return { x: e.clientX, y: e.clientY }
  }
  if (e?.currentTarget instanceof Element) {
    const rect = e.currentTarget.getBoundingClientRect()
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
  }
  return { x: window.innerWidth / 2, y: window.innerHeight / 2 }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('stem_theme')
      return saved === 'light' ? 'light' : 'dark'
    } catch {
      return 'dark'
    }
  })
  const transitionIdRef = useRef(0)

  useEffect(() => {
    try {
      localStorage.setItem('stem_theme', theme)
    } catch {
      // Ignore restricted storage environments
    }
    applyThemeDom(theme)
  }, [theme])

  const toggleTheme = (e?: MouseEvent) => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const doc = document as ViewTransitionDocument

    if (prefersReducedMotion) {
      setTheme(next)
      return
    }

    if (typeof doc.startViewTransition !== 'function') {
      const root = document.documentElement
      root.classList.add('theme-fade')
      setTheme(next)
      window.setTimeout(() => root.classList.remove('theme-fade'), 380)
      return
    }

    const { x, y } = getRevealOrigin(e)
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const root = document.documentElement
    const activeId = ++transitionIdRef.current
    root.classList.add('theme-transitioning')

    const transition = doc.startViewTransition(() => {
      applyThemeDom(next)
      flushSync(() => setTheme(next))
    })

    transition.ready
      .then(() => {
        if (transitionIdRef.current !== activeId) return
        const anim = root.animate(
          {
            clipPath: [
              `circle(1px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            fill: 'both',
            pseudoElement: '::view-transition-new(root)',
          }
        )

        // Drive the paused animation with clamped frame deltas so a first-frame GPU/raster
        // flush never consumes the 500ms timeline and makes the reveal jump straight to the end.
        const duration = 500
        anim.pause()
        anim.currentTime = 0
        let elapsed = 0
        let prev = performance.now()
        let rafId = 0
        const safetyId = window.setTimeout(() => {
          if (anim.playState !== 'finished') anim.finish()
        }, duration + 500)

        const tick = (now: number) => {
          if (transitionIdRef.current !== activeId) {
            if (anim.playState !== 'finished') anim.cancel()
            return
          }
          const delta = Math.max(0, Math.min(now - prev, 24))
          prev = now
          elapsed = Math.min(duration, elapsed + delta)
          anim.currentTime = elapsed
          if (elapsed < duration) {
            rafId = requestAnimationFrame(tick)
          } else {
            anim.finish()
          }
        }
        rafId = requestAnimationFrame(tick)
        anim.finished
          .catch(() => {})
          .finally(() => {
            cancelAnimationFrame(rafId)
            window.clearTimeout(safetyId)
          })
      })
      .catch(() => {})

    transition.finished
      .catch(() => {})
      .finally(() => {
        if (transitionIdRef.current === activeId) {
          root.classList.remove('theme-transitioning')
        }
      })
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
