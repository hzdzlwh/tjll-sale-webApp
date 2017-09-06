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
    <div class="roomDateContainer"><div class="roomDate" style="border-right: 2px solid #e6e6e6"><span class="roomDate-label">入住</span><span><span class="dateBtn"><!-- react-text: 192 -->10月08日<!-- /react-text --><span>周日</span></span></span><img class="roomDate-icon" src="https://static.dingdandao.com/sale-website/image/arrowRight.png"></div><!-- <div class="roomDate-line"></div> --><div class="roomDate"><span class="roomDate-label">退房</span><span><span class="dateBtn"><!-- react-text: 200 -->12月06日<!-- /react-text --><span>周三</span></span></span><img class="roomDate-icon" src="https://static.dingdandao.com/sale-website/image/arrowRight.png"></div></div>
    <div>
    <div class="tab-item container" ><div><div class="LazyLoad is-visible roomItem-img"><span ><img src="http://static.dingdandao.com/638eee18a4de381d9e9a4f0cfd34f6cd?imageView2/2/w/608/h/350/q/50"></span></div></div><div class="roomItem-info"><div class="discountInfo-container"><span >微官网排房</span></div><span style="color:#999"><!-- react-text: 200 -->可住<!-- /react-text --><!-- react-text: 201 -->2<!-- /react-text --><!-- react-text: 202 -->人<!-- /react-text --></span></div><div class="roomItem-info" style=" color:#178ce6"><div class="discountInfo-container"><span >¥ 0元/晚</span></div><span class="item-btn" >预订</span></div></div></div>
  </TabContainerItem>
  <TabContainerItem id="enter">
    <div class="enterDateContainer">
        <div>
        <div class=" otherContainer">
        <div class="item-img">
        <img src="http://static.dingdandao.com/2b64e732e0f9760048dd7123577827fd?imageView2/1/w/200/h/200/q/50">
        </div>
        <div class="notRoomItem-info">
        <div class="notRoomItem-name">
        <div class="discountInfo-container">
        <span >大峡谷漂流</span>
        </div>
        <span style="color: rgb(153, 153, 153);font-size:0.375rem;"><!-- react-text: 957 -->适用<!-- /react-text --><!-- react-text: 958 -->1<!-- /react-text --><!-- react-text: 959 -->人<!-- /react-text --></span>
        </div>
        <div class="notRoomItem-price">
        <div class="discountInfo-container">
        <span ><!-- react-text: 963 -->¥&nbsp;<!-- /react-text --><!-- react-text: 964 -->0.01<!-- /react-text --></span>
        </div>
        <span class="item-btn" >预订</span>
        </div>
        </div>
        </div>
        </div>
    </div>
  </TabContainerItem>
  <TabContainerItem id="reset">
    <div class="resetDateContainer">
        <div>
        <div class=" otherContainer">
        <div class="item-img">
        <img src="http://static.dingdandao.com/2b64e732e0f9760048dd7123577827fd?imageView2/1/w/200/h/200/q/50">
        </div>
        <div class="notRoomItem-info">
        <div class="notRoomItem-name">
        <div class="discountInfo-container">
        <span >大峡谷漂流</span>
        </div>

        </div>
        <div class="notRoomItem-price">
        <div class="discountInfo-container">
        <span ><!-- react-text: 963 -->¥&nbsp;<!-- /react-text --><!-- react-text: 964 -->0.01<!-- /react-text --></span>
        </div>
        <span class="item-btn" >预订</span>
        </div>
        </div>
        </div>
        </div>
    </div>
  </TabContainerItem>
</TabContainer>
</div>
</template>
<script>
import { TabContainer, TabContainerItem } from 'mint-ui';

export default {
    data() {
        return {
            active: 'room'
        };
    },
    components: {
        TabContainer,
        TabContainerItem
    },
    methods: {
        changeTab(active) {
            this.active = active;
        }
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
