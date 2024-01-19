import { nextui } from '@nextui-org/react'

import nextuiConfig from './nextui.config'

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui(nextuiConfig)],
}

export default tailwindConfig
