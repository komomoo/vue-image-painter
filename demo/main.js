import Vue from 'vue'
import App from './App'
import ImagePainter from '../src' // dev

Vue.use(ImagePainter)

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
