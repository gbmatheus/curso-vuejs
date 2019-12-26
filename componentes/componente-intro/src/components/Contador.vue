<template>
  <div class="contador">
      <button @click="decrementar"> - </button>
      <span>{{ contador }}</span>
      <button @click="incrementar"> + </button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            contador: 0,

        }
    },
    methods: {
        incrementar () {
            this.contador++
        },
        decrementar () {
            this.contador--
        }
        
    }
}
</script>

<style scoped>

    /* .contador  */
    span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;

    }

    /* .contador */
     button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }
</style>