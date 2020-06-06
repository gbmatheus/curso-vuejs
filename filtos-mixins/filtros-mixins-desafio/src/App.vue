<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ frase | converte }}</p>
		<hr>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ frase | contagem }}</p>
		<p>{{ frase | contagemFrase }}</p>
		<hr>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>Frase convertida: {{ fraseConvertida }}</p>
		<p>Frase contagem: {{ fraseContagem }}</p>
		<hr>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>Frase convertida: {{ converter }}</p>
		<p>Frase contagem: {{ contar }}</p>
		<hr>

	</div>
</template>

<script>
import filtroMixin from './filtroMixin'

export default {
	mixins: [filtroMixin],
	filters: {
		converte: function (value) {
			// return value.replace(/\s/ g, ',')
			let txt = `${value}`.split(' ').join(',')
			return txt
		},
		contagem: function (value) {
			let txt = `${value}`.split(' ')
			let txtFinal = ''
			
			txt.forEach(word => {
				txtFinal += `${word} (${word.length}) `
			});

			return txtFinal
			
		}

	},
	computed: {
		// fraseConvertida () {
		// 	return `${this.frase}`.split(' ').join(',')
		// },
		// fraseContagem () {
		// 	let txt = `${this.frase}`.split(' ')
		// 	let txtFinal = ''
			
		// 	txt.forEach(word => {
		// 		txtFinal += `${word} (${word.length}) `
		// 	});

		// 	return txtFinal
		// }
	},
	data () {
		return {
			frase: 'Eu não sei de nada'

		}
	}
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
