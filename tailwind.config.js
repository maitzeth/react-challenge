/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#0b548b",
          DEFAULT: "#084f85",
          dark: "#003b67",
          darker: "#00355d",
        },
        secondary: {
          DEFAULT: "#17aa8d",
        },
      },
    },
  },
  plugins: [],
};
