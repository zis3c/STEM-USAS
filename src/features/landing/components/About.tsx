import { Atom, Clapperboard, Cpu } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import Reveal from './Reveal'
import SectionHeader, { Card } from './SectionHeader'

const PILLAR_ICONS = [Atom, Cpu, Clapperboard]

export default function About() {
  const { t } = useLang()

  return (
    <section
      id="about"
      className="relative mx-auto max-w-5xl scroll-mt-16 px-4 py-10 sm:py-12 md:flex md:min-h-dvh md:scroll-mt-0 md:flex-col md:justify-center md:px-6 md:pt-20 md:pb-14"
    >
      <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} sub={t.about.sub} />

      <Reveal delay={100} className="mx-auto mt-6 max-w-3xl sm:mt-8 md:mt-10">
        <div className="relative overflow-hidden rounded-2xl border border-amber-200/70 bg-amber-50/70 p-4 shadow-sm dark:border-stem-gold/20 dark:bg-stem-card dark:shadow-none sm:p-6 md:p-7">
          <p className="font-mono text-[10px] font-semibold tracking-[0.22em] text-stem-gold">
            {t.about.missionLabel}
          </p>
          <p className="mt-3 font-display text-base font-medium leading-relaxed text-stem-ink md:text-lg">
            “{t.about.mission}”
          </p>
        </div>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
        {t.about.pillars.map((pillar, i) => {
          const Icon = PILLAR_ICONS[i]
          return (
            <Reveal
              key={pillar.title}
              delay={i * 90}
              className="last:sm:col-span-2 last:md:col-span-1"
            >
              <Card className="group h-full p-5 md:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-stem-gold/25 bg-stem-gold/[0.08] text-stem-gold transition group-hover:scale-105">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <span className="font-mono text-xs font-semibold text-stem-muted">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-stem-ink md:text-lg">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stem-muted">{pillar.desc}</p>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
