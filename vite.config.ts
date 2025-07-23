import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react',
        /^react\//,
        /^react-dom\//,
        '@google/genai',
        '@supabase/supabase-js',
        'lucide-react',
        'recharts',
        'jspdf',
        'html2canvas',
        'marked'
      ]
    }
  }
});
