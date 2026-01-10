/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#10b77f',
          dark: '#0d9668',
        },
        background: {
          light: '#f6f8f7',
          dark: '#10221c',
        },
        card: {
          light: '#ffffff',
          dark: '#162e26',
        },
        surface: {
          light: '#ffffff',
          dark: '#1a2c26',
        },
        border: {
          light: '#dbe6e2',
          dark: '#1f3b32',
        },
        text: {
          main: {
            light: '#111816',
            dark: '#f0f4f3',
          },
          sub: {
            light: '#61897c',
            dark: '#8daaa0',
          },
        },
        danger: '#e72e08',
        success: '#07882e',
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
