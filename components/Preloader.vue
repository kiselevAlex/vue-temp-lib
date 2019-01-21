<template>
    <div class="bk-preload">
        <div class="bk-preload-bg js-bk-preload-bg-beboss-full" :class="position"></div>
        <div class="bk-preload-block js-bk-preload-block-beboss-full" :class="position">
            <div class="bk-preload-wrap">
                <div class="bk-preload__body">
                    <div class="bk-preload__content bk-preload__content_front">
                        <div class="bk-preload__item border bk-preload__item_orange"></div>
                        <div class="bk-preload__item border bk-preload__item_green"></div>
                        <div class="bk-preload__item border bk-preload__item_yellow"></div>
                        <div class="bk-preload__item border bk-preload__item_blue"></div>
                    </div>
                    <div class="bk-preload__content bk-preload__content_right">
                        <div class="bk-preload__item border"></div>
                        <div class="bk-preload__item border"></div>
                        <div class="bk-preload__item border"></div>
                        <div class="bk-preload__item border"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Preloader",
        props: {
            position: {
                type: String,
                default: 'fixed'
            },
        },
    }
</script>

<style scoped>

    .bk-preload{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }

    .bk-preload-bg,
    .bk-preload-block{
        z-index: 100;
    }

    .absolute{
        position: absolute !important;
    }

    .relative{
        position: relative !important;
    }

    .fixed{
        position: fixed !important;
    }
</style>