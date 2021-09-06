import type { AppRouteModule } from '../types';

export const love: AppRouteModule = {
  path: '/cheese-love',
  name: 'cheese-love',
  redirect: '/cheese-love/love1',
  component: () => import('@/views/index.vue'),
  meta: {
    title: 'cheese的爱人们',
    icon: 'AppstoreOutlined',
  },
  children: [
    {
      path: 'love1',
      name: 'love1',
      meta: {
        title: '宝宝1',
      },
      component: () => import(/* webpackChunkName: "check-count-check" */ '@/views/firstCont/index.vue'),
    },
    {
      path: 'love2',
      name: 'love2',
      meta: {
        title: '宝宝2',
      },
      component: () => import(/* webpackChunkName: "check-count-count" */ '@/views/secondCont/index.vue'),
    },
  ],
};
