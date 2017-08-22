/*
* @Author: lxj
* @Date:   2017-08-17 11:17:07
* @Last Modified by:   lxj
* @Last Modified time: 2017-08-22 16:17:13
*/
/* eslint-disable */
require('cookie');

import { Loading, Message } from 'element-ui';

import Raven from 'raven-js';
import axios from 'axios';
import qs from 'qs';

const md5 = require('md5');

let logoutErr = false;
const host = process.env.NODE_ENV === 'production' ? '/ws' : (`${process.env.serverUrl}/ws`);
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

        if (path !== 'loginUrl') {
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

        const url = this.getUrl(path);
        return axios.request({
            method,
            url,
            config: interConfig
        })
            .then(res => {
                if (res.data.code !== 1) {
                    if (interConfig.notify && res.data.code !== 5) {
                        Message.error(res.data.msg);
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
        result.timestamp = (new Date()).valueOf();
        result.campId = data.campId || localStorage.getItem('campId');
        result.uid = localStorage.getItem('uid');
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
