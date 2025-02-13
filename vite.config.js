import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Usando import.meta.url para resolver o caminho corretamente no Vite
      global: fileURLToPath(new URL('node_modules/global', import.meta.url)),
    },
  },
  define: {
    // Definindo o objeto global para ser o 'window' no navegador
    global: 'window',
  },
})
