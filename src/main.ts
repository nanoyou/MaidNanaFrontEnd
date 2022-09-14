import { createApp } from 'vue'
import App from './App.vue'
import router from './ts/router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
