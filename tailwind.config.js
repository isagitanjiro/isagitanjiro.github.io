/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050608',
          900: '#08090c',
          850: '#0b0d11',
          800: '#0f1116',
          700: '#161922',
          600: '#1d212c',
          500: '#272c39',
          400: '#3a4150',
          300: '#5b6473',
          200: '#8a93a3',
          100: '#c2c8d4',
          50: '#e8ebf1',
        },
        neon: {
          DEFAULT: '#2bf5d0',
          50: '#e6fff8',
          100: '#b8fff0',
          200: '#7dffe6',
          300: '#2bf5d0',
          400: '#12e0bd',
          500: '#06c4a3',
          600: '#03a287',
        },
        signal: {
          DEFAULT: '#7c9bff',
          400: '#8aa0ff',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        wide2: '0.08em',
        widest2: '0.2em',
      },
      maxWidth: {
        edge: '1280px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'drift-slow': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(2%, -3%) scale(1.06)' },
        },
        'drift-slow-2': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-3%, 2%) scale(1.08)' },
        },
        'grid-pan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '64px 64px' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 1s ease both',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        'drift-slow': 'drift-slow 18s ease-in-out infinite',
        'drift-slow-2': 'drift-slow-2 22s ease-in-out infinite',
        'grid-pan': 'grid-pan 40s linear infinite',
      },
    },
  },
  plugins: [],
};
