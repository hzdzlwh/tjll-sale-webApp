<template>
    <div class="login">
    <nav class="nav">

    <div class="nav-padding">

    </div>
    </nav>
    <div class="telephone loginInput">
    <label for="telephone">手机号</label>
    <input name="telephone" type="Number" maxlength="11" placeholder="请输入手机号码" v-model='phone'></div>
    <div class="captcha-container loginInput" style="position: relative;">
    <label for="captcha-container">图形验证码</label>
    <input type="text" v-model='code' class="captcha" placeholder="请输入4位数验证码" name="captcha-container">
    <img class="img-code" src="getCode()" alt="验证码"></div>
    <div class="code loginInput">
    <label for="code ">短信验证码</label>
    <input name="code" v-model='subCode' placeholder="请输入短信验证码" maxlength="6"><div class="getCode" @click='getSubCode'>{{codeText}}</div></div>
    <div class="loginButtom">
    <div class="button disabled" disabled="" @click='subForm'>确定</div></div>
    <!-- <div class="button agree" disabled="">登录</div></div> -->
        
    </div>
</template>
<style>

</style>
<script>
import { devRoute } from '@/util/config';
import http from '@/util/http';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            devRoute,
            phone: '',
            codeText: '发送验证码',
            time: 60,
            code: '',
            subCode: '',
            intervalId: undefined
        };
    },
    methods: {
        ...mapActions([
            'login'
        ]),
        subForm() {
            if (this.phone.length !== 11 || !this.subCode) {
                return;
            }
            this.login({ params: {
                code: this.code,
                phone: this.phone
            } });
        },
        getCode() {
            if (this.phone.length !== 11) {
                return false;
            }
            if (process.env.NODE_ENV === 'development') {
                return `${devRoute}/ws/user/getCaptcha?phone=${this.phone}&t=${new Date().getTime()}`;
            }
            return `/ws/user/getCaptcha?phone=${this.phone}&t=${new Date().getTime()}`;
        },
        getSubCode() {
            if (this.phone.length !== 11 || this.code.length !== 4) {
                return false;
            }
            http.get('/user/sendVerify', { captcha: this.code, origin: 1, phone: this.phone }).then(action => {
                if (action.err === '图片验证码错误') {
                    return false;
                }
                this.time = 60;
            // 验证码倒计时
                this.intervalId = window.setInterval(() => {
                    if (this.time === 0) {
                        this.codeText = '发送验证码';
                        this.time = 60;
                    // this.codeText = `${this.time}s可重发`
                        clearInterval(this.intervalId);
                    } else {
                        this.time = this.time - 1;
                        this.codeText = `${this.time}s可重发`;
                    }
                    return null;
                }, 1000);
            });
        }
    }
};
</script>
