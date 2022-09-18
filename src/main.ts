import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios";

import axios from "axios";
import {createPinia} from "pinia";
import router from './ts/router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

const storage = createPinia()

loadFonts()
createApp(App)
    .use(vuetify)
    .use(router)
    .use(storage)
    .use(VueAxios,axios)
    .mount('#app')
