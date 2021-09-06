<template>
  <template v-if="!menuInfo.meta?.hidden">
    <a-sub-menu
      v-if="menuInfo.children?.length>1"
      :key="menuInfo.name"
      v-bind="$attrs"
    >
      <template #icon>
        <component :is="menuInfo.meta.icon"/>
      </template>
      <template #title>
        <span>
          <span>{{ menuInfo.meta.title }}</span>
        </span>
      </template>
      <template
        v-for="item in menuInfo.children"
        :key="item.name"
      >
        <template v-if="!item.children">
          <a-menu-item :key="item.name">
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <menu-item
            :key="item.name"
            :menu-info="item"
          />
        </template>
      </template>
    </a-sub-menu>
    <a-menu-item
      v-else
      :key="menuInfo.children[0].name"
    >
      <span>{{ menuInfo.children[0].meta.title }}</span>
    </a-menu-item>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  AppstoreOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  name: 'MenuItem',
  components: {
    AppstoreOutlined,
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<style scoped></style>
