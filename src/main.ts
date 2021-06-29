import { createApp } from 'vue'
import App from './App.vue'
import axios from './api/axios/axios.js'
// base api
console.log(import.meta.env.VITE_APP_BASE_API);
const app = createApp(App) // 创建实例
app.config.globalProperties.$http = axios
app.mount('#app')
