/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dicoding: {
          dark: '#1e1e1e', // Example dark
          primary: '#2d3e50', // Example primary
        }
      }
    },
  },
  plugins: [],
}
