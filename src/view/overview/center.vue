<template>
    <div class="center">
        <div class="center-personal">
            <div class="center-personal-name">萧远山</div>
            <div class="center-personal-phone">13999999999</div>
            <i class="next-icon"></i>
        </div>
        <div class="center-entry">
            <div class="center-entry-item">
                <i class="item-icon item-icon-vip"></i>
                <p class="item-name">会员中心</p>
                <i class="item-next"></i>
            </div>
        </div>
        <ul class="center-table">
            <li class="center-table-item">
                <i class="item-icon item-icon-account"></i>
                <ul class="item-info">
                    <li class="item-info-key">储值账户</li>
                    <li class="item-info-value account">￥3000.00</li>
                </ul>
            </li>
            <li class="center-table-item">
                <i class="item-icon item-icon-account"></i>
                <ul class="item-info">
                    <li class="item-info-key">储值账户</li>
                    <li class="item-info-value coin">￥3000.00</li>
                </ul>
            </li>
            <li class="center-table-item">
                <i class="item-icon item-icon-account"></i>
                <ul class="item-info">
                    <li class="item-info-key">储值账户</li>
                    <li class="item-info-value vip">￥3000.00</li>
                </ul>
            </li>
            <li class="center-table-item">
                <i class="item-icon item-icon-account"></i>
                <ul class="item-info">
                    <li class="item-info-key">储值账户</li>
                    <li class="item-info-value coupon">￥3000.00</li>
                </ul>
            </li>
        </ul>
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
            padding: 0 32px;
            display: flex;
            align-items: center;
            height: 76px;
            line-height: 76px;
            .item-icon {
                margin-right: 16px;
                width: 36px;
                height: 36px;
                background-repeat: no-repeat;
                background-size: cover;
                &.item-icon-vip {
                    background-image: url(~assets/images/vip-icon.png);
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
    }
    .center-table {
        display: flex;
        background: #fff;
        width: 100%;
        &-item {
            padding-left: 32px;
            width: 50%;
            display: flex;
            align-items: center;
            height: 112px;
            .item-icon {
                width: 56px;
                height: 56px;
                background-repeat: no-repeat;
                background-size: cover;
                margin-right: 20px;
                &.item-icon-account {
                    background-image: url(~assets/images/account-icon.png);
                }
            }
            .item-info {
                line-height: 1.2;
                &-key {
                    font-size: 24px;
                    color: #666;
                }
                &-value {
                    font-size: 32px;
                    &.account {
                        color: #e57677;
                    }
                    &.coin {
                        color: #f59a26;
                    }
                    &.vip {
                        color: #49a5f1;
                    }
                    &.coupon {
                        color: #49b19e;
                    }
                }
            }
        }
        .center-table-item + .center-table-item {
            border-left: 1px solid #e6e6e6;
        }
    }
}
</style>
