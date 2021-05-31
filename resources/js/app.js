require('./bootstrap');
window.Vue = require('vue')

Vue.component('main-app', require('./src/layout/App.vue').default)

const app = new Vue({
    el:'#app'
})