import Vue from 'vue'
import App from './App'
import ImageDrawer from '../src' // dev
import Loading from 'vue-slim-loading'

Vue.use(ImageDrawer)
Vue.use(Loading)

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
