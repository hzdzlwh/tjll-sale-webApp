<template>
    <div class="contact">
        <div class="content">
            <div class="text">
                <div class="item1">  
                    <img src="../assets/images/choose.png">
                    <div class="contact-us">联系我们</div>
                </div>
                <div class="item2">
                    <p>现在联系易团建</p>
                    <p>即可享受专属定制服务</p>
                </div>
                <div class="item3">
                    <div class="online-customization">在线定制</div>
                    <div class="phone">或<img src="../assets/images/phone.png">400-600-3343</div>
                </div>
                
            </div>
            <div class="picture">
                <img src="../assets/images/contact.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.contact{
    .content{
        width: 1000px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        .text{
            width: 244px;
        }
        .picture{
            width: 660px;
        }
        .text{
            padding-top: 84px;
            .item1{
                .contact-us{
                    margin-top: 6px;
                    font-size: 36px;
                    color: #999999;
                }
            }
            .item2{
                margin-top: 77px;
                p{
                    font-size: 24px;
                    color: #4d4d4d;
                }
            }
            .item3{
                margin-top: 73px;
                .online-customization{
                    width: 240px;
                    height: 50px;
                    background: #ff6759;
                    color: #fff;
                    font-size: 20px;
                    line-height: 50px;
                    text-align: center;
                }
                .phone{
                    margin-top: 30px;
                    font-size: 20px;
                    color: #95a9b1;
                }
            }
        }
    }
}
</style>