// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'move': 'move 5s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(50px, 50px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
