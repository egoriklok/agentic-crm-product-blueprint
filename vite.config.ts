import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/agentic-crm-product-blueprint/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src"
    }
  }
}))
