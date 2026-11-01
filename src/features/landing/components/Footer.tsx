import { Send } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import { scrollToId } from '@/shared/lib/scroll'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'programs', label: t.nav.programs },
    { id: 'projects', label: t.nav.projects },
    { id: 'team', label: t.nav.team },
    { id: 'faq', label: t.nav.faq },
    { id: 'join', label: t.nav.join },
  ]

  return (
    <footer className="border-t border-white/[0.06] bg-stem-panel/60">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <img
                src="/logo.png"
                alt="STEM USAS"
                className="h-9 w-9 rounded-lg border border-white/10 object-cover"
              />
              <span className="font-display text-base font-bold text-stem-ink">
                STEM<span className="text-stem-gold"> USAS</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-stem-muted">
              {t.footer.tagline}
            </p>
            <div className="mt-4 flex justify-center gap-2 md:justify-start">
              <a
                href="https://t.me/stemusasbot"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 p-2 text-stem-muted transition hover:border-stem-gold/40 hover:text-stem-gold"
                aria-label="Telegram"
              >
                <Send size={15} />
              </a>
              <a
                href="https://github.com/zis3c"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 p-2 text-stem-muted transition hover:border-stem-gold/40 hover:text-stem-gold"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/persatuan.stem.usas/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 p-2 text-stem-muted transition hover:border-stem-gold/40 hover:text-stem-gold"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@persatuan.stem.usas"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 p-2 text-stem-muted transition hover:border-stem-gold/40 hover:text-stem-gold"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToId(l.id)}
                className="text-xs font-medium text-stem-muted transition hover:text-stem-gold"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-6 text-center md:flex-row md:text-left">
          <p className="text-[11px] leading-relaxed text-stem-muted text-center md:text-left">
            © {year} STEM USAS • Persatuan Sains Teknologi & Multimedia. {t.footer.rights}
          </p>
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-2.5">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('trigger-matrix'))}
              className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-stem-muted/60 transition hover:text-emerald-400 focus:outline-none"
              title="Override System"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="leading-none">System: Online</span>
            </button>
            <span className="hidden text-white/10 sm:inline">•</span>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 text-center">
              {t.footer.made}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
