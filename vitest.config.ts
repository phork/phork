import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig({ mode: 'test', command: 'serve', isSsrBuild: false }),
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.ts'],
      include: ['__tests__/**/*.{spec,test}.{js,ts,jsx,tsx}'],
      css: false,
    },
  }),
);
