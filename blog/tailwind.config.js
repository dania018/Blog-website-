/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this scans all the correct files
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary": ["Inter", "sans-serif"], // Fixed syntax
      },
    },
  },
  plugins: [],
}
