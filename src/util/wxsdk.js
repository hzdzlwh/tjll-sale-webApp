/*
* @Author: lxj
* @Date:   2017-08-17 13:40:52
* @Last Modified by:   lxj
* @Last Modified time: 2017-08-17 13:41:12
*/
import { callApi } from '../middleware/api';
import { campId } from '../utils/mobileUtil';
import { getDirectWebShareDate } from './share';

const appId = 'wxe04af95ab9af57c5';

function getSign(timestamp, noncestr) {
    return callApi('/pay/getSign4JSApi', {
        networkNum: campId,
        signType: 1,
        params: {
            url: encodeURIComponent(window.location.href),
            noncestr,
            timestamp
        }
    });
}

function share() {
    const data = getDirectWebShareDate();
    [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone'
    ].map(event => {
        wx[event]({
            title: data.name,
            desc: data.name,
            imgUrl: data.image
        });
    });
}

export function wxShare() {
    const timestamp = parseInt(new Date().getTime() / 1000) + '';
    const noncestr = '' + Math.random() * (Math.pow(10, 17));
    getSign(timestamp, noncestr)
        .then(data => {
            wx.config({
                // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: appId, // 必填，公众号的唯一标识
                timestamp, // 必填，生成签名的时间戳
                nonceStr: noncestr, // 必填，生成签名的随机串
                signature: data,// 必填，签名，见附录1
                jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'onMenuShareQZone'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });

            setTimeout(() => {
                wx.ready(function() {
                    share();
                });
            }, 1500);
        });
}

export function initWX() {
    wxShare();
}
