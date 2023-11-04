import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VideoView from "@/views/VideoView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import LegalNotice from "@/views/LegalNotice.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import SuccessfullyRegistered from "@/views/SuccessfullyRegistered.vue";

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
            component: VideoView
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/LegalNotice',
            name: 'legal notice',
            component: LegalNotice
        },
        {
            path: '/PrivacyPolicy',
            name: 'privacy policy',
            component: PrivacyPolicy
        },
        {
            path: '/resetPassword',
            name: 'resetPassword',
            component: ResetPassword
        },
        {
            path: '/forgotPassword',
            name: 'forgotPassword',
            component: ForgotPassword
        },
        {
            path: '/successfullyRegistry',
            name: 'successRegistered',
            component: SuccessfullyRegistered
        },
    ]
})

export default router
