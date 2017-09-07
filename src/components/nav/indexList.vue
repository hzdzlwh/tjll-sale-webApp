<template>
<div>
<div class="tabList">
    <div class="tab" @click='changeTab("room")' :class='{activeTab: active === "room"}'>
        <span > <img class="tabIcon" :src="active === 'room' ? 'https://static.dingdandao.com/sale-website/image/room_active.png' : 'https://static.dingdandao.com/sale-website/image/room.png' "><!-- react-text: 176 -->住宿<!-- /react-text --></span>
    </div>
    <div class="tab" @click='changeTab("enter")' :class='{activeTab: active === "enter"}'>
        <span  class="tab-border" ><img class="tabIcon" :src="active === 'enter' ? 'https://static.dingdandao.com/sale-website/image/entertainment_active.png' : 'https://static.dingdandao.com/sale-website/image/entertainment.png' " ><!-- react-text: 180 -->娱乐<!-- /react-text --></span>
    </div>
    <div class="tab" @click='changeTab("reset")' :class='{activeTab: active === "reset"}'>
        <span><img class="tabIcon" :src="active === 'reset' ? 'https://static.dingdandao.com/sale-website/image/food_active.png' : 'https://static.dingdandao.com/sale-website/image/food.png' " ><!-- react-text: 184 -->餐饮<!-- /react-text --></span>
    </div>
</div>
    <TabContainer v-model="active" :swipeable='true'>
  <TabContainerItem id="room">
    <div class="roomDateContainer"><div class="roomDate" style="border-right: 2px solid #e6e6e6" @click='openStartDate'><span class="roomDate-label">入住</span><span><span class="dateBtn">{{dateFormatMAndD(startValue)}}<span>{{startWeek}}</span></span></span><img class="roomDate-icon" src="https://static.dingdandao.com/sale-website/image/arrowRight.png"></div><!-- <div class="roomDate-line"></div> --><div class="roomDate" @click='openEndDate'><span class="roomDate-label">退房</span><span><span class="dateBtn">{{dateFormatMAndD(endValue)}}<span>{{endWeek}}</span></span></span><img class="roomDate-icon" src="https://static.dingdandao.com/sale-website/image/arrowRight.png"></div></div>
    <div>
    <div class="tab-item container"  v-for='(item, index) in data[0]' @click='addOrder(item, 0)'><div><div class="LazyLoad is-visible roomItem-img"><span ><img :src="`${item.imgUrl}?imageView2/2/w/608/h/350/q/50`"></span></div></div><div class="roomItem-info"><div class="discountInfo-container"><span >{{item.name}}</span></div><span style="color:#999">可住{{item.fitNum}}人</span></div><div class="roomItem-info" style=" color:#178ce6"><div class="discountInfo-container"><span >¥ {{item.price}}元/晚</span></div><span class="item-btn" >{{item.hasNoSale ? '售罄' : '预订'}}</span></div></div></div>
  </TabContainerItem>
  <TabContainerItem id="enter">
    <div class="enterDateContainer">
        <div>
        <div class=" otherContainer" v-for='item in data[1]' @click='addOrder(item, 1)'>
        <div class="item-img">
        <img :src="`${item.imgUrl}?imageView2/1/w/200/h/200/q/50`">
        </div>
        <div class="notRoomItem-info">
        <div class="notRoomItem-name">
        <div class="discountInfo-container">
        <span >{{item.name}}</span>
        </div>
        <span style="color: rgb(153, 153, 153);font-size:0.375rem;">适用{{item.fitNum}}人</span>
        </div>
        <div class="notRoomItem-price">
        <div class="discountInfo-container">
        <span >¥&nbsp;{{item.price}}</span>
        </div>
        <span class="item-btn" >{{item.hasNoSale ? '售罄' : '预订'}}</span>
        </div>
        </div>
        </div>
        </div>
    </div>
  </TabContainerItem>
  <TabContainerItem id="reset">
    <div class="resetDateContainer">
        <div>
        <div class=" otherContainer" v-for='item in data[2]' @click='addOrder(item, 2)'>
        <div class="item-img">
        <img :src="`${item.imgUrl}?imageView2/1/w/200/h/200/q/50`">
        </div>
        <div class="notRoomItem-info">
        <div class="notRoomItem-name">
        <div class="discountInfo-container">
        <span >{{item.name}}</span>
        </div>

        </div>
        <div class="notRoomItem-price">
        <div class="discountInfo-container">
        <span >¥&nbsp;{{item.price}}</span>
        </div>
        <span class="item-btn" >{{item.hasNoSale ? '售罄' : '预订'}}</span>
        </div>
        </div>
        </div>
        </div>
    </div>
  </TabContainerItem>
