// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        spacegrotesk: ["SpaceGrotesk", "sans-serif"], // Changed from 'grotesk' to 'spacegrotesk'
      },
      colors: {
        react: "#61DAFB",
        flutter: "#02569B",
        tailwind: "#38BDF8",
        supabase: "#3ECF8E",
        firebase: "#FFCA28",
      },
    },
  },
  plugins: [],
};
