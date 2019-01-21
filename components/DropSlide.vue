<template>
    <div class="ld-label-item" :class="(isOpen) ? 'open-active' : ''">
        <div @click.stop="toggle" class="ld-label-checkbox js-lead-item" :class="(anySelect) ? 'bk-checkbox_multiple' : ''">
            <label class="bk-checkbox__label ld-item__checkbox">
                <input type="checkbox" @change="changeGroup" v-model="d_data.groupSelect" class="bk-checkbox__input js-lead-checkbox">
                <div class="bk-checkbox__icon"></div>
            </label>
            <div class="ld-label-item__txt bold">{{d_data.name}}</div>
            <span class="icon js-open-btn">
                <i class="icon-24_black_small_arrow_down opacity02"></i>
            </span>
        </div>
        <div class="ld-label-list dropdown js-open-content" :style="style">
            <div v-for="item in doFilter" :key="item.key" class="ld-label-item">
                <label class="ld-label-checkbox js-lead-item">
                    <label class="bk-checkbox__label ld-item__checkbox">
                        <input type="checkbox" @change="changeElement" v-model="item.value" class="bk-checkbox__input js-lead-checkbox">
                        <div class="bk-checkbox__icon"></div>
                    </label>
                    <div class="ld-label-item__txt">{{item.name}}</div>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropSlide',
    props:{
        data: {
            type: Object,
            default: function () {
                return {}
            }
        },
        filter: String
    },
    data() {
        return {
            isOpen: false,
            d_data: {
                ...this.data, 
                groupSelect: this.data.items.reduce((res, el) => {
                    return res || el.value
                }, false)
            }
        }
    },
    watch: {
        data(){
            this.d_data.items = this.data.items;
        }
    },
    methods: {
        toggle(){
            let e = this.isOpen ? 'Close' : 'Open';
            this.$emit(`before${e}`);
            this.isOpen = !this.isOpen;
            this.$emit(`after${e}`);
        },
        changeGroup(){
            this.d_data.items = this.d_data.items.map((el) => {
                return {...el, value: this.d_data.groupSelect}
            });
            this.$emit('update', {
                id: this.d_data.id,
                items: this.d_data.items
            });
        },
        changeElement() {
            this.d_data.groupSelect = this.d_data.items.reduce((res, el) => {
                return res || el.value;
            }, false)
            this.$emit('update', {
                id: this.d_data.id,
                items: this.d_data.items
            });
        }
    },
    computed: {
        style() {
            return (this.isOpen) ? {display: 'block'} : {};
        },
        countSelect() {
            return this.d_data.items.reduce(function(sum, cur){
                return cur.value ? sum + 1 : sum;
            }, 0)
        },
        anySelect(){
            let c = this.countSelect;
            let all = this.d_data.items.length || false;
            return all == false || c != all;
        },
        doFilter(){
            if (this.filter != undefined && this.filter != ''){
                this.$emit('beforeSearch');
                let reg = new RegExp(this.filter, 'i');
                this.isOpen = true;
                return this.d_data.items.filter((el) => {
                    return reg.test(el.name);
                });
            }
            return this.d_data.items;
        }
    }
}
</script>

<style>
    
</style>
