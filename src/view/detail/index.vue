<template>
<div class="detail">
      <div class="headNav-swipe">
       <Swipe @change="handleChange">
      <SwipeItem><img src="http://static.dingdandao.com/99e55621082d8ad94ea34f0eefee0ae9?imageView2/1/q/50/w/640/h/480" width='100%'></SwipeItem>
      <SwipeItem><img src="http://static.dingdandao.com/661959c68a1b248dd2b70d752225a8f5?imageView2/1/q/50/w/640/h/480" width='100%'></SwipeItem>
      <SwipeItem><img src="http://static.dingdandao.com/6fd796d57b2811c62da5509fbf462843?imageView2/1/q/50/w/640/h/480" width='100%'></SwipeItem>
    </Swipe>

    </div>
        <div class="title"><div class="desc"><h3><div class="detail-discountInfo-container"><span>微官网排房</span><span class="discount-tag">会员优惠7折</span></div><div class="detail-discountInfo-container"><span class="price"><!-- react-text: 27 -->￥<!-- /react-text --><b><!-- react-text: 29 -->0.00<!-- /react-text --><!-- react-text: 30 -->/晚<!-- /react-text --></b></span></div></h3><h4><span></span><span class="descIcon"><img src="https://static.dingdandao.com/sale-website/image/fitNum.png"><span><!-- react-text: 36 -->可住<!-- /react-text --><!-- react-text: 37 -->2<!-- /react-text --><!-- react-text: 38 -->人<!-- /react-text --></span></span><span class="descLine"></span><span class="descIcon"><img src="https://static.dingdandao.com/sale-website/image/bedType.png"><span>大床</span></span><span class="descLine"></span><span class="descIcon"><img src="https://static.dingdandao.com/sale-website/image/roomType.png"><span>60m²</span></span><span></span></h4></div></div>
        <div class="detail-info">
        <div><span class="orderDetail-label">到达时间</span><span class="detail-info-data" @click='openStartDate()'>{{dateFormatMAndD(startValue)}}</span>{{startWeek}}</div>
        <div><span class="orderDetail-label" >离开时间</span><span class="detail-info-data" @click='openEndDate()'>{{dateFormatMAndD(endValue)}}</span>{{endWeek}}共{{DateDiff()}}晚</div>
        <div><span class="orderDetail-label">购买数量</span><counte  @numChange='numChange'></counte></div>
        </div>
        <div style="padding-bottom:1.375rem">
            <div><h5>房间介绍</h5><div class="description content-container"><article>暂无介绍</article></div>
            </div>
            <div>
            <h5>配套设施</h5><div class="equipment content-container" style="padding-bottom: 0px;"><span class="equipItem">暂无说明</span></div>
            </div>
            <div>
            <h5>相关政策</h5><div class="content-container">暂无说明</div>
            </div>
            <div>
                <h5>商品介绍</h5>
                <div className="description content-container">
                    <article>
                        {remark}
                    </article>
                </div>
            </div>
        </div>
        <div class="bottom-button"><ul><li>加入购物车</li><li>立即预订</li></ul></div>
        <DatetimePicker ref="detailStart"
    type="date"
    v-model="startValue" year-format="{value} 年"
    :startDate = 'new Date()'
  month-format="{value} 月"
  date-format="{value} 日"
  @confirm='startDateConfirm'></DatetimePicker>
  <DatetimePicker ref="detailEnd"
    type="date"
    :startDate = 'startValue'
    v-model="endValue" year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日"></DatetimePicker>
  <!-- 可合并 -->
    </div>
</template>
<script>
import { Swipe, SwipeItem, DatetimePicker } from 'mint-ui';
import counte from '@/components/common/count/index';
import util from '@/util/util.js';

