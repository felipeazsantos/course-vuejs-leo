import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contadorDePalavra', function(valor) {
	const arr = valor.split(' ')
	let valorFinal = ''
	for (let i = 0; i < arr.length; i++) {
		const tamanhoDaPalavra = arr[i].split('').length
		valorFinal += `${arr[i]} (${tamanhoDaPalavra}) `
	}
	valorFinal = valorFinal.trim()
	return valorFinal
})

new Vue({
	render: h => h(App),
}).$mount('#app')
