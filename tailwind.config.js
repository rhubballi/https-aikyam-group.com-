/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B192C',
          slate: '#1E293B',
          charcoal: '#0F172A',
          amber: '#D97706',
          gold: '#F59E0B',
          lightGold: '#FEF3C7',
          steel: '#334155',
          muted: '#64748B',
          offwhite: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
