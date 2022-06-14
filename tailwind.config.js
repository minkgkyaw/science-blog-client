/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'play': ["'Playfair Display', serif"],
        "poppin": ["Poppins', sans-serif"]
      }
    },
  },
  plugins: [],
};
