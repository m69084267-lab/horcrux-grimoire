/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'dark': {
          '50': '#f8f7ff',
          '100': '#f0eefd',
          '200': '#e1dffc',
          '300': '#c9c4f7',
          '400': '#a89df0',
          '500': '#8b74e6',
          '600': '#7a5fd6',
          '700': '#664bb8',
          '800': '#553a96',
          '900': '#47327a',
          '950': '#2e1e52',
        },
        // Gold accent colors
        'gold': {
          '400': '#f4c430',
          '500': '#ffd700',
          '600': '#ffb700',
        },
      },
      fontFamily: {
        'farsi': ['Vazirmatn', 'system-ui', 'sans-serif'],
        'heading': ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(244, 196, 48, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(244, 196, 48, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(244, 196, 48, 0.5)',
        'glow-purple': '0 0 30px rgba(123, 95, 214, 0.5)',
      },
    },
  },
  plugins: [],
}
