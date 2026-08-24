import { useLang } from '@/shared/i18n/LanguageContext'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Team() {
  const { t } = useLang()

  const members = [
    {
      name: 'Afeef',
      role: t.team.roles.president,
      img: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Afeef',
    },
    {
      name: 'Syaf',
      role: t.team.roles.pa,
      img: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Syaf',
    },
    {
      name: 'Zulaika',
      role: t.team.roles.secretary,
      img: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Zulaika',
    },
  ]

  return (
    <section id="team" className="relative mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
      <SectionHeader eyebrow={t.team.eyebrow} title={t.team.title} sub={t.team.sub} />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {members.map((m, i) => (
          <Reveal key={m.name} delay={i * 100}>
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-stem-card p-6 text-center transition hover:border-stem-gold/30 hover:bg-white/[0.03]">
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border border-white/10 bg-stem-bg p-2 transition group-hover:scale-105 group-hover:border-stem-gold/40">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-stem-ink">{m.name}</h3>
              <p className="mt-1 text-sm text-stem-gold">{m.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
