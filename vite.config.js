import { resolve } from 'path'
import { build } from "vite";

export default {
    css: {
      devSourcemap: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname,'index.html'),
                contacto: resolve(__dirname, 'pages/¿ Como llegar ?/index.html'),
                nosotros: resolve(__dirname, 'pages/Descuentos/index.html'),
                productos: resolve(__dirname, 'pages/Medios de contacto/index.html'),
                servicios: resolve(__dirname, 'pages/Tarifas/index.html'),
            }
        }
    }
}
