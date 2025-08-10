function alertWindow() {
    delayAlert();
}

const delayAlert = throttle(alertPopup, 5000);

function alertPopup() {
    alert('Alert message with 5 seconds delay');
}

function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if ((now - lastCall) >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    }
}