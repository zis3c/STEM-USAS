import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/shared/i18n/LanguageContext'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function MembershipCard() {
  const { lang } = useLang()
  const cardRef = useRef<HTMLDivElement>(null)
  const decodeRef = useRef<HTMLDivElement>(null)
  const [tiltStyle, setTiltStyle] = useState({ transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)' })
  
  const targetId = 'STEM-26-0420-XD'

  useEffect(() => {
    // Decoding effect logic
    const el = decodeRef.current
    if (!el) return
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    const stableChars = new Set(['-', ' '])
    let frame = 0
    const totalFrames = 80
    
    const randomChar = () => chars[Math.floor(Math.random() * chars.length)]
    
    let raf: number
    const startDelay = setTimeout(() => {
      const renderFrame = () => {
        frame += 1
        const progress = frame / totalFrames
        const eased = progress < 0.16 ? 0 : Math.pow((progress - 0.16) / 0.84, 1.15)
        const settlePoint = Math.floor(eased * targetId.length)
        
        const next = Array.from(targetId).map((ch, index) => {
          if (stableChars.has(ch)) return ch
          if (index < settlePoint) return ch
          return Math.random() > 0.16 ? randomChar() : ch
        }).join('')
        
        if (decodeRef.current) decodeRef.current.textContent = next

        if (frame < totalFrames) {
          raf = requestAnimationFrame(renderFrame)
        } else {
          if (decodeRef.current) {
            decodeRef.current.textContent = targetId
            decodeRef.current.classList.add('done')
          }
        }
      }
      raf = requestAnimationFrame(renderFrame)
    }, 500)

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
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const cx = Math.max(0, Math.min(1, x))
    const cy = Math.max(0, Math.min(1, y))
    const rx = (0.5 - cy) * maxTilt
    const ry = (cx - 0.5) * maxTilt
    
    setTiltStyle({
      transform: `perspective(1200px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(1.02)`
    })
  }

  const handlePointerLeave = () => {
    setTiltStyle({ transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)' })
  }

  return (
    <section id="card" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,145,43,0.03)_0%,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Eksklusif"
          title={lang === 'ms' ? 'Kad Keahlian Digital' : 'Digital Member Card'}
          sub={lang === 'ms' ? 'Identiti eksklusif anda sebagai ahli keluarga STEM USAS.' : 'Your exclusive identity as a STEM USAS family member.'}
        />
        
        <Reveal delay={200}>
          <div className="mt-16 flex justify-center perspective-[1200px]">
            {/* Exactly Matching Card Container */}
            <div 
              ref={cardRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              onPointerCancel={handlePointerLeave}
              style={{
                ...tiltStyle,
                background: 'linear-gradient(145deg, #0f1b38 0%, #142042 40%, #17244a 100%)',
                border: '1px solid rgba(148, 163, 184, 0.12)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3), 0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)'
              }}
              className="relative w-full max-w-[480px] rounded-[20px] transition-transform duration-200 ease-out select-none touch-none overflow-hidden"
            >
              {/* Grid Background Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none z-[1]" 
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
                  backgroundSize: '32px 32px',
                  maskImage: 'linear-gradient(180deg,rgba(0,0,0,0.4),transparent 70%)'
                }}
              />

              {/* Shimmer Overlay */}
              <div className="absolute -top-[30%] -bottom-[30%] -left-[180%] w-[240%] z-[5] pointer-events-none animate-shimmer bg-[linear-gradient(105deg,transparent_44%,rgba(255,255,255,0.04)_47%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.04)_53%,transparent_56%)]" />

              <div className="relative z-10 px-[22px] pt-[24px] pb-[20px]">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-[10px]">
                    <img 
                      src="/logo.png" 
                      alt="STEM" 
                      className="w-[36px] h-[36px] rounded-lg object-cover border border-white/[0.12] bg-white/[0.06]" 
                    />
                    <span className="text-[13px] font-bold tracking-[0.06em] text-slate-200/85 uppercase">
                      Membership STEM
                    </span>
                  </div>
                  <div className="text-[11px] font-bold tracking-[0.06em] px-3 py-1.5 rounded-full uppercase backdrop-blur-md bg-green-500/[0.14] border border-green-500/40 text-[#86efac] shadow-[0_0_12px_rgba(34,197,94,0.15)]">
                    Active
                  </div>
                </div>

                {/* Membership ID */}
                <div className="mb-[14px]">
                  <div className="text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-400/60 mb-1.5">
                    Membership ID
                  </div>
                  <div 
                    ref={decodeRef} 
                    className="font-mono text-[clamp(18px,4.5vw,24px)] font-bold tracking-[0.08em] text-slate-50 break-all min-h-[1.35em] drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all duration-300 [&.done]:drop-shadow-[0_0_14px_rgba(204,145,43,0.16)]"
                  >
                    XXXX-XX-XXXX-XX
                  </div>
                </div>

                {/* Identity Row */}
                <div className="flex items-end justify-between gap-3 flex-wrap mb-4">
                  <div>
                    <div className="text-[9px] font-semibold tracking-[0.12em] uppercase text-slate-400/50 mb-[3px]">Card Holder</div>
                    <div className="text-[15px] font-semibold text-slate-200 uppercase tracking-[0.03em]">Stem bin Usas</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-semibold tracking-[0.12em] uppercase text-slate-400/50 mb-[3px]">Matric</div>
                    <div className="text-[15px] font-semibold text-slate-200 uppercase tracking-[0.03em]">D00000000</div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 border-t border-slate-400/[0.08] pt-[14px]">
                  <div className="py-1.5">
                    <div className="text-[9px] font-semibold tracking-[0.1em] uppercase text-slate-400/[0.45] mb-[2px]">Program</div>
                    <div className="text-[12px] font-medium text-slate-200/80 tracking-[0.01em]">Diploma Teknologi Maklumat</div>
                  </div>
                  <div className="py-1.5">
                    <div className="text-[9px] font-semibold tracking-[0.1em] uppercase text-slate-400/[0.45] mb-[2px]">Status</div>
                    <div className="text-[12px] font-medium text-slate-200/80 tracking-[0.01em]">Ahli Biasa</div>
                  </div>
                  <div className="py-1.5">
                    <div className="text-[9px] font-semibold tracking-[0.1em] uppercase text-slate-400/[0.45] mb-[2px]">Valid From</div>
                    <div className="font-mono text-[12px] font-medium text-slate-200/80 tracking-[0.02em]">01/01/2026</div>
                  </div>
                  <div className="py-1.5">
                    <div className="text-[9px] font-semibold tracking-[0.1em] uppercase text-slate-400/[0.45] mb-[2px]">Valid Thru</div>
                    <div className="font-mono text-[12px] font-medium text-slate-200/80 tracking-[0.02em]">31/12/2026</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-[22px] py-[12px] bg-black/20 border-t border-slate-400/[0.06]">
                <span className="text-[10px] text-slate-400/40 font-medium tracking-[0.02em]">STEM USAS • Digital Member Card</span>
                <div className="flex gap-[3px]">
                  <span className="w-1 h-1 rounded-full bg-[#cc912b]/50"></span>
                  <span className="w-1 h-1 rounded-full bg-[#213e80]/50"></span>
                  <span className="w-1 h-1 rounded-full bg-slate-400/20"></span>
                </div>
              </div>
              
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
