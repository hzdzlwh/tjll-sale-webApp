/*
* @Author: chuxiao
* @Date:   2017-08-23 06:50:14
* @Last Modified by:   cx
* @Last Modified time: 2017-08-24 09:20:40
*/

'use strict';
import moment from 'moment'
/**
 * 数量格式化
 * @param {number} value 数值
 * @returns {number} 格式化后的字符串
 */
export const numberFormat = (value) => {
	if (value >= 10000) {
		return Math.round(value / 100) / 100 + 'W';
	} else {
		return value;
	}
}
/**
 * 日期格式化
 * @param {number} date 时间戳
 * @param {string} fmt 格式
 * @returns {string} 格式化后的字符串
 */
export const dateFormat = (date, fmt) => {
	return moment(date).format(fmt);
}
/**
 * 金额格式化
 * @param {number} money 价格
 * @return {string} 格式化后的字符串
 */
export const moneyFormat = (money) => {
	return `￥${ (money/100).toFixed(2) }`;
}
/**
 * 时间格式化
 * @param {number} second 秒
 * @return {string} 格式化后的字符串
 */
export const secondsFormat = (time) => {
	time = time || 0
	let [h, m, s] = [
		parseInt(time / 3600),
		parseInt(time % 3600 / 60),
		parseInt(time % 60)
	]
	h = h < 10 ? '0' + h : h
	m = m < 10 ? '0' + m : m
	s = s < 10 ? '0' + s : s
	return `${h}:${m}:${s}`
}
/**
 * 字符串长度格式化
 * @param  {string} str
 * @param  {number} length 需要的长度
 * @return {string}        格式化后的字符串
 */
export const strLengthFormat = (str, length) => {
	return str.substr(0,length)
}

/**
 * 订单状态格式化
 * @param  {string} state
 * @return {string}
 */
export const orderState = (state) => {
    let str;
    switch (state) {
        case -1:
            str = '未支付'
            break;
        case 0:
            str = '待处理'
            break;
        case 1:
            str = '已拒绝'
            break;
        case 2:
            str = '已预订'
            break;
        case 3:
            str = '进行中'
            break;
        case 4:
            str = '已取消'
            break;
        case 5:
            str = '已完成'
            break;
        default:
            str = 'error'
    }
    return str;
}

export const payState = (state) => {
    let str;
}
