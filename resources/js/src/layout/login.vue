<template>
    <div class="class-main-container">
            <v-navigation-drawer
                class="class-side-login"
                width=500
            >
                <div class="class-sub-container">
                    <v-card
                        :loading="isfetching"
                        height="300"
                    >
                        <v-card-title>
                            Welcome to Broard Me App
                        </v-card-title>
                        <v-card-text>
                            <div>
                                <v-label>Username/Email</v-label>
                                <v-text-field
                                    dense
                                    solo
                                    v-model="credentials.email"
                                >

                                </v-text-field>
                            </div>
                            <div class="class-password">
                                <div class="class-password-label">
                                    <v-label>Password</v-label>
                                    <p class="class-forgot">forgot password?</p>
                                </div>
                                <v-text-field
                                    dense
                                    solo
                                    type="password"
                                    v-model="credentials.password"
                                >

                                </v-text-field>
                            </div>
                        </v-card-text>
                        <div class="class-button">
                            <v-btn @click="login" class="primary">login</v-btn>
                        </div>
                    </v-card>
                </div>
            </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            credentials:{
                email:'',
                password:''
            },
            isfetching:false
        }
    },
    methods:{
        login(){
            let payload = this.credentials
            axios.post(`admin/login`,{...payload}).then(({data})=>{
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
    display: flex;
    justify-content: flex-end;
    height: 100%;
    overflow: hidden;
    .class-side-login{
        min-height:100%;;
        background-color: rgb(223, 215, 215);
        .class-sub-container{
            padding-left:10px;
            padding-right:10px;
            margin-top: 60%;
            .class-password{
                margin-top: -10px;
                .class-password-label{
                    display: flex;
                    justify-content: space-between;
                    .class-forgot{
                        cursor: pointer !important;
                        margin-bottom: 5px;
                        color: rgb(73, 73, 240);
                    }
                }
            }
            .class-button{
                display: flex;
                justify-content: flex-end;
                padding-right: 19px;
                padding-bottom: 10px;
                margin-top: -20px;
            }
        }
    }
}
</style>