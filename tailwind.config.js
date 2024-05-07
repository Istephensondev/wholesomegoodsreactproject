/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
        },
      },
      fontFamily: {
        kayak: ["Kayak", "sans-serif"],
      },
      colors: {
        "paste-primary": "#eaf4f6",
        "blue-primary": "#2e2f81",
        "border-inactive": "#979bc1",
        "text-open": "#393b88",
        "orange-light": "#fffcf5",
        "orange-primary": "#eb6c25",
        "stroke-primary": "#E2E2EA",
      },
    },
  },
  plugins: [],
};
