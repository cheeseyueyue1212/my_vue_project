<template>
  <div class='breadcrumb'>
    <a-breadcrumb :routes="currentRoute.matched">
      <template #itemRender="{ routes, route }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.meta.title }}
        </span>
        <router-link v-else :to="{ name: route.name }">
          {{ route.meta.title }}
        </router-link>
      </template>
    </a-breadcrumb>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Breadcrumb } from 'ant-design-vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  setup() {
    // 当前路由
    const currentRoute = useRoute();
    return {
      currentRoute,
    };
  },
  components: {
    'a-breadcrumb': Breadcrumb
  }
});
</script>
<style scoped>
.breadcrumb {
  display: inline-block;
}
</style>
