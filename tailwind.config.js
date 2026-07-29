/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#050505',
        'neon-blue': '#00D9FF',
        'purple-glow': '#8B5CF6',
        'gold-accent': '#FFD700',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
