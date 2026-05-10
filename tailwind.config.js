/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1C1C1C',
        muted: '#6A6A6A',
        line: '#e8e8e8',
        surface: '#f7f7f7',
      },
      fontFamily: {
        sans: ['Graphik', '"DM Sans"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        modal: '0 24px 80px rgba(17, 17, 17, 0.12)',
      },
      maxWidth: {
        modal: '654px',
      },
      keyframes: {
        'slide-in-right': {
          '0%':   { opacity: '0', transform: 'translateX(56px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-56px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'slide-in-left':  'slide-in-left  0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
    },
  },
  plugins: [],
};
