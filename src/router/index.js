import Vue from 'vue';
import Router from 'vue-router';
import { getAuthorization } from '@/store';
import store from '@/store';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/:id',
            component: () => import('@/components/main'),
            children: [
                {   // 首页
                    path: 'overview',
                    name: 'overview',
                    meta: { requiresAuth: true },
                    redirect: { name: 'overview_home' },
                    component: () => import('@/view/overview'),
                    children: [
                        {
                            path: 'home',
                            name: 'overview_home',
                            component: () => import('@/view/overview/home')
                        },
                        {
                            path: 'cart',
                            name: 'overview_cart',
                            component: () => import('@/view/overview/cart')
                        },
                        {
                            path: 'center',
                            name: 'overview_center',
                            component: () => import('@/view/overview/center')
                        }
                    ]
                },
                {   // 我的订单
                    path: 'myOrder',
                    name: 'myOrder',
                    redirect: { name: 'myOrder_list' },
                    meta: { requiresAuth: true },
                    component: () => import('@/view/myOrder'),
                    children: [
                        {
                            path: 'list',
                            name: 'myOrder_list',
                            component: () => import('@/view/myOrder/orderList')
                        }
                    ]
                },
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('@/view/login/index')
                },
                {   // 订单详情
                    path: 'orderDetails/:orderId',
                    name: 'orderDetails',
                    meta: { requiresAuth: true },
                    component: () => import('@/view/orderDetails')
                },
                {   // 房间详情
                    path: 'roomDetails',
                    name: 'roomDetails',
                    redirect: { name: 'roomDetails_info' },
                    meta: { requiresAuth: true },
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
                        },
                        {
                            name: 'roomDetails_addTraveller',
                            path: 'addTraveller',
                            component: () => import('@/view/roomDetails/addTraveller')
                        }
                    ]
                },
                {
                    path: 'guest',
                    meta: { requiresAuth: true },
                    redirect: { path: 'guestList' }
                },
                {
                    path: 'guestList',
                    name: 'guestList',
                    component: () => import('@/view/guest/guestList')
                },
                {
                    path: 'guestDetail/:guestId',
                    component: () => import('@/view/guest/guestDetail')
                },
                {
                    path: 'personalInfo',
                    name: 'personalInfo',
                    component: () => import('@/view/personalInfo')
                }
            ]
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

router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to);
    const asyncDataHooks = matched.map(c => c.asyncData).filter(_ => _);
    if (!asyncDataHooks.length) {
        next();
    } else {
        Promise.all(asyncDataHooks.map(hook => hook({ route: to, store }))).then(() => {
            next();
        }).catch(() => {
            next();
        });
    }
});

router.beforeEach(async (to, from, next) => {
    let routerPath;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isLogin = getAuthorization();
    if (requiresAuth) {
        if (!isLogin) {
            routerPath = { name: 'login', params: { id: store.state.campId }, query: { redirect: to.fullPath } };
        } else {
            // TODO:
        }
    } else {
        // TODO:
    }
    next(routerPath);
});

export default router;
