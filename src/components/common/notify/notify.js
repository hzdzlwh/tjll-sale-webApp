import Vue from 'vue';

const NotificationConstructor = Vue.extend(require('./Notify.vue'));

let instance;

const Notification = function(options) {
    options = options || {};
    const userOnClose = options.onClose;

    options.onClose = function() {
        Notification.close(userOnClose);
    };

    instance = new NotificationConstructor({
        data: options
    });
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.vm.visible = true;
    instance.dom = instance.vm.$el;
};

['success', 'warning'].forEach(type => {
    Notification[type] = options => {
        if (typeof options === 'string') {
            options = {
                message: options
            };
        } else if (typeof options === 'undefined') {
            options = {
                message: '未知错误,请检测网络!'
            };
        }
        options.type = type;
        return Notification(options);
    };
});

Notification.close = function(userOnClose) {
    if (typeof userOnClose === 'function') {
        userOnClose();
    }
};

export default Notification;
