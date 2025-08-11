/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#31a1d3',
        secondary: '#272b46',
        surface: '#0b0f1a',
        offwhite: '#f9f9f9',
        emerald: {
          500: '#10b981',
        },
        sky: {
          500: '#0ea5e9',
        },
        indigo: {
          500: '#6366f1',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(49,161,211,0.3), 0 8px 30px rgba(49,161,211,0.15)',
      },
      backgroundImage: {
        'grid-dark': 'radial-gradient(circle at 1px 1px, rgba(49,161,211,0.08) 1px, transparent 0)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}


