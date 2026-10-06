/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#060405',
          900: '#080607',
          800: '#12080D',
          700: '#1a0c14',
        },
        burgundy: {
          900: '#260810',
          800: '#380c18',
          700: '#521223',
          600: '#6f1930',
          500: '#8c203d',
        },
        rosewine: {
          500: '#aa2a4c',
          400: '#c5395d',
          300: '#dd5b7c',
          200: '#f091a8',
          100: '#f9cbd5',
          50: '#fdf1f4',
        },
        blush: {
          100: '#fae6eb',
          200: '#f5c9d4',
          300: '#f0abbd',
          400: '#eb8ea6',
        },
        champagne: {
          100: '#faf3e3',
          200: '#f3e5c4',
          300: '#e8d29b',
          400: '#d9bb6e',
          500: '#c5a349',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        handwritten: ['"Alex Brush"', '"Great Vibes"', 'cursive'],
        script: ['"Dancing Script"', 'cursive']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(221, 91, 124, 0.3))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(221, 91, 124, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}
