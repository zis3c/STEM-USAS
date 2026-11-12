import type Lenis from 'lenis'

declare global {
  interface Window {
    stemLenis?: Lenis | null
  }
}

export const setLenis = (instance: Lenis | null) => {
  window.stemLenis = instance
}

const NAV_CLEARANCE = 76

export const scrollToId = (id: string) => {
  if (id === 'top') {
    scrollToTop()
    return
  }

  const el = document.getElementById(id)
  if (!el) return

  const rect = el.getBoundingClientRect()
  const isFullViewportSection = rect.height >= window.innerHeight - 2
  const availableHeight = Math.max(window.innerHeight - NAV_CLEARANCE, 320)
  const centerGap =
    !isFullViewportSection && rect.height < availableHeight
      ? Math.round((availableHeight - rect.height) / 2)
      : 0
  const offset = isFullViewportSection ? 0 : -(NAV_CLEARANCE + centerGap)
  const destination = Math.max(0, Math.round(rect.top + window.scrollY + offset))

  if (window.stemLenis) {
    window.stemLenis.scrollTo(destination, { duration: 0.9 })
  } else {
    window.scrollTo({ top: destination, behavior: 'smooth' })
  }
}

export const scrollToTop = () => {
  if (window.stemLenis) window.stemLenis.scrollTo(0, { duration: 1.4 })
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}
