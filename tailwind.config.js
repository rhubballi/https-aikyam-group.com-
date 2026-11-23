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
          primary: '#0891b2',      // Fresh Cyan 600
          primaryDark: '#0e7490',  // Cyan 700
          teal: '#0d9488',         // Fresh Teal 600
          tealDark: '#115e59',     // Teal 800
          sky: '#0284c7',          // Sky 600
          emerald: '#059669',      // Emerald 600
          navy: '#0f172a',         // Slate 900
          dark: '#020617',         // Slate 950
          ice: '#f0f9ff',          // Fresh Sky Ice
          mint: '#f0fdf4',         // Fresh Mint Ice
          surface: '#f8fafc',      // Clean Slate 50
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
