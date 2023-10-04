import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'metamask',
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: 'esm',
  splitting: false,
  sourcemap: true
})