<template>
    <div class="bottom-bar">
        <div class="content">
            <div class="item" style="padding-top:24px;">
                <p style="font-size:12px;"><img src="../assets/images/about-us.png" style="margin-right:10px;">关于我们</p>
                <p>公司介绍</p>
                <p>品牌介绍</p>
                <p>合作伙伴</p>
            </div>
            <div class="item" style="padding-top:36px;">
                <p><img src="../assets/images/contact-style.png" style="margin-right:10px;">联系方式</p>
                <p>400-600-3343</p>
                <p>outing@eluying.com</p>
            </div>
            <div class="item" style="padding-top:6px;text-align:center">
                <p><img src="../assets/images/public-number.png" style="margin-right:10px;">公众号</p>
                <img src="../assets/images/public-twocode.png" style="margin-top:14px;">
            </div>
            <div class="item" style="padding-top:6px;text-align:center">
                <p><img src="../assets/images/subscribe.png" style="margin-right:10px;">订阅号</p>
                <img src="../assets/images/subscribe-twocode.png" style="margin-top:14px;">
            </div>
            <div class="item bottom-logo">
                <img src="../assets/images/bottom-logo.png">
            </div>
        </div>
        <div class="copy-right">
            © Copyright 2014-2016 杭州旅居星球网络科技有限公司 浙ICP备14029301号
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.bottom-bar{
    height: 257px;
    background: #48484d;
    .content{
        width: 1000px;
        height: 203px;
        padding: 30px 0;
        margin: 0 auto;
        display: flex;
        .item{
            width: 200px;
            height: 143px;
            border-right: 1px solid #696969;
            p{
                color: #fff;
                text-align: center;
            }
            &:last-child{
                border-right: none;
                text-align: center;
                padding-top: 27px;
            }
        }
    }
    .copy-right{
        height: 54px;
        line-height:54px;
        text-align: center;
        color: #fff;
        border-top: 1px solid #696969;
    }
}
</style>