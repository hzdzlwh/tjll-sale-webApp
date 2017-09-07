<template>
    <transition name="scale-fade">
        <div class="dd-notification-mask" v-show="visible">
            <div class="dd-notification">
                <div class="dd-notification-main">
                    <span :class="[ typeClass ]" v-if="type"></span>
                    <div class="dd-notification-group">
                        <div>
                            <span v-text="title"></span>
                            <p v-if="message" v-text="message"></p>
                        </div>
                    </div>
                </div>
                <div class="dd-notification-btn" @click="handleClose" v-text="btnText" v-if="btnShow"></div>
            </div>
        </div>
    </transition>
</template>
<style scoped>
    .dd-notification-mask {
        background: rgba(0,0,0,0.70);
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1100;
    }
    .dd-notification {
        background:rgba(0,0,0,0.70);
        border-radius:10px;
        width:5.625rem;
        height:2.875rem;
        padding: 0.5rem 0.1875rem ;
        box-sizing: border-box;
        position: fixed;
        color: #fff;
        text-align: center;
        font-size: 0.4375rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 6px rgba(0,0,0,.04),0 2px 4px rgba(0,0,0,.12);
        -webkit-transition: opacity .3s,right .3s,top .4s,-webkit-transform .3s;
        transition: opacity .3s,right .3s,top .4s,-webkit-transform .3s;
        transition: opacity .3s,transform .3s,right .3s,top .4s;
        transition: opacity .3s,transform .3s,right .3s,top .4s,-webkit-transform .3s;
        overflow: hidden;
        z-index: 1101
    }
    .dd-notification-main {
       /* display: flex;
        justify-content: center;*/
        text-align: center;
    }
    .dd-notification-group {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 8px;
    }
    .dd-notification-group span {
        line-height: 22px;
        color: #666666;
        font-weight: bold;
    }
    .dd-notification-group p {
        text-align: center;
    }
    .dd-icon-warning {
        background: url(../../../assets/images/notify/warn.png);
        background-repeat: no-repeat;
    }
    .dd-icon-success {
        background: url(../../../assets/images/notify/warn.png);
    }
    span[class^="dd-icon"] {
            width: 50px;
    height: 1.375rem;
    display: inline-block;
    background-position: center top;
    background-repeat: no-repeat;
    }
    .dd-notification-btn {
        width: 25%;
        height: 30px;
        line-height: 30px;
        background: #178ce6;
        border-radius: 2px;
        color: #ffffff;
        text-align: center;
        margin: 12px auto 0;
    }
    .dd-notification-btn:hover {
        opacity: 0.8;
    }
</style>
<script >
    const typeMap = {
        success: 'success',
        warning: 'warning'
    };
    export default {
        data() {
            return {
                visible: false,
                title: '',
                message: '',
                duration: 2500,
                type: '',
                onClose: null,
                timer: null,
                closed: false,
                btnText: '确定',
                btnShow: false
            };
        },
        computed: {
            typeClass() {
                return this.type && typeMap[this.type] ? `dd-icon-${typeMap[this.type]}` : '';
            }
        },
        watch: {
            closed(newVal) {
                if (newVal) {
                    this.visible = false;
                    this.$el.addEventListener('transitionend', this.destroyElement);
                }
            },
            visible(newVal) {
                if (newVal) {
                    document.body.addEventListener('touchmove', this.preventDefault);
                } else {
                    document.body.removeEventListener('touchmove', this.preventDefault);
                }
            }
        },
        methods: {
            preventDefault(ev) {
                ev.preventDefault();
            },

            destroyElement() {
                this.$el.removeEventListener('transitionend', this.destroyElement);
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            },

            handleClose() {
                this.closed = true;
                if (typeof this.onClose === 'function') {
                    this.onClose();
                }
            },
            clearTimer() {
                clearTimeout(this.timer);
            },

            startTimer() {
                if (this.duration > 0) {
                    this.timer = setTimeout(() => {
                        if (!this.closed) {
                            this.handleClose();
                        }
                    }, this.duration);
                }
            }
        },

        mounted() {
            if (this.duration > 0 && !this.btnShow) {
                this.timer = setTimeout(() => {
                    if (!this.closed) {
                        this.handleClose();
                    }
                }, this.duration);
            }
        }

    };
</script>
