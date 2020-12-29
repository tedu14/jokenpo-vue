import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { FontAwesome } from './plugins/fontAwesome'

createApp(App).use(router).component('fa', FontAwesome).mount('#app')
