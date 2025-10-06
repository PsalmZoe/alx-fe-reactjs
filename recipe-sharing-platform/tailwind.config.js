/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f97316", // orange-500
        secondary: "#facc15", // amber-400
        accent: "#fff7ed", // warm white
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      boxShadow: {
        card: "0 8px 20px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
