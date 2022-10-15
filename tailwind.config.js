/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myellow': '#F9B300',
        'mwhite': '#EFEFEF',
        'mblack': '#4F4F4F'
      }
    },
  },
  plugins: [],
}
