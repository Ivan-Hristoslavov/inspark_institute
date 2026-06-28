import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // === Main Logo Colours ===
        'burgundy': {
          DEFAULT: '#72262C',
        },
        'perch': {
          DEFAULT: '#383E33',
        },
        // === Yellows ===
        'pale-yellow': {
          DEFAULT: '#FBE99F',
        },
        'pale-banana': {
          DEFAULT: '#F2E2A0',
        },
        'bright-gold': {
          DEFAULT: '#C99A3E',
        },
        'butter-yellow': {
          DEFAULT: '#FBE99F',
        },
        'french-vanilla': {
          DEFAULT: '#E6DCA8',
        },
        // === Reds ===
        'spiced-apple': {
          DEFAULT: '#793A38',
        },
        // === Douglas Fir Gradient ===
        'fir': {
          1: '#3E4A30',
          2: '#2C3924',
          3: '#1C2818',
          4: '#10160D',
          5: '#0A0C08',
        },
        // === Skin Tone Range ===
        'skin': {
          1: '#F0DCC8',
          2: '#D9A877',
          3: '#B07B54',
          4: '#7C5235',
          5: '#4A2F1E',
        },
        // === Legacy aliases ===
        'warm-beige': {
          DEFAULT: '#ddd5c3',
          light: '#f0ede7',
          lighter: '#f7f5f2',
          dark: '#c9c1b0',
        },
      },
      fontFamily: {
        sans: ["'BeausiteGrand'", "'Montserrat'", "system-ui", "sans-serif"],
        heading: ["'BeausiteGrand'", "serif"],
        body: ["'Montserrat'", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;