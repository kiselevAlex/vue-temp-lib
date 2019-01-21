let BebossVisibility = {};

BebossVisibility.install = function (Vue, options) {
    Vue.directive('beboss-visibility', {
        bind(el, binding) {
            el._onscroll = (e) => {
                let coor = el.getBoundingClientRect();
                let left = coor.x;
                let top = coor.y;

                if (left < window.innerWidth && left > 0
                    && top < window.innerHeight && top > 0)
                    binding.value();

            }

            window.addEventListener('scroll', el._onscroll);
        },
        unbind(el){
            window.removeEventListener('scroll', el._onscroll)
        }
    });
};

export default BebossVisibility;