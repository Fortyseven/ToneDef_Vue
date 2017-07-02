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

  // import VueTouch from 'vue-touch';

  // Vue.use(VueTouch, {
  //     name: 'v-touch'
  // });

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      DTMFPanel
    }
  }
</script>

<!-- --------------------------------------------------- -->

<style lang="scss">

</style>
