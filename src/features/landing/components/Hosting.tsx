import { CheckCircle2, Send } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import Reveal from './Reveal'
import SectionHeader, { Card } from './SectionHeader'

export default function Hosting() {
  const { t } = useLang()

  return (
    <section id="hosting" className="relative border-y border-white/[0.05] bg-stem-panel/40">
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-stem-gold/10 blur-[110px]" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <SectionHeader eyebrow={t.hosting.eyebrow} title={t.hosting.title} sub={t.hosting.sub} />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full p-7 md:p-8">
              <ul className="space-y-4">
                {t.hosting.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-stem-gold" />
                    <span className="text-sm leading-relaxed text-stem-ink/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#04070f]">
                <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 font-mono text-[9px] uppercase tracking-widest text-stem-muted">
                    stem-server
                  </span>
                </div>
                <div className="space-y-1.5 p-4 font-mono text-[11px] leading-relaxed md:text-xs">
                  <p className="text-stem-ink">{t.hosting.terminal.line1}</p>
                  <p className="text-stem-muted">{t.hosting.terminal.line2}</p>
                  <p className="text-emerald-400">{t.hosting.terminal.line3}</p>
                  <p className="text-stem-goldlight">{t.hosting.terminal.line4}</p>
                </div>
              </div>
            </Card>
          </Reveal>

          <div className="space-y-4">
            {t.hosting.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 120}>
                <Card className="flex gap-5 p-6">
                  <span className="font-display text-2xl font-bold text-stem-gold/40">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-stem-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-stem-muted">{step.desc}</p>
                  </div>
                </Card>
              </Reveal>
            ))}

            <Reveal delay={360}>
              <a
                href="https://t.me/stemusasbot"
                target="_blank"
                rel="noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-stem-gold px-6 py-4 font-display text-sm font-bold text-stem-bg shadow-[0_0_28px_rgba(204,145,43,0.3)] transition hover:scale-[1.02] hover:bg-stem-goldlight active:scale-[0.98]"
              >
                <Send size={16} className="transition group-hover:translate-x-0.5" />
                {t.hosting.cta}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
