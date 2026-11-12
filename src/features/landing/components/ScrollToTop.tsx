import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUp } from 'lucide-react'
import { scrollToTop } from '@/shared/lib/scroll'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (typeof document === 'undefined') return null

  return createPortal(
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border bg-white/65 border-white/80 text-slate-800 shadow-[0_8px_24px_rgba(15,23,42,0.12)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/85 hover:text-stem-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold dark:border-stem-gold/25 dark:bg-[#0B1426]/55 dark:text-white dark:shadow-[0_10px_28px_rgba(0,0,0,0.5)] dark:hover:border-stem-gold/55 dark:hover:bg-[#0B1426]/80 dark:hover:text-stem-goldlight sm:bottom-7 sm:right-7 sm:h-12 sm:w-12 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <ArrowUp size={18} />
    </button>,
    document.body
  )
}
