import type { AppRouteModule } from '../types';

export const baby: AppRouteModule = {
  path: '/cheese-baby',
  name: 'cheese-baby',
  redirect: '/cheese-baby/baby1',
  component: () => import('@/views/index.vue'),
  meta: {
    title: 'cheese的宝宝们',
    icon: 'AppstoreOutlined',
  },
  children: [
    {
      path: 'baby1',
      name: 'baby1',
      meta: {
        title: '宝宝1',
      },
      component: () => import(/* webpackChunkName: "check-count-check" */ '@/views/firstCont/index.vue'),
    },
    {
      path: 'baby2',
      name: 'baby2',
      meta: {
        title: '宝宝2',
      },
      component: () => import(/* webpackChunkName: "check-count-count" */ '@/views/secondCont/index.vue'),
    },
  ],
};
