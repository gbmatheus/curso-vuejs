export default {
    namespaced: true,
    state: {
        produtos: [],
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                        .reduce((total, atual) => total + atual, 0)
        }
    },
    // Similar ao setters
    mutations: {
        adicionarProduto(state, payload) {//O payload poderia ser chamado de produto, para ficar implicito
            state.produtos.push(payload)                
        },
    }, 
    actions: {
        // adicionarProduto(context, payload) {
        //     setTimeout(() => {
        //         context.commit('adicionarProduto', payload)
        //     }, 1000)
        // },
        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000)
        }
        // adicionarProduto: {
        //     root: true,
        //     handler ({ commit }, payload) {
        //         setTimeout(() => {
        //             commit('adicionarProduto', payload)
        //         }, 1000)
        //     }
        // }
    }
}