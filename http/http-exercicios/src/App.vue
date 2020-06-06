<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>

		<b-alert show dismissible
			v-for="mensagem in mensagens" :key="mensagem.texto"
			:variant="mensagem.tipo"
		>
			{{ mensagem.texto }}
		</b-alert>

		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome"
					placeholder="Informe o Nome"
				></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="email" size="lg"
					v-model="usuario.email"
					placeholder="Informe o Email"
				></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar"
				variant="primary" size="lg"
			>Salvar</b-button>

			<b-button @click="obterUsuarios"
				variant="success" size="lg"
				class="ml-2"
			>Obter usuarios</b-button>

			<hr>
			<b-list-group>
				<b-list-group-item v-for="(usuario, id) in usuarios" :key="id" >
					<strong>Nome: </strong> {{ usuario.nome }} <br>
					<strong>Email: </strong> {{ usuario.email }} <br>
					<strong>Id: </strong> {{ id }} <br>

					<b-button @click="carregarUsuario(id)" class="mr-2"
						variant="warning" size="lg"
					>
						Carregar
					</b-button>
					<b-button @click="excluirUsuario(id)"
						variant="danger" size="lg"
					>
						Excluir
					</b-button>

				</b-list-group-item>
			</b-list-group>
		</b-card>
	</div>
</template>

<script>

export default {
	// created () {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'João',
	// 		email: 'joao_joao@gmail.com'
	// 	}).then(res => console.log(res))
	// 	.catch(err => console.warn(err))
	// }
	data () {
		return  {
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			},
			mensagens: []
		}
	},
	methods: {
		limpar () {
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
		},
		salvar () {
			// this.$http.post('usuarios.json', this.usuario)
			// .then(() => {
			// 	this.limpar()
			// })
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json`: '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
			.then(() => {
				this.limpar()		
				this.mensagens.push({
					texto: 'Operação realizada com sucesso!',
					tipo: 'success'
				})
			})
		},
		obterUsuarios () {
			// this.$http('usuario.json')
			this.$http.get('usuarios.json')
			.then(res => {
				this.usuarios = res.data
				// console.log(this.usuarios)
			})

			// this.$http.defaults.headers.commmon['Authorization'] = 'abc123'
		},
		carregarUsuario (id) {
			this.id = id
			this.usuario = { ...this.usuarios[id] }

		},
		excluirUsuario (id) {
			this.$http.delete(`usuarios/${id}.json`)
			.then(() => {
				this.limpar()
			})
			.catch(() => {
				this.mensagens.push({
					texto: 'Erro ao excluir',
					tipo: 'danger',
				})
			})
		}
	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
