const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {},
    extend: {
      width: {
        '40': '10rem'
      },
      colors: {
        primary: colors.blue,
        secondary: colors.indigo,
        neutral: colors.gray
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '30': '30px',
        '36': '36px',
        '48': '48px',
        '60': '60px',
        '80': '80px'
      }
    }
  },
  variants: {},
  plugins: []
};
