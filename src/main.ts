import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import './index.css'
import './assets/fonts/roboto.css'
import './assets/fonts/dm-sans.css'
import './assets/fonts/poppins.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
