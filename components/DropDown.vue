<template>
    <div v-click-outside="close" :class="containerClass + ((over) ? ' drop-down-side_over' : '')">
        <div class="drop-down-side">
            <div @click="show = !show" class="drop-down-side__head">
                <slot :show="show" name="header"></slot>
            </div>
            <div class="drop-down-side-indent drop-down-side-indent_search"></div>
            <div v-show="show" @click.stop class="drop-down-side__body">
                <slot name="body"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            containerClass: String,
            over: {
                type: Boolean,
                default: false
            }
        },
        name: "DropDown",
        data() {
            return {
                show: false
            }
        },
        methods: {
            close(){
                this.show = false;
            }
        },
        watch: {
            show(val) {
                if (val)
                    this.$emit('show');
                else
                    this.$emit('close');
            }
        }
    }
</script>

<style scoped>
    .drop-down-side__body{
        display: block;
    }
</style>