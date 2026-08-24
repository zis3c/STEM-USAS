import { Code2, Mic, MonitorPlay, Rocket, Trophy, Users } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import Reveal from './Reveal'
import SectionHeader, { Card } from './SectionHeader'

const ICONS = [Code2, Trophy, Mic, Rocket, MonitorPlay, Users]
const SPANS = [
  'md:col-span-2',
  '',
  '',
  'md:col-span-2',
  '',
  'md:col-span-2',
]

export default function Programs() {
  const { t } = useLang()

  return (
    <section id="programs" className="relative border-y border-white/[0.05] bg-stem-panel/40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-stem-blue/15 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <SectionHeader eyebrow={t.programs.eyebrow} title={t.programs.title} sub={t.programs.sub} />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.programs.items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal key={item.title} delay={(i % 3) * 110} className={SPANS[i]}>
                <Card className="group h-full p-6 md:p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-stem-sky/25 bg-stem-blue/20 text-stem-sky transition group-hover:scale-110 group-hover:border-stem-gold/40 group-hover:bg-stem-gold/10 group-hover:text-stem-gold">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div className="flex gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-stem-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-stem-ink md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stem-muted">{item.desc}</p>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
