/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Ajoutez tous les fichiers où Tailwind doit chercher les classes
    './index.html', // Si vous avez ce fichier
    'node_modules/preline/dist/*.js', // Assurez-vous que Preline est également inclus
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-light': '#06035f',
        'dark-blue': '#06034f',
        'dark-blue-hover': '#04023f',
      },
    },
  },
  plugins: [
    require('preline/plugin'), // Assurez-vous que le plugin Preline est bien chargé
  ],
}