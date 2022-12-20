/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: '#FFFFFF',
          900: '#000000'
        },
        purple: {
          400: '#7945FF',
          500: '#5C2DD5'
        },
        red: {
          300: '#FD6687'
        },
        yellow: {
          300: '#FFCE57'
        }
      },
      boxShadow: {
        '2xl': '0px 10px 0px #000000'
      }
    },
  },
  plugins: [],
}
