import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios";

import axios from "axios";
import {createPinia} from "pinia";
import router from './ts/router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'


axios.defaults.baseURL = 'http://127.0.0.1:5277/api'

loadFonts()
createApp(App)
    .use(vuetify)
    .use(router)
    .use(createPinia())
    .use(VueAxios,axios)
    .mount('#app')

