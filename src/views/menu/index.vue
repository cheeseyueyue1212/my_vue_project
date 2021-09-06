<template>
  <a-menu
    v-model:open-keys="openKeys"
    v-model:selected-keys="selectedKeys"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
    @click="clickMenuItem"
  >
    <template
      v-for="item in menus"
      :key="item.name"
    >
      <menu-item :menu-info="item" />
    </template>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, toRefs } from 'vue';

import MenuItem from './menu-item.vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'Menu',
  components: {
    MenuItem
  },
  props: {
    collapsed: {
      // 侧边栏菜单是否收起
      type: Boolean,
    },
  },
  setup(props) {
    // 当前路由
    const currentRoute = useRoute();
    const router = useRouter();
    const routeOption = router.options.routes;

    // 获取当前打开的子菜单 DataManage,selectedKeys:View
    const getOpenKeys = () => [currentRoute.matched[0]?.name];

    const state = reactive({
      openKeys: getOpenKeys(),
      selectedKeys: [currentRoute.name],
    });

    const menus = computed(() => routeOption.filter(item => item.name !== 'Root' && item.name !== 'Login' && item.name !== 'Home'));
    // console.log(menus);

    // 监听菜单收缩状态
    watch(
      () => props.collapsed,
      (newVal) => {
        state.openKeys = newVal ? [] : getOpenKeys();
        state.selectedKeys = [currentRoute.name];
      },
    );

    // 跟随页面路由变化，切换菜单选中状态
    watch(
      () => currentRoute.fullPath,
      () => {
        if (currentRoute.name === 'login' || props.collapsed) return;
        state.openKeys = getOpenKeys();
        state.selectedKeys = [currentRoute.name];
      },
    );

    // 点击菜单
    const clickMenuItem = (route: { key: string }) => {
      router.push({ name: route.key });
    };

    return {
      ...toRefs(state),
      menus,
      clickMenuItem,
    };
  },
});
</script>
<style>
.title {
  font-size: 30px;
}
</style>
