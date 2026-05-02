import { createI18n } from 'vue-i18n'
import fr from './fr'
import mg from './mg'

// Récupérer la langue sauvegardée
const savedLocale = localStorage.getItem('locale') || 'fr'


const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'fr',
  messages: {
    fr,
    mg
  },
  globalInjection: true
})

export default i18n