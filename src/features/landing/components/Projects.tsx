import { ExternalLink, Github, Send } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

export default function Projects() {
  const { t } = useLang()

  const images = ['/logo.png', '/project-notifier.png', '/project-timetable.png']

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
      <SectionHeader eyebrow={t.projects.eyebrow} title={t.projects.title} sub={t.projects.sub} />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((project, i) => (
          <Reveal key={project.name} delay={i * 130}>
            <TiltCard className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-stem-card via-stem-card2 to-stem-card3 p-6 transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] md:p-7">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 animate-shimmer bg-gradient-to-r from-transparent via-white/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-stem-gold/[0.08] blur-[50px] transition-all duration-500 group-hover:bg-stem-gold/[0.15]" />

                <div className="relative flex items-center justify-between">
                  <img
                    src={images[i]}
                    alt={project.name}
                    className="h-12 w-12 rounded-xl border border-white/10 bg-white/[0.04] object-contain p-1"
                  />
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[9px] font-bold tracking-widest text-emerald-300">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    {t.projects.live}
                  </span>
                </div>

                <h3 className="relative mt-5 font-display text-lg font-bold text-stem-ink">
                  {project.name}
                </h3>
                <p className="relative mt-2 min-h-[72px] text-[13px] leading-relaxed text-stem-muted">
                  {project.desc}
                </p>

                <div className="relative mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-stem-sky/20 bg-stem-blue/20 px-2 py-0.5 font-mono text-[9px] font-semibold tracking-wider text-stem-sky"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-4">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-stem-muted transition hover:text-stem-ink"
                  >
                    <Github size={14} />
                    {t.projects.repo}
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto flex items-center gap-1.5 rounded-full border border-stem-gold/30 bg-stem-gold/[0.08] px-3 py-1 text-xs font-bold text-stem-goldlight transition hover:scale-[1.04] hover:bg-stem-gold hover:text-stem-bg"
                  >
                    {project.link.includes('t.me') ? <Send size={12} /> : <ExternalLink size={12} />}
                    {t.projects.try}
                  </a>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
