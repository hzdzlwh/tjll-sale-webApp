<template>
    <div class="top-bar">
        <div class="list-container">
            <ul>
                <li>
                    <router-link to="/home">首页</router-link>
                </li>
                <li>
                    <router-link to="/case">案例</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.top-bar{
    width: 100%;
    height: 110px;
    .list-container{
        height: 110px;
        line-height: 110px;
        ul{
            display: flex;
            align-items: center;
            height: 100%;
            li{
                padding: 0 30px;
                font-size: 16px;
                height: 30px;
                line-height: 30px;
                border-right: 2px solid #e2dcdc;
                a{
                   color: #C1B2B1;
                   &.router-link-active{
                    color: #ff5148;
                   }
                }
            }
        }
    }
}
</style>