import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        stem: {
          bg: '#050a18',
          panel: '#0a1428',
          card: '#0f1b38',
          card2: '#142042',
          card3: '#17244a',
          blue: '#213E80',
          sky: '#4f74d8',
          gold: '#CC912B',
          goldlight: '#E8B54A',
          ink: '#f1f5f9',
          muted: '#94a3b8',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
