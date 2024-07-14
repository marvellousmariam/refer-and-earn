/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
  
  ],
  theme: {
    extend: {
      daisyui: {
    themes: ["light", "synthwave" ],
  },
  color:{
  "primary":" #1A73E81C",
    },
  },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}