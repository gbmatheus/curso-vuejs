import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-72838.firebaseio.com/'
// axios.defaults.headers.commmon['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

// Vue.prototype.$http = axios

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-72838.firebaseio.com/',
            headers: {
                "Authorization": "abc123"
                // get: {
                //     "Authorization": "abc123"
                // }
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            // console.log(config.method)
            
            // if(config.method === 'post') {
            //     config.method = 'put'
            // }

            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []

            // for (let key in res.data) {
            //     array.push({ id: key, ...res.data[key] })                
            // }

            // res.data = array
            return res
        
        }, error => Promise.reject(error))
    }
     
})