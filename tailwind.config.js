/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Critical: '#ED5565',
        High: '#F8AC59',
        Medium: '#23C6C8',
        Low: '#0084C2',
    }},
  },
  plugins: [],
}
