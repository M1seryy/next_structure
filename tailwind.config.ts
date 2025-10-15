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
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [heroui()],
}

export default config