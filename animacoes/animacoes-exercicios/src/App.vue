<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4"
			@click="exibir = !exibir">Mostrar Mensagem</b-button>
		
		<!-- <transition name="fade">
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition name="slide" type="animation" appear>
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition>

		<transition
			enter-active-class="animated bounce"
			leave-active-class="animated shake"
		>
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
		</transition> -->

		<!-- <hr>
		<b-select v-model="tipoAnimacao" class="mb-2">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
		</transition>


		<b-button variant="primary" class="mb-4"
			@click="mostrar = !mostrar">Alternar</b-button>
		
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled"

		>
			<div class="caixa" v-if="mostrar"></div>
		</transition>

		<hr>
		<div class="mb-2">
			<b-button variant="info" class="mr-2"
				@click="componenteSelecionado = 'AlertaInfo'"
			>Info</b-button>

			<b-button variant="warning"
				@click="componenteSelecionado = 'AlertaAdvertencia'"
			>Advertência</b-button>
		</div>
		
		<transition name="fade" mode="out-in">
		<component :is="componenteSelecionado" />
		</transition> -->

		<hr>
		<b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>
		<transition-group name="slide" tag="div">
			<b-list-group v-for="(aluno, i) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
			</b-list-group>
		</transition-group>

	
	</div>
</template>

<script>
import AlertaInfo from './components/AlertaInfo'
import AlertaAdvertencia from './components/AlertaAdvertencia'

export default {
	components: {
		AlertaInfo, AlertaAdvertencia
	},
	data () {
		return {
			msg: 'Uma mensagem de informação', 
			exibir: true,
			mostrar: true,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo',
			alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo'],
			
		}
	},
	methods: {
		adicionarAluno () {
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno (indece) {
			this.alunos.splice(indece, 1)
		},
		animar (el, done, neg) {
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLagura = this.larguraBase + 
				(neg ? (- rodada * 10) : (rodada * 10))
				
				el.style.width = `${novaLagura}px`
				rodada++

				if(rodada > 30) {
					clearInterval(temporizador)
					done()
				}
			}, 20)
		},
		beforeEnter: function (el) {
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter: function (el, done) {
			this.animar(el, done, false)
		},
		afterEnter: function (el) {
			// console.log('afterEnter')
		},
		enterCancelled: function (el) {
			// console.log('enterCancelled')
		},
		beforeLeave: function (el) {
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave: function (el, done) {
			this.animar(el, done, true)
		},
		afterLeave: function (el) {
			// console.log('afterLeave')	
		},
		leaveCancelled: function (el) {
			// console.log('LeaveCancelled')
		},
		
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
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background: lightgreen;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0) }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px) }
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;

}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-move {
	transition: transform 1s;
	
}

</style>
