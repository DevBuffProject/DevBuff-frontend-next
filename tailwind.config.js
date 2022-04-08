module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        width: {
          '1280': '1280px !important',
        },
        colors: {
          'primary-400' : 'rgba(56,189,248)',
          'primary-100' : 'rgba(14,165,233,0.1)'
        }
      },
  },
  plugins: [],
}