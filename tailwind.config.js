/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#b3d3fe',
        linkedIn:'#0d65c2',
        customGray: "#1a1a19" // Add your custom color here
      },
      fontFamily: {
        phosphate: ['Phosphate', 'sans-serif'],
        sans: ['Calibri', 'Arial', 'sans-serif'],
        comic: ['Comic Sans MS']
      },
    },
  },
  plugins: [],
};
