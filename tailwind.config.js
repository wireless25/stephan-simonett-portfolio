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
  plugins: [require('@tailwindcss/ui')],
};
