import { useState } from 'react'
import { ExternalLink, Eye, Send } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import { GitHubMark } from '@/shared/components/BrandIcons'
import { scrollToTop } from '@/shared/lib/scroll'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

export default function Projects() {
  const { t } = useLang()
  const [currentTap, setCurrentTap] = useState(-1)

  const images = ['/stem-logo.png', '/project-notifier.png', '/project-timetable.png', '/stem-logo.png']

  const handleCurrentProjectClick = () => {
    const reactions = t.projects.currentReactions
    if (currentTap >= reactions.length - 1) {
      setCurrentTap(-1)
      scrollToTop()
      return
    }
    setCurrentTap((prev) => prev + 1)
  }

  return (
    <section
      id="projects"
      className="relative mx-auto w-full max-w-[92rem] scroll-mt-16 px-4 py-10 sm:px-6 md:flex md:min-h-dvh md:scroll-mt-0 md:flex-col md:justify-center md:pt-20 md:pb-12 xl:px-10"
    >
      <SectionHeader eyebrow={t.projects.eyebrow} title={t.projects.title} sub={t.projects.sub} />

      <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:mt-8 lg:grid-cols-4 lg:gap-4 xl:gap-5">
        {t.projects.items.map((project, i) => {
          const isCurrent = project.link === '#top'
          const currentLabel =
            currentTap >= 0 ? t.projects.currentReactions[currentTap] : t.projects.currentCta

          return (
            <Reveal key={project.name} delay={(i % 4) * 70}>
              <TiltCard className="h-full">
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-4 transition-colors duration-300 sm:p-5 ${
                    isCurrent && currentTap >= 0
                      ? 'border-stem-sky/45 bg-stem-card2'
                      : 'border-stem-line/[0.08] bg-stem-card hover:border-stem-line/20 hover:bg-stem-card2'
                  }`}
                >
                  <div className="relative flex items-center justify-between">
                    <img
                      src={images[i]}
                      alt={project.name}
                      className="h-11 w-11 rounded-xl border border-stem-line/10 bg-stem-line/[0.04] object-contain p-1"
                    />
                    {isCurrent ? (
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-stem-sky/35 bg-stem-sky/10 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-stem-sky dark:text-[#9dbbff]">
                        <span className="h-1.5 w-1.5 rounded-full bg-stem-sky dark:bg-[#9dbbff]" />
                        {t.projects.currentBadge}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-600/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-emerald-700 dark:border-emerald-500/30 dark:text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                        {t.projects.live}
                      </span>
                    )}
                  </div>

                  <h3 className="relative mt-4 font-display text-[clamp(1rem,3.6vw,1.125rem)] font-bold text-stem-ink">
                    {project.name}
                  </h3>
                  <p className="relative mt-2 flex-1 text-[clamp(0.8125rem,2.9vw,0.84rem)] leading-relaxed text-stem-muted">
                    {project.desc}
                  </p>

                  <div className="relative mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-stem-sky/30 bg-stem-sky/10 px-2 py-0.5 font-mono text-[10px] font-medium tracking-wide text-stem-sky dark:bg-stem-blue/25 dark:text-[#9dbbff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-stem-line/[0.08] pt-3.5">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-2 text-xs font-semibold text-stem-muted transition hover:text-stem-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold sm:min-h-[36px]"
                    >
                      <GitHubMark size={14} />
                      {t.projects.repo}
                    </a>
                    {isCurrent ? (
                      <button
                        type="button"
                        onClick={handleCurrentProjectClick}
                        className="inline-flex min-h-[44px] shrink-0 whitespace-nowrap items-center gap-1.5 rounded-lg border border-stem-sky/35 bg-stem-sky/10 px-3 py-1.5 text-xs font-bold text-stem-sky transition hover:bg-stem-sky hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold dark:text-[#9dbbff] dark:hover:bg-stem-sky dark:hover:text-white sm:min-h-[36px]"
                      >
                        <Eye size={12} />
                        {currentLabel}
                      </button>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-stem-gold/30 bg-stem-cta/15 px-3 py-1.5 text-xs font-bold text-stem-gold transition hover:bg-stem-cta hover:text-stem-ctaink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold dark:bg-stem-gold/[0.08] dark:text-stem-goldlight sm:min-h-[36px]"
                      >
                        {project.link.includes('t.me') ? (
                          <Send size={12} />
                        ) : (
                          <ExternalLink size={12} />
                        )}
                        {t.projects.try}
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
