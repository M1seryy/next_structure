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
    screens: { sm: '768px', md: '1024px', lg: '1360px' },
    extend: {
      colors: {
        primary: {
          green: '#0E7C66',
          dark: '#2C3345',
          blue: '#007AFF',
          text: '#2B2D42',
        },
        secondary: {
          dark: '#424D6A',
          blue: '#27415F',
        },
        brand: {
          ink: '#2A3342',
        },
        support: {
          border: '#E2EDF6',
          divider: '#E6EEF9',
          surface: '#F5FAFF',
          surfaceAlt: '#EEF6FB',
          muted: '#454F69',
        },
        link: '#1D63F0',
      }
    }
  },
  darkMode: 'class',
  plugins: [heroui()],
}

export default config