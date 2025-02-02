import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './views/LandingPage.vue';
import AboutPage from './views/AboutPage.vue';
import LeadeboardPage from './views/LeadeboardPage.vue';
import GalleryPage from './views/GalleryPage.vue';
import ContactPage from './views/ContactPage.vue';

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: LandingPage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/leaderboard',
        name: 'Leaderboard',
        component: LeadeboardPage
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: GalleryPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;