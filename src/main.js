import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment'
import * as math from 'mathjs'
//console.log(math.format(0.1 + 0.2, 1))
Vue.use(ElementUI);
/*import axios from 'axios'
 axios.get('').then(res=>{
	console.log(res)
}) */
Vue.prototype.$moment = moment
//math.format(0.1 + 0.2, 14)
Vue.prototype.$format = function (s, j) {
  return math.format(s, j)
}
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')