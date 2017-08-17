/*
* @Author: lxj
* @Date:   2017-08-17 11:12:28
* @Last Modified by:   linxinjian
* @Last Modified time: 2017-08-17 11:13:44
*/
const win = window;
const doc = document;
const isAndroid = /android|adr/gi.test(navigator.userAgent);
const isIos = /iphone|ipod|ipad/gi.test(navigator.userAgent);
const isMobile = isAndroid || isIos;
const isWeixin = /MicroMessenger/gi.test(navigator.userAgent);
const LOGIN_PHONE = 'phone';

function getSearch(href = win.location.search) {
    const data = {};
    const reg = new RegExp('([^?=&]+)(=([^&]*))?', 'g');
    href.replace(reg, ($0, $1, $2, $3) => (data[$1] = $3));
    return data;
}

function isLogin() {
    const phone = window.localStorage.getItem(LOGIN_PHONE);
    if (phone) {
        return true;
    }
    return false;
}

function getLoginPhone() {
    return window.localStorage.getItem(LOGIN_PHONE);
}

function isApp() {
    return navigator.userAgent.indexOf('ddll') !== -1;
}
function paramsToString(params) {
    const paramsArray = [];
    for (const name in params) {
        if (params.hasOwnProperty(name)) {
            let str = '';
            if (params[name] !== null) {
                str = JSON.stringify(params[name]);
                if (!str) {
                    str = '';
                }
            }
            if (str.substring(0, 1) === '\"' && str.substring(str.length - 1) === '\"') {
                str = str.substring(1, str.length - 1);
            }

            paramsArray.push(`${name}=${str}`);
        }
    }
    return paramsArray.join('&');
}

const wxpayUrl = process.env.NODE_ENV === 'production' ?
    (/^beta\./.test(location.host) ?
        '//www.dingdandao.com/wxpay/test/auth.html?' :
        'https://www.dingdandao.com/wxpay/pub/auth.html?'
        ) :
    '//www.dingdandao.com/wxpay/test/auth.html?';

const campId = window.location.pathname.split('/')[1];

export function getCookie(name) {
    const search = `${name}=`; // 查询检索的值
    let returnvalue = ''; // 返回值
    if (document.cookie.length > 0) {
        let sd = document.cookie.indexOf(search);
        if (sd !== -1) {
            sd += search.length;
            let end = document.cookie.indexOf(';', sd);
            if (end === -1) {
                end = document.cookie.length;
            }
            // unescape() 函数可对通过 escape() 编码的字符串进行解码。
            returnvalue = unescape(document.cookie.substring(sd, end));
        }
    }
    return returnvalue;
}

export {
    wxpayUrl,
    isIos,
    isAndroid,
    isMobile,
    getSearch,
    isLogin,
    isWeixin,
    paramsToString,
    getLoginPhone,
    campId,
    isApp
};
