import {resolve} from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Configure SASS modules aliases
  resolve: {
    alias: {
      '@sass': resolve(__dirname, 'src/sass'),
      '@base': resolve(__dirname, 'src/sass/base'),
      '@components': resolve(__dirname, 'src/sass/components'),
      '@config': resolve(__dirname, 'src/sass/config'),
      '@mixins': resolve(__dirname, 'src/sass/config'),
      '@functions': resolve(__dirname, 'src/sass/functions'),
      '@atoms': resolve(__dirname, 'src/sass/atoms')
    }
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      },
      sass:{
        api: 'modern-compiler'
      } 
    }
  }
})
