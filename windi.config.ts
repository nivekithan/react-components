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
        background: {
          github: {
            main: "#0d1117",
            overlay: "#1c2128",
            hover: "#161b22",
          },
        },
        blue: {
          github: {
            "000": "#cae8ff",
            100: "#a5d6ff",
            200: "#79c0ff",
            300: "#58a6ff",
            400: "#388bfd",
            500: "#1f6feb",
            600: "#1158c7",
            700: "#0d419d",
            800: "#0c2d6b",
            900: "#051d4d",
          },
        },
      },
    },
  },
});
