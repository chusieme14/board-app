require('./bootstrap');
window.Vue = require('vue')
import router from './src/router/index'
import vuetify from './src/plugins/vuetify'

Vue.component('main-app', require('./src/layout/App.vue').default)

const app = new Vue({
    el:'#app',
    router,
    vuetify
})