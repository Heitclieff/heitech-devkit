import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'
import autoprefixer  from 'autoprefixer'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve :  {
    alias : { 
      "@": path.resolve(__dirname, "./src"),
      '@components' : '/src/components',
      '@layout' : '/src/layout',
      '@utils' : '/src/utils',
      '@assets' : '/src/assets'
    }
  },
  build :  {
    minify : 'terser',
    sourcemap : false,
    chunkSizeWarningLimit  : 1000,
    rollupOptions : { 
      output : { 
        manualChunks :  {
          vendor : ['react' , 'react-dom']
        }
      }
    }
  },
  optimizeDeps : { 
    include : ['react', 'react-dom'],
    esbuildOptions : {
      target : 'esnext'
    }
  },
  cacheDir: 'node_modules/.vite_cache',
  server :  {
    watch: {
      usePolling: true
    },
  },
  css : { 
    devSourcemap : true,
    postcss : {
      plugins : [
        tailwindcss(),
        autoprefixer()
      ]
    }
  }
})
