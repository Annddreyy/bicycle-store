let products = JSON.parse(localStorage.getItem('bin')) || [];
const productsTable = document.querySelector('.bin-table-body');

function updateProductTable() {
    setLabel();
    sumAllProducts();
    products.forEach(product => {
        productsTable.insertAdjacentHTML('beforeend', `
            <tr class="product-description">
                <td class="product-image tbody-td"><img src="${product.src}" alt=""></td>
                <td class="product-title tbody-td">${product.title}</td>
                <td class="product-price tbody-td">${product.price} ₽</td>
                <td class="product-count tbody-td">
                    <button class="minus-button">-</button>
                    <span class="count">${product.count}</span>
                    <button class="add-button">+</button>
                </td>
                <td class="product-result tbody-td">${product.count * product.price} ₽</td>
                <td class="product-delete tbody-td">
                    <button class="delete-button">x</button>
                </td>
            </tr>
        `)
    })
}

function setLabel() { 
    if (products.length == 0) {
        const main = document.querySelector('main');
        main.insertAdjacentHTML('beforeend', `<p>В корзине нет товаров</p>`);
        document.querySelector('.bin').remove();
    }
}

function sumAllProducts() {
    const sumElem = document.querySelector('.sum');
    let sum = products.reduce((sum, product) => sum + product.price * product.count, 0);
    sumElem.textContent = `${sum} ₽`;
}

function findProductDescription(title) {
    const descriptions = Array.from(document.querySelectorAll('.product-description'));
    return descriptions.find(description => title == description.querySelector('.product-title').textContent);
}

function updateProductCount(title, increase = true) {
    const findDescription = findProductDescription(title);
    let find = products.find(item => item.title == title);

    if (increase) {
        find.count++;
    } else {
        if (find.count >= 2) {
            find.count--;
        }
    }

    let count = findDescription.querySelector('.count');
    count.textContent = find.count;

    let result = findDescription.querySelector('.product-result');
    result.textContent = `${find.count * find.price} ₽`;

    sumAllProducts();
    
    localStorage.setItem('bin', JSON.stringify(products));
}

function deleteProduct(title) {
    const findDescription = findProductDescription(title);
    products = products.filter(item => item.title != title);
    findDescription.remove();
    setLabel();

    sumAllProducts();

    localStorage.setItem('bin', JSON.stringify(products));
}

productsTable.addEventListener('click', function(event) {
    const addButton = event.target.closest('.add-button');
    const minusButton = event.target.closest('.minus-button');
    const deleteButton = event.target.closest('.delete-button');

    const title = event.target.closest('.product-description').querySelector('.product-title').textContent;
    if (addButton) {
        updateProductCount(title);
    } else if (minusButton) {
        updateProductCount(title, false);
    } else if (deleteButton) {
        deleteProduct(title);
    }
});

updateProductTable();