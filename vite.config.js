import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-Weather-App/', // Replace with your repository name
  plugins: [react()],
});
