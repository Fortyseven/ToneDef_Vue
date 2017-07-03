<template>
  <div class="app">
    <links></links>
    <div class="panel">
      <DTMFPanel></DTMFPanel>
    </div>
  </div>
</template>

<!-- --------------------------------------------------- -->

<script>
import DTMFPanel from "./DTMFPanel.vue";

export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    DTMFPanel
  }
}
</script>

<!-- --------------------------------------------------- -->
<style lang="scss" scoped>
.app {
  flex-direction: column;
}

.panel {
  height: 100%;
}
</style>
