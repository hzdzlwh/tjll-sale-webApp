import store from '@/store';

function getTitle(vm) {
    const { title } = vm.$options;
    return title && typeof title === 'function'
        ? title.call(vm)
        : title;
}

const titleMixin = {
    mounted() {
        const title = getTitle(this);
        if (title) {
            store.commit('setTitle', title);
        }
    }
}

export default titleMixin;
