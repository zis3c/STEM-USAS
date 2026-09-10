import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function EasterEgg() {
  const [active, setActive] = useState(false)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    let buffer = ''
    const target = 'STEM'

    const trigger = () => {
      setActive(true)
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => {
        setActive(false)
      }, 4500)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      buffer += e.key.toUpperCase()
      if (buffer.length > target.length) {
        buffer = buffer.slice(-target.length)
      }
      if (buffer === target) {
        trigger()
        buffer = ''
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('trigger-matrix', trigger)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('trigger-matrix', trigger)
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  // Lock scroll when active
  useEffect(() => {
    if (active) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [active])

  if (!active || typeof document === 'undefined') return null

  // Portal directly to document.body so fixed inset-0 is immune to parent CSS transforms
  return createPortal(
    <div
      onClick={() => setActive(false)}
      className="fixed inset-0 z-[99999] flex h-[100dvh] w-screen flex-col items-center justify-center bg-black/95 p-4 select-none cursor-pointer transition-opacity duration-300"
    >
      <MatrixRain />

      {/* Cyberpunk Terminal Window HUD */}
      <div className="relative z-10 w-[90vw] max-w-sm sm:max-w-md rounded-2xl border border-emerald-500/35 bg-[#060a14]/95 p-5 sm:p-6 shadow-[0_0_60px_rgba(16,185,129,0.3)] backdrop-blur-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3 mb-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[10px] text-emerald-400/80">stem@usas:~$</span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400/60">NODE_01</span>
        </div>

        {/* Terminal Content */}
        <div className="space-y-3 font-mono">
          <div className="text-[11px] text-emerald-400/70">
            &gt; core_diagnostic --auth=OK
          </div>

          <div className="py-2 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-widest text-white drop-shadow-[0_0_24px_rgba(52,211,153,0.75)]">
              STEM USAS
            </h2>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-semibold">
              Persatuan Sains Teknologi & Multimedia
            </p>
          </div>

          <div className="pt-2 border-t border-emerald-500/15 flex items-center justify-between text-[10px]">
            <span className="text-slate-400">STATUS PELAYAN:</span>
            <span className="text-emerald-400 font-bold tracking-wider">ONLINE</span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

function MatrixRain() {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const chars = '0123456789ABCDEF$+-*/=%<>[]^~STEM'
    const fontSize = window.innerWidth < 640 ? 12 : 14
    const columns = Math.ceil(window.innerWidth / fontSize)
    const drops: number[] = Array.from({ length: columns }, () => Math.random() * -40)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#10B981'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)
    window.addEventListener('resize', resize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      id="matrix-canvas"
      className="absolute inset-0 h-full w-full opacity-60 pointer-events-none"
    />
  )
}
