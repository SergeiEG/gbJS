'use strict';

const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><img src="${good.image}"></div>
                    <div>
                        <div><b>Наименование</b>: ${good.name}</div>
                        <div><b>Цена за шт.</b>: ${good.price}</div>
                        <div><b>Количество</b>: ${good.quantity}</div>
                        <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                    </div>
                </div>`;
    }
}

const basket = {
    blockBasket: null,
    cartItem,
    productList: [],

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
            this.blockBasket.insertAdjacentHTML('afterbegin', 'Корзина пуста');
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

const catalogItem = {
    render(good) {
        return `<div class="good">
                    <div><img src="${good.image}"></div>
                    <div>
                        <div><b>Наименование</b>: ${good.name}</div>
                        <div><b>Цена за шт.</b>: ${good.price}</div>
                        <div><b>Количество</b>: ${good.quantity}</div>
                        <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                    </div>
                    <div><button class="catalog-btn" data-id = '${good.id}'>Купить</button></div>
                </div>`;
    }
}

const catalog = {
    catalogBlock: null,
    catalogItem,
    productList: [{
        id:1,
        image: './img/banana.png',
        name: 'Бананы',
        quantity: 5,
        price: 200,
    }, {
        id:2,
        image: './img/pear.png',
        name: 'Груши',
        quantity: 4,
        price: 150,
    }, {
        id:3,
        image: './img/orange.png',
        name: 'Апельсины',
        quantity: 7,
        price: 215,
    },],

    init() {
        this.catalogBlock = document.querySelector('.catalog');
        this.catalogBlock.addEventListener('click', (event) => {
            if(event.target.tagName !== 'BUTTON') return;
            this.addObjToCart(event.target.dataset.id);
        });

        this.render();
    },

    render() {
        this.productList.forEach(good => {
                this.catalogBlock.insertAdjacentHTML('afterbegin', this.catalogItem.render(good));
            });
    },

    findProduct(key) {
        for(let i = 0; i < this.productList.length; i ++){
            let arr = Object.values(this.productList[i]);
            if(arr.includes(Number(key))) return this.productList[i];
            else continue;
        }
    },
    addObjToCart(key) {
        basket.productList.push(this.findProduct(key));
        basket.render();
    },
}
catalog.init();