import { LockKeyhole, MessageSquare, Send, UserPlus } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import { DiscordMark } from '@/shared/components/BrandIcons'
import Reveal from './Reveal'

const DISCORD_INVITE = 'https://discord.gg/kcs7BZSC2'
const BOT_LINK = 'https://t.me/stemusasbot'
const PILLAR_ICONS = [UserPlus, LockKeyhole, MessageSquare]

export default function Discord() {
  const { t } = useLang()

  return (
    <section
      id="discord"
      className="relative scroll-mt-16 overflow-hidden border-y border-[#5865F2]/25 bg-[#dfe4fc] dark:bg-[#101322] md:flex md:min-h-dvh md:scroll-mt-0 md:flex-col md:justify-center"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_40%,rgba(88,101,242,0.12),transparent_72%)] dark:bg-[radial-gradient(ellipse_65%_55%_at_50%_40%,rgba(88,101,242,0.18),transparent_72%)]"
        aria-hidden="true"
      />
      <DiscordMark
        size={260}
        className="pointer-events-none absolute -right-14 -bottom-14 text-[#5865F2] opacity-[0.04] sm:opacity-[0.06] dark:opacity-[0.045]"
      />

      <div className="relative mx-auto w-full max-w-5xl px-4 py-10 sm:py-12 md:px-6 md:pt-20 md:pb-14">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#434dd6] dark:text-[#99a7ff]">
            {t.discord.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-stem-ink sm:text-3xl md:text-4xl">
            {t.discord.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stem-muted md:text-base">
            {t.discord.sub}
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-8 max-w-3xl md:mt-9">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#5865F2]/25 bg-white p-6 shadow-sm dark:border-[#5865F2]/30 dark:bg-[#171b2e] dark:shadow-none sm:flex-row sm:items-center md:p-7">
            <div>
              <p className="font-mono text-[10px] font-semibold tracking-[0.22em] text-[#434dd6] dark:text-[#99a7ff]">
                {t.discord.cardLabel}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stem-ink md:text-base">
                {t.discord.cardDesc}
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-2.5 min-[420px]:flex-row sm:w-auto">
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-[#5865F2] px-4 py-2.5 text-[clamp(0.8125rem,3vw,0.875rem)] font-semibold text-white transition hover:bg-[#4752C4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#434dd6] dark:focus-visible:ring-[#99a7ff] sm:flex-initial"
              >
                <DiscordMark />
                {t.discord.ctaDiscord}
              </a>
              <a
                href={BOT_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-[#5865F2]/30 bg-stem-line/[0.04] px-4 py-2.5 text-[clamp(0.8125rem,3vw,0.875rem)] font-medium text-stem-ink transition hover:border-[#434dd6]/60 hover:text-[#434dd6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#434dd6] dark:hover:border-[#99a7ff]/60 dark:hover:text-[#c7d0ff] dark:focus-visible:ring-[#99a7ff] sm:flex-initial"
              >
                <Send size={14} />
                {t.discord.ctaBot}
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {t.discord.pillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i]
            return (
              <Reveal
                key={pillar.title}
                delay={i * 90}
                className="last:sm:col-span-2 last:md:col-span-1"
              >
                <div className="group h-full rounded-2xl border border-[#5865F2]/25 bg-white p-5 shadow-sm transition duration-200 hover:border-[#5865F2]/50 hover:bg-[#f6f7ff] dark:bg-[#171b2e] dark:shadow-none dark:hover:bg-[#1c2138] md:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#5865F2]/30 bg-[#5865F2]/10 text-[#434dd6] transition group-hover:scale-105 dark:border-[#5865F2]/35 dark:bg-[#5865F2]/15 dark:text-[#99a7ff]">
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
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
