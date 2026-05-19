/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main backgrounds - warm, paper-like tones
        primaryBg: '#FDF9F4',     // Soft warm parchment/cream
        secondaryBg: '#F5F0E8',   // Aged paper / natural linen
        card: '#FFFFFF',          // Clean white for cards with warmth
        
        // Text colors - deep, readable, elegant
        primaryText: '#2C2420',   // Deep espresso black-brown
        secondaryText: '#5F5348', // Warm taupe/grey-brown
        softAccent: '#9B8B7A',    // Muted clay/stone for subtle accents
        
        // Accent colors - inspired by ink, leather, and nature
        accent: '#8B6B4A',        // Rich warm brown (like aged leather)
        bronze: '#C4843E',        // Warm golden-bronze (like candlelight)
        burgundy: '#8B3A3A',      // Deep literary red (like old book covers)
        ink: '#3A332E',           // Deep ink black-brown
        parchment: '#E8E0D5',     // Light parchment for borders/accents
        
        // Functional colors
        borderLight: '#E5DED4',   // Soft warm border
        success: '#4A6B4A',       // Muted sage green
        error: '#9B4B4B',         // Faded rust red
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        poetry: ['"Cormorant Garamond"', '"Times New Roman"', 'serif'],
      },
      fontSize: {
        'poetry': ['1.25rem', { lineHeight: '1.75', letterSpacing: '0.01em' }],
        'poetry-lg': ['1.5rem', { lineHeight: '1.8', letterSpacing: '0.01em' }],
      },
      boxShadow: {
        'elegant': '0 10px 40px -12px rgba(44, 36, 32, 0.12)',
        'glow': '0 0 25px -5px rgba(196, 132, 62, 0.25)',
        'book': '0 4px 20px -6px rgba(44, 36, 32, 0.08), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'inset-soft': 'inset 0 1px 3px rgba(0, 0, 0, 0.03)',
      },
      backgroundImage: {
        'paper-texture': 'radial-gradient(circle at 25% 40%, rgba(245, 240, 232, 0.4) 0%, rgba(253, 249, 244, 0.8) 100%)',
        'vignette': 'radial-gradient(ellipse at center, transparent 60%, rgba(44, 36, 32, 0.03) 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'slow-float': 'slow-float 8s ease-in-out infinite',
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
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(12px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'slow-float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-6px)'
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      letterSpacing: {
        'poetic': '0.015em',
        'widest-poetic': '0.2em',
      },
    },
  },
  plugins: [],
}