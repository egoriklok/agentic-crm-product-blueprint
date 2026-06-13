import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, loadEnv } from "vite"

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, ".", "")

  return {
    base: env.VITE_BASE_PATH ?? (command === "build" ? "/agentic-crm-product-blueprint/" : "/"),
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": "/src"
      }
    }
  }
})
