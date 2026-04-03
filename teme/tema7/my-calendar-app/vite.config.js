import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: 'terser', // Tells Vite to use Terser instead of the default Esbuild
    terserOptions: {
      compress: {
        drop_console: true, // Removes console.logs for production
        dead_code: true,
      },
      mangle: {
        toplevel: true, // Mangles top-level variable names
      },
    },
  },
});
