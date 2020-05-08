const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '7xl': '5rem',
      },
      colors: {
        blue: {
          brand: '#0041FF',
        },
      },
      spacing: {
        '1/6': '16.666667%',
        '8': '2rem',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      inset: {
        '1/6': '16.666667%',
        '8': '2rem',
      },
    },
  },
  variants: {
    margin: [
      'responsive',
      'hover',
      'focus',
      'active',
      'first',
      'odd',
      'group-hover',
    ],
    padding: ['responsive', 'hover', 'focus', 'active', 'first', 'odd'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
};
