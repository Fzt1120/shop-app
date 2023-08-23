import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Index from '@/pages/index.vue'
import Login from '@/pages/login.vue'
import NotFound from '@/pages/404.vue'

const routes = [
    {
    path: '/',
    component:Index
    },
    {
    path: '/login',
    component:Login
    },
    {
    path: '/:pathMatch(.*)*',
    component:NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;