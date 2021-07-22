import { createApp } from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/vue'
import { Vue as VueIntegration } from '@sentry/integrations'
import './index.css'

const app = createApp(App).mount('#app')

Sentry.init({
  dsn: process.env.VUE_APP_SENTRY_DSN,
  integrations: [new VueIntegration({ Vue: app })],
  environment: process.env.NODE_ENV,
})
