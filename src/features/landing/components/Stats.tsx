import { useEffect, useState } from 'react'
import { useLang } from '@/shared/i18n/LanguageContext'
import { useCountUp, useInView } from '@/shared/lib/hooks'
import Reveal from './Reveal'

const DEFAULT_STATS_API_URL = 'https://bot.zis3c.dev/api/public/stats'

type MembersState =
  | { status: 'loading' }
  | { status: 'ready'; count: number }
  | { status: 'error' }

function StatItem({
  value,
  prefix = '',
  suffix = '',
  label,
  active,
  delay,
  displayText,
  statusHint,
}: {
  value: number
  prefix?: string
  suffix?: string
  label: string
  active: boolean
  delay: number
  displayText?: string
  statusHint?: string
}) {
  const count = useCountUp(value, active)
  return (
    <Reveal delay={delay}>
      <div className="text-center">
        <p
          className="font-display text-[clamp(1.5rem,5.5vw,2.25rem)] font-bold leading-none tracking-tight text-stem-gold dark:text-stem-goldlight"
          aria-label={statusHint}
        >
          {displayText ?? `${prefix}${count}${suffix}`}
        </p>
        <p className="mt-1.5 font-mono text-[clamp(0.625rem,2.1vw,0.6875rem)] uppercase tracking-[0.16em] text-stem-muted sm:tracking-[0.18em]">
          {label}
        </p>
      </div>
    </Reveal>
  )
}

export default function Stats() {
  const { t } = useLang()
  const { ref, inView } = useInView<HTMLDivElement>(0.25)
  const [members, setMembers] = useState<MembersState>({ status: 'loading' })

  useEffect(() => {
    let cancelled = false
    const endpoint = import.meta.env.VITE_STATS_API_URL || DEFAULT_STATS_API_URL
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 4000)

    fetch(endpoint, { signal: controller.signal, headers: { Accept: 'application/json' } })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<{ active_members?: unknown }>
      })
      .then((data) => {
        if (cancelled) return
        if (typeof data.active_members === 'number' && Number.isFinite(data.active_members)) {
          setMembers({ status: 'ready', count: Math.max(0, Math.floor(data.active_members)) })
        } else {
          setMembers({ status: 'error' })
        }
      })
      .catch(() => {
        if (!cancelled) {
          setMembers({ status: 'error' })
        }
      })
      .finally(() => {
        window.clearTimeout(timeout)
      })

    return () => {
      cancelled = true
      window.clearTimeout(timeout)
      controller.abort()
    }
  }, [])

  const memberItem =
    members.status === 'ready'
      ? { value: members.count, suffix: '', label: t.stats.members }
      : members.status === 'loading'
        ? {
          value: 0,
          displayText: '...',
          statusHint: t.stats.membersLoading,
          label: t.stats.members,
        }
        : {
          value: 0,
          displayText: '—',
          statusHint: t.stats.membersUnavailable,
          label: t.stats.members,
        }

  const items = [
    memberItem,
    { value: 4, suffix: '', label: t.stats.products },
    { value: 10, prefix: 'RM', suffix: '', label: t.stats.fee },
    { value: 100, suffix: '%', label: t.stats.built },
  ]

  return (
    <section id="stats" className="relative border-y border-stem-line/[0.08] bg-stem-panel/60">
      <div
        ref={ref}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-x-3 gap-y-5 px-4 py-7 sm:gap-x-4 sm:gap-y-6 sm:py-8 md:grid-cols-4 md:px-6 md:py-12"
      >
        {items.map((item, i) => (
          <StatItem key={item.label} {...item} active={inView} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
