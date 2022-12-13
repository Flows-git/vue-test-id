import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    coverage: {
      all: true,
      include: ['src/**'],
      exclude: ['**/interface.ts', '**/*.spec.ts', '**/__tests__/**', 'src/index.ts'],
      reporter: ['html-spa', 'lcov'],
    },
  },
})
