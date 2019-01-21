let BebossVisible = {};

BebossVisible.install = function (Vue, options) {
    Vue.directive('visible', {
        bind(el, binding) {
            el.style.visibility = binding.value ? "visible" : "hidden";
        },
        update(el, binding) {
            el.style.visibility = binding.value ? "visible" : "hidden";
        }
    });
};

export default BebossVisible;