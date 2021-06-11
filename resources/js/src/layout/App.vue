<template>
    <v-app>
        <side-bar v-if="isAuthenticated"></side-bar>
        <login v-else></login>
    </v-app>
</template>
<script>
import SideBar from './sidebar'
import Login from './login.vue'
export default {
    components:{
        SideBar,
        Login
    },
    data(){
        return{
            isAuthenticated:false
        }
    }
}
</script>