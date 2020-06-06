<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<nome-completo v-model="p" />

				<rotulo nome="Nome">
					<input type="text" v-model="usuario.nome">
				</rotulo>

				<rotulo nome="Sobrenome">
					<input type="text" v-model="usuario.sobrenome">
				</rotulo>

				<rotulo nome="Email">
					<input type="text" v-model="usuario.email">
				</rotulo>

				<rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</rotulo>

				<rotulo nome="Armazenar?">
					<span><input type="radio" value="true"
						v-model="armazenarRadio">Sim</span>
					<span><input type="radio" value="false"
						v-model="armazenarRadio"
					>Não </span>
				</rotulo>

				<rotulo nome="Armazenar?">
					<input type="checkbox" v-model="armazenarCheck">
				</rotulo>

				<button  @click.prevent="enviarFormulario">Enviar</button>

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel">
				<div class="cabecalho">Resultado</div>

				<rotulo nome="Nome">
					{{ p.nome }}
				</rotulo>

				<rotulo nome="Sobrenome">
					{{ p.sobrenome }}
				</rotulo>

				<rotulo nome="Nome">
					{{ usuario.nome }}
				</rotulo>

				<rotulo nome="Sobrenome">
					{{ usuario.sobrenome }}
				</rotulo>

				<rotulo nome="Email">
					{{ usuario.email }}
				</rotulo>

				<rotulo nome="Senha">
					{{ usuario.senha }}
				</rotulo>

				<rotulo nome="Armazenar">
					{{ armazenarRadio }}
				</rotulo>

				<rotulo nome="Armazenar">
					{{ armazenarCheck}}
				</rotulo>


			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	created () {
		
	},
	data () {
		return {
			p: {
				nome: 'Gabriel',
				sobrenome: 'Santos'
			},
			usuario: {
				nome: '',
				sobrenome: '',
				senha: '',
				email: '',
			},
			armazenarRadio: false,
			armazenarCheck: false,
			enviado: false,
		}
	},
	methods: {
		enviarFormulario () {
			if(this.armazenarCheck){
				localStorage.setItem('user', this.usuario)
			}
			this.enviado = true;
		}
	},
	watch: {
		
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
