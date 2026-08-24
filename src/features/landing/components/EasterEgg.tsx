import { useEffect, useState } from 'react'

export default function EasterEgg() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    let buffer = ''
    const target = 'STEM'
    
    const trigger = () => {
      setActive(true)
      setTimeout(() => setActive(false), 8000)
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
    }
  }, [])

  if (!active) return null

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none bg-black/90 transition-opacity duration-1000">
      <MatrixRain />
      <div className="absolute inset-0 flex flex-col items-center justify-center mix-blend-difference px-4 text-center">
        <h2 className="font-mono text-4xl font-bold text-white tracking-[0.1em] sm:text-6xl md:tracking-[0.2em] md:text-8xl">STEM USAS</h2>
        <p className="mt-4 font-mono text-sm sm:text-base text-emerald-400">System Overridden.</p>
      </div>
    </div>
  )
}

function MatrixRain() {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~".split('')
    const fontSize = 16
    const columns = canvas.width / fontSize
    const drops: number[] = []

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * canvas.height
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#10B981' // emerald-500
      ctx.font = fontSize + 'px monospace'

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
    
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas id="matrix-canvas" className="w-full h-full opacity-60" />
  )
}
