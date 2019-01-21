let ClickOutside = {};

ClickOutside.install = function (Vue, options) {
    Vue.directive('click-outside', {
        bind(el, binding) {
            el.event = (e) => {
                let flyoutElement = el,
                    targetElement = e.target;
                do {
                    if (targetElement == flyoutElement) {
                        return;
                    }
                    targetElement = targetElement.parentNode;
                } while (targetElement);
                binding.value();
            };
            document.body.addEventListener('click', el.event);
        },
        unbind(el){
            document.body.removeEventListener('click',el.event)
        }
    });
};

export default ClickOutside;