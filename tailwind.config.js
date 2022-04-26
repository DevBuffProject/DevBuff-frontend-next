const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        screens: {
          'low' : '1px'
        },
        width: {
          '1280': '1280px !important',
          '100' : '100px',
        },
        height : {
          '52' : '52rem'
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
          x4l : '2.2rem',
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
          },
          dot : {
            //DOT ANIMATION
          },
          skyblue : {
            '0%,100%' : { color : 'lightgray' },
            '20%' : { color : 'lightgray' },
            '30%' : { color : 'lightgray' },
            '40%' : { color : '#007CF0' },
            '50%' : { color : '#007CF0' },
            '100%' : { color : 'lightgray' },
          },
          logo : {
            '0%,100%' : { stopColor : 'lightgray' },
            '20%' : { stopColor : 'lightgray' },
            '30%' : { stopColor : 'lightgray' },
            '40%' : { stopColor : '#007CF0' },
            '50%' : { stopColor : '#007CF0' },
            '100%' : { stopColor : '#007CF0' },
          },
          callback : {
            '0%,100%' : { stopColor : 'lightgray' },
            '20%' : { stopColor : 'lightgray' },
            '30%' : { stopColor : 'lightgray' },
            '40%' : { stopColor : '#007CF0' },
            '50%' : { stopColor : '#007CF0' },
            '100%' : { stopColor : 'lightgray' },
          },
          callbackStop : {
            '0%,100%' : { stopColor : 'lightgray' },
            '20%' : { stopColor : 'lightgray' },
            '30%' : { stopColor : 'lightgray' },
            '40%' : { stopColor : '#007CF0' },
            '50%' : { stopColor : '#007CF0' },
            '100%' : { stopColor : 'lightgray' },
          },
          logoStop : {
            '0%,100%' : { stopColor : 'lightgray' },
            '20%' : { stopColor : 'lightgray' },
            '30%' : { stopColor : 'lightgray' },
            '40%' : { stopColor : 'lightgray' },
            '50%' : { stopColor : '#007CF0' },
            '100%' : { stopColor : '#007CF0' }
          }
        },
        animation : {
          bouncing : 'bouncing 1s ease-in-out infinite',
          colorfull : 'colorfull 2s ease-in-out infinite',
          skyblue : 'skyblue 1.5s ease-in-out infinite',
          logo : 'logo 1.5s ease-in-out forwards',
          logoStop : 'logoStop 1.5s ease-in-out forwards ',
          callback : 'callback 1.5s ease-in-out infinite',
          callbackStop : 'callbackStop 1.5s ease-in-out infinite'
        }
      },
  },
  plugins: [],
}