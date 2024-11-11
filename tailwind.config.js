/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      fontWeight: {
        poppinsMedium: 500,
        poppinsExtrabold: 800,
      },
    },
  },
  plugins: [],
};
