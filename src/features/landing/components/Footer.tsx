import { Github, Send, Instagram } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import { scrollToId } from '@/shared/lib/scroll'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'programs', label: t.nav.programs },
    { id: 'projects', label: t.nav.projects },
    { id: 'hosting', label: t.nav.hosting },
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
                <Github size={15} />
              </a>
              <a
                href="https://www.instagram.com/persatuan.stem.usas/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 p-2 text-stem-muted transition hover:border-stem-gold/40 hover:text-stem-gold"
                aria-label="Instagram"
              >
                <Instagram size={15} />
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

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-6 md:flex-row">
          <p className="text-[11px] text-stem-muted">
            © {year} STEM USAS - Persatuan Sains Teknologi & Multimedia. {t.footer.rights}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('trigger-matrix'))}
              className="font-mono text-[9px] uppercase tracking-widest text-stem-muted/30 transition hover:text-emerald-400 focus:outline-none"
              title="Override System"
            >
              System: Online
            </button>
            <span className="text-white/10">•</span>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/25">
              {t.footer.made}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
