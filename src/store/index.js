/*
* @Author: lxj
* @Date:   2017-08-17 10:53:21
* @Last Modified by:   lxj
* @Last Modified time: 2017-09-12 19:09:07
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
        campId: '',
        subOrder: {},
        campInfo: undefined,
        campDetail: undefined,
        // 微信分享的数据
        homeIndex: 'room',
        subOrderParms: undefined,
        // 结算的时候存的项目数据
        orderDetails: {
            items: []
        },
        personalCenter: {
            isVip: false,
            storePhone: '',
            vipUser: {
                accountList: [],
                name: ''
            }
        },
        user: {
        },
        vipSchemeList: [],
        nextVipLevelInfo: {},
        vipCenterData: {
            vipSchemeId: 0,
            vipScheme: '',
            vipLevel: '',
            accountList: [],
            discountList: []
        },
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
        vipCardDetail: {},
        vipCardAccountDetail: {
            recordList: [],
            balance: 0
        },
        consumerList: [],
        roomList: [],
        roomDetail: {},
        orderProfile: {},
        shoppingCartCount: 0,
        cartList: []
    },
    getters: {
        GvipSchemeList(state) {
            const arr = [];
            const vipSchemeId = state.vipCenterData.vipSchemeId;
            state.vipSchemeList.forEach(item => {
                if (item.vipSchemeId === vipSchemeId) {
                    item.default = true;
                } else {
                    item.default = false;
                }
                arr.push(item);
            });
            return arr;
        }
    },
    mutations: {
        setTitle(state, title) {
            state.title = title;
        },
        [types.SET_HOMEINDEX](state, { homeIndex }) {
            state.homeIndex = homeIndex;
        },
        [types.SET_CAMPDETAIL](state, { campDetail }) {
            state.campDetail = campDetail;
        },
        getAuthorization(state) {
            state.uuid = localStorage.uuid;
            state.phone = localStorage.phone;
            state.name = localStorage.name;
        },
        [types.SET_SUBORDERPARMS](state, { params }) {
            window.localStorage.setItem('subOrderParms', JSON.stringify(params));
            state.subOrderParms = params;
        },
        [types.SET_SUBORDER](state, { order }) {
            window.localStorage.setItem('subOrder', JSON.stringify(order));
            state.subOrder = order;
        },
        [types.SET_LOGIN](state, { user }) {
            state.phone = user.phone;
            state.uuid = user.uuid;
            state.name = user.name;
            localStorage.uuid = user.uuid;
            localStorage.phone = user.phone;
            localStorage.name = user.name;
            localStorage.campId = user.campId || location.h;
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
            state.vipSchemeList = data.list;
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
        },
        [types.GET_VIPCARDACCOUNT_DETAIL](state, data) {
            state.vipCardAccountDetail = data;
        },
        [types.GET_CONSUMERUSER](state, data) {
            state.consumerList = data.list;
        },
        [types.GET_ROOM_LIST](state, data) {
            state.roomList = data.list;
        },
        [types.GET_ROOM_DETAIL](state, data) {
            state.roomDetail = data;
        },
        [types.GET_ORDER_PROFILE](state, data) {
            state.orderProfile = data;
        },
        [types.GET_CART_COUNT](state, data) {
            state.shoppingCartCount = data;
        },
        [types.GET_CART_LIST](state, data) {
            state.cartList = data.list;
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
        [types.GET_ORDER_LIST]({ commit }, orderStatus) {
            orderStatus = orderStatus === 'all' ? '' : orderStatus;
            return new Promise((resolve, reject) => {
                http.get('/directNet/getOrderList', { orderStatus }).then(res => {
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
        },
        [types.GET_VIPCARDACCOUNT_DETAIL]({ commit }, { vipCardId }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getVipCardAccountDetail', { vipCardId }).then(res => {
                    commit(types.GET_VIPCARDACCOUNT_DETAIL, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.SET_VIPSCHEME]({ commit }, { vipId, vipSchemeId }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/modifyVipScheme', { vipId, vipSchemeId }).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_CONSUMERUSER]({ commit }) {
            const oprType = 0;
            return new Promise((resolve, reject) => {
                http.get('/directNet/updateConsumerUser', { oprType }).then(res => {
                    commit(types.GET_CONSUMERUSER, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.SET_CONSUMERUSER]({ commit }, consumerInfo) {
            const oprType = 1;
            return new Promise((resolve, reject) => {
                http.get('/directNet/updateConsumerUser', { consumerInfo, oprType }).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.DELETE_CONSUMERUSER]({ commit }, userId) {
            const oprType = 2;
            return new Promise((resolve, reject) => {
                http.post('/directNet/updateConsumerUser', { oprType, userId }).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_ROOM_LIST]({ commit }, { endDate, roomOrderId, startDate }) {
            return new Promise((resolve, reject) => {
                http.post('/directNet/getDirectNetRoomList', { endDate, roomOrderId, startDate }).then(res => {
                    commit(types.GET_ROOM_LIST, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.SET_ROOM]({ commit }, { roomOrderId, roomId }) {
            return new Promise((resolve, reject) => {
                http.post('/directNet/submitSelectRoom', { roomOrderId, roomId }).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.ADD_CHECKINPEOPLE]({ commit }, { id, idCardNum, idCardType, name, phone, roomOrderId }) {
            return new Promise((resolve, reject) => {
                http.post('/directNet/addCheckInPeople', { id, idCardNum, idCardType, name, phone, roomOrderId }).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_ROOM_DETAIL]({ commit }, { orderId, phone, saveId }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getRoomDetail', { orderId, phone, saveId }).then(res => {
                    commit(types.GET_ROOM_DETAIL, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_ORDER_PROFILE]({ commit }, { orderId }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/getOrderProfile', { orderId }).then(res => {
                    commit(types.GET_ORDER_PROFILE, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_CART_COUNT]({ commit }) {
            return new Promise((resolve, reject) => {
                http.get('/directNet/countShoppingCart').then(res => {
                    commit(types.GET_CART_COUNT, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.GET_CART_LIST]({ commit }) {
            return new Promise((resolve, reject) => {
                http.post('/directNet/getShoppingCart').then(res => {
                    commit(types.GET_CART_LIST, res.data);
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        [types.CANCEL_ORDER]({ commit }, orderId) {
            return new Promise((resolve, reject) => {
                http.post('/directNet/cancelDirectOrder', { orderId }).then(res => {
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
    return localStorage.uuid;
};
