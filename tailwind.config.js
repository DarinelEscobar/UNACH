/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    
  },
  plugins: [],
}