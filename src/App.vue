<template>
  <config-provider :locale="locale">
    <router-view />
  </config-provider>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive} from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { ConfigProvider } from 'ant-design-vue';

export default defineComponent({
  name: 'App',
  components: {
    ConfigProvider,
  },

  setup() {
    const locale = zhCN
    const state = reactive({
    });

    return {
      ...toRefs(state),
      locale
    };
  },
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  color: #2c3e50;
}
</style>
