import Home from "../views/Home.vue";

import {createRouter, createWebHashHistory} from "vue-router";

const routes =[{
    path:'/',
    component: Home
},{
    path:'/home',
    component: Home
},{
    path:'/main',
    component: Home
},{
    path:'/about',
    component: () => import('../views/About.vue')
},{
    path:'/announcement',
    component: () => import('../views/Announcement.vue')
},{
    path: '/template',
    component: () => import('../views/Template.vue')
}]

let router;

export default router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})