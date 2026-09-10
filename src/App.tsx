import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { LanguageProvider } from '@/shared/i18n/LanguageContext'
import { setLenis } from '@/shared/lib/scroll'
import ScrollProgress from '@/features/landing/components/ScrollProgress'
import Navbar from '@/features/landing/components/Navbar'
import StemcraftPage from '@/features/stemcraft/StemcraftPage'
import Hero from '@/features/landing/components/Hero'
import Stats from '@/features/landing/components/Stats'
import About from '@/features/landing/components/About'
import Programs from '@/features/landing/components/Programs'
import Projects from '@/features/landing/components/Projects'
import Join from '@/features/landing/components/Join'
import Team from '@/features/landing/components/Team'
import MembershipCard from '@/features/landing/components/MembershipCard'
import Faq from '@/features/landing/components/Faq'
import Footer from '@/features/landing/components/Footer'
import ScrollToTop from '@/features/landing/components/ScrollToTop'
import EasterEgg from '@/features/landing/components/EasterEgg'

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const isStemcraft =
    currentPath === '/stemcraft' ||
    currentPath.startsWith('/stemcraft/') ||
    window.location.hostname.startsWith('stemcraft.') ||
    window.location.search.includes('event=stemcraft')

  useEffect(() => {
    document.title = isStemcraft
      ? 'STEMCRAFT'
      : 'STEM USAS'
  }, [isStemcraft])

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

  if (isStemcraft) {
    return (
      <LanguageProvider>
        <StemcraftPage />
      </LanguageProvider>
    )
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-clip bg-stem-bg font-sans text-stem-ink">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Programs />
          <Projects />
          <MembershipCard />
          <Team />
          <Faq />
          <Join />
        </main>
        <Footer />
        <ScrollToTop />
        <EasterEgg />
      </div>
    </LanguageProvider>
  )
}
