// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store/index';
import notify from '@/components/common/notify/notify';
import { DatetimePicker, Popup, Picker } from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);
// import 'normalize.css';
import filters from '@/util/filters';

import titleMixin from '@/util/title';
import clickoutside from '@/util/clickoutside';

import '@/assets/styles/common.scss';

import commonButton from '@/components/commonButton';

Vue.component('common-button', commonButton);

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

Vue.use(clickoutside);

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
