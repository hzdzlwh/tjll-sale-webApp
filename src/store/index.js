/*
* @Author: lxj
* @Date:   2017-08-17 10:53:21
* @Last Modified by:   lxj
* @Last Modified time: 2017-08-23 14:36:31
*/
import types from './types.js';
import Vue from 'vue';
import Vuex from 'vuex';
import http from '@/util/http';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        phone: '17764526709',
        uuid: '',
        name: '',
        orderList: [],
        campId: '54797361',
        orderDetails: {}
    },
    mutations: {
        [types.SET_LOGIN](state, { user }) {
            state.phone = user.phone;
            state.uuid = user.uuid;
            state.name = user.name;
            localStorage.uuid = user.uuid;
            localStorage.phone = user.phone;
            localStorage.name = user.name;
        },
        [types.GET_ORDER_LIST](state, data) {
            state.orderList = data.list;
        },
        [types.GET_ORDER_DETAIL](state, data) {
            state.orderDetails = data;
        }
    },
    actions: {
        [types.LOGIN]({ commit }, { params }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/login', params)
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
        },
        [types.GET_ORDER_LIST]({ commit }, { campId }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getOrderList', { campId }).then(res => {
                    commit(types.GET_ORDER_LIST, res.data);
                    resolve(res.data);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_ORDER_DETAIL]({ commit }, { campId, orderId }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getOrderDetail', { campId, orderId }).then(res => {
                    commit(types.GET_ORDER_LIST, res.data);
                }).catch(err => {
                    reject(err);
                });
            });
        }
    }
});
export default store;
