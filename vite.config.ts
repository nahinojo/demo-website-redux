import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For github pages, must be the name of the repo.
  base: '/demo-website-redux/.'
})
