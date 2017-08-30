<template>
    <div>
    <div class="gustList">
        <div class="gustItem">
            <div class="gustItem-name">王广允</div>
            <div class="gustItem-phOrca">
                <div><span class="gustItem-label">手机号</span><span>152*****182</span></div>
                <div class="right-travel">></div>
            </div>
            <div class="gustItem-phOrca">
                <div><span class="gustItem-label">身份证</span><span>4403***********111</span></div>
            </div>
        </div>
    </div>
    </div>
</template>
<style lang='scss'>
.right-travel{
    transform: scaleY(2) scaleX(1);
}
.gustList{
    .gustItem{
        margin-top:0.390625rem;
        padding: 0.5rem 0.5rem 0.25rem;
        font-size:0.34375rem;
        color:#bbb;
        line-height:0.34375rem;
        background-color: #fff;
        cursor: pointer;
        div{
            margin-bottom: 0.25rem;
        }
        .gustItem-name{
            font-size:0.4375rem;
            color:#333;
            line-height:0.4375rem;
        }
        .gustItem-phOrca{
            display: flex;
            justify-content: space-between;
            .gustItem-label{
                display: inline-block;
                width: 1.40625rem;
            }

        }
    }
}
</style>
<script>

export default {
    title() {
        return '常用旅客';
    },
    data() {
        return {

        };
    },
    computed: {
    },
    methods: {
    }
};
</script>
