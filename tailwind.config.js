/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'livera-green': '#2ECC71',
        'livera-dark-green': '#27AE60',
        'livera-forest': '#1E3A2E',
        'livera-light-green': '#E8F8F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}