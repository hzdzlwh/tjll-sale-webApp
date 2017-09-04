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
        personalCenter: {
            isVip: false,
            storePhone: '',
            vipUser: {
                accountList: []
            }
        },
        user: {
        },
        vipSchemeList: {
        },
        nextVipLevelInfo: {},
        vipCenterData: {},
        accountDetail: {
            recordList: [],
            balance: 0
        },
        virDetail: {
            recordList: [],
            balance: 0
        },
        vipCardList: [],
        cardDetail: {},
        vipCardDetail: {}
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
            state.personalCenter = data;
        },
        [types.GET_USER](state, data) {
            state.user = data || {};
        },
        [types.GET_VIPSCHEME_LIST](state, data) {
            state.vipSchemeList = data;
        },
        [types.GET_NEXTVIPLEVELINFO](state, data) {
            state.nextVipLevelInfo = data;
        },
        [types.GET_VIPCENTTER_DATA](state, data) {
            state.vipCenterData = data;
        },
        [types.GET_VIPACCOUNT_DETAIL](state, data) {
            state.accountDetail = data;
        },
        [types.GET_VIRACCOUNT_DETAIL](state, data) {
            state.virDetail = data;
        },
        [types.GET_VIPCARD_LIST](state, data) {
            state.vipCardList = data.list;
        },
        getCardDetail(state, params) {
            params = parseInt(params);
            state.vipCardList.forEach(item => {
                if (item.id === params) {
                    state.cardDetail = item;
                }
            });
        },
        [types.GET_VIPCARD_DETAIL](state, data) {
            state.vipCardDetail = data;
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
        },
        [types.GET_USER]({ commit }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getUserProp').then(res => {
                    commit(types.GET_USER, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.SET_USER]({ commit }, { phone, name, idCardType, idCardNum, gender, email, area, birthday, province }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/updateUserProp', { phone, name, idCardType, idCardNum, gender, email, area, birthday, province }).then(res => {
                    commit(types.GET_USER, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_VIPSCHEME_LIST]({ commit }, vipId) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getVipSchemeList', { vipId }).then(res => {
                    commit(types.GET_VIPSCHEME_LIST, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_NEXTVIPLEVELINFO]({ commit }, { vipId, vipLevelId }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getNextVipLevelInfo', { vipId, vipLevelId }).then(res => {
                    commit(types.GET_NEXTVIPLEVELINFO, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_VIPCENTTER_DATA]({ commit }, vipId) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getVipCenterData', { vipId }).then(res => {
                    commit(types.GET_VIPCENTTER_DATA, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_VIPACCOUNT_DETAIL]({ commit }, { vipId }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getVipAccountDetail', { vipId }).then(res => {
                    commit(types.GET_VIPACCOUNT_DETAIL, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_VIRACCOUNT_DETAIL]({ commit }, { vipId }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getVirAccountDetail', { vipId }).then(res => {
                    commit(types.GET_VIRACCOUNT_DETAIL, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_VIPCARD_LIST]({ commit }, { vipId }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getVipCardList', { vipId }).then(res => {
                    commit(types.GET_VIPCARD_LIST, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_VIPCARD_DETAIL]({ commit }, vipCardId) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getVipCardDescription', { vipCardId }).then(res => {
                    commit(types.GET_VIPCARD_DETAIL, res.data);
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
