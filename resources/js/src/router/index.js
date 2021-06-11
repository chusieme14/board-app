import axios from 'axios'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior (){
        return {x: 0, y: 0}
    },

    routes: [
        // {
        //     path:'/',
        //     component: () => import('@admin/layout/App.vue'),
        //     meta:{ requiresAuth:true },
        //     children:[
        //         {
        //             path:'admin/waiting',
        //             component: () => import('@admin/pages/appointment/index.vue'),
        //             name:'waiting'
        //         },
        //         {
        //             path:'admin/approved',
        //             component: () => import('@admin/pages/appointment/approve.vue'),
        //             name:'approved'
        //         },
        //         {
        //             path:'admin/userlist',
        //             component: () => import('@admin/pages/user/index.vue'),
        //             name:'userlist'
        //         }
        //     ]
        // },
        {
            path:'/login',
            component: () => import('@/layout/login.vue'),
            name:'login'
        }
    ]
})
router.beforeEach((to, from, next) => {
    // Axios.get(`/admin/api/checkuser`).then(({data})=>{
    //     if (to.matched.some(record => record.meta.requiresAuth)) {
    //       // this route requires auth, check if logged in
    //       // if not, redirect to login page.
    //       if (!data) {
    //         next({
    //           name: 'login',
    //           query: { redirect: to.fullPath }
    //         })
    //       } else {
    //         next()
    //       }
    //     } else {
    //       next() // make sure to always call next()!
    //     }
    // })
  })

export default router