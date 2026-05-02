import "@/style/main.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales'

// Création de l'application
const app = createApp(App)

// Utilisation du routeur et de i18n
app.use(router)
app.use(i18n)

// Montage de l'application
app.mount('#app')

