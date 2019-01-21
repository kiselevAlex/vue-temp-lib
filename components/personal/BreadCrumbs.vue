<template>
    <div class="pa__breadcrumbs">
        <ul class="bk-breadcrumbs bk-breadcrumbs_2 color-grey">
            <li class="bk-breadcrumbs__item" v-for="l in list"><router-link :to="l.url" class="bk-breadcrumbs__link">{{l.name}}</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BreadCrumbs",
        props: {
            list: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped>

</style>