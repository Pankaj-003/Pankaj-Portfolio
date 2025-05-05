/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#5e3bee",
        secondary: "#ff9e44",
        lightBlue: "#eef4ff",
        darkBlue: "#1c2752",
        lightGray: "#f5f5f5",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.05)',
        'button': '0 10px 20px rgba(94, 59, 238, 0.2)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'ripple': 'ripple 600ms linear',
        'blink': 'blink 1s infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 5s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        ripple: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
        blink: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0',
          },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 