/*
* @Author: lxj
* @Date:   2017-08-17 11:17:07
* @Last Modified by:   lxj
* @Last Modified time: 2017-08-23 14:28:09
*/
/* eslint-disable */
require('cookie');
import { devRoute } from './config.js'
import { Loading, Message } from 'element-ui';
import notify from '@/components/common/notify/notify.js';
import Raven from 'raven-js';
import axios from 'axios';
import qs from 'qs';

const md5 = require('md5');

let logoutErr = false;
export function paramsToString(params) {
    const paramsArray = [];
    for (const name in params) {
        if (params.hasOwnProperty(name)) {
            let str = '';
            if (params[name] !== null) {
                str = JSON.stringify(params[name]);
            }
            if (typeof str === 'string' && str.substring(0, 1) === '\"' && str.substring(str.length - 1) === '\"') {
                str = str.substring(1, str.length - 1);
            }
            paramsArray.push(`${name}=${str}`);
        }
    }
    return paramsArray.join('&');
}
const host = process.env.NODE_ENV === 'production' ? '/ws' : (`${devRoute}/ws`);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    Raven.captureMessage('网络请求失败', {
        extra: {
            error
        }
    });
    Message.error('服务器请求失败，请稍后再试。');
    return Promise.reject(error);
});

const http = {
    request(method, path, dataConfig, config) {
        const defaultConfig = {
            notify: true, // 错误提示
            loading: true
        };
        let data = dataConfig;
        const interConfig = Object.assign(defaultConfig, config);
        if (!data) {
            data = {};
        }

        if (path !== '/directNet/login') {
            data = this.getDataWithToken(data);
        }

        if (method === 'get') {
            interConfig.params = data;
        }

        if (method === 'post') {
            interConfig.data = qs.stringify(data);
        }
        let loadingInstance;
        if (interConfig.loading) {
            loadingInstance = Loading.service();
        }

        const url = host + path;
        return axios.request({
            method,
            url,
            ...interConfig
        })
            .then(res => {
                if (res.data.code !== 1) {
                    if (interConfig.notify && res.data.code !== 5) {
                        notify.warning(res.data.msg || '内部错误');
                        // vue.notify.warning(res.data.msg || '内部错误');
                        // Message.error(res.data.msg || '内部错误');
                    } else if (res.data.code === 5 && !logoutErr) {
                        logoutErr = true;
                        window.localStorage.clear();
                        Message.error('账号在别处登录。');
                        setTimeout(() => {
                            window.location.href = '/login.html';
                        }, 3000);
                    }

                    Raven.captureMessage('ajax请求错误', {
                        extra: {
                            data,
                            res,
                            url
                        }
                    });

                    Raven.captureBreadcrumb({
                        message: 'ajax上下文',
                        category: 'ajax',
                        data: {
                            data,
                            res,
                            url
                        }
                    });

                    return Promise.reject(res.data);
                }

                return res.data;
            })
            .finally(() => {
                interConfig.loading && loadingInstance.close();
            });
    },
    get(path, data, config) {
        return this.request('get', path, data, config);
    },
    post(path, data, config) {
        return this.request('post', path, data, config);
    },
    getDataWithToken(data) {
        const result = { ...data };
        // result.timestamp = (new Date()).valueOf();
        result.campId = data.campId || localStorage.getItem('campId');
        result.uid =  data.uid || localStorage.getItem('uid');
        result.phone =  data.phone || localStorage.getItem('phone');
        result.terminal = 1;
        result.version = data.version || -1;
        result.kick = true;
        const array = [];
        for(const key in result) {
            if (Object.prototype.hasOwnProperty.call(result, key)) {
                array.push(result[key]);
            }
        }
        array.push(localStorage.getItem('token'));
        array.sort();
        const str = array.join('');
        result.sign = md5(str);
        return result;
    }
    // paramsToString(params) {
    //     const paramsArray = [];
    //     for (const name in params) {
    //         if (params.hasOwnProperty(name)) {
    //             let str = '';
    //             if (params[name] !== null && params[name] !== undefined) {
    //                 str = JSON.stringify(params[name]);
    //             }
    //             if (str.substring(0, 1) === '"' && str.substring(str.length - 1) === '"') {
    //                 str = str.substring(1, str.length - 1);
    //             }

    //             paramsArray.push(`${name}=${str}`);
    //         }
    //     }

    //     return paramsArray.join('&');
    // }
};
export default http;
