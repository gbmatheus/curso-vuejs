<template>
  <div id="app">
    <p>{{ titulo }}</p>
    <button @click="titulo += '#'">Alterar título</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      titulo: 'Teste Data usando Vue JS!!!'
    }
  }

}
</script>

<style>
  #app {
    background-color: chocolate;
    color: #fff;
  }

</style>