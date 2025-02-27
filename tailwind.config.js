/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#B23920",
        secondary: "#F7B754",
        tertiary: "#223c5f",
      },
    },
  },
  plugins: [],
}

