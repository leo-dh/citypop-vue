const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./public/**/*.html', './src/**/*.html', './src/**/*.vue'],
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9]
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['"Roboto Slab"', ...defaultTheme.fontFamily.serif],
        cursive: ['Damion', 'cursive']
      },
      colors: {
        deluge: {
          100: '#F3EFF6',
          200: '#E0D7E8',
          300: '#CDBFDA',
          400: '#A890BF',
          500: '#8260A3',
          600: '#755693',
          700: '#4E3A62',
          800: '#3B2B49',
          900: '#271D31'
        },

        japonica: {
          100: '#FBF2F1',
          200: '#F6DEDC',
          300: '#F0CBC6',
          400: '#E5A39C',
          500: '#DA7C71',
          600: '#C47066',
          700: '#834A44',
          800: '#623833',
          900: '#412522'
        },

        mojo: {
          100: '#F9ECEC',
          200: '#F0CFCF',
          300: '#E7B1B3',
          400: '#D47779',
          500: '#C23D40',
          600: '#AF373A',
          700: '#742526',
          800: '#571B1D',
          900: '#3A1213'
        },
        blackcurrant: '#392F43'
      }
    }
  },
  variants: {},
  plugins: [require('tailwindcss-elevation')(['responsive']), require('tailwindcss-aspect-ratio')]
};
