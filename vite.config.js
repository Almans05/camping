import { resolve } from 'path'
import { build } from "vite";

export default {
    css: {
      devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                contacto: resolve(__dirname, 'pages/Comollegar/index.html'),
                servicios: resolve(__dirname, 'pages/Tarifas/index.html'),
                productos: resolve(__dirname, 'pages/Mediosdecontacto/index.html'),
            }
        }
    }
}