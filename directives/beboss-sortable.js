let BebossSortable = {};

BebossSortable.install = function (Vue, options) {
    let Sortable = require("./beboss-sortable/Sortable.min")
    Vue.directive('sortable', (el, binding) => {
        el.sortable = new Sortable(el, binding.value || {});
    });
};

export default BebossSortable;