import type { Config } from 'tailwindcss'
import { heroui } from '@heroui/react'

// tailwind config
const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/*.html',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: { sm: '640px', md: '1025px', lg: '1324px' },

  },
  darkMode: 'class',
  plugins: [heroui()],
}

export default config