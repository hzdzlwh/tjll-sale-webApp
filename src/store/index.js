/*
* @Author: lxj
* @Date:   2017-08-17 10:53:21
* @Last Modified by:   lxj
* @Last Modified time: 2017-08-22 16:43:57
*/
import types from './types';
import Vue from 'vue';
import Vuex from 'vuex';
import http from '@/util/http';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        phone: '',
        uuid: '',
        name: ''
    },
    mutations: {
        [types.SET_LOGIN](state, { user }) {
            state.phone = user.phone;
            state.uuid = user.uuid;
            state.name = user.name;
        }
    },
    actions: {
        [types.LOGIN]({ commit }, { params }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/login', ...params)
                    .then(res => {
                        if (res.code === 1) {
                            commit(types.SET_LOGIN, { user: {
                                phone: params.phone,
                                name: res.data.name,
                                uuid: res.data.uuid
                            } });
                            resolve(res);
                        } else {
                            reject(res);
                        }
                    });
            });
        }
    }
});
export default store;
