/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal:      '#1E5AA8',
        navy:       '#4B6A88',
        gold:       '#C8A96A',
        'gold-light': '#D9BE8A',
        'gold-dark':  '#A8893A',
        ivory:      '#FAF8F5',
        pearl:      '#F5F7FA',
        border:     '#E8ECF2',
        'text-primary':   '#1F2937',
        'text-secondary': '#6B7280',
        'text-muted':     '#94A3B8',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        '7xl': ['4.5rem',  { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '8xl': ['6rem',    { lineHeight: '1',    letterSpacing: '-0.04em' }],
        '9xl': ['8rem',    { lineHeight: '0.95', letterSpacing: '-0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'luxury':  '0 4px 40px -8px rgba(30,90,168,0.12)',
        'gold':    '0 4px 24px -4px rgba(200,169,106,0.35)',
        'card':    '0 2px 32px -4px rgba(0,0,0,0.08)',
        'card-hover': '0 16px 64px -12px rgba(30,90,168,0.20)',
        'float':   '0 32px 96px -16px rgba(30,90,168,0.15)',
        'nav':     '0 4px 32px rgba(0,0,0,0.06)',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite',
        'float-fast':   'float 4s ease-in-out infinite',
        'pulse-gold':   'pulseGold 2.5s ease-in-out infinite',
        'spin-slow':    'spin 20s linear infinite',
        'gradient':     'gradient 8s ease infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
        'counter':      'counter 2s ease-out forwards',
        'blob':         'blob 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(200,169,106,0.4)' },
          '50%':      { boxShadow: '0 0 0 16px rgba(200,169,106,0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%':      { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '50%':      { borderRadius: '50% 60% 30% 60% / 30% 40% 70% 60%' },
          '75%':      { borderRadius: '60% 40% 60% 30% / 70% 30% 50% 60%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
