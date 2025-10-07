// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ajuste aqui para a extensão dos seus arquivos
  ],
  theme: {
    extend: {
      // Adicione esta seção de cores
      colors: {
        'primary-dark': '#242A38',
        'primary-orange': '#D4816F',
        'primary-gold': '#EDF3F3',
      }
    },
  },
  plugins: [],
}