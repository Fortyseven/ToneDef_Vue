<template>
  <div id="app">
    <DTMFPanel></DTMFPanel>
  </div>
</template>

<!-- --------------------------------------------------- -->

<script>
  import DTMFPanel from "./DTMFPanel.vue";
  
  import Vue from 'vue';
  import VueSimpleTouch from './utils/vue-simple-touch.js';
 
  Vue.use(VueSimpleTouch);

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

<!-- style lang="scss">
</style -->
