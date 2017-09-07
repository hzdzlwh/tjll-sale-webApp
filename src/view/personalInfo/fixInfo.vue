<template>
    <div class="fixInfo">
        <div class="fixInfo-form">
            <template v-if="key === 'name'">
                <dd-form-input
                label="姓名"
                v-model="form.name"
                :maxlength="20"
                placeholder="请输入姓名"
                ></dd-form-input>
                <span class="fixInfo-form-tips">请确保与证件姓名一致</span>
            </template>
            <template v-if="key === 'idCard'">
                <dd-form-select
                label="证件类型"
                v-model="form.idCardType"
                :list="idCardList"
                ></dd-form-select>
                <dd-form-input
                label="证件号"
                v-model="form.idCardNum"
                :maxlength="18"
                ></dd-form-input>
            </template>
            <template v-if="key === 'more'">
                <dd-form-select
                label="性别"
                v-model="form.gender"
                :list="genderList"
                ></dd-form-select>

                <dd-form-input
                label="生日"
                :value="birthday"
                placeholder="2017-01-01"
                icon
                readonly
                @click="openDatePicker"
                ></dd-form-input>

                <dd-form-input
                label="邮箱"
                v-model="form.email"
                placeholder="请输入邮箱地址"
                ></dd-form-input>

                <dd-form-input
                label="地区"
                icon
                v-model="form.area"
                readonly
                placeholder="请选择地区"
                ></dd-form-input>

                <mt-datetime-picker
                v-model="birthday"
                ref="datePicker"
                type="date"
                @confirm="dateConfirm"></mt-datetime-picker>
            </template>
        </div>
        <dd-button @click="updateUser" class="fixInfo-button" theme="info"></dd-button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { idCardList, genderList } from '@/util/data';
import { dateFormat } from '@/util/filters';

export default {
    computed: {
        ...mapState([
            'user'
        ]),
        key() {
            return this.$route.params.key;
        },
        idCardList() {
            return idCardList;
        },
        genderList() {
            return genderList;
        },
        birthday: {
            get() {
                return this.form.birthday || '';
            },
            set(value) {
                this.form.birthday = dateFormat(value, 'YYYY-MM-DD');
            }
        }
    },
    data() {
        return {
            form: {
                idCardType: '',
                birthday: '',
                gender: '',
                phone: '',
                email: ''
            }
        };
    },
    async created() {
        this.getUser().then(() => {
            this.form = Object.assign({}, this.user);
        });
    },
    methods: {
        ...mapActions([
            'getUser',
            'setUser'
        ]),
        updateUser() {
            this.setUser(this.form).then(() => {
                this.$router.push({ name: 'personalInfo' });
            });
        },
        openDatePicker() {
            this.$refs.datePicker.open();
        },
        dateConfirm(value) {
            this.form.birthday = value;
        }
    }
};
</script>

<style lang="scss" scoped>
    .fixInfo {
        padding: 0.41rem 0 1.56rem;
        &-button {
            margin-top: 1rem;
        }
        &-form {
            position: relative;
            border-top: 1px solid #e6e6e6;
            border-bottom: 1px solid #e6e6e6;
            &-tips {
                position: absolute;
                left: 0;
                bottom: -32px;
                padding: 0 0.5rem;
                font-size: 0.3125rem;
                color: #999;
            }
        }
    }
</style>
