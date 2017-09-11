<template>
    <div class="case">
        <carousel :propsScreenWidth="screenWidth"></carousel>
        <div class="case-wrapper">
            <div class="classic-case">
                <h4>
                    <img src="../assets/images/choose.png">
                    <p>经典案例</p>
                    <img class="case-pic" src="../assets/images/erweihuo.png">
                    <img class="case-pic" src="../assets/images/cainiaowangluo.png">
                    <img class="case-pic" src="../assets/images/xiangpiaopiao.png">
                    <img class="case-pic" src="../assets/images/fenqiguanjia.png">
                </h4>
            </div>
        </div>
        <contact></contact>
        <bottomBar></bottomBar>
    </div>
</template>

<script>
import carousel from './carousel';
import contact from './contact';
import bottomBar from './bottomBar';

export default {
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

<style lang="scss" scoped>
.case{
    .case-wrapper{
        padding-top: 70px;
        background: #f5f5f5;
        .classic-case{
            width: 1000px;
            margin: 0 auto;
            h4{
                margin: 0;
                text-align: center;
                p{
                    font-size: 36px;
                    color: #999999;
                    margin-top: 20px;
                }
                .case-pic{
                    width: 1000px;
                    margin-top: 69px;
                }
            }
        }
    }
}
</style>