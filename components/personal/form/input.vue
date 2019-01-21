<template>
    <label class="ao-form__item ao-form__item_half">
        <div class="ao-form-item__caption">{{label}}</div>
        <div class="ao-form-item__elem">
            <input class="bk-input-text bk-input-text_full bk-input-text_h-50" v-model="d_val" :class="errorMessage != '' ? 'bk-input-text_error' : ''" />
        </div>
        <div class="ao-form-item__note" v-if="hint != ''">{{hint}}</div>
        <div class="ao-form-item__err" v-if="errorMessage != ''">
            <div class="bk-form-err">
                <div class="bk-form-err__icon"><i :class="errorIcon"></i></div>
                <div class="bk-form-err__txt">{{errorMessage.join(', ')}}</div>
            </div>
        </div>
    </label>
</template>

<script>
    export default {
        name: "p-input",
        data(){
            return {
                d_val: this.val
            }
        },
        props: {
            label: {
                type: [String, Array],
                default: []
            },
            hint: {
                type: String,
                default: ''
            },
            errorIcon: {
                type: String,
                default: 'icon-20_orange_attention'
            },
            errorMessage: {
                type: [String, Array],
                default: ''
            },
            val: {
                type: [String, Number]
            }
        },
        watch: {
            val(v){
                this.d_val = this.val;
            },
            d_val(v){
                this.$emit('update:val', this.d_val);
            }
        }
    }
</script>

<style scoped>

</style>