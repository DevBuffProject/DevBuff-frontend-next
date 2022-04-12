const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        width: {
          '1280': '1280px !important',
          '100' : '100px',
        },
        colors: {
          'primary-400' : 'rgba(56,189,248)',
          'primary-100' : 'rgba(14,165,233,0.1)',
          'logo' : 'rgba(255, 255, 255, 0.45)'
        },
        fontFamily : {
          montserratThin : ['Montserrat-Thin'],
          montserratRegular : ['Montserrat-Regular'],
          montserratLight : ['Montserrat-Light'],
          montserratBold : ['Montserrat-Bold'],
        },
        fontSize : {
          xxs : '0.68rem'
        }
      },
  },
  plugins: [],
}