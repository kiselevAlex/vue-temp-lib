<template>
    <div>
        <div class="mfp-bg mfp-ready"></div>
        <div class="mfp-wrap mfp-auto-cursor mfp-ready" tabindex="-1" style="overflow: hidden auto;">
            <div class="mfp-container mfp-s-ready mfp-inline-holder">
                <div class="mfp-content">
                    <slot>Контент модельного окна</slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mfp",
        mounted() {
            document.body.insertBefore(this.$el, document.body.firstChild);
        },
    }
</script>

<style scoped>
    .mfp-bg {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1042;
        overflow: hidden;
        position: fixed;
        background: #0b0b0b;
        opacity: 0.8;
    }

    .mfp-wrap {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1043;
        position: fixed;
        outline: none !important;
        -webkit-backface-visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mfp-content{
        position: relative;
    }
</style>