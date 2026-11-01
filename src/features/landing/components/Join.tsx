import { MapPin, FileText, Send } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Join() {
  const { t } = useLang()

  return (
    <section id="join" className="relative mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
      <SectionHeader eyebrow={t.join.eyebrow} title={t.join.title} sub={t.join.sub} />

      <Reveal delay={150} className="mx-auto mt-12 max-w-3xl">
        <div className="rounded-3xl bg-gradient-to-r from-stem-blue/60 via-stem-gold/50 to-stem-blue/60 p-[1px] shadow-[0_0_50px_rgba(204,145,43,0.12)]">
          <div className="rounded-3xl bg-stem-panel px-7 py-10 text-center md:px-12">
            <img
              src="/logo.png"
              alt="STEM USAS"
              className="mx-auto h-16 w-16 rounded-2xl border border-white/10 object-cover shadow-[0_0_30px_rgba(204,145,43,0.2)]"
            />
            <div className="mt-7 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSchZH3A3wvlq2RQE47KorzGNLqDgX48zc4PP46kapENjnBiBA/viewform?fbzx=7657887268860346255"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-stem-gold px-6 py-3 text-sm font-bold text-stem-bg transition hover:scale-[1.03] hover:bg-stem-goldlight active:scale-[0.98] sm:w-auto"
              >
                <FileText size={15} />
                {t.join.form}
              </a>
              <a
                href="https://t.me/STEMUSAS"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2AABEE]/10 px-6 py-3 text-sm font-bold text-[#2AABEE] transition hover:scale-[1.03] hover:bg-[#2AABEE]/20 active:scale-[0.98] sm:w-auto"
              >
                <Send size={15} />
                {t.join.telegram}
              </a>
              <a
                href="https://github.com/zis3c"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-stem-ink transition hover:scale-[1.03] hover:border-white/30 hover:bg-white/[0.07] active:scale-[0.98] sm:w-auto"
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
                {t.join.github}
              </a>
            </div>
            <p className="mt-6 text-xs text-stem-muted">{t.join.note}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={250} className="mx-auto mt-8 max-w-3xl">
        <div className="flex flex-col items-center justify-center gap-1.5 text-center text-xs text-stem-muted sm:flex-row sm:gap-2 sm:text-sm">
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-stem-gold sm:text-[11px]">
            <MapPin size={14} className="shrink-0 text-stem-gold" />
            <span>{t.join.locationLabel}</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="text-slate-300">
            {t.join.location}
          </span>
        </div>
      </Reveal>
    </section>
  )
}
