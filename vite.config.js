import { resolve } from 'path'
import { build } from "vite";

export default {
    css: {
      devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                contacto: resolve(__dirname, 'pages/¿Como llegar?/index.html'),
                productos: resolve(__dirname, 'pages/Medios de contacto/index.html'),
                servicios: resolve(__dirname, 'pages/Tarifas/index.html'),
            }
        }
    }
}