/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'nunito' : ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary': '#232631',
        'secondary' : '#FDC886',
        'purple' : '#5A4FCF',
        'gray' : '#656565',
        'background' : '#FAFAFA',
        'star' : '#FFB800'
      }
    },
  },
  plugins: [],
}