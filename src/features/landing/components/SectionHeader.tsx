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
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="font-mono text-[11px] font-semibold tracking-[0.25em] text-stem-gold">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stem-ink md:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-sm leading-relaxed text-stem-muted md:text-base">{sub}</p>}
    </Reveal>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`glass-card rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] ${className}`}
    >
      {children}
    </div>
  )
}
