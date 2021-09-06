
<template>
  <h1>cheese</h1>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {},
  setup() {
    const state = reactive<{}>({})

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
