/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        white: '0 2px 6px rgba(53, 60, 74, 0.2)',
        blue: '0 6px 12px rgba(20, 78, 227, 0.6)'
      },
      colors: {
        'custom-bg': '#0B101B',
        'custom-bg-alt': '#181E29',
      },
    },
  },
  plugins: [],
}