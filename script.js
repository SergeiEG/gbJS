'use strict';

//1-ое задание
{
    let numb = parseInt(Math.random() * 1000);

    function getDischarge(n) {
        const dischargeNumber = {};
        if (n < 1000) {
            dischargeNumber.сотни = parseInt(n / 100);
            dischargeNumber.десятки = parseInt((n - (dischargeNumber.сотни * 100)) / 10);
            dischargeNumber.еденицы = n - (dischargeNumber.сотни * 100) - (dischargeNumber.десятки * 10);
        } else {
            console.log('Число превышает 999.')
            return dischargeNumber;
        }
        return dischargeNumber;
    }
    console.log(getDischarge(numb));
}

//2-ое задание
{
    let basket = {
        productList: [{
            name: 'banans',
            quantity: 5,
            price: 200,
        }, {
            name: 'pears',
            quantity: 6,
            price: 150,
        }, {
            name: 'orange',
            quantity: 4,
            price: 215,
        }],
        countBasketPrice() {
            return this.productList.reduce(function(totalPrice, item) {
                return totalPrice + item.quantity * item.price;
            }, 0);
        },
    }
    console.log(basket.countBasketPrice());
}