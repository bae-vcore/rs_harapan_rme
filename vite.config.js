import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      images: '/src/assets/images/',
      components: '/src/components/',
      pages: '/src/pages/',
      router: '/src/router/',
    },
  },
})
