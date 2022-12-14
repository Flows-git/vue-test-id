import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      all: true,
      include: ['src/**'],
      exclude: ['**/interface.ts', '**/*.spec.ts', '**/__tests__/**', 'src/index.ts'],
      reporter: ['html-spa', 'lcov'],
    },
  },
})
