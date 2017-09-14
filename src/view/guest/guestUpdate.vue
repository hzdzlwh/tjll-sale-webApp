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
            :maxlength="20"
            placeholder="请输入正确的手机号"
            label="手机号"></dd-form-input>
            <dd-form-select
            v-model="form.idCardType"
            :maxlength="20"
            :list="idCardList"
            label="姓名"></dd-form-select>
            <dd-form-input
            v-model="form.idCardNum"
            :maxlength="20"
            label="证件号"></dd-form-input>
        </div>
        <!-- <div class="button agree"  >确定</div> -->
        <div class="buttonList">
            <div class="button danger" @click="deleteForm">
                删除
            </div>
            <div class="button agree" @click='subForm'>
                修改
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { idCardList } from '@/util/data';
import { mapState, mapActions } from 'vuex';
import { guestForm } from '@/util/form-rule';
import Notification from '@/components/common/notify/notify.js';

export default {
    title() {
        return '修改常用旅客';
    },
    asyncData({ store }) {
        return store.dispatch('getConsumerUser');
    },
    data() {
        return {
            form: {}
        };
    },
    methods: {
        ...mapActions([
            'setConsumerUser',
            'getConsumerUser',
            'deleteConsumerUser'
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
        deleteForm() {
            let arr = [];
            arr.push(this.form.id);
            arr = JSON.stringify(arr);
            this.deleteConsumerUser(arr).then(() => {
                this.jumpRoute('guestList');
            });
        },
        jumpRoute(name) {
            this.$router.push({ name, query: { render: 'overview_center' } });
        }
    },
    created() {
        this.getConsumerUser().then(res => {
            res.data.list.forEach(item => {
                const id = parseInt(this.$route.params.guestId);
                if (id === item.id) {
                    this.form = item;
                }
            });
        });
    },
    computed: {
        idCardList() {
            return idCardList;
        },
        ...mapState([
            'consumerList'
        ])
    }
};
</script>

<style lang="scss">

</style>
