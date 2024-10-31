/** @type {import('tailwindcss').Config} */

// Add custom colors, fonts etc. here for easy reuse

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      red: '#EC4D4D',
      black: '#262525'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },
  plugins: []
};
