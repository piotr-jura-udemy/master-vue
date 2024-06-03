import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

function ourPlugin() {
  return {
    secret: 'Dummy'
  };
}

pinia.use(ourPlugin);
app.use(pinia);
app.use(router);

app.mount('#app');
