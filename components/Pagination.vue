<template>
    <ul class="pagination pagination_new m-t10" v-if="count_page > 1">
        <li v-if="current != 1" class="prev pagination__item pagination__item-link disabled">
            <a @click="$emit('go_page', current - 1)" class="router-link-exact-active router-link-active">Предыдущая</a>
        </li>
        <li :class="'pagination__item pagination__item-link' + ((current == 1) ? ' pagination__item-active' : '')">
            <a @click="$emit('go_page', 1)" class="router-link-exact-active router-link-active">1</a>
        </li>
        <li v-if="show_png_prev" class="b-paginator__item b-paginator__item_type_dote"><span class="b-paginator__link-shadow">• • •</span></li>
        <li v-for="(page) in pages.slice(start, start + d_show_page)" :key="page"
            :class="'pagination__item pagination__item-link' + ((current == page) ? ' pagination__item-active' : '')">
            <a @click="$emit('go_page', page)" class="router-link-exact-active router-link-active">{{page}}</a>
        </li>
        <li v-if="show_png_post" class="b-paginator__item b-paginator__item_type_dote"><span class="b-paginator__link-shadow">• • •</span></li>
        <li :class="'pagination__item pagination__item-link' + ((current == count_page) ? ' pagination__item-active' : '')">
            <a @click="$emit('go_page', count_page)" class="router-link-exact-active router-link-active">{{count_page}}</a>
        </li>
        <li v-if="current != count_page" class="next pagination__item pagination__item-link">
            <a @click="$emit('go_page', current + 1)" class="router-link-active">Следующая</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            total: {
                type: Number,
                required: true
            },
            on_page: {
                type: Number,
                required: true
            },
            current: {
                type: Number,
                default: 1
            },
            show_page: {
                type: Number,
                default: 5
            },
            show_page: {
                type: Number,
                default: 5
            },
            show_mobile_page: {
                type: Number,
                default: 1
            }
        },
        data(){
            return {
                d_show_page: window.innerWidth < 681 ? this.show_mobile_page : this.show_page
            }
        },
        mounted() {
            this._mz = window.addEventListener('resize', (e) => {
                this.d_show_page = window.innerWidth < 681 ? this.show_mobile_page : this.show_page;
            })
        },
        watch: {
            show_mobile_page(val) {
                this.d_show_page = window.innerWidth < 681 ? this.show_mobile_page : this.show_page
            },
            show_page(val){
                this.d_show_page = window.innerWidth < 681 ? this.show_mobile_page : this.show_page
            }
        },
        beforeDestroy() {
            window.removeEventListener('resize', this._mz);
        },
        computed: {
            count_page() {
                return Math.ceil(this.total / this.on_page)
            },
            pages() {
                let ar = [];
                for(let i = 1; i< this.count_page; i++)
                    ar.push(i)
                return ar;
            },
            show_png_prev() {
                return this.current > this.d_show_page;
            },
            show_png_post() {
                return this.count_page - this.d_show_page > this.current;
            },
            start(){
                let start = Math.ceil(this.d_show_page / 2);
                return this.current - start <= 0 ? 1 : this.current - start;
            }
        }
    }
</script>

<style scoped>
    .pagination{
        clear: both;
    }

    .b-paginator__item_type_dote{
        vertical-align: bottom !important;
        padding-bottom: 10px;
    }
</style>