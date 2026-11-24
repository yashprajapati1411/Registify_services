/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#2B1E6B',
        deep: '#1B1247',
        amb: {
          DEFAULT: '#FFB020',
          hover: '#E59D10',
          light: '#FFF3D6',
        },
        lil: '#F1EEFF',
        crm: '#FFF9F1',
        cor: '#FF6B5A',
        lavender: '#CFC6FF',
        mutedText: '#6B6590',
        brand: {
          navy: '#2B1E6B',
          'navy-deep': '#1B1247',
          'navy-card': '#1B1247',
          'navy-btn': '#2B1E6B',
          orange: '#FFB020',
          yellow: '#FFB020',
          'yellow-hover': '#E59D10',
          light: '#F1EEFF',
          border: '#DFE4F1',
          text: '#2C2850',
          muted: '#6B6590',
        },
        registify: {
          navy: {
            50: '#F1EEFF',
            100: '#E1DBF7',
            200: '#C5BBEE',
            300: '#9E8EE0',
            400: '#5F46BA',
            500: '#2B1E6B',
            600: '#231859',
            700: '#1F154E',
            800: '#1B1247',
            900: '#120B32',
            950: '#0B0620',
          },
          royal: {
            500: '#2B1E6B',
            600: '#1B1247',
          },
          teal: {
            500: '#FF6B5A',
            600: '#E05545',
          },
          yellow: {
            400: '#FFB020',
            500: '#E59D10',
          },
          bg: '#FFF9F1',
          charcoal: '#2C2850',
          muted: '#6B6590',
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['Bitter', 'Georgia', 'serif'],
        heading: ['Oswald', 'sans-serif'],
        condensed: ['Oswald', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 14px 34px rgba(43, 30, 107, 0.12)',
        'btn': '0 8px 22px rgba(255, 176, 32, 0.35)',
        'map-box': '0 18px 40px rgba(10, 6, 50, 0.45)',
        'strip': '0 20px 50px rgba(10, 6, 50, 0.45)',
      },
      animation: {
        'flow': 'flow 1.6s linear infinite',
        'pulse-glow': 'pu 2s infinite',
        'glow': 'gl 3s ease-in-out infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'float-reverse': 'floatRev 5s ease-in-out infinite',
      },
      keyframes: {
        flow: {
          'to': { strokeDashoffset: '-20' },
        },
        pu: {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 176, 32, 0.75)' },
          '70%': { boxShadow: '0 0 0 22px rgba(255, 176, 32, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255, 176, 32, 0)' },
        },
        gl: {
          '50%': { transform: 'scale(1.25)', opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(2deg)' },
          '50%': { transform: 'translateY(8px) rotate(-1deg)' },
        },
      }
    },
  },
  plugins: [],
}
