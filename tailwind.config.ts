import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        stem: {
          bg: 'rgb(var(--stem-bg) / <alpha-value>)',
          panel: 'rgb(var(--stem-panel) / <alpha-value>)',
          card: 'rgb(var(--stem-card) / <alpha-value>)',
          card2: 'rgb(var(--stem-card2) / <alpha-value>)',
          blue: 'rgb(var(--stem-blue) / <alpha-value>)',
          sky: 'rgb(var(--stem-sky) / <alpha-value>)',
          gold: 'rgb(var(--stem-gold) / <alpha-value>)',
          goldlight: 'rgb(var(--stem-goldlight) / <alpha-value>)',
          cta: 'rgb(var(--stem-cta) / <alpha-value>)',
          ctahover: 'rgb(var(--stem-ctahover) / <alpha-value>)',
          ctaink: 'rgb(var(--stem-ctaink) / <alpha-value>)',
          ink: 'rgb(var(--stem-ink) / <alpha-value>)',
          muted: 'rgb(var(--stem-muted) / <alpha-value>)',
          line: 'rgb(var(--stem-line) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
