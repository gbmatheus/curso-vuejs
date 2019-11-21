new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alerta() {
            console.log("clicou");
            alert('Você clicou no butão')
        },
        exibirValor(event) {
            console.log(event.target.value)
            this.valor = event.target.value
        }
    }
})