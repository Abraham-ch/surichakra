/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Agrega tus clases de utilidad personalizadas
      textAdjust: {
        none: "none",
        auto: "auto",
        100: "100%",
      },
    },
  },
  plugins: [],
};
