// 配置路由
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
    
})


export default router




