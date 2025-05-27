/* eslint-disable @typescript-eslint/no-require-imports */
const { nextui } = require('@nextui-org/react')
import type { Config } from 'tailwindcss'
const colors = require('./src/foundation/Color/ColorPalette')
const fontSize = require('./src/foundation/Text/Typography')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      fontSize,
      fontFamily: {
        primary: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Roboto"',
          '"Malgun Gothic"',
          '"맑은 고딕"',
          'helvetica',
          '"Apple SD Gothic Neo"',
          'sans-serif',
        ],
      },
      backgroundImage: {
        checked: `url('../assets/icon/checked_enum.svg')`,
      },
      content: {
        checked: `url('../assets/icon/checked_enum.svg')`,
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(5px)' },
        },
      },
      animation: {
        'wave-2': 'wave 2s ease-in-out infinite',
        'wave-4': 'wave 4s ease-in-out infinite',
        'wave-6': 'wave 6s ease-in-out infinite',
        'wave-8': 'wave 8s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none' /* Chrome, Safari, Opera */,
        },
      })
    },
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    nextui(),
  ],
}
