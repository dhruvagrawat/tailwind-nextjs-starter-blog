// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Add custom box shadows
      boxShadow: {
        custom: '4px 4px 10px rgba(0, 0, 0, 0.90)', // Right and bottom shadow
      },
      // Extend line heights for typography
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      // Add custom font families
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
        popins: ['"Popins"', 'sans-serif'],
        palatino: ['"Palatino Linotype"', 'Georgia', 'serif'],
        poppins: ['Poppins Medium', 'sans-serif'] 
      },
      // Add custom colors
      colors: {
        primary: colors.pink,
        gray: colors.gray,
        customorange: '#FFB400',
        cgray: '#D6D6D6',
      },
      // Add z-index levels
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        10: '10', // Ensures the dots are on top of the text
      },
      // Add custom keyframes and animations
      keyframes: {
        pulseCustom: {
          '0%, 100%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: '#FFB400' }, // Custom orange
        },
        'marquee-animation': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        'pulse-custom': 'pulseCustom 1.5s infinite',
        marquee: 'marquee-animation 30s linear infinite', // Slower for smoothness
      },
      // Extend typography plugin
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
