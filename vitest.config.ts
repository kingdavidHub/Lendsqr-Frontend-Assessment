import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Enables Jest-like globals (e.g., describe, it, expect)
    environment: 'jsdom', // For browser-like testing (use 'node' for backend tests)
    setupFiles: './vitest.setup.ts', // Path to setup file, if any
  },
});
