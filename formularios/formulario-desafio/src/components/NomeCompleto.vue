<template>
  <div>
      <rotulo nome="Nome">
        <input type="text" @input="alterarNome" :value="value.nome">
      </rotulo>
      <rotulo nome="Sobrenome">
        <input type="text" @input="alterarSobrenome" :value="value.sobrenome">
      </rotulo>
  </div>
</template>

<script>
import Rotulo from './Rotulo';

export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  components: {
    Rotulo,
  },
  methods: {
    alterarNome (event) {
      this.$emit('input', {
        nome: event.target.value, 
        sobrenome: this.value.sobrenome
      })
    },
    alterarSobrenome (event) {
      this.$emit('input', {
        nome: this.value.nome, 
        sobrenome: event.target.value
      })
    },
  },
}
</script>

<style>

</style>