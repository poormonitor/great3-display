import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home';

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/page3'
        },
        {
            path: '',
            name: 'home',
            component: home,
            children: [

                {
                    path: '/page3',
                    name: 'page3',
                    component: () => import('@/views/page3')
                }
            ]
        }
    ]
})
export default router
