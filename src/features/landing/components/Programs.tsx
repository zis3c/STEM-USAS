import { Code2, Cpu, MonitorPlay, Palette, Sprout, Trees } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import Reveal from './Reveal'
import SectionHeader, { Card } from './SectionHeader'

const ICONS = [Code2, Palette, Cpu, MonitorPlay, Sprout, Trees]

export default function Programs() {
  const { t } = useLang()

  return (
    <section
      id="programs"
      className="relative scroll-mt-16 border-y border-stem-line/[0.08] bg-stem-panel/65 md:flex md:min-h-dvh md:scroll-mt-0 md:flex-col md:justify-center"
    >
      <div className="relative mx-auto w-full max-w-5xl px-4 py-10 sm:py-12 md:px-6 md:pt-20 md:pb-12">
        <SectionHeader eyebrow={t.programs.eyebrow} title={t.programs.title} sub={t.programs.sub} />

        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 md:mt-8 lg:grid-cols-3">
          {t.programs.items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <Card className="group h-full p-4 md:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stem-sky/25 bg-stem-sky/10 text-stem-sky transition group-hover:border-stem-gold/40 group-hover:bg-stem-gold/10 group-hover:text-stem-gold">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <div className="flex flex-wrap justify-end gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-stem-line/10 bg-stem-line/[0.04] px-2 py-0.5 font-mono text-[10px] tracking-wider text-stem-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-stem-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stem-muted">{item.desc}</p>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
