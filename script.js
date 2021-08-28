'use strict';

//2-ое задание

const blockBasket = document.getElementById('basket');
blockBasket.style.width = '150px';
blockBasket.style.height = '150px';
blockBasket.style.marginTop = '50px';
blockBasket.style.border = '1px solid black'

function checkBasket() {
    if (basket.productList.length > 0)
        return true;
    else
        return false;
}

function showBasketMaintenance() {
    if (checkBasket() == true) {
        blockBasket.innerText = `В коризе: ${basket.countBasketQuantity()} товара на сумму ${basket.countBasketPrice()} рублей.`;
    } else
        blockBasket.innerText = 'Корзина пуста';
}

let basket = {
    productList: [],
    countBasketQuantity() {
        return this.productList.reduce((totalQuantity, item) => totalQuantity += item.quantity, 0);
    },
    countBasketPrice() {
        return this.productList.reduce(function(totalPrice, item) {
            return totalPrice + item.quantity * item.price;
        }, 0);
    },
}



//3-ее задание
const product = [{
    name: 'banans',
    quantity: 1,
    price: 200,
}, {
    name: 'pears',
    quantity: 1,
    price: 150,
}, {
    name: 'orange',
    quantity: 1,
    price: 215,
}]

const blockProduct = document.getElementById('catalog');
blockProduct.style.width = '150px';
blockProduct.style.height = '150px';
blockProduct.style.marginTop = '50px';
blockProduct.style.border = '1px solid black'

const banansAdd = document.createElement('button');
blockProduct.appendChild(banansAdd);
banansAdd.innerHTML = 'Add banana to basket';

function addBananaToProductList() {
    basket.productList.push(product[0]);
    showBasketMaintenance();
}
// banansAdd.onclick = addBananaToProductList;
banansAdd.addEventListener('click', addBananaToProductList);

const orangeAdd = document.createElement('button');
orangeAdd.style.marginTop = '30px';
blockProduct.appendChild(orangeAdd);
orangeAdd.innerHTML = 'Add orange to basket';

function addOrangeToProductList() {
    basket.productList.push(product[2]);
    showBasketMaintenance();
}

orangeAdd.addEventListener('click', addOrangeToProductList);

const pearsAdd = document.createElement('button');
pearsAdd.style.marginTop = '30px';
blockProduct.appendChild(pearsAdd);
pearsAdd.innerHTML = 'Add pears to basket';

function addPearsToProductList() {
    basket.productList.push(product[1]);
    showBasketMaintenance();
}

pearsAdd.addEventListener('click', addPearsToProductList);

showBasketMaintenance();