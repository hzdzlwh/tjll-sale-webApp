<template>
<div>
    <div class="campInfo"><div><div class="campInfo-notice"><img class="icon-notice" src="https://static.dingdandao.com/sale-website/image/00CEE7F7-27B8-43DE-9255-B4ED2C921A35@1x.png"><div class="notice-container"><span class="notice-text" style="animation: translateHorizon 13s linear infinite;">新春大吉，恭喜发财～火热订房中，预定电话4006009394～</span></div></div>
    <div style="display: none;"><div class="modal-mask"></div><div class="modal-container" style="width: 94%; padding: 0.4rem 0.6rem;"><p class="notice-title"><span></span><span class="notice-title-text">公告</span><span class="notice-close-icon"><img src="https://static.dingdandao.com/sale-website/image/notice-close.png"></span></p><div class="notice-content">新春大吉，恭喜发财～火热订房中，预定电话4006009394～</div></div></div>
    </div>
    <div class="headNav-swipe">
       <Swipe :show-indicators="false" @change="handleChange">
      <SwipeItem><img src="http://static.dingdandao.com/99e55621082d8ad94ea34f0eefee0ae9?imageView2/1/q/50/w/640/h/480" width='640px'></SwipeItem>
      <SwipeItem><img src="http://static.dingdandao.com/661959c68a1b248dd2b70d752225a8f5?imageView2/1/q/50/w/640/h/480" width='640px'></SwipeItem>
      <SwipeItem><img src="http://static.dingdandao.com/6fd796d57b2811c62da5509fbf462843?imageView2/1/q/50/w/640/h/480" width='640px'></SwipeItem>
    </Swipe>
    <span class="headNav-picture-num">{{index + 1}}/10</span>
    </div>
    <div class="campInfo-container"><div class="campInfo-campName"><article>测试8</article><span><!-- react-text: 70 -->查看详情<!-- /react-text --><img src="https://static.dingdandao.com/sale-website/image/detail.png"></span></div><div style="display: none;"><div class="modal-mask"></div><div class="modal-container" style="width: 94%; padding: 0.4rem 0.6rem;"><p class="notice-title"><span></span><span class="notice-title-text">测试8</span><span class="notice-close-icon"><img src="https://static.dingdandao.com/sale-website/image/notice-close.png"></span></p><div class="campInfo-remark-content"><p>订单来了五大核心功能帮你轻松解决问题。</p><p>直销官网：无佣金的移动预定网站，自主营销；社交工具轻松推广，吸引一手客源</p><p><br></p><p>会员管理：会积累粉丝，二次营销，提升复购率；数据库追踪会员动态，服务分类需求</p><p><br></p><p>移动收银：分散收银，统一账户，让消费随时发生；游客手机支付，员工移动收银；收款对账明确，无漏单走单</p><p><br></p><p>数据报表：实时汇总，营收状况一目了然；随时手机查看订单，渠道信息，营收报表</p><p><br></p><p>多业态订单管理：多业态统一管理，预订信息实时跟进；高度定制房态，餐饮，娱乐管理</p><p><br></p><p><img src="http://static.dingdandao.com/e1e5059db5abaae22afe63dfcf0d163a" style="max-width:100%;" class=""><br></p><p><br></p></div></div></div><div class="campInfo-address"><article><span class="campInfo-mapNav"><img class="icon icon-address" src="http://static.dingdandao.com/sale-website/image/addres.png"><span class="campInfo-addressText">浙江省杭州市西湖区留祥路859号紫金创业园B座12楼</span></span><a class="campInfo-phone" href="tel:4006009394"><img class="icon icon-phone" src="http://static.dingdandao.com/sale-website/image/phone.png"></a></article></div></div>
    </div>

    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';

export default {
    data() {
        return {
            index: 1
        };
    },
    components: {
        Swipe,
        SwipeItem
    },
    methods: {
        handleChange(index) {
            this.index = index;
        }
    }
};
</script>
<style lang="scss" scoped>
.headNav-swipe{
    height:7.5rem;
    position: relative;
    .headNav-picture-num{
        text-align:center;
        font-size: 0.3125rem;
        display: inline-flex;
        align-items: center;
        position: absolute;
        right: .6rem;
        bottom: .5rem;
        color: #fff;
        // width: 1.171875rem;
        padding: 0 0.125rem;
        height: 0.5rem;
        border-radius: 2.5rem;
        background: rgba(0,0,0,.4);
    }
}
.campInfo {
  position: relative;
  .campInfo-container {
    background: #ffffff;
    padding: 0 0.375rem;
    border-bottom: 1px solid #e6e6e6;

    .campInfo-campName {
      height:1.3125rem;
      line-height: 1.3125rem;
      font-size: 0.4375rem;
      border-bottom: 1px solid #e6e6e6;
      article {
        display: inline-block;
      }
      span {
        float: right;
        color: #178ce6;
        font-size: 0.375rem;
      }
      img {
        width: 0.125rem;
        height: 0.21875rem;
        margin-left: 0.25rem;
      }
    }

    .campInfo-address {
      font-size: 0.375rem;
      color: #999999;
      height: 1.3125rem;
      line-height: 1.3125rem;
      .campInfo-mapNav {
        color: #999999;
        height: 100%;
        display: inline-flex;
        align-items: center;
      }
      .campInfo-addressText {
        max-width: 7.03125rem;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      article {
        width: 100%;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .icon {
        height: 0.46875rem;
        width: 0.46875rem;
        vertical-align: sub;
      }

      .icon-address {
        margin-right: 0.125rem;
      }
      .icon-phone {
        display: block;
      }
      .campInfo-phone {
        display: inline-block;
        float: right;
        height: 0.625rem;
        margin-top: 0.3125rem;
        padding: 0.078125rem 0.359375rem 0 0.359375rem;
        border-left: 1px solid #e6e6e6;
      }
    }
  }
  .campInfo-coverPhoto {
    position: relative;
    width: 100%;
    height: 7.5rem;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .campInfo-notice {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 0.78125rem;
    background: #ffac59;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
    padding: 0 0.46875rem 0 0.25rem;
    color: #ffffff;
    font-size: 0.375rem;
    z-index: 1000;

    .icon-notice {
      width: 0.375rem;
      height: 0.34375rem;
      margin-right: 0.125rem;
    }
    .notice-container {
      width: 8.75rem;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .notice-text {
      display: inline-block;
      white-space: nowrap;
    }
  }
  .notice-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.4375rem;
    color: #666666;
    margin-bottom: 0.3125rem;
  }
  .campInfo-remark-content > p {
    height: auto;
    margin: 0;
  }
  .notice-close-icon {
    cursor: pointer;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .notice-content {
    font-size: 0.375rem;
    line-height: 0.515625rem;
    word-wrap: break-word;
  }
  p {
    margin-bottom: 0.46875rem;
    line-height: 0.46875rem;
    height: 0.46875rem;
  }
  .picture-num {
    font-size: 0.3125rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0.375rem;
    bottom: 0.3125rem;
    color: #ffffff;
    width: 1.171875rem;
    height: 0.5rem;
    border-radius: 1.5625rem;
    background: rgba(0,0,0,.4);
  }
}
@keyframes translateHorizon {
  0%{transform: translateX(0);}
  100%{transform: translateX(-110%);}
}
</style>