/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // incluye .jsx
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite', // si quieres animaciones personalizadas
      },
      colors: {
        'neon-pink': '#ff00ff',
        'neon-blue': '#00ffff',
      },
    },
  },
  plugins: [],
}
