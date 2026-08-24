import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, inView }
}

export function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return value
}

const STABLE = /[\s&.,•—–\-]/

export function useDecodeText(text: string, active = true) {
  const [out, setOut] = useState(text)

  useEffect(() => {
    if (!active) return
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    const randomChar = () => chars[Math.floor(Math.random() * chars.length)]
    let frame = 0
    const total = 55
    let raf = 0

    const run = () => {
      frame += 1
      const p = frame / total
      const eased = p < 0.15 ? 0 : Math.pow((p - 0.15) / 0.85, 1.1)
      const settle = Math.floor(eased * text.length)
      setOut(
        Array.from(text)
          .map((ch, i) => (i < settle || STABLE.test(ch) ? ch : Math.random() > 0.2 ? randomChar() : ch))
          .join('')
      )
      if (frame < total) raf = requestAnimationFrame(run)
      else setOut(text)
    }

    setOut(Array.from(text).map((ch) => (STABLE.test(ch) ? ch : randomChar())).join(''))
    raf = requestAnimationFrame(run)
    return () => cancelAnimationFrame(raf)
  }, [text, active])

  return out
}
