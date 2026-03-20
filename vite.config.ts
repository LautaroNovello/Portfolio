import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          ui: ['@heroui/react'],
          motion: ['framer-motion'],
          icons: ['react-icons', 'lucide-react'],
        },
      },
    },
  },
})
