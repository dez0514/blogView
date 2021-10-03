import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/reset.scss';
import './styles/editor.scss';
import 'highlight.js/scss/monokai.scss';
import 'aplayer/dist/APlayer.min.css';
import { installElement } from "../../plugins/elements";

const app = createApp(App)
// 调用installElement
installElement(app)
app.use(store).use(router).mount('#app')

