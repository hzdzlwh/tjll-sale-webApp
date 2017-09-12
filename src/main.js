// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store/index';
import notify from '@/components/common/notify/notify';
import { initWX } from '@/util/wxsdk.js';
import { initAppShare } from '@/util/share.js';
import { DatetimePicker, Popup, Picker } from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// import 'normalize.css';
import filters from '@/util/filters';

import titleMixin from '@/util/title';
import clickoutside from '@/util/clickoutside';

import '@/assets/styles/common.scss';

import ddButton from '@/components/dd-button';
import ddFormInput from '@/components/dd-form-control/input';
import ddFormSelect from '@/components/dd-form-control/select';

Vue.component('dd-button', ddButton);
Vue.component('dd-form-input', ddFormInput);
Vue.component('dd-form-select', ddFormSelect);

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

Vue.use(clickoutside);

Vue.mixin(titleMixin);
initWX();
initAppShare();

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
