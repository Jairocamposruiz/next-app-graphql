module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'bounce-slow': 'bounce 1s ease-in-out 0.5s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      minHeight: {
        'container': '70vh',
      },
    },
  },
  plugins: [],
}
