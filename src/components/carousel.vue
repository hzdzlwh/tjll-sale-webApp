<template>
    <div>
        <div class="block">
            <el-carousel height="750px" arrow="never">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img class="image" src="../assets/images/special.png">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
export default{
    props: ['propsScreenWidth'],
    data() {
        return {
            // screenWidth: document.body.clientWidth
        };
    },
    /* mounted() {
        const that = this;
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;
            })();
        };
    }, */
    methods: {
        calculateCarouselHeight() {
            // $('.el-carousel__container').css({ 'height': (750 * this.propsScreenWidth / 1920) });
            // $('.el-carousel__container').css({ 'height': $('.image').height() });
            $('.image').css({ 'transform': 'translate(' + (-(1920 - this.propsScreenWidth) / 2) + 'px)' });
        }
    },
    watch: {
        propsScreenWidth(val) {
            this.calculateCarouselHeight();
        }
    }
};
</script>

<style lang="scss">
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 750px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.el-carousel__indicators{
    top: 550px;
}
</style>