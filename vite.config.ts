import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure the root is the project directory
  build: {
    outDir: 'build', // Change the output folder to 'build' to match Vercel's requirement
    rollupOptions: {
      input: './index.html', // Point to the correct location of index.html
    },
  },
});
