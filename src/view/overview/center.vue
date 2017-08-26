<template>
    <div class="center">
        <div class="center-personal">
            <div class="center-personal-name">萧远山</div>
            <div class="center-personal-phone">13999999999</div>
            <i class="next-icon"></i>
        </div>
        <div class="center-entry">
            <router-link :to="{ name: '', params: {} }" class="center-entry-item">
                <i class="item-icon item-icon-vip"></i>
                <p class="item-name">会员中心</p>
                <i class="item-next"></i>
            </router-link>
        </div>
        <ul class="center-table">
            <li class="center-table-item account">
                <i class="item-icon"></i>
                <ul class="item-info">
                    <li class="item-info-key">储值账户</li>
                    <li class="item-info-value">￥3000.00</li>
                </ul>
            </li>
            <li class="center-table-item coin">
                <i class="item-icon"></i>
                <ul class="item-info">
                    <li class="item-info-key">王者金币</li>
                    <li class="item-info-value">￥3000.00</li>
                </ul>
            </li>
            <li class="center-table-item vip">
                <i class="item-icon"></i>
                <ul class="item-info">
                    <li class="item-info-key">会员卡</li>
                    <li class="item-info-value vip">3张</li>
                </ul>
            </li>
            <li class="center-table-item coupon">
                <i class="item-icon"></i>
                <ul class="item-info">
                    <li class="item-info-key">优惠券</li>
                    <li class="item-info-value">10张</li>
                </ul>
            </li>
        </ul>
        <div class="center-entry">
            <router-link :to="{ name: '', params: {} }" class="center-entry-item">
                <i class="item-icon item-icon-order"></i>
                <p class="item-name">我的订单</p>
                <i class="item-next"></i>
            </router-link>
            <router-link :to="{ name: '', params: {} }" class="center-entry-item">
                <i class="item-icon item-icon-people"></i>
                <p class="item-name">常用旅客</p>
                <i class="item-next"></i>
            </router-link>
            <a href="tel:17777777777" class="center-entry-item">
                <i class="item-icon item-icon-phone"></i>
                <p class="item-name">联系我们</p>
                <i class="item-phone">17777777777</i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    title() {
        return '个人中心';
    }
};
</script>

<style lang="scss" scoped>
.center {
    padding-bottom: 200px;
    .center-personal {
        position: relative;
        padding: 32px;
        background-image:linear-gradient(-180deg, #298dea 4%, #4bb0ff 100%);
        color: #fff;
        &-name {
            font-size: 36px;
            margin-bottom: 16px;
        }
        &-phone {
            font-size: 24px;
        }
        .next-icon {
            top: 50%;
            right: 32px;
            width: 16px;
            height: 28px;
            position: absolute;
            background-image: url(~assets/images/next-icon.png);
            transform: translateY(-50%);
        }
    }
    .center-entry {
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        background: #fff;
        font-size: 28px;
        color: #333;
        margin-bottom: 26px;
        &-item {
            display: block;
            padding: 0 32px;
            display: flex;
            align-items: center;
            height: 76px;
            line-height: 76px;
            .item-phone {
                font-size: 28px;
                color: #999;
                text-align: right;
            }
            .item-icon {
                margin-right: 16px;
                width: 36px;
                height: 36px;
                background-repeat: no-repeat;
                background-size: cover;
                &.item-icon-vip {
                    background-image: url(~assets/images/vip-icon.png);
                }
                &.item-icon-order {
                    background-image: url(~assets/images/order-icon.png);
                }
                &.item-icon-people {
                    background-image: url(~assets/images/people-icon.png);
                }
                &.item-icon-phone {
                    background-image: url(~assets/images/phone-icon.png);
                }
            }
            .item-next {
                width: 16px;
                height: 28px;
                background-repeat: no-repeat;
                background-size: cover;
                background-image: url(~assets/images/next.png);
            }
            .item-name {
                flex: 1;
            }
        }
        .center-entry-item + .center-entry-item {
            border-top: 1px solid #e6e6e6;
        }
    }
    .center-table {
        display: flex;
        background: #fff;
        width: 100%;
        flex-wrap: wrap;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 26px;
        &-item {
            padding-left: 32px;
            width: 50%;
            display: flex;
            align-items: center;
            height: 112px;
            &:nth-of-type(1) {
                border-bottom: 1px solid #e6e6e6;
            }
            &:nth-of-type(2) {
                border-bottom: 1px solid #e6e6e6;
            }
            .item-icon {
                width: 56px;
                height: 56px;
                background-repeat: no-repeat;
                background-size: cover;
                margin-right: 20px;
            }
            .item-info {
                line-height: 1.3;
                &-key {
                    font-size: 24px;
                    color: #666;
                }
                &-value {
                    font-size: 32px;
                }
            }
            &.account {
                .item-icon {
                    background-image: url(~assets/images/account-icon.png);
                }
                .item-info {
                    color: #e57677;
                }
            }
            &.coin {
                .item-icon {
                    background-image: url(~assets/images/coin-icon.png);
                }
                .item-info {
                    color: #f59a26;
                }
            }
            &.vip {
                .item-icon {
                    background-image: url(~assets/images/vipcard-icon.png);
                }
                .item-info {
                    color: #49a5f1;
                }
            }
            &.coupon {
                .item-icon {
                    background-image: url(~assets/images/coupon-icon.png);
                }
                .item-info {
                    color: #49b19e;
                }
            }
        }
        .center-table-item + .center-table-item {
            border-left: 1px solid #e6e6e6;
        }
    }
}
</style>
