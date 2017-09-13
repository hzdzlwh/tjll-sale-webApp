<template>
    <div class="addTraveller">
        <traveller-form v-model="formData"></traveller-form>
        <div class="traveller-control">
            <div class="traveller-control-checkbox active">
                <div class="icon"></div>
                保存为常客
            </div>
        </div>
        <p class="traveller-title">选择常客</p>
        <ul class="traveller-section">
            <li @click="selectGuest(item, index)" class="traveller-section-item" v-for="(item, index) in consumerList">
                <p class="name">{{ item.name }}</p>
                <p class="id">{{ item.idCardNum }}<img src="~assets/images/choose-icon@1x.png" alt="choose" class="choose-icon" v-if="index === i"></p>
            </li>
        </ul>
        <div class="addTraveller-confirm">
            <router-link class="addTraveller-confirm-button" :to="{ name: '', params: {} }">确定</router-link>
        </div>
    </div>
</template>

<script>
import travellerForm from '@/components/travellerForm';
import { mapState } from 'vuex';

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
            i: null
        };
    },
    components: {
        travellerForm
    },
    methods: {
        selectGuest(item, index) {
            if (this.i === index) {
                Object.keys(this.formData).forEach((key) => {
                    this.fromData[key] = '';
                });
            } else {
                this.formData = item;
                this.i = index;
            }
        }
    },
    computed: {
        ...mapState([
            'consumerList'
        ])
    }
};
</script>

<style lang="scss">
</style>
