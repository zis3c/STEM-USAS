import { Github, MapPin, FileText, Send } from 'lucide-react'
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
                <Github size={15} />
                {t.join.github}
              </a>
            </div>
            <p className="mt-6 text-xs text-stem-muted">{t.join.note}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={250} className="mx-auto mt-8 max-w-3xl">
        <div className="flex items-center justify-center gap-2 text-sm text-stem-muted">
          <MapPin size={15} className="shrink-0 text-stem-gold" />
          <span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stem-gold">
              {t.join.locationLabel}
            </span>
            <span className="mx-2 text-white/20">•</span>
            {t.join.location}
          </span>
        </div>
      </Reveal>
    </section>
  )
}
