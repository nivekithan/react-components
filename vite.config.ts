import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import WindiCss from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), WindiCss()],
});
