// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import router from './router'
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }

})
