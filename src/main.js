// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueResource from 'vue-resource'

Vue.filter('currency',value =>
  '$'+value.toLocaleString()
);

Vue.use(VueResource);
Vue.http.options.root = 'https://vue-js-d2c6e.firebaseio.com/';

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
