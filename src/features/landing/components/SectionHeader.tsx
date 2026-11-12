import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string
  title: string
  sub?: string
}) {
  return (
    <Reveal className="mx-auto max-w-xl text-center">
      <p className="font-mono text-[clamp(0.65rem,2.3vw,0.6875rem)] font-semibold uppercase tracking-[0.2em] text-stem-gold">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-[clamp(1.4rem,5.2vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-stem-ink">
        {title}
      </h2>
      {sub && (
        <p className="mt-2.5 text-[clamp(0.85rem,2.9vw,1rem)] leading-relaxed text-stem-muted sm:mt-3">
          {sub}
        </p>
      )}
    </Reveal>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`glass-card rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] ${className}`}
    >
      {children}
    </div>
  )
}
