/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Museo Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "greya": "#5D6473",
      },
    },
  },
  plugins: [],
};
