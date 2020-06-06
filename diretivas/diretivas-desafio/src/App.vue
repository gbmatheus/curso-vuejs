<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<!-- <tag v-diretiva:click="funcao"></tag> -->
		<button v-clicar:click="alerta">Executar</button>
		<p 
			v-clicar:mouseenter="mouseEnter"
			v-clicar:mouseleave="mouseLeave"
		>Teste mouve event!</p>
	</div>
</template>

<script>
export default {
	directives: {
		clicar: {
			bind (el, binding) {
				// el.onclick = function (e) {
				// 	binding.value()
				// }

				const tipo = binding.arg
				const funcao = binding.value
				el.addEventListener(tipo, funcao)

			}
		}
	},
	methods:{
		alerta () {
			alert('Clicou')
		},
		mouseEnter () {
			console.log('Mouse enter')
		},
		mouseLeave () {
			console.log('mouse leave')
		}
	},


	
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

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
