'use strict';
const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

const basket = {
    blockBasket: null,
    cartItem,
    productList: [{
        name: 'Бананы',
        quantity: 5,
        price: 200,
    }, {
        name: 'Груши',
        quantity: 4,
        price: 150,
    }, {
        name: 'Апельсины',
        quantity: 7,
        price: 215,
    }, ],

    init() {
        this.blockBasket = document.querySelector('.basket');
        const basketBtn = document.createElement('button');
        this.blockBasket.appendChild(basketBtn);
        basketBtn.classList.add('basket-btn')
        basketBtn.addEventListener('click', this.clear.bind(this));
        basketBtn.innerHTML = 'Очистить корзину';

        this.render();
    },
    render() {
        if (this.productList.length) {
            this.productList.forEach(good => {
                this.blockBasket.insertAdjacentHTML('afterbegin', this.cartItem.render(good));
            });
            this.blockBasket.insertAdjacentHTML('beforeend', `В коризе: ${this.countBasketQuantity()} товара на сумму ${this.countBasketPrice()} рублей.`);
        } else {
            this.blockBasket.textContent = 'Корзина пуста';
        }
    },
    countBasketQuantity() {
        return this.productList.reduce((totalQuantity, item) => totalQuantity += item.quantity, 0);
    },
    countBasketPrice() {
        return this.productList.reduce(function(totalPrice, item) {
            return totalPrice + item.quantity * item.price;
        }, 0);
    },
    clear() {
        this.productList = [];
        this.render();
    },
};

basket.init();



// //3-ее задание
// const product = [{
//     name: 'Бананы',
//     quantity: 1,
//     price: 200,
// }, {
//     name: 'Грушы',
//     quantity: 1,
//     price: 150,
// }, {
//     name: 'Апельсины',
//     quantity: 1,
//     price: 215,
// }]

// const blockProduct = document.getElementById('catalog');
// blockProduct.style.width = '150px';
// blockProduct.style.height = '150px';
// blockProduct.style.marginTop = '50px';
// blockProduct.style.border = '1px solid black'

// const banansAdd = document.createElement('button');
// blockProduct.appendChild(banansAdd);
// banansAdd.innerHTML = 'Add banana to basket';

// function addBananaToProductList() {
//     basket.productList.push(product[0]);
//     showBasketMaintenance();
// }
// // banansAdd.onclick = addBananaToProductList;
// banansAdd.addEventListener('click', addBananaToProductList);

// const orangeAdd = document.createElement('button');
// orangeAdd.style.marginTop = '30px';
// blockProduct.appendChild(orangeAdd);
// orangeAdd.innerHTML = 'Add orange to basket';

// function addOrangeToProductList() {
//     basket.productList.push(product[2]);
//     showBasketMaintenance();
// }

// orangeAdd.addEventListener('click', addOrangeToProductList);

// const pearsAdd = document.createElement('button');
// pearsAdd.style.marginTop = '30px';
// blockProduct.appendChild(pearsAdd);
// pearsAdd.innerHTML = 'Add pears to basket';

// function addPearsToProductList() {
//     basket.productList.push(product[1]);
//     showBasketMaintenance();
// }

// pearsAdd.addEventListener('click', addPearsToProductList);

// showBasketMaintenance();