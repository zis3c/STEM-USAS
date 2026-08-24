import { Atom, Clapperboard, Cpu } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import Reveal from './Reveal'
import SectionHeader, { Card } from './SectionHeader'

const PILLAR_ICONS = [Atom, Cpu, Clapperboard]

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
      <SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} sub={t.about.sub} />

      <Reveal delay={120} className="mx-auto mt-12 max-w-3xl">
        <div className="relative overflow-hidden rounded-2xl border border-stem-gold/20 bg-gradient-to-br from-stem-card to-stem-card2 p-7 md:p-9">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-stem-gold/10 blur-[70px]" />
          <p className="font-mono text-[10px] font-semibold tracking-[0.25em] text-stem-gold">
            {t.about.missionLabel}
          </p>
          <p className="mt-4 font-display text-lg font-medium leading-relaxed text-stem-ink md:text-xl">
            “{t.about.mission}”
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {t.about.pillars.map((pillar, i) => {
          const Icon = PILLAR_ICONS[i]
          return (
            <Reveal key={pillar.title} delay={i * 120}>
              <Card className="group h-full p-7">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-stem-gold/25 bg-stem-gold/[0.08] text-stem-gold transition group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(204,145,43,0.25)]">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <span className="font-mono text-xs font-semibold text-white/15">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-stem-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stem-muted">{pillar.desc}</p>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
