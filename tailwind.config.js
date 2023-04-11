/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      red: "#FF0000",
      "daisy-bush": {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b4fe",
        400: "#a78afb",
        500: "#8b5af8",
        600: "#7d38ef",
        700: "#6f26db",
        800: "#5c1fb8",
        900: "#4e1c99",
        950: "#2f0f66",
      },
      "pale-sky": {
        50: "#f5f5f6",
        100: "#e4e5e9",
        200: "#cccfd5",
        300: "#a9aeb7",
        400: "#7e8592",
        500: "#6b7280",
        600: "#555a65",
        700: "#494c55",
        800: "#40424a",
        900: "#393a40",
        950: "#232429",
      },
    },
    extend: {
      backgroundImage: {
        "top-img": "url('../../src/asset/top_nav_s4.png')",
      },
      fontFamily: {
        NunitoSans: ["NunitoSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
