import { createWebHistory, createRouter } from 'vue-router';
import Posts from './components/Posts.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/posts', component: Posts },
    ]
});


export default router;