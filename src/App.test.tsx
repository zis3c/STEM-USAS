import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { LanguageProvider, useLang } from './shared/i18n/LanguageContext'
import { ThemeProvider } from './shared/theme/ThemeContext'
import { translations } from './shared/i18n/translations'
import Navbar from './features/landing/components/Navbar'
import Hero from './features/landing/components/Hero'
import Stats from './features/landing/components/Stats'
import About from './features/landing/components/About'
import Programs from './features/landing/components/Programs'
import Projects from './features/landing/components/Projects'
import Discord from './features/landing/components/Discord'
import Faq from './features/landing/components/Faq'

function LangToggleProbe() {
  const { lang, setLang, t } = useLang()
  return (
    <div>
      <span data-testid="current-lang">{lang}</span>
      <span data-testid="about-title">{t.about.title}</span>
      <button onClick={() => setLang(lang === 'en' ? 'ms' : 'en')}>Toggle</button>
    </div>
  )
}

describe('STEM Web Core Suite', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('light', 'dark')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('switches language between English and Malay and persists to localStorage', () => {
    render(
      <LanguageProvider>
        <LangToggleProbe />
      </LanguageProvider>
    )
    expect(screen.getByTestId('current-lang').textContent).toBe('en')
    expect(screen.getByTestId('about-title').textContent).toBe(translations.en.about.title)

    fireEvent.click(screen.getByText('Toggle'))
    expect(screen.getByTestId('current-lang').textContent).toBe('ms')
    expect(screen.getByTestId('about-title').textContent).toBe(translations.ms.about.title)
    expect(localStorage.getItem('stem_lang')).toBe('ms')
  })

  it('toggles between dark and light theme and persists choice', () => {
    render(
      <ThemeProvider>
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>
      </ThemeProvider>
    )
    const themeBtn = screen.getByRole('button', { name: 'Switch to light theme' })
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    fireEvent.click(themeBtn)
    expect(document.documentElement.classList.contains('light')).toBe(true)
    expect(localStorage.getItem('stem_theme')).toBe('light')
    expect(screen.getByRole('button', { name: 'Switch to dark theme' })).toBeTruthy()
  })

  it('renders Hero, About, FPTM Programs, Projects, Discord, and interactive FAQ accordion', () => {
    render(
      <ThemeProvider>
        <LanguageProvider>
          <Navbar />
          <Hero />
          <About />
          <Programs />
          <Projects />
          <Discord />
          <Faq />
        </LanguageProvider>
      </ThemeProvider>
    )
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(
      translations.en.hero.titleB
    )
    expect(screen.getByText(translations.en.about.title)).toBeTruthy()
    expect(screen.getByText('Computer Science')).toBeTruthy()
    expect(screen.queryByText('Coding Workshops')).toBeNull()
    expect(screen.getByText('STEM Telebot')).toBeTruthy()
    expect(screen.getByText('STEM USAS Web')).toBeTruthy()
    fireEvent.click(screen.getByRole('button', { name: translations.en.projects.currentCta }))
    expect(screen.getByText(translations.en.projects.currentReactions[0])).toBeTruthy()
    expect(screen.getByText(translations.en.discord.title)).toBeTruthy()
    expect(
      screen.getByRole('link', { name: translations.en.discord.ctaDiscord }).getAttribute('href')
    ).toBe('https://discord.gg/kcs7BZSC2')

    const secondFaqButton = screen.getByText(translations.en.faq.items[1].q)
    fireEvent.click(secondFaqButton)
    expect(screen.getByText(translations.en.faq.items[1].a)).toBeTruthy()
  })

  it('fetches active members from API and replaces annual events with annual fee', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ active_members: 214, cached_at: 1700000000 }),
    } as Response)

    render(
      <LanguageProvider>
        <Stats />
      </LanguageProvider>
    )

    expect(screen.queryByText('Annual Events')).toBeNull()
    expect(screen.queryByText('Acara Tahunan')).toBeNull()
    expect(screen.getByText(translations.en.stats.fee)).toBeTruthy()

    await waitFor(() => {
      expect(screen.queryByLabelText(translations.en.stats.membersLoading)).toBeNull()
    })
  })

  it('shows honest fallback when stats API is unavailable', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('network error'))

    render(
      <LanguageProvider>
        <Stats />
      </LanguageProvider>
    )

    await waitFor(() => {
      expect(screen.getByLabelText(translations.en.stats.membersUnavailable)).toBeTruthy()
    })
    expect(screen.getByText('—')).toBeTruthy()
  })

  it('maintains parity between English and Malay translation keys', () => {
    expect(Object.keys(translations.en)).toEqual(Object.keys(translations.ms))
    expect(Object.keys(translations.en.stats)).toEqual(Object.keys(translations.ms.stats))
    expect(translations.en.projects.items.length).toBe(translations.ms.projects.items.length)
    expect(translations.en.faq.items.length).toBe(translations.ms.faq.items.length)
    expect(translations.en.discord.pillars.length).toBe(translations.ms.discord.pillars.length)
  })
})
