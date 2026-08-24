import { Home } from 'lucide-react'
import { useLang, LanguageProvider } from '@/shared/i18n/LanguageContext'

function NotFoundContent() {
  const { t } = useLang()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-clip bg-stem-bg p-6 text-center font-sans text-stem-ink">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,black,transparent)]" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stem-gold/10 blur-[130px]" />
      </div>

      <div className="relative z-10">
        <h1 className="font-display text-8xl font-bold tracking-tight text-stem-ink md:text-9xl">
          404
        </h1>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-stem-gold/25 bg-stem-gold/[0.07] px-4 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-stem-goldlight md:text-[11px] uppercase">
            {t.notFound?.badge || 'SYSTEM_OFFLINE'}
          </span>
        </div>
        
        <p className="mx-auto mt-8 max-w-sm text-balance text-sm leading-relaxed text-stem-muted md:text-base">
          {t.notFound?.desc || "Oops! The page you're looking for doesn't exist or has been moved to another dimension."}
        </p>

        <a
          href="/"
          className="group mx-auto mt-10 flex w-max items-center justify-center gap-2 rounded-full bg-stem-gold px-7 py-3 text-sm font-bold text-stem-bg shadow-[0_0_28px_rgba(204,145,43,0.35)] transition hover:scale-[1.03] hover:bg-stem-goldlight active:scale-[0.98]"
        >
          <Home size={16} />
          {t.notFound?.cta || "Return to Base"}
        </a>
      </div>
    </div>
  )
}

export default function NotFound() {
  return (
    <LanguageProvider>
      <NotFoundContent />
    </LanguageProvider>
  )
}
