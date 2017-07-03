import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSimpleTouch from './utils/vue-simple-touch.js';

Vue.use(VueSimpleTouch);
Vue.use(VueRouter);

// import App from './App.vue'
import Links from "./components/Links.vue";
import DTMFPanel from "./components/DTMFPanel.vue";
import BlueBoxPanel from "./components/BlueBoxPanel.vue";
import ExtrasPanel from "./components/ExtrasPanel.vue";
import ExtrasUSPanel from "./components/extras/ExtrasUSPanel.vue";

const routes = [
    { path: "/", component: DTMFPanel },
    { path: "/dtmf", component: DTMFPanel },
    { path: "/bluebox", component: BlueBoxPanel },
    { path: "/extras", component: ExtrasPanel },
    { path: "/extras/us", component: ExtrasUSPanel }
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