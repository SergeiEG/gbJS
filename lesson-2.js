let a = +prompt('Введите первое число: ');
let b = +prompt('Введите второе число: ');

function getCompare(a, b) {
    if (a >= 0 && b >= 0) return 'Разность первого и второго числа: ' + (a - b);
    else if (a < 0 && b < 0) return 'Произведение первого и второго числа: ' + (a * b);
    else return 'Сумма первого и второго числа: ' + (a + b);
}
alert(getCompare(a, b));

let x;
do {
    x = +prompt('Введите число от 0 до 15');
    if (x >= 0 && x < 16) {
        break;
    } else
        alert('Вы ввели неверное, число попробуйте ещё раз.');
} while (x < 0 || x > 15 || x != Number(x))

switch (x) {
    case 0:
        document.write('0 ');
    case 1:
        document.write('1 ');
    case 2:
        document.write('2 ');
    case 3:
        document.write('3 ');
    case 4:
        document.write('4 ');
    case 5:
        document.write('5 ');
    case 6:
        document.write('6 ');
    case 7:
        document.write('7 ');
    case 8:
        document.write('8 ');
    case 9:
        document.write('9 ');
    case 10:
        document.write('10 ');
    case 11:
        document.write('11 ');
    case 12:
        document.write('12 ');
    case 13:
        document.write('13 ');
    case 14:
        document.write('14 ');
    case 15:
        document.write('15');
}

function getSum(a, b) {
    return a + b;
}

function getDifference(a, b) {
    return a - b;
}

function getMultiplication(a, b) {
    return a * b;
}

function getDivision(a, b) {
    return a / b;
}
alert('Задача № 6');
let arg1 = +prompt('Введите первое число');
let arg2 = +prompt('Введите второе число');
let operation = prompt('Укажите арифмитическую операцию в формате +, -, *, /');
alert(`Результат: ${mathOperation(arg1, arg2, operation)}`);

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return getSum(arg1, arg2);
        case '-':
            return getDifference(arg1, arg2);
        case '*':
            return getMultiplication(arg1, arg2);
        case '/':
            return getDivision(arg1, arg2);
    }
}