import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/vue-router';
import store from './store'

Vue.config.productionTip = false


const DEFAULT_TITLE = "Ollie Armitage Portfolio";
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});




new Vue({
  store,
  vuetify,
  router,
  render: h => h(App),

}).$mount('#app')
