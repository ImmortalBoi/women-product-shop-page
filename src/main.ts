import './style.css'

import App from './App.vue'
import { createHead } from '@unhead/vue'
import { createApp } from 'vue'

const app = createApp(App)
const head = createHead()
app.use(head)
app.mount('#app')
