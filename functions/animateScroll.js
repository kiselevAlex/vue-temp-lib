export function animateScroll(element, duration = 100) {
    let inter = setInterval(() => {
        if (window.pageYOffset > element.offsetTop)
            window.scrollTo(0, window.pageYOffset - 10);
        else
            clearInterval(inter);
    }, duration)
}