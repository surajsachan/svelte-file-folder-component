import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'file-folder-component',
    }
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
        css: 'injected',
      },
      emitCss: false,
    }),
  ],
})