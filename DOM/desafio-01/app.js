new Vue({
  el:'#desafio',
  data: {
    nome: 'Gabriel',
    idade: 23,
    linkImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4cCwGhr1K5bLUqSZ5_Lk_h_J2veVz4AGU3KMUgcfrI8afqEIu',
    image:'http://files.cod3r.com.br/curso-vue/vue.jpg',
  },
  methods: {
    random() {
      return Math.random()
    }
  }
})