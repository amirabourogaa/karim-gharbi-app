// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"  // Add paths to your components
  ],
  theme: {
    extend: {
      fontFamily: {
        mansalva: ['Mansalva', 'cursive'],
      }
    },
  },
  plugins: [],
}