export default {
    data() {
        return {
            index: 1,
            num: 1,
            startValue: new Date(),
            endValue: new Date(new Date().valueOf())
        };
    },
    components: {
        Swipe,
        SwipeItem,
        counte,
        DatetimePicker
    },
    computed: {
        startWeek() {
            return this.getDate(this.startValue);
        },
        endWeek() {
            return this.getDate(this.endValue);
        }
    },
    methods: {
        startDateConfirm() {
            if (this.startValue.valueOf() <= this.endValue.valueOf()) {
                this.endValue = new Date(this.startValue.valueOf() + (1000 * 60 * 60 * 24));
            }
        },
        DateDiff() {
            return util.DateDiff(this.startValue, this.endValue);
        },
        dateFormatMAndD(val) {
            return util.dateFormatMAndD(val);
        },
        getDate(val) {
            if (util.isSameDay(val, new Date())) {
                return '今天';
            }
            const day = val.getDay();
            const dateList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
            return dateList[day];
        },
        handleChange(index) {
            this.index = index;
        },
        numChange(type, id, val, orderId) {
            this.num = val;
        },
        openStartDate() {
            this.$refs.detailStart.open();
        },
        openEndDate() {
            this.$refs.detailEnd.open();
        }
    }
};
</script>
<style scoped lang='scss'>
    .detail{
        .equipIcon {
        width: 0.34375rem;
        height: 0.3125rem;
        margin-right: 0.125rem;
    }
    .equipItem {
        padding: 0 0 0.25rem;
        display: inline-flex;
        align-items: center;
        width: 50%;
    }
    .time{
        background-image: url("http://7xsrk6.com2.z0.glb.qiniucdn.com/arrow.png");
        background-repeat: no-repeat;
        background-position: 98% 50%;
        font-size: 0.40625rem;
        background-size: 0.4375rem 0.5rem;
        span{
            margin-right: 0.125rem;
            b{
                font-weight: normal;
                margin-right: 0.25rem;
            }
        }
        .divider{
            display: inline-block;
            width: 1px;
            height: 0.3125rem;
            background: #e3e3e3;
            margin-right: 0.25rem;
        }
    }
    .equipment{
        margin-top: 0px;
        overflow: hidden;
        li{
            float: left;
            width: 4.6875rem
            &:before{
                content: "";
                display: inline-block;
                width: 0.5rem;
                height: 0.390625rem;
                margin-top: 0.125rem;
                margin-right: 0.125rem;
            }
            &.on:before{
                background-image: url('http://7xsrk6.com2.z0.glb.qiniucdn.com/sale-website/image/gou.png');
                background-repeat: no-repeat;
                background-position: center;
                background-size:0.5rem 0.40625rem;
            }
            /*list-style: none;
            color: $colorB;
            font-size: 28px;*/
        }
    }
    .description{
        margin-top: 0px;
        ul{
            overflow: hidden;
            margin-bottom: 0.3125rem;
        }
        li{
            list-style: none;
            font-size: 0.375rem;
            float: left;
            width: 4.6875rem;
        }
        article{
            font-size: 0.375rem;
        }
    }
        .detail-info{
            &>div{
                flex-wrap: wrap;
                padding: 0.25rem 0.375rem;
                background: #fff;
                border-top: 1px solid #e3e3e3;
                border-bottom: 1px solid #e3e3e3;
                color: #666;
                font-size: 0.375rem;
            }
            .detail-info-data{
                margin-right: 0.3125rem;
                color: #333;
            }
            .orderDetail-label{
                margin-right:1.25rem;
            }
        }
        
        .content-container{
            flex-wrap: wrap;
            padding: 0.25rem 0.375rem;
            background: #fff;
            border-top: 1px solid #e3e3e3;
            border-bottom: 1px solid #e3e3e3;
            color: #666;
        }
        &>div>div>h5{
            display: flex;
            font-size: 0.375rem;
            color: #999;
            height: 1.0rem;
            align-items: center;;
            padding-left: 0.375rem;
            font-weight: 400;
    
        }
        .description {
            article{
                font-size: 0.375rem;
                color: #333;
            }
        }
        .title{
            padding: 0.25rem 0.40625rem 0;
            background-color: #fff;
            border-top:1px solid #e3e3e3;
            border-bottom:1px solid #e3e3e3;
            overflow:hidden;
            .price{
                color: #1699de;
                font-size: 0.34375rem;
                b{
                    font-size: 0.46875rem;
                    font-weight: 400;
                }
            }
            .desc{
                h3{
                    font-size: 0.375rem;
                    color: #666;
                }
                h4{
                    align-items: center;
                    height: 0.84375rem;
                    margin-top: 0.125rem;
                    border-top: 1px solid #e6e6e6;
                    font-size: 0.375rem;
                    color: #999;
                    .descIcon{
                        display: inline-block;
                    }
                    img{
                        width: 0.46875rem;
                        height: 0.375rem;
                        margin-right: 0.125rem;
                    }
                    .descLine{
                        display: inline-block;
                        height: 0.625rem;
                        color: #e6e6e6;
                        border-right: 3px solid #e6e6e6;
                    }
                }
                h3, h4{
                    font-weight: 400;
                    display: flex;
                    justify-content: space-between;
                }
                .detail-discountInfo-detail{
                    display: inline-block;
                    align-items: center;
                }
            }
        }
        .bottom-button{
            position: fixed;
            bottom: 0;
            background: #fff;
            border-top: 1px solid #e3e3e3;
            width: 100%;
            li{
                float: left;
                width: 50%;
                height: 1.375rem;
                text-align: center;
                line-height: 1.375rem;
                font-size: 0.4375rem;
                color: #178ce6;
                background: #fff;
                &:nth-child(2){
                    background: #1699de;
                    color: #fff;
                }
            }
        }
    }
</style>