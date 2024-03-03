let valueDisplays = document.querySelectorAll('.num')
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endVAlue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endVAlue)
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endVAlue) {
            clearInterval(counter)
        }
    }, duration);
});