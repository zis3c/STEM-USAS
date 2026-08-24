import type Lenis from 'lenis'

declare global {
  interface Window {
    stemLenis?: Lenis | null
  }
}

export const setLenis = (instance: Lenis | null) => {
  window.stemLenis = instance
}

export const scrollToId = (id: string) => {
  console.log('Scrolling to:', id, 'stemLenis active:', !!window.stemLenis)
  const target = id === 'top' ? 0 : `#${id}`
  if (window.stemLenis) {
    window.stemLenis.scrollTo(target, { offset: -72, duration: 1.2 })
  } else {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

export const scrollToTop = () => {
  console.log('Scrolling to top, stemLenis active:', !!window.stemLenis)
  if (window.stemLenis) window.stemLenis.scrollTo(0, { duration: 1.4 })
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}
