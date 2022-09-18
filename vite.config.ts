import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
	]
})

module.exports = {
	devServer:{
		proxy:{
			'/dev':{
				target:'https://localhost:5277/api/',
				changeOrigin:true,
				secure:false,
				pathRewrite:{
					'^/dev':''
				}
			}
		}
	}
}
