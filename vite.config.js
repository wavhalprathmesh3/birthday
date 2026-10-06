import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: [
      'birthday-iznl.onrender.com',
      '.onrender.com'
    ]
  },
  preview: {
    host: true,
    allowedHosts: [
      'birthday-iznl.onrender.com',
      '.onrender.com'
    ]
  }
});
