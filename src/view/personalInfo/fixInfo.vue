<template>
    <div class="fixInfo">
        <personal-form v-model="formDate"></personal-form>
        <common-button @click="updateUser" class="fixInfo-button" theme="info"></common-button>
    </div>
</template>

<script>
import personalForm from '@/components/personalInfoForm';
import { mapState, mapActions } from 'vuex';

export default {
    // asyncData({ store }) {
    //     return store.dispatch('getUser');
    // },
    computed: {
        ...mapState([
            'user'
        ])
    },
    data() {
        return {
            formDate: {}
        };
    },
    components: {
        personalForm
    },
    created() {
        this.getUser().then(() => {
            this.formData = Object.assign({}, this.user);
        });
    },
    methods: {
        ...mapActions([
            'getUser',
            'setUser'
        ]),
        updateUser() {
            console.log('ok');
            this.setUser(this.formDate).then(() => {
                this.$router.push({ name: 'personalInfo' });
            });
        }
    }
};
</script>

<style lang="scss" scoped>
    .fixInfo {
        padding: 0.41rem 0 1.56rem;
        &-button {
            margin-top: 0.75rem;
        }
    }
</style>

