'use sctict'

// 1 задание
{
    simple: for (let i = 0; i < 100; i++) {
        if (i < 2) continue;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue simple;
        }
        console.log(i);
    }
}

// 2-ое задание
{
    let basket = [
        ['бананы', 5, 200],
        ['грушы', 6, 150],
        ['апельсины', 4, 215]
    ];

    function countBasketPrice(arr) {
        let price = 0;
        let totalPrice = 0;
        for (let i = 0; totalPrice += price, i < 3; i++) {
            price = 1;
            for (let j = 1; j < 3; j++) {
                price *= arr[i][j];
            }
        }
        return totalPrice;
    }
    console.log(countBasketPrice(basket));
}

//3-ее задание
{
    for (let i = 0; i < 10; console.log(i), i++) {}
}

//4-ое задание
{
    let massage = 'x ';
    for (let i = 0; i < 20; i++) {
        console.log('\n');
        let str = '';
        for (let j = 0; j <= i; j++) {
            str = str + massage;

        }
        console.log(str);
    }
}