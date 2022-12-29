const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      grid: colors.gray[50],
      "grid-dark": colors.slate[700],
      border: colors.gray[100],
      "border-dark": colors.slate[600],
      background: colors.white,
      "background-dark": colors.gray[800],
      navbar: "#424549",
      "navbar-dark": colors.gray[600],
      text: colors.slate[700],
      "text-dark": colors.slate[300],
    },
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
};
