import { ArrowRight, Atom, Code2, Cpu } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import { scrollToId } from '@/shared/lib/scroll'
import { useDecodeText } from '@/shared/lib/hooks'

export default function Hero() {
  const { t } = useLang()
  const badge = useDecodeText(t.hero.badge)

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,black,transparent)]" />
        <div className="animate-hero-glow absolute -left-32 top-16 h-96 w-96 rounded-full bg-stem-blue/40 blur-[130px]" />
        <div className="animate-float-slow absolute -right-24 bottom-24 h-[28rem] w-[28rem] rounded-full bg-stem-gold/15 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stem-sky/10 blur-[110px]" />
      </div>

      <Atom
        className="animate-float pointer-events-none absolute right-[12%] top-[22%] hidden text-stem-gold/25 md:block"
        size={56}
        strokeWidth={1}
      />
      <Cpu
        className="animate-float-slow pointer-events-none absolute left-[8%] top-[58%] hidden text-stem-sky/25 md:block"
        size={48}
        strokeWidth={1}
      />
      <Code2
        className="animate-float pointer-events-none absolute bottom-[18%] right-[24%] hidden text-stem-goldlight/20 lg:block"
        size={44}
        strokeWidth={1}
        style={{ animationDelay: '1.4s' }}
      />

      <div className="relative mx-auto w-full max-w-4xl px-4 py-24 text-center md:px-6">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-stem-gold/25 bg-stem-gold/[0.07] px-4 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-stem-goldlight md:text-[11px]">
            {badge}
          </span>
        </div>

        <h1
          className="animate-fade-up mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight text-stem-ink md:text-7xl"
          style={{ animationDelay: '0.1s' }}
        >
          {t.hero.titleA}
          <br />
          <span className="bg-gradient-to-r from-stem-gold via-stem-goldlight to-stem-gold bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(204,145,43,0.25)]">
            {t.hero.titleB}
          </span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-balance text-sm leading-relaxed text-stem-muted md:text-base"
          style={{ animationDelay: '0.2s' }}
        >
          {t.hero.sub}
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: '0.3s' }}
        >
          <button
            onClick={() => scrollToId('join')}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-stem-gold px-7 py-3 text-sm font-bold text-stem-bg shadow-[0_0_28px_rgba(204,145,43,0.35)] transition hover:scale-[1.03] hover:bg-stem-goldlight active:scale-[0.98] sm:w-auto"
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToId('stats')}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-stem-muted transition hover:text-stem-ink md:flex"
      >
        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <span className="animate-wheel h-1.5 w-1 rounded-full bg-stem-gold" />
        </span>
      </button>
    </section>
  )
}
