import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './plugins/element.js'
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:3000/";
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config
})
// axios.interceptors.response.use(config => {
//   // NProgress.done()
//   return config
// }) 
Vue.prototype.$http = axios
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
