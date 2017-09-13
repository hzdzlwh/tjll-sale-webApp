<template>
    <div class="addTraveller">
        <div class="traveller-form">
            <dd-form-input
            v-model="form.name"
            :maxlength="15"
            placeholder="请确保与证件姓名一致"
            label="姓名"></dd-form-input>
            <dd-form-input
            v-model="form.phone"
            :maxlength="11"
            placeholder="请输入正确的手机号"
            label="手机号"></dd-form-input>
            <dd-form-select
            v-model="form.idCardType"
            :maxlength="15"
            :list="idCardList"
            label="姓名"></dd-form-select>
            <dd-form-input
            v-model="form.idCardNum"
            :maxlength="18"
            label="证件号"></dd-form-input>
        </div>
        <div class="button agree"  @click='subForm'>确定</div>
        <!-- <div class="buttonList">
            <div class="button danger">
                删除
            </div>
            <div class="button agree">
                确定
            </div>
        </div> -->
        </div>
    </div>
</template>

<script>
import { idCardList } from '@/util/data';
import { mapActions } from 'vuex';
import { guestForm } from '@/util/form-rule';
// import { Toast } from 'mint-ui';
import Notification from '@/components/common/notify/notify.js';

export default {
    title() {
        return '新增常用旅客';
    },
    data() {
        return {
            form: {
                idCardNum: '',
                idCardType: 0,
                name: '',
                phone: ''
            }
        };
    },
    methods: {
        ...mapActions([
            'setConsumerUser'
        ]),
        subForm() {
            const res = guestForm(this.form);
            if (typeof res === 'string') {
                Notification({
                    message: res,
                    type: 'warning',
                    duration: 2000
                });
            } else {
                this.setConsumerUser(this.form).then(() => {
                    this.jumpRoute('guestList');
                });
            }
        },
        jumpRoute(name) {
            this.$router.push({ name, query: { render: 'overview_center' } });
        }
    },
    computed: {
        idCardList() {
            return idCardList;
        }
    }
};
</script>

<style lang="scss">

</style>
