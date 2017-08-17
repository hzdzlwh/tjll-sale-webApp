/*
* @Author: lxj
* @Date:   2017-08-17 11:14:57
* @Last Modified by:   linxinjian
* @Last Modified time: 2017-08-17 11:15:06
*/
export default {
    /**
     * 获取选中的优惠策略
     * @param discountInfo 可以选择的优惠策略对象
     * @param index 选择享用优惠策略Id
     * @returns {*}
     */
    getDiscountObj(discountInfo, index = -3) { // -3取默认折扣方案
        let selectedDiscountInfo;
        if (!discountInfo || !discountInfo.list || !(discountInfo.list.length > 0)) {
            return undefined;
        }
        if (index === -3) {
            selectedDiscountInfo = discountInfo.list[0];
        } else {
            for (let i = 0; i < discountInfo.list.length; i ++) {
                if (discountInfo.list[i].uniqueId === index) {
                    selectedDiscountInfo = discountInfo.list[i];
                    break;
                }
            }
        }
        return selectedDiscountInfo;
    },
    /**
     * 获取项目的优惠信息
     * @param discountInfo 可以选择的优惠策略对象
     * @param type 业态
     * @param nodeId 项目id
     * @param index 选择享用优惠策略Id
     */
    getItemDiscount(discountInfo, type, nodeId, index = -3) {
        let discount = 1;
        const selectedDiscountInfo = this.getDiscountObj(discountInfo, index);
        if (!selectedDiscountInfo || !selectedDiscountInfo.discountList) {
            return discount;
        }
        selectedDiscountInfo.discountList.map(item => {
            if (item.nodeType === type && item.nodeId === nodeId) {
                discount = item.discount;
            }
        });
        return discount;
    }
};
