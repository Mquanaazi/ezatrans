import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Adjusted to point to the new 'router' directory

// Create and mount the root Vue instance
createApp(App)
  .use(router)
  .mount('#app');
