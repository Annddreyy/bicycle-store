let images = document.querySelectorAll('.anim-img');

window.addEventListener('scroll', function(event) {
    images.forEach(image => {
        let top = image.getBoundingClientRect().top;
        let bottom = image.getBoundingClientRect().bottom;
        let windowBottom = window.innerHeight;
        console.log( windowBottom );
        
        if (top <= windowBottom && bottom >= 0) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    })
});

console.log( images );