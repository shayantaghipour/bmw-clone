import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚡ دقت کن base مهمه
export default defineConfig({
  plugins: [react()],
  base: "./", // 👈 این باعث میشه روی هر هاستی درست لود بشه
})
