import { resolve } from 'path'
import { build } from "vite";

export default {
    css: {
      devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                Comollegar: resolve(__dirname, 'pages/Comollegar/index.html'),
                Tarifas: resolve(__dirname, 'pages/Tarifas/index.html'),
                Mediosdecontacto: resolve(__dirname, 'pages/Mediosdecontacto/index.html'),
            }
        }
    }
}