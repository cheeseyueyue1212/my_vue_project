<template>
  <div>cheese content1</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'firstCont',
  components: {
  },
  props: {
    collapsed: {
      // 侧边栏菜单是否收起
      type: Boolean,
    },
  },
  setup() {
    const state = reactive({
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
<style>
</style>
