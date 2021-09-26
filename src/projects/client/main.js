import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/reset.scss';
import './styles/editor.scss';
import 'highlight.js/scss/monokai.scss';
import 'aplayer/dist/APlayer.min.css';

const app = createApp(App)
app.use(store).use(router).mount('#app')
