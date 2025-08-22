import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)

function setRem() {
  const html = document.documentElement;
  const width = html.clientWidth;
  html.style.fontSize = width / 100 + "px"; // 例如 1rem = 屏幕寬度的1%
}
window.addEventListener("resize", setRem);
setRem();


app.mount('#app')
