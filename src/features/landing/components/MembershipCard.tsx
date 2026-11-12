import { useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { useLang } from '@/shared/i18n/LanguageContext'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function MembershipCard() {
  const { lang } = useLang()
  const cardRef = useRef<HTMLDivElement>(null)
  const decodeRef = useRef<HTMLDivElement>(null)
  const [tilted, setTilted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)',
  })

  const targetId = 'STEM(25/26)0067'

  useEffect(() => {
    const el = decodeRef.current
    if (!el) return
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    const stableChars = new Set(['-', ' ', '/', '.', '(', ')'])
    let frame = 0
    const totalFrames = 90

    const randomChar = () => chars[Math.floor(Math.random() * chars.length)]

    let raf: number
    const startDelay = setTimeout(() => {
      const renderFrame = () => {
        frame += 1
        const progress = frame / totalFrames
        const eased = progress < 0.16 ? 0 : Math.pow((progress - 0.16) / 0.84, 1.15)
        const settlePoint = Math.floor(eased * targetId.length)

        const next = Array.from(targetId)
          .map((ch, index) => {
            if (stableChars.has(ch)) return ch
            if (index < settlePoint) return ch
            return Math.random() > 0.16 ? randomChar() : ch
          })
          .join('')

        if (decodeRef.current) decodeRef.current.textContent = next

        if (frame < totalFrames) {
          raf = requestAnimationFrame(renderFrame)
        } else if (decodeRef.current) {
          decodeRef.current.textContent = targetId
          decodeRef.current.classList.add('done')
        }
      }
      raf = requestAnimationFrame(renderFrame)
    }, 260)

    return () => {
      clearTimeout(startDelay)
      cancelAnimationFrame(raf)
    }
  }, [])

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    if (!rect.width || !rect.height) return

    const maxTilt = 8
    const cx = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    const cy = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))
    const rx = (0.5 - cy) * maxTilt
    const ry = (cx - 0.5) * maxTilt

    setTilted(true)
    setTiltStyle({
      transform: `perspective(1200px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(1.008)`,
    })
  }

  const handlePointerLeave = () => {
    setTilted(false)
    setTiltStyle({
      transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)',
    })
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(targetId)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      id="card"
      className="relative scroll-mt-16 overflow-hidden border-t border-stem-line/[0.08] bg-stem-panel/45 py-10 sm:py-14 md:flex md:min-h-dvh md:scroll-mt-0 md:flex-col md:justify-center md:pt-20 md:pb-14"
    >
      <div className="relative mx-auto w-full max-w-5xl px-4 md:px-6">
        <SectionHeader
          eyebrow={lang === 'ms' ? 'EKSKLUSIF' : 'EXCLUSIVE'}
          title={lang === 'ms' ? 'Kad Keahlian Digital' : 'Digital Member Card'}
          sub={
            lang === 'ms'
              ? 'Identiti eksklusif anda sebagai ahli keluarga STEM USAS.'
              : 'Your exclusive identity as a STEM USAS family member.'
          }
        />

        <Reveal delay={150}>
          <div className="relative mt-8 flex justify-center md:mt-10" style={{ perspective: '1200px' }}>
            {/* Circular yellow fade aura centered behind the member card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.34)_0%,rgba(245,158,11,0.16)_38%,transparent_68%)] dark:bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.28)_0%,rgba(204,145,43,0.12)_40%,transparent_68%)] sm:h-[680px] sm:w-[680px]"
            />

            {/* Exact STEM Telebot Digital Member Card model */}
            <div
              ref={cardRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              onPointerCancel={handlePointerLeave}
              style={{
                ...tiltStyle,
                transformStyle: 'preserve-3d',
                background: 'linear-gradient(145deg, #0f1b38 0%, #142042 40%, #17244a 100%)',
                border: '1px solid rgba(148, 163, 184, 0.14)',
                boxShadow: tilted
                  ? '0 10px 22px rgba(0,0,0,0.34), 0 24px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)'
                  : '0 2px 4px rgba(0,0,0,0.3), 0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
              className="group relative z-10 w-full max-w-[480px] select-none overflow-hidden rounded-[20px] transition-[transform,box-shadow] duration-200 ease-out"
            >
              {/* Inner card coordinate grid matching membership_card_template.py */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[1]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
                  backgroundSize: '32px 32px',
                  maskImage: 'linear-gradient(180deg,rgba(0,0,0,0.4),transparent 70%)',
                }}
              />

              {/* Diagonal shimmer sweep */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-[30%] -bottom-[30%] -left-[180%] z-[5] w-[240%] animate-shimmer bg-[linear-gradient(105deg,transparent_44%,rgba(255,255,255,0.04)_47%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.04)_53%,transparent_56%)]"
              />

              {/* Copy Membership ID button matching STEM Telebot */}
              <button
                type="button"
                onClick={() => void handleCopy()}
                aria-label={copied ? 'Membership ID copied' : 'Copy Membership ID'}
                title={copied ? 'Copied' : 'Copy Membership ID'}
                className="absolute bottom-[58px] right-[18px] z-[6] grid h-[30px] w-[30px] place-items-center rounded-[8px] border border-slate-400/15 bg-slate-900/60 text-slate-200/60 backdrop-blur-md transition duration-200 hover:border-slate-400/35 hover:bg-slate-700/70 hover:text-slate-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stem-gold sm:bottom-auto sm:right-3.5 sm:top-3.5 sm:h-[34px] sm:w-[34px] sm:rounded-[10px] sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>

              <div className="relative z-[2] px-[22px] pb-[20px] pt-[24px]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <img
                      src="/stem-logo.png"
                      alt="STEM"
                      className="h-[36px] w-[36px] rounded-[8px] border border-white/[0.12] bg-white/[0.06] object-cover"
                    />
                    <span className="font-display text-[13px] font-bold uppercase tracking-[0.06em] text-slate-200/85">
                      Membership STEM
                    </span>
                  </div>
                  <div className="rounded-full border border-green-500/40 bg-green-500/[0.14] px-3 py-[5px] font-display text-[11px] font-bold uppercase tracking-[0.06em] text-[#86efac] shadow-[0_0_12px_rgba(34,197,94,0.15)] backdrop-blur-sm">
                    Active
                  </div>
                </div>

                <div className="mb-[14px]">
                  <div className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400/60">
                    Membership ID
                  </div>
                  <div
                    ref={decodeRef}
                    className="min-h-[1.35em] break-all font-mono text-[clamp(16px,4.8vw,24px)] font-bold tracking-[0.07em] text-[#f8fafc] drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all duration-300 sm:tracking-[0.08em] [&.done]:drop-shadow-[0_0_14px_rgba(204,145,43,0.16)]"
                  >
                    XXXX-XX-XXXX-XX
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <div className="mb-[3px] text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400/50">
                      Card Holder
                    </div>
                    <div className="font-display text-[clamp(13px,3.6vw,15px)] font-semibold uppercase tracking-[0.03em] text-[#e2e8f0]">
                      Stem bin Usas
                    </div>
                  </div>
                  <div>
                    <div className="mb-[3px] text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400/50">
                      Matric
                    </div>
                    <div className="font-display text-[clamp(13px,3.6vw,15px)] font-semibold uppercase tracking-[0.03em] text-[#e2e8f0]">
                      D00000000
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-3 border-t border-slate-400/[0.08] pt-[14px]">
                  <div className="py-1.5">
                    <div className="mb-[2px] text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-400/45">
                      Program
                    </div>
                    <div className="font-display text-[12px] font-medium tracking-[0.01em] text-slate-200/80">
                      Diploma Teknologi Maklumat
                    </div>
                  </div>
                  <div className="py-1.5">
                    <div className="mb-[2px] text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-400/45">
                      Status
                    </div>
                    <div className="font-display text-[12px] font-medium tracking-[0.01em] text-slate-200/80">
                      Ahli Biasa
                    </div>
                  </div>
                  <div className="py-1.5">
                    <div className="mb-[2px] text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-400/45">
                      Valid From
                    </div>
                    <div className="font-mono text-[12px] font-medium tracking-[0.02em] text-slate-200/80">
                      01/01/2026
                    </div>
                  </div>
                  <div className="py-1.5">
                    <div className="mb-[2px] text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-400/45">
                      Valid Thru
                    </div>
                    <div className="font-mono text-[12px] font-medium tracking-[0.02em] text-slate-200/80">
                      31/12/2026
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-400/[0.06] bg-black/20 px-[22px] py-[12px]">
                <span className="text-[10px] font-medium tracking-[0.02em] text-slate-400/40">
                  STEM USAS • Digital Member Card
                </span>
                <div className="flex gap-[3px]">
                  <span className="h-1 w-1 rounded-full bg-[#cc912b]/50" />
                  <span className="h-1 w-1 rounded-full bg-[#213e80]/50" />
                  <span className="h-1 w-1 rounded-full bg-slate-400/20" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
