/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "purple-hover": "#2e024d",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
