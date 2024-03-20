import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const EdoTheme = {
  dark: false,
  colors: {
    'primary': '#00a0e3',
    'secondary': '#121212',
    'success': '#89cb4e',
    'error': '#e32831',
    'edo-error-light': '#ffeced',
    'edo-main-bg': '#f8fbff',
    'edo-gray-7a': '#7a7a7a',
    'edo-white': '#fff',
    'edo-black': '#121212',
  }
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    locale: {
      fallback: "ru", 
    },
    theme: {
      defaultTheme: 'EdoTheme',
      themes: {
        EdoTheme,
      },
    },  
    ssr: true, 
  });
  app.vueApp.use(vuetify)
})
