const dotes = document.querySelectorAll('.dot');
const img = document.getElementById('bicycle-img');

const simpleValues = {
    elem1: { left: 30, top: 23 },
    elem2: { left: 32, top: 26 },
    elem3: { left: 35, top: 35 },
    elem4: { left: 38, top: 43 },
    elem5: { left: 52, top: 40 },
    elem6: { left: 52, top: 56 },
    elem7: { left: 41, top: 57 },
    elem8: { left: 44, top: 56 },
    elem9: { left: 28, top: 69 },
    elem10: { left: 28, top: 59 },
    elem11: { left: 19, top: 73 },
    elem12: { left: 16, top: 64 },
    elem13: { left: 17, top: 69 },
    elem14: { left: 18, top: 79 },
    elem15: { left: 66, top: 22 },
    elem16: { left: 67, top: 25 },
    elem17: { left: 68, top: 23 },
    elem18: { left: 65, top: 25 },
    elem19: { left: 62, top: 27 },
    elem20: { left: 68, top: 27 },
    elem21: { left: 63, top: 30 },
    elem22: { left: 69, top: 42 },
    elem23: { left: 95, top: 55 },
    elem24: { left: 78, top: 84 },
    elem25: { left: 86, top: 83 },
    elem26: { left: 87, top: 73 },
    elem27: { left: 81, top: 62 },
    elem28: { left: 79, top: 66 },
    elem29: { left: 80, top: 68 },
};

const coff = {
    'max': 1,
    'medium': 2,
    'small': 1.25
}

function selectCoff() {
    const width = window.innerWidth;
    console.log( width );
    if (width >= 1200) {
        img.dataset.size = 'max';
    } else if (width <= 800) {
        img.dataset.size = 'small';
    } else {
        img.dataset.size = 'medium';
    }
    setDotes();
}

function setDotes() {
    dotes.forEach(dot => {
        const sv = simpleValues[dot.id.split('-')[0]];
        dot.style.left = `${sv.left / coff[img.dataset.size]}%`;
        dot.style.top = `${sv.top}%`;
    })
}

window.addEventListener('DOMContentLoaded', selectCoff);
window.addEventListener('resize', selectCoff);
