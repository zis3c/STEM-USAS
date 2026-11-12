import { useLang } from '@/shared/i18n/LanguageContext'
import { scrollToId } from '@/shared/lib/scroll'

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="top"
      className="relative flex min-h-[360px] flex-1 items-center justify-center overflow-hidden px-4 pt-24 pb-10 sm:min-h-[420px] md:min-h-0 md:px-6 md:pt-20 md:pb-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_24px] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_15%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-4xl text-center">
        <p className="animate-fade-up text-[clamp(0.7rem,2.7vw,0.875rem)] font-medium tracking-wide text-stem-gold dark:text-stem-goldlight/90">
          {t.hero.badge}
        </p>

        <h1
          className="animate-fade-up mt-3.5 font-display text-[clamp(1.65rem,7.2vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-stem-ink sm:whitespace-nowrap md:mt-4"
          style={{ animationDelay: '0.08s' }}
        >
          {t.hero.titleA}{' '}
          <span className="text-stem-gold dark:text-stem-goldlight">
            {t.hero.titleB}
          </span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-4 max-w-xl text-balance text-[clamp(0.875rem,3vw,1rem)] leading-relaxed text-stem-muted md:mt-5"
          style={{ animationDelay: '0.16s' }}
        >
          {t.hero.sub}
        </p>

        <div
          className="animate-fade-up mt-7 flex flex-col items-center justify-center gap-2.5 min-[420px]:flex-row min-[420px]:gap-3 md:mt-8"
          style={{ animationDelay: '0.24s' }}
        >
          <button
            onClick={() => scrollToId('join')}
            className="inline-flex min-h-[44px] w-full max-w-[300px] items-center justify-center rounded-xl bg-stem-cta px-5 py-2.5 text-[clamp(0.8125rem,3vw,0.875rem)] font-bold text-stem-ctaink shadow-lg shadow-amber-500/20 transition hover:bg-stem-ctahover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-goldlight focus-visible:ring-offset-2 focus-visible:ring-offset-stem-bg active:scale-[0.98] dark:shadow-none min-[420px]:w-auto min-[420px]:max-w-none sm:rounded-lg sm:px-6"
          >
            {t.hero.ctaPrimary}
          </button>
          <button
            onClick={() => scrollToId('projects')}
            className="inline-flex min-h-[44px] w-full max-w-[300px] items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-[clamp(0.8125rem,3vw,0.875rem)] font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold focus-visible:ring-offset-2 focus-visible:ring-offset-stem-bg active:scale-[0.98] dark:border-stem-line/15 dark:bg-stem-line/[0.04] dark:text-stem-ink dark:hover:border-stem-line/30 dark:hover:bg-stem-line/[0.08] min-[420px]:w-auto min-[420px]:max-w-none sm:rounded-lg sm:px-6"
          >
            {t.hero.ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  )
}
