/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts', './src/util/Mock/matchMedia.ts', './src/util/Mock/resizeObserver.ts'],
    exclude: ["dist/*", ".turbo/*", "node_modules/*"],
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json', 'lcov'],
      exclude: [
        '*/.module.css',
        '*/.test.tsx',
        '*/.cjs',
        'src/.d.ts',
        'src/util/mock/**',
        'src/util/testWrapper/**',
        'src/App.tsx',
        'src/RouterLinks.tsx',
        'src/main.tsx',
        'src/state-management/**',
      ],
      all: true,
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
  },
})
