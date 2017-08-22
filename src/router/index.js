import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {   // 我的订单
            path: '/myOrder',
            name: 'myOrder',
            redirect: { name: 'myOrder_list' },
            component: () => import('@/view/myOrder'),
            children: [
                {
                    path: 'list',
                    name: 'myOrder_list',
                    component: () => import('@/view/myOrder/orderList')
                }
            ]
        },
        {   // 订单详情
            path: '/orderDetails',
            name: 'orderDetails',
            component: () => import('@/view/orderDetails')
        },
        {   // 房间详情
            path: '/roomDetails',
            name: 'roomDetails',
            redirect: { name: 'roomDetails_info' },
            component: () => import('@/view/roomDetails'),
            children: [
                {
                    name: 'roomDetails_info',
                    path: 'info',
                    component: () => import('@/view/roomDetails/info')
                },
                {
                    name: 'roomDetails_room',
                    path: 'room',
                    component: () => import('@/view/roomDetails/room')
                }
            ]
        },
        {   // 404
            path: '/login',
            name: 'login',
            component: () => import('@/view/login/index')
        },
        {   // 404
            path: '*',
            name: '404',
            component: () => import('@/view/404')
        }
    ],
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});
