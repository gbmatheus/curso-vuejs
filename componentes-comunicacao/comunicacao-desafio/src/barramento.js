import Vue from 'vue'

export default new Vue({
    methods: {
        selecionarUsuario (user) {
            this.$emit('selecionado', user)
        },
        usuarioSelecionado (callback) {
            this.$on('selecionado', callback)
        }
    }
})