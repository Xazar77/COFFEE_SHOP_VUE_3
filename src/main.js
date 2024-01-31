import './assets/scss/style.scss'

import { createApp } from 'vue'
import { router } from './routes'
import App from './App.vue'
import { store } from './store/index'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

