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
        'purple-hover': '#2e024d',
      },
    },
  },
  plugins: [
    require('preline/plugin'), // Assurez-vous que le plugin Preline est bien chargé
  ],
}
