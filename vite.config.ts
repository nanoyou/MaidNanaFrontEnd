import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    if (command == 'serve') {
        return {
            plugins: [
                vue(),
                vuetify({ autoImport: true }),
            ],
            server:{
                proxy:{
                    '/api':{
                        target:'http://localhost:5277/api/',
                        changeOrigin:true,
                        secure:false,
                        rewrite:(path)=>
                            path.replace("^/api",'')
                    }
                }
            }
        }
    } else {
        return {
            plugins: [
                vue(),
                vuetify({ autoImport: true }),
            ]
        }
    }
})