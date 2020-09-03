import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/tailwind.css';
import BaseButton from '@/components/BaseButton.vue';

createApp(App)
  .component('btn', BaseButton)
  .use(router)
  .mount('#app');
