import type { AppRouteRecordRaw } from '../types';
/**
 * 默认路由
 * @param
 */
export const rootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/cheese-baby/baby1',
  meta: {
    title: 'Root',
  },
};
