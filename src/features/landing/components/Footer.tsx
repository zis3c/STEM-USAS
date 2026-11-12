import { Send } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import { DiscordMark, GitHubMark } from '@/shared/components/BrandIcons'
import { scrollToId } from '@/shared/lib/scroll'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'programs', label: t.nav.programs },
    { id: 'projects', label: t.nav.projects },
    { id: 'discord', label: t.nav.discord },
    { id: 'faq', label: t.nav.faq },
    { id: 'join', label: t.nav.join },
  ]

  return (
    <footer className="border-t border-stem-line/[0.08] bg-stem-panel/60">
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <img
                src="/stem-logo.png"
                alt="STEM USAS"
                className="h-9 w-9 rounded-lg border border-stem-line/10 object-cover"
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stem-line/10 text-stem-muted transition hover:border-stem-gold/40 hover:text-stem-gold"
                aria-label="Telegram"
              >
                <Send size={15} />
              </a>
              <a
                href="https://discord.gg/kcs7BZSC2"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stem-line/10 text-stem-muted transition hover:border-stem-gold/40 hover:text-stem-gold"
                aria-label="Discord"
              >
                <DiscordMark size={15} />
              </a>
              <a
                href="https://github.com/zis3c"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stem-line/10 text-stem-muted transition hover:border-stem-gold/40 hover:text-stem-gold"
                aria-label="GitHub"
              >
                <GitHubMark size={15} />
              </a>
              <a
                href="https://www.instagram.com/persatuan.stem.usas/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stem-line/10 text-stem-muted transition hover:border-stem-gold/40 hover:text-stem-gold"
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stem-line/10 text-stem-muted transition hover:border-stem-gold/40 hover:text-stem-gold"
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
                className="inline-flex min-h-[36px] items-center text-xs font-medium text-stem-muted transition hover:text-stem-gold"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-stem-line/[0.08] pt-6 text-center md:flex-row md:text-left">
          <p className="text-[11px] leading-relaxed text-stem-muted text-center md:text-left">
            © {year} STEM USAS • Persatuan Sains Teknologi & Multimedia. {t.footer.rights}
          </p>
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-2.5">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('trigger-matrix'))}
              className="inline-flex items-center gap-1.5 rounded px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-stem-muted transition hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold dark:hover:text-emerald-400"
              title="Override System"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              <span className="leading-none">System: Online</span>
            </button>
            <span className="hidden text-stem-line/20 sm:inline">•</span>
            <p className="font-mono text-[10px] uppercase tracking-widest text-stem-muted text-center">
              {t.footer.made}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
