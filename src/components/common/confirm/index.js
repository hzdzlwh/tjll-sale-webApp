/*
* @Author: lxj
* @Date:   2017-08-28 15:55:34
* @Last Modified by:   lxj
* @Last Modified time: 2017-08-28 16:25:29
*/
import Vue from 'vue';

const ConfirmConstructor = Vue.extend(require('./index.vue'));

let instance;

const confirmModal = function(options, callback) {
    options = options || {};
    options.success = callback;
    instance = new ConfirmConstructor({
        data: options
    });
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.vm.visible = true;
    instance.dom = instance.vm.$el;
};
export default confirmModal;
