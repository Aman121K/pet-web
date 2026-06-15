/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        muted: '#64748B',
        line: '#E2E8F0',
        surface: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Graphik', 'Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        modal: '0 24px 60px rgba(15, 23, 42, 0.12)',
      },
      maxWidth: {
        modal: '654px',
      },
      keyframes: {
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'slide-in-left': 'slide-in-left 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
    },
  },
  plugins: [],
};
