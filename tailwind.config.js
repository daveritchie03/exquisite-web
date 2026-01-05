/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#D4AF37",
          gold2: "#B98A2E",
          black: "#070707",
          charcoal: "#0E0E0E",
          ink: "#121212",
        },
      },
      fontFamily: {
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(212,175,55,0.18), 0 10px 30px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
