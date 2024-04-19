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
      gridTemplateRows: {
        layout: '200px minmax(900px, 1fr) 100px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['emerald'],
  },
}
export default config
