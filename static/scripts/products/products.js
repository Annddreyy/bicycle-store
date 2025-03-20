let products = JSON.parse(localStorage.getItem('bin')) || [];

document.addEventListener('click', function(event) {
    let target = event.target.closest('.card-bottom button');
    let card = event.target.closest('.card');
    if (!target) return;

    const title = card.querySelector('h2').textContent;
    let find = products.find(item => item.title === title);

    if (!find) {
        products.push( {
            src: card.querySelector('img').src,
            title: card.querySelector('h2').textContent,
            price: card.querySelector('.price').textContent.replace(' ₽', ''),
            count: 1
        } );
    } else {
        find.count++;
    }

    localStorage.setItem('bin', JSON.stringify(products));

    console.log( products );
    event.preventDefault();
})