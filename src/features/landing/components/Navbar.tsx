import { useEffect, useState, useRef } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import { useTheme } from '@/shared/theme/useTheme'
import { scrollToId } from '@/shared/lib/scroll'
import type { Lang } from '@/shared/i18n/translations'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'programs', label: t.nav.programs },
    { id: 'projects', label: t.nav.projects },
    { id: 'discord', label: t.nav.discord },
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
      className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? 'px-2.5 pt-2 sm:px-5 sm:pt-3' : 'px-3 pt-1.5 sm:px-4'
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex items-center justify-between transition-[max-width,height,padding,background-color,border-color,box-shadow,border-radius] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:grid lg:grid-cols-[1fr_auto_1fr] ${
          scrolled
            ? 'h-12 max-w-5xl rounded-2xl border border-slate-200/80 bg-white/75 px-3 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-md dark:border-stem-gold/20 dark:bg-[#0B1426]/65 dark:shadow-[0_10px_28px_rgba(0,0,0,0.45)] sm:rounded-full sm:px-5'
            : 'h-14 max-w-6xl rounded-2xl border border-transparent bg-transparent px-1 sm:rounded-full sm:px-4 md:px-6'
        }`}
      >
        <button
          onClick={handleLogoClick}
          className="group flex shrink-0 items-center gap-2 rounded-full py-1 pr-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold lg:justify-self-start"
        >
          <img
            src="/stem-logo.png"
            alt="STEM USAS"
            className="h-7 w-7 rounded-lg border border-stem-line/10 object-cover transition group-hover:scale-105"
          />
          <span className="font-display text-[13px] font-bold tracking-wide text-stem-ink sm:text-sm">
            STEM<span className="hidden text-stem-gold min-[360px]:inline"> USAS</span>
          </span>
        </button>

        <div className="hidden items-center gap-0.5 md:flex lg:gap-1 lg:justify-self-center">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12.5px] font-medium text-stem-muted transition-colors hover:bg-stem-line/[0.06] hover:text-stem-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold lg:px-3 lg:text-[13px]"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2 lg:justify-self-end">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-stem-muted transition hover:bg-stem-line/[0.07] hover:text-stem-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold active:scale-95 sm:h-8 sm:w-8 sm:rounded-full sm:border sm:border-stem-line/10 sm:bg-stem-line/[0.04]"
          >
            <span
              key={theme}
              className="inline-flex animate-[themeIconPop_0.35s_cubic-bezier(0.22,1,0.36,1)]"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </span>
          </button>

          <div className="flex items-center rounded-full border border-stem-line/10 bg-stem-line/[0.04] p-0.5 font-mono text-[10.5px] font-semibold sm:text-[11px]">
            {(['en', 'ms'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-2.5 py-1 uppercase transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold sm:px-2.5 sm:py-1 ${
                  lang === l
                    ? 'bg-stem-cta text-stem-ctaink'
                    : 'text-stem-muted hover:text-stem-ink'
                }`}
              >
                {l === 'ms' ? 'MY' : l}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-stem-muted transition hover:bg-stem-line/[0.07] hover:text-stem-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-white/80 bg-white/75 shadow-[0_16px_40px_rgba(15,23,42,0.12)] backdrop-blur-md transition-all duration-300 dark:border-stem-gold/20 dark:bg-[#0B1426]/70 dark:shadow-[0_16px_40px_rgba(0,0,0,0.5)] md:hidden ${
          open ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 border-transparent opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 p-3">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="flex min-h-[44px] w-full items-center rounded-xl px-3.5 py-2 text-left text-sm font-medium text-stem-muted transition hover:bg-stem-line/[0.06] hover:text-stem-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
