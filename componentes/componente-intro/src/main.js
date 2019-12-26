import Vue from 'vue'
import App from './App.vue'
import Contadores from './components/Contadores.vue'

Vue.config.productionTip = false
// Registrando o componente globalmente
// Vue.component('app-contador', Contador)

// Registrando o componente globalmente
Vue.component('app-contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
