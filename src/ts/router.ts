import {createRouter, createWebHistory} from "vue-router";

const routes =[
{
    path:'/',
    component: () => import('../views/Main.vue'),
    children:[
        {
            path:'/',
            component:()=>import('../views/Home.vue'),
            alias:['/main','/index','/default'],
        },
        {
            path:'/about',
            component: () => import('../views/About.vue')
        },
        {
            path:'/announcement',
            component: () => import('../views/Announcement.vue')
        },
        {
            path: '/announcement/template',
            component: () => import('../views/Template.vue')
        }
    ]
},{
    path:'/login',
    component:()=> import('../views/Login.vue')
}]

let router;

export default router = createRouter({
    history: createWebHistory(),
    routes: routes
})