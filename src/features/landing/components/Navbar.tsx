import { useEffect, useState, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import { scrollToId } from '@/shared/lib/scroll'
import type { Lang } from '@/shared/i18n/translations'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'programs', label: t.nav.programs },
    { id: 'projects', label: t.nav.projects },
    { id: 'hosting', label: t.nav.hosting },
    { id: 'team', label: t.nav.team },
    { id: 'faq', label: t.nav.faq },
    { id: 'join', label: t.nav.join },
  ]

  const go = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  const tapCount = useRef(0)
  const tapTimeout = useRef<number | null>(null)

  const handleLogoClick = () => {
    tapCount.current += 1
    
    if (tapTimeout.current) clearTimeout(tapTimeout.current)
    tapTimeout.current = window.setTimeout(() => {
      tapCount.current = 0
    }, 1500)

    if (tapCount.current >= 5) {
      window.dispatchEvent(new CustomEvent('trigger-matrix'))
      tapCount.current = 0
    } else {
      go('top')
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stem-bg/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
        <button onClick={handleLogoClick} className="group flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="STEM USAS"
            className="h-8 w-8 rounded-lg border border-white/10 object-cover transition group-hover:scale-105"
          />
          <span className="font-display text-sm font-bold tracking-wide text-stem-ink">
            STEM<span className="text-stem-gold"> USAS</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="rounded-lg px-3 py-1.5 text-[13px] font-medium text-stem-muted transition hover:bg-white/5 hover:text-stem-ink"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 font-mono text-[11px] font-semibold">
            {(['en', 'ms'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-2.5 py-1 uppercase transition ${
                  lang === l
                    ? 'bg-stem-gold text-stem-bg shadow-[0_0_12px_rgba(204,145,43,0.4)]'
                    : 'text-stem-muted hover:text-stem-ink'
                }`}
              >
                {l === 'ms' ? 'MY' : l}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-white/10 p-2 text-stem-muted transition hover:text-stem-ink md:hidden"
            aria-label="Menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-b border-white/[0.06] bg-stem-bg/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-3">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="rounded-lg px-3 py-2 text-left text-sm font-medium text-stem-muted transition hover:bg-white/5 hover:text-stem-ink"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
