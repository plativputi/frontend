import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Сайт публикуется на GitHub Pages по адресу https://plativputi.github.io/frontend/,
  // поэтому ассеты должны запрашиваться из подпапки, а не из корня домена.
  base: '/frontend/',
  plugins: [react()],
})
