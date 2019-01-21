let BebossTooltip = {};

BebossTooltip.install = function (Vue, options) {
    Vue.directive('beboss-tooltip', {
        bind(el, binding) {
            let tooltip = document.createElement('div');
            tooltip.classList.add('bk-tooltip');
            tooltip.classList.add('rq-res-dsp__tooltip');
            tooltip.style.position = 'fixed';
            tooltip.innerHTML = binding.value;
            el.tooltip = tooltip;
            el._menter = (e) => {
                let coor = el.getBoundingClientRect();
                let left = coor.x;
                let top = coor.y;
                document.body.appendChild(tooltip);
                if (binding.modifiers.left){
                    tooltip.style.left = coor.x - tooltip.offsetWidth - 5 + 'px';
                    tooltip.style.top = coor.y + (el.offsetHeight - tooltip.offsetHeight)/2  + 'px';
                } else if (binding.modifiers.top){
                    tooltip.style.left = coor.x + (el.offsetWidth - tooltip.offsetWidth)/2 + 'px';
                    tooltip.style.top = coor.y - tooltip.offsetHeight - 5  + 'px';
                } else if (binding.modifiers.right) {
                    tooltip.style.left = coor.x + el.offsetWidth + 10 + 'px';
                    tooltip.style.top = coor.y + (el.offsetHeight - tooltip.offsetHeight)/2  + 'px';
                } else if (binding.modifiers.bottom) {
                    tooltip.style.left = coor.x + (el.offsetWidth - tooltip.offsetWidth)/2 + 'px';
                    tooltip.style.top = coor.y + el.offsetHeight + 5  + 'px';
                }
            };

            el._mleave = (e) => {
                document.body.removeChild(tooltip)
            };
            el.addEventListener('mouseover', el._menter);
            el.addEventListener('mouseout', el._mleave);
        },
        unbind(el){
            if (document.body.contains(el.tooltip))
                document.body.removeChild(el.tooltip)
            el.removeEventListener('mouseover', el._menter)
            el.removeEventListener('mouseout',el._mleave)
        }
    });
};

export default BebossTooltip;