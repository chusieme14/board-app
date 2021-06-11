<template>
    <div class="sidebar-main-container">
        <v-navigation-drawer
            class="deep-purple accent-4"
            dark
            permanent
        >
        <v-list>
            <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2">
            <v-btn block>
                Logout
            </v-btn>
            </div>
        </template>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            items: [
                { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                { title: 'Account', icon: 'mdi-account-box' },
                { title: 'Admin', icon: 'mdi-gavel' },
            ],
        }
    }
}
</script>
<style lang="scss" scoped>
    .sidebar-main-container{
        height: 100%;
    }
</style>