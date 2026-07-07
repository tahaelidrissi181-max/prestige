import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['framer-motion', 'swiper/react', 'swiper/modules'],
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':  ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-swiper': ['swiper', 'swiper/react', 'swiper/modules'],
          'vendor-icons':  ['lucide-react', 'react-icons'],
        },
      },
    },
  },
})
