import { useEffect, useState } from 'react'
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

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-stem-gold/40 bg-stem-panel/90 text-stem-gold shadow-[0_0_20px_rgba(204,145,43,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-stem-gold hover:text-stem-bg ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp size={18} />
    </button>
  )
}
