<template>
    <div class="login">
    <nav class="nav">

    <div class="nav-padding">

    </div>
    </nav>
    <div class="telephone loginInput">
    <label for="telephone">手机号</label>
    <input name="telephone" type="Number" maxlength="11" placeholder="请输入手机号码" v-model='phone'></div>
    <div class="captcha-container loginInput" v-if='phone && phone.length === 11'>
    <label for="captcha-container">图形验证码</label>
    <input type="text" ref='code' class="captcha" placeholder="请输入4位数验证码" name="captcha-container" @input='getImgCode'>
    <img class="img-code" :src="getCode()" alt="验证码" @click='imgClick'></div>
    <div class="code loginInput">
    <label for="code ">短信验证码</label>
    <input name="code" v-model='subCode' placeholder="请输入短信验证码" maxlength="6"><div class="getCode" :class='{disabled: codeText !== "发送验证码"}' @click='getSubCode'>{{codeText}}</div></div>
    <div class="loginButtom">
    <div class="button" :class='{disabled: !vaild, agree: vaild}' disabled="" @click='subForm'>确定</div></div>
    <!-- <div class="button agree" disabled="">登录</div></div> -->

    </div>
</template>
<style>

</style>
<script>
import { devRoute } from '@/util/config';
import http from '@/util/http';
import { mapActions } from 'vuex';
import types from '@/store/types.js';
import { getAuthorization } from '@/store';
// import confirmModal from '@/components/common/confirm';

export default {
    title() {
        return '登录';
    },
    beforeRouteEnter(to, from, next) {
        const isLogin = getAuthorization();
        if (isLogin) {
            next({ name: 'overview', params: to.params });
        }
        next();
    },
    data() {
        return {
            devRoute,
            phone: '',
            codeText: '发送验证码',
            time: 60,
            code: '',
            subCode: '',
            intervalId: undefined,
            t: 0
        };
    },
    computed: {
        vaild() {
            return this.phone.length === 11 && this.code.length === 4 && this.subCode.length;
        }
    },
    methods: {
        ...mapActions({
            login: types.LOGIN
        }
        ),
        getImgCode(e) {
            this.code = e.target.value;
        },
        imgClick() {
            this.t = this.t + 1;
        },
        subForm() {
            if (this.phone.length !== 11 || !this.subCode) {
                return;
            }
            this.login({ params: {
                code: this.subCode,
                phone: this.phone
            } }).then(() => {
                this.$router.push(this.$route.query.redirect || { name: 'overview' });
            });
        },
        getCode() {
            if (this.phone.length !== 11) {
                return false;
            }
            if (process.env.NODE_ENV === 'development') {
                return `${devRoute}/ws/user/getCaptcha?phone=${this.phone}&t=${this.t}`;
            }
            return `/ws/user/getCaptcha?phone=${this.phone}&t=${this.t}`;
        },
        getSubCode() {
            if (this.phone.length !== 11 || !this.code.length || this.codeText !== '发送验证码') {
                return false;
            }
            http.get('/user/sendVerify', { captcha: this.code, phone: this.phone }).then(action => {
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
