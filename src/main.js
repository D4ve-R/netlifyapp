import {createApp} from 'vue'
import VueAnalytics from 'vue3-analytics'
import App from './App.vue'
import router from './router'

const analyticsConfig = {
    id: 'G-45PZKR5J6F',
}

const app = createApp(App)
app.use(router)
app.use(VueAnalytics, analyticsConfig)
app.mount('#app')
