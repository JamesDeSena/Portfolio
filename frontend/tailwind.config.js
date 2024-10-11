/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgb(128, 128, 128)', // Define your custom color here
      },
    },
  },
  plugins: [],
}