const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_pages/**/*.html',
    './_posts/*.md',
    './*.html'
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter var', ...defaultTheme.fontFamily.sans],
      'serif': ['Libre Baskerville', ...defaultTheme.fontFamily.serif]
    },
    extend: {
      colors: {
        'harp': {
          '50': '#f3faf5',
          '100': '#e6f4eb',
          '200': '#cbe7d5',
          '300': '#a2d3b5',
          '400': '#72b68c',
          '500': '#4e996b',
          '600': '#3c7d55',
          '700': '#326345',
          '800': '#2b5039',
          '900': '#254230',
          '950': '#102318',
        },
        'rum-swizzle': {
          '50': '#f8f5e2',
          '100': '#f4efcd',
          '200': '#ebdd9d',
          '300': '#dfc565',
          '400': '#d4ae3b',
          '500': '#c4992e',
          '600': '#a97825',
          '700': '#875821',
          '800': '#714822',
          '900': '#613d22',
          '950': '#381f10',
        },
        'jordy-blue': {
          '50': '#eff5ff',
          '100': '#dae7ff',
          '200': '#bdd6ff',
          '300': '#90bcff',
          '400': '#74a7fe',
          '500': '#3672fb',
          '600': '#2051f0',
          '700': '#183ddd',
          '800': '#1a32b3',
          '900': '#1b308d',
          '950': '#151f56',
        },
        'lavender': {
          '50': '#f7f5f9',
          '100': '#f0eef6',
          '200': '#e0d8f0',
          '300': '#c6b5e3',
          '400': '#a78dd6',
          '500': '#8e6dbd',
          '600': '#7552a3',
          '700': '#5e3f8b',
          '800': '#4b3276',
          '900': '#3e2b66',
          '950': '#1e1633',
        }
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

