<template>
  <div class="home">
    <carousel :propsScreenWidth="screenWidth"></carousel>
    <div class="process">
      <img class="process-img" src="../assets/images/process.png">
    </div>
    <div class="tab-container">
      <div class="nav-wrapper">
        <ul class="nav nav-tabs">
          <li class="active">
            <a href="#a" data-toggle="tab">趣味素拓</a>
          </li>
          <li>
            <a href="#b" data-toggle="tab">轻奢度假</a>
          </li>
          <li>
            <a href="#c" data-toggle="tab">生存训练</a>
          </li>
          <li>
            <a href="#d" data-toggle="tab">会议出行</a>
          </li>
          <li>
            <a href="#e" data-toggle="tab">长线撒欢</a>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <div class="tab-pane fade in active" id="a">
          <div>
            <img src="../assets/images/quweituosu.png">
            <!-- <div class="pic-wrapper">
            </div>
            <div class="pic-wrapper">
            </div>
            <div class="pic-wrapper">
            </div> -->
          </div>
        </div>
        <div class="tab-pane fade in" id="b">
          <div>
            <img src="../assets/images/qingshedujia.png">
          </div>
        </div>
        <div class="tab-pane fade in" id="c">
          <div>
            <img src="../assets/images/shengcunxunlian.png">
          </div>
        </div>
        <div class="tab-pane fade in" id="d">
          <div>
            <img src="../assets/images/huiyichuxing.png">
          </div>
        </div>
        <div class="tab-pane fade in" id="e">
          <div>
            <div class="pic-wrapper">
            
            </div>
            <div class="pic-wrapper">
              
            </div>
            <div class="pic-wrapper">
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="server">
      <img src="../assets/images/server.png">
    </div>
    <div class="special">
      <img class="special-img" src="../assets/images/special.png">
    </div>
    <contact></contact>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import carousel from './carousel';
import contact from './contact';
import bottomBar from './bottomBar';
import $ from 'jquery';
export default {
    name: 'home',
    data() {
        return {
            screenWidth: document.body.clientWidth
        };
    },
    mounted() {
        const that = this;
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;
            })();
        };
    },
    methods: {
        calculateProcessPosition() {
            $('.process-img').css({ 'transform': 'translate(' + (-(1920 - this.screenWidth) / 2) + 'px)' });
            $('.special-img').css({ 'transform': 'translate(' + (-(1920 - this.screenWidth) / 2) + 'px)' });
        }
    },
    watch: {
        screenWidth(val) {
            this.screenWidth = val;
            this.calculateProcessPosition();
        }
    },
    components: {
        carousel,
        contact,
        bottomBar
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home{
  position: relative;
  .process{
    height: 159px;
    position: absolute;
    top: 590px;
    z-index: 999;
    img{
      /*max-width: 100%;
      height: auto;*/
    }
  }
  .tab-container{
    width: 1000px;
    margin: 50px auto 0;
    .nav-wrapper{
      padding: 0 25px;
      .nav-tabs{
        border: none;
        li{
          height: 88px;
          padding-top: 38px;
          a{
            width: 150px;
            height: 50px;
            margin: 0 20px;
            border: 1px solid #c1b2b1;
            border-radius: 100px;
            font-size: 18px;
            color: #c1b2b1;
            text-align: center;
          }
        }
        li.active{
          background: url('../assets/images/choose.png') no-repeat;
          background-position: 45px 0px;
          a{
            border: 1px solid #ff6759;
            color: #ff6759
          }
        }
      }
    }
    .tab-content{
      margin-top: 52px;
      .tab-pane{
        > div{
          display: flex;
          justify-content: space-between;
            img{
              width: 1000px;
            }
            .pic-wrapper{
            width: 320px;
            height: 400px;
            box-shadow: 0 10px 10px 0 rgba(140, 153, 191, 0.2);
          }
        }
      }
    }
  }
  .server{
    margin-top: 92px;
    img{
      max-width: 100%;
      height: auto;
    }
  }
  .special{
    img{
      /*max-width: 100%;
      height: auto;*/
    }
  }
}
</style>
