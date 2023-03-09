import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:[
      {find:"@api",replacement:"/src/api"},
      {find:"@atom",replacement:"/src/atom"},
      { find: "@", replacement: "/src" },
    ]
  }
})