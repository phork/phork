import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import pkg from './package.json';

export default defineConfig(({ mode }) => {
  return {
    base: '/',
    plugins: [react()],
    resolve: {
      alias: {
        assets: resolve(__dirname, 'src/assets'),
        components: resolve(__dirname, 'src/components'),
        config: resolve(__dirname, 'src/config'),
        hooks: resolve(__dirname, 'src/hooks'),
        icons: resolve(__dirname, 'src/icons'),
        modals: resolve(__dirname, 'src/modals'),
        pages: resolve(__dirname, 'src/pages'),
        postcss: resolve(__dirname, 'src/postcss'),
        styles: resolve(__dirname, 'src/styles'),
        types: resolve(__dirname, 'src/types'),
        utils: resolve(__dirname, 'src/utils'),
      },
    },
    define: {
      'process.env.__DEV__': JSON.stringify(mode === 'development'),
      'process.env.__VERSION__': JSON.stringify(pkg.version),
      'process.env.__BASE__': JSON.stringify('/'),
      'process.env.__NAME__': JSON.stringify(pkg.description),
    },
    server: {
      port: 8443,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    build: {
      outDir: 'build',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          entryFileNames: 'static/js/[name].[hash].js',
          chunkFileNames: 'static/js/[name].[hash].js',
          assetFileNames: ({ name = '' }) => {
            if (/\.(woff2?|ttf|eot)$/.test(name)) return 'fonts/[name].[hash][extname]';
            if (/\.(png|jpe?g|gif)$/.test(name)) return 'static/images/[name].[hash][extname]';
            return 'static/[ext]/[name].[hash][extname]';
          },
        },
      },
    },
  };
});
