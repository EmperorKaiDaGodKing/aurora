/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#8b5cf6',
        muted: '#94a3b8',
        'bg-deep': '#060708',
        glass: 'rgba(255,255,255,0.03)',
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
        ],
      },
      boxShadow: {
        'soft-accent': '0 6px 18px rgba(139,92,246,0.12)',
      },
    },
  },
  plugins: [],
};
