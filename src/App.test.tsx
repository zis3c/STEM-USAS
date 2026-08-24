import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { LanguageProvider } from './shared/i18n/LanguageContext'
import Team from './features/landing/components/Team'

describe('Team Component', () => {
  it('renders team section correctly', () => {
    const { container } = render(
      <LanguageProvider>
        <Team />
      </LanguageProvider>
    )
    expect(container).toBeTruthy()
  })
})