</TabContainer>
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
import { TabContainer, TabContainerItem, DatetimePicker } from 'mint-ui';
import util from '@/util/util.js';
import http from '@/util/http.js';
import { mapState } from 'vuex';

export default{
    data() {
        return {
            active: 'room',
            startValue: new Date(),
            endValue: new Date(new Date().valueOf() + (1000 * 60 * 60 * 24)),
            data: []
        };
    },
    components: {
        TabContainer,
        TabContainerItem,
        DatetimePicker
    },
    computed: {
        ...mapState([
            'campId'
        ]),
        startWeek() {
            return this.getDate(this.startValue);
        },
        endWeek() {
            return this.getDate(this.endValue);
        }
    },
    methods: {
        fetchDate() {
            const parm = {
                startDate: util.dateFormat(this.startValue),
                endDate: util.dateFormat(this.endValue)
            };
            http.get('/directNet/getCategoryList', parm).then(res => {
                const data = [];
                const resData = res.data;
                data.push(resData[0]);
                data.push(resData[2]);
                data.push(resData[1].concat(resData[4]));
                this.data = data;
            });
        },
        addOrder(data, type) {
            if (data.hasNoSale) {
                return;
            }
            if (type === 0) {
                this.$router.push(`/${this.campId}/detail/${data.itemId}?startValue=${util.dateFormat(this.startValue)}&endValue=${util.dateFormat(this.endValue)}`);
                return;
            }
            this.$router.push(`/${this.campId}/detail/${data.itemId}`);
        },
        changeTab(active) {
            this.active = active;
        },
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
        openStartDate() {
            this.$refs.detailStart.open();
        },
        openEndDate() {
            this.$refs.detailEnd.open();
        }
    },
    created() {
        this.fetchDate();
    }
};
</script>
<style lang="scss" scoped>
    .otherContainer{
        padding: 0.4rem 0.6rem;
        display: flex;
        background-color: #fff;
        border-top: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
        .item-img{
            padding-right:0.25rem;
        }
        img{
            height: 1.5625rem;
            width: 1.5625rem;
        }
        .notRoomItem-info{
            flex:1;
            flex-direction:column;
            justify-content:space-between;
            .notRoomItem-price{
                margin-top:0.46875rem;
                display:flex;
                justify-content:space-between;
                align-items:center;
                font-size:0.4375rem;
                .discountInfo-container{
                    color: #178ce6;
                }
            }
            .notRoomItem-name{
                display:flex;
                justify-content: space-between;
                font-size:0.4375rem;
            }
        }

    }
    .enterDateContainer, .resetDateContainer{
        margin-top:0.1875rem;
    }
    .tabList{
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        .tab{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 1.0rem;
            flex: 1;
            border-bottom: 1px solid #ddd;
            font-size:0.375rem;
            color: rgb(153, 153, 153);
            img{
                margin-right:0.125rem;
                vertical-align:bottom;
            }
        }
        .activeTab{
            color: #178ce6;
        }
        .tab-border{
            border-right: 1px solid rgb(230, 230, 230);
            border-left: 1px solid rgb(230, 230, 230);
            padding: 8px 64px 0;
            height: 40px;
        }
    }
    .container{
        background-color: #fff;
        border-top: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
        padding-top: 0.25rem;
    }
    .tab-item{
        margin-bottom:0.25rem;
    }
    .roomItem-info{
        width: 9.5rem;
        align-items: center;
        font-size:0.4375rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin: 0.25rem auto 0.125rem;
    }
    .item-btn{
        width: 1.625rem;
        height: 0.75rem;
        border-radius: .05rem;
        display: inline-flex;
        justify-content: center;
        align-items:center;
        color: #fff;
        background: rgb(23, 140, 230);
        font-size: 0.375rem;
    }
    .roomItem-img{
        span{
            height:5.46875rem;
            width:9.5rem;
            display:block;
            margin:auto;
            img{
                width:100%;
                height:100%;
            }

        }
    }
    .roomDateContainer{
        display:flex;
        justify-content: space-between;
        align-items:center;
        height:1.0rem;
        background-color:#fff;
        margin-bottom:0.1875rem;
        .roomDate{
            font-size:0.375rem;
            flex:1;
            text-align: center;
            display:inline;
            height:0.5625rem;
            line-height:0.5625rem;
            .roomDate-icon{
                margin-left:0.1875rem;
                width: 0.125rem;
                height: 0.21875rem;
                vertical-align: baseline;
            }
        }
    }
</style>