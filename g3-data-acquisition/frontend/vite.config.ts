import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [svelte()],
    server: {
        // Forward API and WebSocket calls to the FastAPI backend during development.
        proxy: {
            '/api': { target: 'http://localhost:8000', ws: true },
        },
    },
})
