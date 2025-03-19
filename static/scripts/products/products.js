let products = JSON.parse(localStorage.getItem('bin')) || [];

document.addEventListener('click', function(event) {
    let target = event.target.closest('.card-bottom button');
    let card = event.target.closest('.card');
    if (!target) return;

    const title = card.querySelector('h3').textContent;
    let find = products.find(item => item.title === title);

    if (!find) {
        products.push( {
            title: card.querySelector('h3').textContent,
            price: card.querySelector('.price').textContent,
            count: 1
        } );
    } else {
        find.count++;
    }

    localStorage.setItem('bin', JSON.stringify(products));

    console.log( products );
    event.preventDefault();
})