import { useState, useEffect } from 'react'
import { useLang } from '@/shared/i18n/LanguageContext'
import { useCountUp, useInView } from '@/shared/lib/hooks'
import Reveal from './Reveal'

function StatItem({
  value,
  suffix,
  label,
  active,
  delay,
}: {
  value: number
  suffix: string
  label: string
  active: boolean
  delay: number
}) {
  const count = useCountUp(value, active)
  return (
    <Reveal delay={delay}>
      <div className="text-center">
        <p className="font-display text-4xl font-bold tracking-tight text-stem-ink md:text-5xl">
          <span className="bg-gradient-to-r from-stem-goldlight to-stem-gold bg-clip-text text-transparent">
            {count}
            {suffix}
          </span>
        </p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-stem-muted md:text-[11px]">
          {label}
        </p>
      </div>
    </Reveal>
  )
}

export default function Stats() {
  const { t } = useLang()
  const { ref, inView } = useInView<HTMLDivElement>(0.3)

  const [membersCount, setMembersCount] = useState(120)

  useEffect(() => {
    // NOTE: Ganti URL ini dengan API endpoint dari Google Sheets / Telebot korang.
    // fetch('https://api.stemusas.com/members')
    //   .then(res => res.json())
    //   .then(data => setMembersCount(data.total))
    
    // Simulate live dynamic update
    const timer = setTimeout(() => {
      setMembersCount(185)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const items = [
    { value: membersCount, suffix: '+', label: t.stats.members },
    { value: 3, suffix: '', label: t.stats.products },
    { value: 15, suffix: '+', label: t.stats.events },
    { value: 100, suffix: '%', label: t.stats.built },
  ]

  return (
    <section id="stats" className="relative border-y border-white/[0.05] bg-stem-panel/40">
      <div
        ref={ref}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-10 px-4 py-14 md:grid-cols-4 md:px-6"
      >
        {items.map((item, i) => (
          <StatItem key={item.label} {...item} active={inView} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}
