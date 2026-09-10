import { useState, useEffect, useMemo } from 'react'

export default function MinecraftTransition() {
  const [active, setActive] = useState(true)
  const [dimensions, setDimensions] = useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  }))

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight })
    const timer = setTimeout(() => setActive(false), 750)
    return () => clearTimeout(timer)
  }, [])

  const blocks = useMemo(() => {
    // Sizing square blocks: ~40px on mobile, ~64px on desktop
    const isMobile = dimensions.width < 640
    const tileSize = isMobile ? 40 : 64
    const cols = Math.ceil(dimensions.width / tileSize)
    const rows = Math.ceil(dimensions.height / tileSize)
    const total = cols * rows

    const colors = [
      'bg-[#050814]',
      'bg-[#091126]',
      'bg-[#0c1836]',
      'bg-[#064e3b]',
      'bg-[#03060f]',
      'bg-[#065f46]',
      'bg-[#0f2048]',
      'bg-[#042f2e]',
    ]

    const centerCol = (cols - 1) / 2
    const centerRow = (rows - 1) / 2

    return Array.from({ length: total }, (_, i) => {
      const c = i % cols
      const r = Math.floor(i / cols)
      // Distance from center for radial ripple break effect
      const dist = Math.sqrt(Math.pow(c - centerCol, 2) + Math.pow(r - centerRow, 2))
      const delay = Math.min(Math.round(dist * 36 + ((i * 7) % 30)), 360)

      return {
        id: i,
        color: colors[(c * 3 + r * 5) % colors.length],
        delay,
        widthPercent: 100 / cols,
      }
    })
  }, [dimensions])

  if (!active) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 flex flex-wrap content-start overflow-hidden bg-transparent">
      {/* 100% True Equal-Dimension Square Pixel Blocks (aspect-square) */}
      {blocks.map((b) => (
        <div
          key={b.id}
          className={`aspect-square ${b.color} animate-mc-block border border-black/25`}
          style={{
            width: `${b.widthPercent}%`,
            animationDelay: `${b.delay}ms`,
          }}
        />
      ))}
    </div>
  )
}
