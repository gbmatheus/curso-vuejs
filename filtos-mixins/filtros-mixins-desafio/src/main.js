import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contagemFrase', function (value) {
	// return valor.split(' ').maṕ(p => `${p} (${p}.length)`).join(' ')
	let txt = `${value}`.split(' ')
	let txtFinal = ''
	
	txt.forEach(word => {
		txtFinal += `${word} (${word.length}) `
	});

	return txtFinal
})

new Vue({
	render: h => h(App),
}).$mount('#app')
