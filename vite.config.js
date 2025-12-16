import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})

// tailwind.config.js (Example Customization)
module.exports = {
  
  theme: {
    extend: {
      colors: {
        'upland-blue': '#4c44e9', // Deep blue/purple
        'upland-dark': '#211e49', // Darker area color
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #4c44e9, #211e49)',
      }
    },
  },
 
}
