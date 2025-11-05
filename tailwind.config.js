/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor:{
        'first':'rgb(85 87 227)',
        'second':'rgb(255 255 255)',
      }

    },
    fontFamily:{
      'pk-font':'Sriracha',
    }
  },
  plugins: [],
}

