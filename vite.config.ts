import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	server:{
		// https:true,//使用https
		open:true,//默认打开浏览器
	},
  plugins: [vue()]
})
