<template>
<div v-if='data'>
    <div class="campInfo"><div><div class="campInfo-notice" ><img class="icon-notice" src="https://static.dingdandao.com/sale-website/image/00CEE7F7-27B8-43DE-9255-B4ED2C921A35@1x.png"><div class="notice-container" @click='notice = !notice'><span class="notice-text" style="animation: translateHorizon 13s linear infinite;">{{data.notice}}</span></div></div>
    <div ><div class="modal-mask"  v-if='notice || remark' @click='closeMask'></div><div v-if='notice'class="modal-container" style="width: 94%; padding: 0.4rem 0.6rem;"><p class="notice-title"><span></span><span class="notice-title-text">公告</span><span class="notice-close-icon" ><img  @click='notice = !notice' src="https://static.dingdandao.com/sale-website/image/notice-close.png"></span></p><div class="notice-content">{{data.notice}}</div></div></div>
    </div>
    <div class="headNav-swipe">
       <Swipe :show-indicators="false" @change="handleChange">
      <SwipeItem v-for='(item, index) in data.imgUrl' :key='index'><img :src="`${item}?imageView2/1/q/50/w/640/h/480`" width='100%'></SwipeItem>
    </Swipe>
    <span class="headNav-picture-num">{{index + 1}}/{{data.imgUrl.length}}</span>
    </div>
    <div class="campInfo-container"><div class="campInfo-campName" @click='remark = true'><article>{{data.campName}}</article><span>查看详情<img src="https://static.dingdandao.com/sale-website/image/detail.png"></span></div>
    <div v-if='remark'>
    <div class="modal-container" style="width: 94%; padding: 0.4rem 0.6rem;">
    <p class="notice-title">
    <span></span>
    <span class="notice-title-text">{{data.campName}}</span>
    <span class="notice-close-icon"><img @click='remark = false' src="https://static.dingdandao.com/sale-website/image/notice-close.png"></span></p>
    <div class="campInfo-remark-content" v-html='data.remark'></div>
    </div>
    </div>
    <div class="campInfo-address"><article><a class="campInfo-mapNav" :href="`https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:${data.coord.lat},${data.coord.lon};coordtype:3;title:${this.data.campName};addr:${data.address}&key=R6LBZ-CMK6X-XMI4Y-ZJYA2-FFDZO-UBB3Z&referer=salesite`"><img class="icon icon-address" src="http://static.dingdandao.com/sale-website/image/addres.png"><span class="campInfo-addressText">{{data.address}}</span></a><a class="campInfo-phone" :href="`tel:${data.phone}`"><img class="icon icon-phone" src="http://static.dingdandao.com/sale-website/image/phone.png"></a></article></div>
    </div>
    </div>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
import http from '@/util/http.js';
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            index: 1,
            data: undefined,
            notice: false,
            imageMask: false,
            remark: false
        };
    },
    components: {
        Swipe,
        SwipeItem
    },
    methods: {
        ...mapMutations([
            'setTitle'
        ]),
        closeMask() {
            this.notice = false;
            this.remark = false;
        },
        handleChange(index) {
            this.index = index;
        },
        fetchDate() {
            http.get('/directNet/getCampInfo').then(res => {
                this.data = res.data;
                this.setTitle(res.data.campName);
            });
        }
    },
    created() {
        this.fetchDate();
    }
};
</script>
<style lang="scss" scoped>
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
