const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#F5F5F5",
            foreground: "#1A1A1A",
            primary: {
              50: "#FAFAFA",
              100: "#F4F4F5",
              200: "#E4E4E7",
              300: "#D4D4D8",
              400: "#A1A1AA",
              500: "#71717A",
              600: "#52525B",
              700: "#3F3F46",
              800: "#27272A",
              900: "#18181B",
              DEFAULT: "#52525B",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#71717A",
              foreground: "#FFFFFF"
            },
          },
        },
        dark: {
          colors: {
            background: "#0A0A0A",
            foreground: "#E5E7EB",
            primary: {
              50: "#18181B",
              100: "#27272A",
              200: "#3F3F46",
              300: "#52525B",
              400: "#71717A",
              500: "#A1A1AA",
              600: "#D4D4D8",
              700: "#E4E4E7",
              800: "#F4F4F5",
              900: "#FAFAFA",
              DEFAULT: "#A1A1AA",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#71717A",
              foreground: "#FFFFFF"
            },
          },
        },
      },
    }),
  ],
};