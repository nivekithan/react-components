import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: {
          github: {
            "000": "#aff54",
            100: "#7ee787",
            200: "#56d364",
            300: "#3fb950",
            400: "#2ea043",
            500: "#238636",
            600: "#196c2e",
            700: "#0f5323",
            800: "#033a16",
            900: "#04260f",
          },
        },
      },
    },
  },
});
