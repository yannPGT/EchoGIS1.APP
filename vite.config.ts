import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [
    react(),
    VitePWA({ registerType: 'autoUpdate' }),
  ],
=======
  base: '/EchoGIS1.APP/',
  plugins: [react()],
>>>>>>> 751bb88 (💾 Sauvegarde avant rebase)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
