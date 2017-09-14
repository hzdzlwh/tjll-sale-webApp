<template>
    <div class="addTraveller">
        <traveller-form :readonly="readonly" v-model="formData"></traveller-form>
        <div class="traveller-control">
            <div @click="keepGuest = !keepGuest" class="traveller-control-checkbox" :class="{ active: keepGuest }">
                <div class="icon"></div>
                保存为常客
            </div>
        </div>
        <p class="traveller-title">选择常客</p>
        <ul class="traveller-section">
            <li @click="selectGuest(item)" :key="item.id" class="traveller-section-item" v-for="item in consumerList">
                <p class="name">{{ item.name }}</p>
                <p class="id">{{ item.idCardNum }}<img src="~assets/images/choose-icon@1x.png" alt="choose" class="choose-icon" v-if="item.id === id"></p>
            </li>
        </ul>
        <div class="addTraveller-confirm">
            <div @click="addGuest" class="addTraveller-confirm-button">确定</div>
        </div>
    </div>
</template>

<script>
import travellerForm from '@/components/travellerForm';
import { mapState, mapActions } from 'vuex';
import { guestForm } from '@/util/form-rule';
import Notify from '@/components/common/notify/notify.js';

export default {
    title: '入住人',
    asyncData({ store }) {
        return store.dispatch('getConsumerUser');
    },
    data() {
        return {
            formData: {
                phone: '',
                idCardNum: '',
                name: '',
                idCardType: ''
            },
            id: null,
            keepGuest: false
        };
    },
    components: {
        travellerForm
    },
    methods: {
        ...mapActions([
            'addCheckInPeople',
            'setConsumerUser'
        ]),
        selectGuest({ id }) {
            if (this.id === id) {
                this.id = null;
            } else {
                this.id = id;
            }
        },
        addGuest() {
            if (this.id) {
                this.addCheckInPeople({ id: this.id, roomOrderId: this.$route.params.roomOrderId }).then(() => {
                    this.$router.push({ name: 'roomDetails_info' });
                });
            } else {
                const res = guestForm(this.formData);
                if (typeof res === 'string') {
                    Notify({
                        message: res,
                        type: 'warning',
                        duration: 2000
                    });
                } else {
                    this.formData.roomOrderId = this.$route.params.roomOrderId;
                    if (this.keepGuest) {
                        this.setConsumerUser(this.formData);
                    }
                    this.addCheckInPeople(this.formData).then(() => {
                        this.$router.push({ name: 'roomDetails_info' });
                    });
                }
            }
        }
    },
    computed: {
        ...mapState([
            'consumerList'
        ]),
        readonly() {
            /* eslint no-unneeded-ternary: 0 */
            return this.id === null ? false : true;
        }
    }
};
</script>

<style lang="scss">
</style>
