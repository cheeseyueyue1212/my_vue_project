import { createApp } from 'vue'
import App from '@/App.vue'
import { setupAntd } from "./index";
import router from '@/router/index'
import store from '@/store/index'

async function bootstrap() {
  const app = createApp(App);

  app.use(router);
  app.use(store);
  setupAntd(app); // 调用组件
  app.mount('#app');
}

bootstrap();
