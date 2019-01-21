<template>
    <form :id="hash" @submit.prevent="afterSubmit(model)">
        <component
            v-for="data in formData"
            :is="data.input"
            :name="data.name"
            :val.sync="model[data.name]"
            :label="data.label"
            :hint="data.hint"
            :error-icon="data.errorIcon"
            :error-message="(model['errors'] || {})[data.name] || ''"
            :key="data.name"
        ></component>
        <div class="ao-form__item ao-form__item_half">
            <button class="button high green paint bold full">Сохранить</button>
        </div>
    </form>
</template>

<script>
    import PersonalInput from '@shared/components/personal/form/input'

    export default {
        name: "uiForm",
        props: {
            formData: {
                type: Array,
                required: true
            },
            model: {
                type: Object,
                default: () => {}
            },
            submit: {
                type: Function,
                required: true
            }
        },
        components: {
            PersonalInput
        },
        data(){
            return {
                hash: 'ui-form-'+this.$hashCode()
            }
        },
        created() {
            if (typeof this.$animateScroll != 'function')
                console.error('animateScroll not found');
            if (typeof this.$hashCode != 'function')
                console.error('hashCode not found');
        },
        methods: {
            async afterSubmit(data){
                await this.submit(data)
                let el = (Object.keys(this.model.errors || {})).reduce((res, key) => {
                    let temp = document.querySelector(`#${this.hash} [name='${key}']`);
                    return (res == undefined) ? temp
                        : ((temp != undefined && temp.scrollTop <    res.scrollTop) ? temp : res);
                }, undefined)
                if (el != undefined)
                    this.$nextTick(()=>{
                        el.focus();
                    })
            }
        }
    }
</script>

<style scoped>

</style>