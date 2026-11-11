import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LanguageProvider, useLang } from './shared/i18n/LanguageContext'
import { translations } from './shared/i18n/translations'
import Faq from './features/landing/components/Faq'
import Hero from './features/landing/components/Hero'
import About from './features/landing/components/About'
import Projects from './features/landing/components/Projects'

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

  it('renders Hero, About, Projects, and interactive FAQ accordion', () => {
    render(
      <LanguageProvider>
        <Hero />
        <About />
        <Projects />
        <Faq />
      </LanguageProvider>
    )
    expect(screen.getByText(translations.en.hero.titleB)).toBeTruthy()
    expect(screen.getByText(translations.en.about.title)).toBeTruthy()
    expect(screen.getByText('STEM Telebot')).toBeTruthy()

    const secondFaqButton = screen.getByText(translations.en.faq.items[1].q)
    fireEvent.click(secondFaqButton)
    expect(screen.getByText(translations.en.faq.items[1].a)).toBeTruthy()
  })

  it('maintains parity between English and Malay translation keys', () => {
    expect(Object.keys(translations.en)).toEqual(Object.keys(translations.ms))
    expect(translations.en.projects.items.length).toBe(translations.ms.projects.items.length)
    expect(translations.en.faq.items.length).toBe(translations.ms.faq.items.length)
  })
})

