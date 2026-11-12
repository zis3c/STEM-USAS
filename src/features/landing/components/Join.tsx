import { MapPin, FileText, Send } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import { GitHubMark } from '@/shared/components/BrandIcons'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Join() {
  const { t } = useLang()

  return (
    <section
      id="join"
      className="relative scroll-mt-16 border-t border-stem-line/[0.08] bg-stem-panel/45 px-4 py-10 sm:py-12 md:flex md:min-h-dvh md:scroll-mt-0 md:flex-col md:justify-center md:px-6 md:pt-20 md:pb-14"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeader eyebrow={t.join.eyebrow} title={t.join.title} sub={t.join.sub} />

        <Reveal delay={120} className="mx-auto mt-6 max-w-2xl sm:mt-8 md:mt-10">
          <div className="rounded-2xl border border-amber-200/70 bg-amber-50/70 px-6 py-8 text-center shadow-sm dark:border-stem-gold/25 dark:bg-stem-panel dark:shadow-none md:px-10">
          <img
            src="/stem-logo.png"
            alt="STEM USAS"
            className="mx-auto h-14 w-14 rounded-2xl border border-stem-line/10 object-cover"
          />
          <div className="mt-6 flex flex-col flex-wrap items-center justify-center gap-2 min-[420px]:flex-row min-[420px]:gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSchZH3A3wvlq2RQE47KorzGNLqDgX48zc4PP46kapENjnBiBA/viewform?fbzx=7657887268860346255"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[36px] w-full max-w-[260px] items-center justify-center gap-2 rounded-lg bg-stem-cta px-4 py-1.5 text-xs font-bold text-stem-ctaink transition hover:bg-stem-ctahover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-goldlight focus-visible:ring-offset-2 focus-visible:ring-offset-stem-panel active:scale-[0.98] min-[420px]:w-auto min-[420px]:max-w-none sm:min-h-[42px] sm:px-5 sm:py-2 sm:text-sm"
            >
              <FileText size={15} />
              {t.join.form}
            </a>
            <a
              href="https://t.me/STEMUSAS"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[36px] w-full max-w-[260px] items-center justify-center gap-2 rounded-lg border border-[#2AABEE]/30 bg-[#2AABEE]/10 px-4 py-1.5 text-xs font-bold text-[#0369a1] transition hover:bg-[#2AABEE]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold active:scale-[0.98] dark:text-[#60c5f7] min-[420px]:w-auto min-[420px]:max-w-none sm:min-h-[42px] sm:px-5 sm:py-2 sm:text-sm"
            >
              <Send size={15} />
              {t.join.telegram}
            </a>
            <a
              href="https://github.com/zis3c"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[36px] w-full max-w-[260px] items-center justify-center gap-2 rounded-lg border border-stem-line/15 bg-stem-line/[0.04] px-4 py-1.5 text-xs font-semibold text-stem-ink transition hover:border-stem-line/30 hover:bg-stem-line/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold active:scale-[0.98] min-[420px]:w-auto min-[420px]:max-w-none sm:min-h-[42px] sm:px-5 sm:py-2 sm:text-sm"
            >
              <GitHubMark size={15} />
              {t.join.github}
            </a>
          </div>
          <p className="mt-5 text-xs text-stem-muted">{t.join.note}</p>
        </div>
      </Reveal>

      <Reveal delay={200} className="mx-auto mt-6 max-w-2xl">
        <div className="flex flex-col items-center justify-center gap-1.5 text-center text-xs text-stem-muted sm:flex-row sm:gap-2 sm:text-sm">
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-stem-gold sm:text-[11px]">
            <MapPin size={14} className="shrink-0 text-stem-gold" />
            <span>{t.join.locationLabel}</span>
          </div>
          <span className="hidden text-stem-line/20 sm:inline">•</span>
          <span className="text-stem-ink">
            {t.join.location}
          </span>
        </div>
      </Reveal>
      </div>
    </section>
  )
}
