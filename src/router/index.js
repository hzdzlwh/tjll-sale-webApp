import Vue from 'vue';
import Router from 'vue-router';

import myOrderRoute from './myOrder';
import orderDetailsRoute from './orderDetails';
import roomDetailsRoute from './roomDetails';
import topRoute from './top';

Vue.use(Router);

const routes = [].concat(
    myOrderRoute,
    orderDetailsRoute,
    roomDetailsRoute,
    topRoute, // 404页面放在最下面
);

export default new Router({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});
