import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'simplemde/dist/simplemde.min.css';
import 'highlight.js/scss/monokai.scss'

import { installElement } from "../../plugins/elements";
const app = createApp(App)
// 调用installElement
installElement(app)
app.use(store).use(router).mount('#app')
