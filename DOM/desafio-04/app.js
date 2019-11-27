new Vue({
	el: '#desafio',
	data: {
		aplicar: true,
		elemento: document.querySelector('#efeito'),
		cor: 'aqua',
		largura: 100,
		altura: 100,
		estilo: '',
		bool:false,
		progresso: 1

	},
	computed: {
		aplicarEstilo() {
			return 
				this.estilo
		},
		estilo1() {
			return {
				textAlign: 'center',
				backgroundColor: 'blue',
			}
		},
		estilo2() {
			return {
				width: this.largura+'px',
				heigth: this.altura+'px',
			}
		},
	},
	watch: {
		
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.aplicar = !this.aplicar
			}, 2000);

		},
		iniciarProgresso() {
			setInterval(() => {
				if(this.progresso < 100)
					this.progresso++
			}, 100);
			
		}
	},
})
