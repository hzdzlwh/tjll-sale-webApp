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
            <li class="traveller-section-item active">
                <p class="name">秋丽</p>
                <p class="id">330111111111111111<img src="~assets/images/choose-icon@1x.png" alt="choose" class="choose-icon"></p>
            </li>
        </ul>
    </div>
</template>

<script>
import travellerForm from '@/components/travellerForm';

export default {
    title() {
        return '入住人';
    },
    data() {
        return {
            formData: {
                phone: '',
                idCardNum: '',
                name: '',
                idCardType: ''
            }
        };
    },
    components: {
        travellerForm
    },
    methods: {
    }
};
</script>

<style lang="scss">
</style>
