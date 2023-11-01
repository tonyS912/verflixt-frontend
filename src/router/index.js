import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/video',
            name: 'video',
            component: () => import('../views/VideoView.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/RegisterView.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginView.vue')
        },
        {
            path: '/LegalNotice',
            name: 'legal notice',
            component: () => import('@/views/LegalNotice.vue')
        },
        {
            path: '/PrivacyPolicy',
            name: 'privacy policy',
            component: () => import('@/views/PrivacyPolicy.vue')
        },
        {
            path: '/resetPassword',
            name: 'resetPassword',
            component: () => import('@/views/ResetPassword.vue')
        },
    ]
})

export default router
