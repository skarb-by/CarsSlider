import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CarsSlider/', // Это ОБЯЗАТЕЛЬНО для GitHub Pages
  plugins: [react()],
})