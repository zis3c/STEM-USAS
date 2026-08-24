import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    const update = () => {
      const el = barRef.current
      if (el) {
        const h = document.documentElement
        const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1)
        el.style.width = `${(p * 100).toFixed(2)}%`
      }
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[2px]">
      <div
        ref={barRef}
        className="h-full w-0 bg-gradient-to-r from-stem-gold to-stem-goldlight shadow-[0_0_10px_rgba(204,145,43,0.6)]"
      />
    </div>
  )
}
