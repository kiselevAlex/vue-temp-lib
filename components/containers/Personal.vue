<template>
    <div class="container">
        <div class="pa__head">
            <bread-crumbs :list="bg" />
            <div class="pa__title">
                <h1 class="bk-title">{{title}}</h1>
            </div>
        </div>
        <div style="position: relative;" class="pa__body">
            <div class="pa-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import BreadCrumbs from '@shared/components/personal/BreadCrumbs'

    export default {
        name: "Personal",
        props: ['title'],
        components:{
            BreadCrumbs
        },
        computed: {
            bg() {
                return this.$route.meta.breadcrumb || [];
            }
        }
    }
</script>

<style scoped>

</style>
