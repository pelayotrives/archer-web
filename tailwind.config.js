/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    fontSize: {
      'title': '32px',
      'subtitle': '24px',
      'big_paragraph': '18px',
      'paragraph': '16px',
      'small_paragraph': '14px',
    },
    screens: {
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary_bg': '#F9F7F4',
        'primary_font': '#333333',
        'primary_link_hover': '#702963',
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
