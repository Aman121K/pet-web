/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        muted: '#6b7280',
        line: '#e8e8e8',
        surface: '#f7f7f7',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        modal: '0 24px 80px rgba(17, 17, 17, 0.12)',
      },
      maxWidth: {
        modal: '654px',
      },
    },
  },
  plugins: [],
};
