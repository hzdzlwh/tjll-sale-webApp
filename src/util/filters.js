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
const numberFormat = (value) => {
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
    if (date === undefined || date === null || date.length === 0) return '';
	return moment(date).format(fmt);
}
/**
 * 金额格式化
 * @param {number} money 价格
 * @return {string} 格式化后的字符串
 */
const moneyFormat = (money) => {
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
 * 字符串长度格式化
 * @param  {string} str
 * @param  {number} length 需要的长度
 * @return {string}        格式化后的字符串
 */
export const textLengthFormat = (str, length) => {
    if (str.length > length) return str.substr(0,length) + '...';
	return str;
}

/**
 * 订单状态格式化
 * @param  {string} state
 * @return {string}
 */
const orderState = (state) => {
    let str
    switch (state) {
        case -1:
            str = '等待付款'
            break;
        case 0:
            str = '待处理'
            break;
        case 1:
            str = '已取消'
            break;
        case 2:
            str = '等待出行'
            break;
        case 3:
            str = '出行中'
            break;
        case 4:
            str = '已取消'
            break;
        case 5:
            str = '旅途结束'
            break;
        default:
            str = 'error'
    }
    return str;
}

export const payState = (state) => {
    let str;
}

const idCardType = (state) => {
    let number = parseInt(state);
    let str;
    switch (number) {
        case 0:
            str = '身份证'
            break;
        case 1:
            str = '军官证'
            break;
        case 2:
            str = '通行证'
            break;
        case 3:
            str = '护照'
            break;
        case 4:
            str = '其他'
            break;
    }
    return str;
}
export const coverFormat = (str) => {
    if (!str) return;
    if (!parseInt(str)) return str;
    const header = str.slice(0, 3);
    const footer = str.slice(-4);
    const bodyLength = str.length - 7;
    let body = '';
    for (let i = 0; i < bodyLength; i++) {
        body += '*'
    }
    return `${header}${body}${footer}`;
}

export const labelToValue = (label, list) => {
    if (label === undefined) return;
    if (!list) throw '过滤器出错，请传入list';
    const result = list.filter((item) => item.label === label)[0];
    if (result) return result.value;
}

export default {
    numberFormat,
    dateFormat,
    moneyFormat,
    secondsFormat,
    strLengthFormat,
    orderState,
    payState,
    idCardType,
    coverFormat,
    labelToValue,
    textLengthFormat
}
