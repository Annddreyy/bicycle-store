let bicycle = document.querySelector('.bicycle-description');

let activeDot;
let activeDotDescription;
bicycle.addEventListener('pointerover', function(event) {
    let targetElem = event.target.closest('.bicycle-elem');
    let targetDot = event.target.closest('.dot');

    if (!targetElem && !targetDot) {
        if (activeDot) {
            toogleBicycleItem(activeDot, activeDotDescription, false);
        }
        return;
    };

    let elem, dot;
    if (targetElem) {
        elem = targetElem;
        dot = document.querySelector(`#${targetElem.dataset.bicycleElem}`);
    } else {
        dot = targetDot;
        elem = document.querySelector(`[data-bicycle-elem="${targetDot.id}"]`);
    }

    toogleBicycleItem(dot, elem, true);

    if (activeDot && activeDot.id != dot.id) {
        toogleBicycleItem(activeDot, activeDotDescription, false)
    }

    activeDot = dot;
    activeDotDescription = elem;
});


function toogleBicycleItem(dot, elem, isActive) {
    if (isActive) {
        elem.setAttribute('data-active', true);
        dot.setAttribute('data-active', true);
    } else {
        elem.removeAttribute('data-active');
        dot.removeAttribute('data-active');
    }
}

