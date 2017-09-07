<template>
  <div class="home">
    <carousel></carousel>
    <div class="process">
      <img src="../assets/images/process.png">
    </div>
    <div class="tab-container">
      <div class="nav-wrapper">
        <ul class="nav nav-tabs">
          <li class="active">
            <a href="#a" data-toggle="tab">a</a>
          </li>
          <li>
            <a href="#b" data-toggle="tab">b</a>
          </li>
          <li>
            <a href="#c" data-toggle="tab">c</a>
          </li>
          <li>
            <a href="#d" data-toggle="tab">d</a>
          </li>
          <li>
            <a href="#e" data-toggle="tab">e</a>
          </li>
          <li>
            <a href="#f" data-toggle="tab">f</a>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <div class="tab-pane fade in active" id="a">
          <div>
            <div class="pic-wrapper">
            
            </div>
            <div class="pic-wrapper">
              
            </div>
            <div class="pic-wrapper">
              
            </div>
          </div>
        </div>
        <div class="tab-pane fade in" id="b">
          <div>
            <div class="pic-wrapper">
            
            </div>
            <div class="pic-wrapper">
              
            </div>
            <div class="pic-wrapper">
              
            </div>
          </div>
        </div>
        <div class="tab-pane fade in" id="c">
          <div>
            <div class="pic-wrapper">
            
            </div>
            <div class="pic-wrapper">
              
            </div>
            <div class="pic-wrapper">
              
            </div>
          </div>
        </div>
        <div class="tab-pane fade in" id="d">
          <div>
            <div class="pic-wrapper">
            
            </div>
            <div class="pic-wrapper">
              
            </div>
            <div class="pic-wrapper">
              
            </div>
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
        <div class="tab-pane fade in" id="f">
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
      <img src="../assets/images/special.png">
    </div>
    <contact></contact>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import carousel from './carousel';
import contact from './contact';
import bottomBar from './bottomBar';
export default {
    name: 'home',
    data() {
        return {
        };
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
      max-width: 100%;
      height: auto;
    }
  }
  .tab-container{
    width: 996px;
    margin: 50px auto 0;
    .nav-wrapper{
      padding: 0 18px;
      .nav-tabs{
        border: none;
        li{
          height: 88px;
          padding-top: 38px;
          a{
            width: 120px;
            height: 50px;
            margin: 0 20px;
            border: 1px solid #ff6759;
            border-radius: 100px;
            font-size: 18px;
            color: #ff6759;
            text-align: center;
          }
        }
        li.active{
          background: url('../assets/images/choose.png') no-repeat;
          background-position: 30px 0px;
          a{
            border: 1px solid #ff6759;
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
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
