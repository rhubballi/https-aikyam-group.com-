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
          primary: '#1d4ca2',      // Official Reference Royal Blue
          primaryDark: '#153a7e',  // Deep Royal Blue
          navy: '#072151',         // Official Reference Deep Navy
          accent: '#2563eb',       // Bright Corporate Blue
          sky: '#0284c7',          // Sky Blue
          steel: '#334155',        // Slate
          surface: '#f8fafc',      // Clean off-white
          lightBlue: '#eef2ff',    // Soft ice-blue tint
          dark: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'pattern-map': "url('/images/background/bg-map.png')",
        'pattern-bg5': "url('/images/background/bg5.jpg')",
        'pattern-bg6': "url('/images/background/bg6.jpg')",
      }
    },
  },
  plugins: [],
}
