/*
* @Author: lxj
* @Date:   2017-08-17 13:41:30
* @Last Modified by:   lxj
* @Last Modified time: 2017-08-17 13:42:39
*/
import { store } from '../store/index.js';
export function getDirectWebShareDate() {
    const state = store.getState();
    const campName = state.campInfo.campName;
    const currentLocation = location.pathname.split('/');
    let name;
    let image;
    const url = location.href;
    if (currentLocation[2] === 'category') {
        if (currentLocation[3] === 'food') {
            name = `【餐饮】${campName}`;
        } else if (currentLocation[3] === 'room') {
            name = `【住宿】${campName}`;
        } else if (currentLocation[3] === 'ET') {
            name = `【娱乐】${campName}`;
        }
        image = state.campInfo.imgUrl;
    } else if (currentLocation[2] === 'detail') {
        name = `【${state.campDetail.name}】${campName}`;
        image = state.campDetail.imgUrl;
    } else {
        name = campName;
        image = state.campInfo.imgUrl;
    }

    if (image instanceof Array) {
        image = image[0];
    }

    if (!image) {
        image = 'http://static.dingdandao.com/dingdanlaile/59.pic.jpg';
    }

    if (!name) {
        name = '订单来了微官网';
    }

    return { name, image, url };
}

export function initAppShare() {
    window.directWebShare = () => {
        return JSON.stringify(getDirectWebShareDate());
    };

    /**
     * android的回调
     * @param callback
     */
    function connectWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) {
            callback(window.WebViewJavascriptBridge);
        } else {
            document.addEventListener(
                'WebViewJavascriptBridgeReady',
                () => callback(window.WebViewJavascriptBridge),
                false
            );
        }
    }

    connectWebViewJavascriptBridge(bridge => {
        bridge.init((message, responseCallback) => {
            responseCallback(message);
        });

        bridge.registerHandler('ddllJs', (data, responseCallback) => {
            const responseData = window.directWebShare();
            responseCallback(responseData);
        });
    });
}
