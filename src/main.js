// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store/index';
import notify from '@/components/common/notify/notify';
// import 'normalize.css';

import titleMixin from '@/util/title';

import '@/assets/styles/common.scss';

Vue.mixin(titleMixin);

Vue.config.productionTip = false;
Vue.prototype.$notify = notify;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});
