import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  theme: {
    fontSize: {
      "3xl": "3.75rem",
      "2xl": "3.125rem",
      xl: "2.5rem",
      md: "1.5rem",
      base: "1.0625rem",
      sm: "0.9375rem",
      xs: "0.8125rem",
    },
    fontWeight: {
      bold: 700,
      medium: 500,
      regular: 400,
    },
  },
});
