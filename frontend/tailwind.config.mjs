/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

// Add custom colors, fonts etc. here for easy reuse

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        red: '#EC4D4D',
        black: '#262525'
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require('daisyui')]
};
