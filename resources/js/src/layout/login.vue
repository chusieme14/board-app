<template>
    <div class="class-main-container">
        <!-- <div class="class-sub-container"> -->
            <v-navigation-drawer
                class="class-side-login"
                dark
                permanent
            >
            dsjdsjdh
            </v-navigation-drawer>
        <!-- </div> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            credentials:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            let payload = this.credentials
            axios.post(`login`,{...payload}).then(({data})=>{
                console.log(data,"login")
            })
        }
    },
    created(){

    }
}
</script>
<style lang="scss" scoped>
.class-main-container{
    // display: flex;
    // justify-content: center;
    // .class-sub-container{
        // margin-top: 16%;
        .class-side-login{
            background-color: red;
            height: 100%;
        }
    // }
}
</style>