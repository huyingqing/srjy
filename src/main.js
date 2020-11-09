import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import qs from 'qs'
// import VueAwesomeswiper from 'vue-awesome-swiper'
import Header from './components/Hearder.vue'
import Footer from './components/Footer.vue'
import Top from './components/Totop.vue'
//引入全局axios
// axios.defaults.baseURL = 'http://127.0.0.1:3001'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(qs)
// Vue.use(VueAwesomeswiper)
Vue.component("my-header",Header)
Vue.component("my-footer",Footer)
Vue.component("my-top",Top)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
