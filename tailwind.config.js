/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      'title': '32px',
      'subtitle': '24px',
      'big_paragraph': '18px',
      'paragraph': '16px',
      'small_paragraph': '14px',
    },
    screens: {
      'xxs': '425px',
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1536px',
    },
    extend: {
      colors: {
        'primary_bg': '#F9F7F4',
        'primary_font': '#333333',
        'primary_link_hover': '#702963',
        'burger_menu': '#444444',
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
        '.primary_link': {
          backgroundColor: 'transparent',
          color: '#333333',
          '&:hover': {
            color: '#702963',
          },
        }
      })
    })
  ],
};
