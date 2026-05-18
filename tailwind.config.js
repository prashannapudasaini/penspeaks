/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: '#FAF7F2',     // Warm ivory / parchment
        secondaryBg: '#F0EBE1',   // Slightly darker champagne
        card: '#FFFFFF',          // Clean white for cards
        primaryText: '#2D241E',   // Deep espresso brown (softer than black)
        secondaryText: '#5C4F45', // Muted brown
        accent: '#8C6C54',        // Soft brown
        borderLight: '#E3DCD2',   // Warm border
        bronze: '#B67332',        // Premium gold/bronze accent
        burgundy: '#7A3B3B',      // Elegant literary red/burgundy
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 10px 40px -10px rgba(45, 36, 30, 0.1)',
        'glow': '0 0 20px rgba(182, 115, 50, 0.2)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        }
      }
    },
  },
  plugins: [],
}