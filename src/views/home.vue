<template>
  <div class="project-version-wrapper">home</div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, nextTick } from 'vue'

export default defineComponent({
  name: 'SelectionAttr',
  components: {},
  setup() {
    const state = reactive<{}>({})

    nextTick(() => {
      console.log('nextTick func')
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="less" scoped></style>
