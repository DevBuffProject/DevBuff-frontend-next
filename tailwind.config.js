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
          xxs : '0.68rem',
          x2s : '0.5rem'
        },
        keyframes: {
          bouncing : {
            '0%, 100%' : { transform : 'translateY(0px)' },
            '50%' : { transform: 'translateY(-10px)' }
          },
          colorfull : {
            '0%,100%' : { color : 'black' },
            '50%' : { color: 'gray' }
          }
        },
        animation : {
          bouncing : 'bouncing 1s ease-in-out infinite',
          colorfull : 'colorfull 2s ease-in-out infinite',
        }
      },
  },
  plugins: [],
}