import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import { pinia } from './stores';
import internationalization from './locales';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(internationalization);

app.mount('#app');
