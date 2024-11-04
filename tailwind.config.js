/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      roboto: ['Roboto'],
      robotoMono: ['RobotoMono']
    },
    extend: {
      backgroundImage:{
        VouwfietsHeader: "url('../src/media/vouwfietsHeader.png')"
      }
    },
  },
  plugins: [],
}

