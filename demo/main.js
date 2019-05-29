import Vue from 'vue'
import App from './App'
import Loading from '../dist/vue-slim-loading.esm.min.js' // prod
// import Loading from '../src' // dev

Vue.use(Loading)

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
