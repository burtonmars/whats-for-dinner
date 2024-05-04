import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'error-red': '#bd2b2b',
      },
      boxShadow: {
        '2xlDark': '0 35px 60px -15px rgba(0, 0, 0, 0.6)',
      },
      gridTemplateColumns: {
        mealCards: 'repeat(1, minmax(250px, 1fr))',
        mealCardsMd: 'repeat(2, minmax(250px, 1fr))',
        mealCardsXl: 'repeat(3, minmax(250px, 1fr))',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '2036px',
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['emerald'],
  },
}
export default config
