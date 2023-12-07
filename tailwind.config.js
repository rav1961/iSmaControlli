/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#8193B1',
          100: '#b6c2d6',
          400: '#8193B1',
          500: '#3A4667',
          700: '#12192C',
          900: '#1F2843'
        },
        blue: '#2254C7',
        yellow: '#F7B818',
        white: '#FFFFFF'
      },
      backgroundImage: {
        'box-gradient': `linear-gradient(255deg, #3A4667 0%, rgba(58, 70, 103, 0.00) 112.11%)`,
        'nav-gradient': `linear-gradient(270deg, #2254C7 1.73%, rgba(34, 84, 199, 0.00) 96.53%)`
      },
      borderWidth: {
        1: '1px'
      }
    }
  },
  plugins: []
};
