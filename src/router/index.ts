import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { baseRoute } from './routes/index';

const router = createRouter({
  history: createWebHashHistory(),
  routes: baseRoute as unknown as RouteRecordRaw[],
})

export default router
