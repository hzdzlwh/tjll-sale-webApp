/*
* @Author: lxj
* @Date:   2017-08-17 10:53:21
* @Last Modified by:   chuxiao
* @Last Modified time: 2017-08-25 14:06:27
*/
import types from './types.js';
import Vue from 'vue';
import Vuex from 'vuex';
import http from '@/util/http';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        title: '',
        phone: '',
        uuid: '',
        name: '',
        orderList: [],
        campId: '54797361',
        orderDetails: {},
        member: {}
    },
    mutations: {
        setTitle(state, title) {
            state.title = title;
        },
        getAuthorization(state) {
            state.uuid = localStorage.uuid;
            state.phone = localStorage.phone;
            state.name = localStorage.name;
        },
        [types.SET_LOGIN](state, { user }) {
            state.phone = user.phone;
            state.uuid = user.uuid;
            state.name = user.name;
            localStorage.uuid = user.uuid;
            localStorage.phone = user.phone;
            localStorage.name = user.name;
            localStorage.campId = '54797361';
        },
        [types.GET_ORDER_LIST](state, data) {
            state.orderList = data.list;
        },
        [types.GET_ORDER_DETAIL](state, data) {
            state.orderDetails = data;
        },
        [types.GET_MEMBER](state, data) {
            state.member = data;
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
        [types.GET_ORDER_LIST]({ commit }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getOrderList').then(res => {
                    commit(types.GET_ORDER_LIST, res.data);
                    resolve(res.data);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_ORDER_DETAIL]({ commit }, orderId) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getOrderDetail', { orderId }).then(res => {
                    commit(types.GET_ORDER_DETAIL, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_MEMBER]({ commit }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/personalCenterPage').then(res => {
                    commit(types.GET_MEMBER, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        }
    }
});

export default store;

export const getAuthorization = () => {
    if (!store.state.uuid) {
        store.commit('getAuthorization');
    }
    return store.state.uuid;
};
