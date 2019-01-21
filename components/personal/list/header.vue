<template>
    <div class="ld-nav">
        <div class="bk-head-block bk-head-block_side-padding" :class="headerClass">
            <div class="bk-head-block__left bk-head-block__left_within-icon">
                <slot name="left" />
            </div>
            <div class="bk-head-block__right">
                <slot name="right" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            headerClass: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>

</style>