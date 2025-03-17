import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 5173, // หรือ 5174 ตามที่ Vite ใช้
  },
  build: {
    outDir: 'dist', // ✅ บอกให้ Vite สร้างไฟล์ในโฟลเดอร์ dist
  },
});
