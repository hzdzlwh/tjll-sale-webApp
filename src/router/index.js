import Vue from 'vue';
import Router from 'vue-router';

import myOrderRoute from './myOrder';
import topRoute from './top';

Vue.use(Router);

const routes = [].concat(
    myOrderRoute,
    topRoute, //404页面放在最下面
);

export default new Router({
    routes
});
