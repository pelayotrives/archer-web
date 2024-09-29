/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'futura-light-italic': ['Futura Light Italic BT', 'sans-serif'],
      'futura-light': ['Futura Light BT', 'sans-serif'],
      'futura-book-italic': ['Futura Book Italic BT', 'sans-serif'],
      'futura-book': ['Futura Book BT', 'sans-serif'],
      'futura': ['Futura', 'sans-serif'],
      'futura-medium-italic': ['Futura Medium Italic BT', 'sans-serif'],
      'futura-medium': ['Futura Medium BT', 'sans-serif'],
      'futura-bold-italic': ['Futura Bold Italic BT', 'sans-serif'],
      'futura-bold': ['Futura Bold BT', 'sans-serif'],
      'futura-heavy-italic': ['Futura Heavy Italic BT', 'sans-serif'],
      'futura-heavy': ['Futura Heavy BT', 'sans-serif'],
      'futura-extra-black': ['Futura Extra Black BT', 'sans-serif'],
    },
    fontSize: {
      'advertise': '140px',
      'big-title': '48px',
      'title': '32px',
      'subtitle': '24px',
      'small-title': '21px',
      'big-paragraph': '18px',
      'paragraph': '16px',
      'small-paragraph': '14px'
    },
    screens: {
      'xxxxs': '320px',
      'xxxs': '375px',
      'xxs': '425px',
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1575px',
      'xxxl': '1920px',
    },
    extend: {
      width: {
        'xxxxs': '320px',
        'xxxs': '375px',
        'xxs': '425px',
        'xs': '500px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xxl': '1575px',
        'xxxl': '1920px'
      },
      colors: {
        'primary-background': '#F9F7F4',
        'primary-font': '#333333',
        'primary-link-hover': '#702963',
        'primary-button': '#702963',
        'primary-button-hover': '#8C2579',
        'primary-button-active': '#591D4E',
        'burger-menu': '#444444',
      },
      spacing: {
        'sp1': '4px',
        'sp2': '8px',
        'sp3': '12px',
        'sp4': '16px',
        'sp5': '20px',
        'sp6': '24px',
        'sp7': '28px',
        'sp8': '32px',
        'sp9': '36px',
        'sp10': '40px',
        'sp11': '44px',
        'sp12': '48px',
        'sp13': '52px',
        'sp14': '56px',
        'sp15': '60px',
        'sp16': '64px',
        'sp17': '68px',
        'sp18': '72px',
        'sp19': '76px',
        'sp20': '80px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    plugin(function({ addComponents }) {
      addComponents({
        //! Base Components
        '.row': {display: 'flex', flexDirection: 'row'}, 
        '.row-centered': {display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}, 
        '.row-between': {display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}, 
        '.col': {display: 'flex', flexDirection: 'column'},
        '.col-centered': {display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}, 
        '.col-between': {display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'},
        //! Inputs
        '.input': {
          '@apply border-b-[#C5C5C5] border-t-0 border-r-0 border-l-0 bg-transparent': {},
          '&:focus': {'@apply ring-0 border-b-primary-button': {},},
        },
        //! Buttons
        '.primary-button': {
          '@apply bg-primary-button text-white w-fit font-medium py-2 px-6 rounded transition-all text-center cursor-pointer': {},
          '&:hover': {'@apply bg-primary-button-hover': {},},
          '&:active': {'@apply bg-primary-button-active': {},},
          '&:focus': {'@apply outline-1 outline-[#AD2D93]': {},},
        },
        '.primary-link': {
          '@apply no-underline text-[#333333] transition-all cursor-pointer': {},
          '&:hover': {'@apply text-primary-link-hover': {},},
        },
      })
    })
  ],
};
