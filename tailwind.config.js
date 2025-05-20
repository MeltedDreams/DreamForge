/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
colors: {
  primary: {  // warm orange
    50:  '#fff8f1',
    100: '#feecdc',
    200: '#fcd9b6',
    300: '#f9bf7f',
    400: '#f7994d',
    500: '#f47d20',
    600: '#dd691d',
    700: '#b94f18',
    800: '#8c3d12',
    900: '#6b2e0d',
  },
  secondary: {  // deep orange / burnt orange
    50:  '#fff4f1',
    100: '#fce3d5',
    200: '#f7bfa4',
    300: '#f3976f',
    400: '#ed6c3f',
    500: '#db5020',
    600: '#b8421b',
    700: '#8f3116',
    800: '#672512',
    900: '#4b1c0f',
  },
  accent: {  // vibrant red
    50:  '#fff4f4',
    100: '#fcdada',
    200: '#f8b5b5',
    300: '#f38888',
    400: '#ec585a',
    500: '#d93937',
    600: '#b73232',
    700: '#8e2727',
    800: '#671d1e',
    900: '#4c1516',
  },
},
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};