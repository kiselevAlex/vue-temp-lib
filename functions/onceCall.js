export function onceCall(func) {
    let was = false;

    return function(...args) {
        if (!was) {
            was = true;
            return func.apply(this, args);
        }
    }
}