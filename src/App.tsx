import { useEffect } from 'react'
import Lenis from 'lenis'
import { LanguageProvider } from '@/shared/i18n/LanguageContext'
import { ThemeProvider } from '@/shared/theme/ThemeContext'
import { setLenis } from '@/shared/lib/scroll'
import ScrollProgress from '@/features/landing/components/ScrollProgress'
import Navbar from '@/features/landing/components/Navbar'
import Hero from '@/features/landing/components/Hero'
import Stats from '@/features/landing/components/Stats'
import About from '@/features/landing/components/About'
import Programs from '@/features/landing/components/Programs'
import Projects from '@/features/landing/components/Projects'
import Join from '@/features/landing/components/Join'
import MembershipCard from '@/features/landing/components/MembershipCard'
import Discord from '@/features/landing/components/Discord'
import Faq from '@/features/landing/components/Faq'
import Footer from '@/features/landing/components/Footer'
import ScrollToTop from '@/features/landing/components/ScrollToTop'
import EasterEgg from '@/features/landing/components/EasterEgg'

export default function App() {
  useEffect(() => {
    const instance = new Lenis({ lerp: 0.1, wheelMultiplier: 0.9, smoothWheel: true })
    setLenis(instance)
    let raf = 0
    const loop = (time: number) => {
      instance.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen overflow-x-clip bg-stem-bg font-sans text-stem-ink">
          <ScrollProgress />
          <Navbar />
          <main>
            <div className="flex min-h-svh flex-col md:min-h-dvh">
              <Hero />
              <Stats />
            </div>
            <About />
            <Programs />
            <Projects />
            <MembershipCard />
            <Discord />
            <Faq />
            <Join />
          </main>
          <Footer />
          <ScrollToTop />
          <EasterEgg />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
