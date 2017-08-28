<template>
    <transition name="scale-fade">
        <div class="dd-modal-mask" v-show="visible">
            <div class="dd-modal">
                <div class="dd-confirm-message">{{message}}</div>
                <div class="dd-confirm-foot">
                <div class="dd-confirm-button dd-confirm-canel" @click='handleClose'>取消</div> 
                <div class="dd-confirm-button dd-confirm-agree" @click='handleAgree'>确定</div> 
            </div>
            </div>
        </div>
    </transition>
</template>
<style scoped lang='scss'>
/*跟commoncss重复，为了组件独立*/
    .dd-confirm-foot{
        display:flex;
        justify-content:space-between;
        margin-top: 1.0rem;
        .dd-confirm-button{
            text-align: center;
            line-height: 0.84375rem;
            background: #49a5f1;
            color: #fff;
            font-size: 0.4375rem;
            border-radius: 0.25rem;
            border:1px solid #49a5f1;
            width:2.234375rem;
            height:0.84375rem;

        }
        .dd-confirm-canel {
            background-color: #fff;

            color: #49a5f1;
        }
        .dd-confirm-agree{
            background-color: #49a5f1;
            color: #fff;
        }
    }

    
    .dd-modal-mask {
        background: rgba(0,0,0,0.70);
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1100;
    }
    .dd-modal {
        background:#fff;
        border-radius:10px;
        border-top:2px solid #49a5f1;
        width:6.375rem;
        height:3.25rem;
        padding: 0.5625rem 0.75rem;
        box-sizing: border-box;
        position: fixed;
        color: #333;
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
        z-index: 1101;
        .dd-confirm-message{
            color:#333;
        }
    }
</style>
<script >
    export default {
        data() {
            return {
                visible: false,
                title: '',
                message: '',
                duration: 4500,
                onClose: null,
                timer: null,
                closed: false,
                success: null
            };
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
            handleAgree() {
                this.closed = true;
                if (typeof this.success === 'function') {
                    this.success();
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
