import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'


import App from './App.vue'
import router from './router'

// Bootstrap Style
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.js'

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// Translations Datas
import enTranslation from './i18n/en-US/en-US.json';
import deTranslation from './i18n/de-DE/de-DE.json';

const i18n = createI18n({
    locale: 'de', // Standardmäßig die englische Sprache verwenden
    allowComposition: true,
    fallbackLocale: 'de',
    messages: {
        en: enTranslation,
        de: deTranslation,
    }
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
