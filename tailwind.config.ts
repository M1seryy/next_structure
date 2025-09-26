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
      backgroundImage: { 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))' },
      keyframes: {
        'scrolling-banner': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - var(--gap)/2))' },
        },
        'scrolling-banner-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-50% - var(--gap)/2))' },
        },
        pulse: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'scrolling-banner': 'scrolling-banner var(--duration) linear infinite',
        'scrolling-banner-vertical': 'scrolling-banner-vertical var(--duration) linear infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
}

export default config