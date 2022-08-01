/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet-blue': '#3B3BBC',
      }
    },
    fontFamily: {
      'sansita': ["Sansita"],
      'dm-sans': ["DM Sans"]
    },
  },
  plugins: [],
}
