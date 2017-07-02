import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSimpleTouch from './utils/vue-simple-touch.js';

Vue.use(VueSimpleTouch);
Vue.use(VueRouter);

// import App from './App.vue'
import Links from "./Links.vue";
import DTMFPanel from "./DTMFPanel.vue";
import BlueBoxPanel from "./BlueBoxPanel.vue";

const routes = [
    { path: "/", component: DTMFPanel },
    { path: "/dtmf", component: DTMFPanel },
    { path: "/bluebox", component: BlueBoxPanel }
];

const router = new VueRouter({ routes });

const app_main = new Vue({
    router: router,
    components: {
        Links
    }
}).$mount("#Main");


// new Vue({
//   el: '#app',
//   render: h => h(App)
// })