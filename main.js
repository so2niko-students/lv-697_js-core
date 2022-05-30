//Масиви
//Методи доступу до масиву
//Додавання у кінець масиву, додавання у початок масиву, вибірка з кінця масиву, вибірка з початку масиву
const cars = [2008, 2015, 89, 174, 53, 2016, 102, 33, 1];

//Додавання у кінець
cars.push(2000);

//Вибірка з кінця
// const car2000 = cars.pop();

//Додавання у початок
cars.unshift(2004);

//Взяти з початку
// const car2004 = cars.shift();

// cars[1] = 'Alfa Romeo';


//Сортування масиву
cars.sort(function(a, b){
    return b - a;
});

// console.log(cars);
// showMSG('f[f[f[f[');
//Функції
//declaration
// function showMSG(/* аргументи функції */){
//     //тіло функції

//     //повертання із функції
// }

function showMSG(txt){
    console.log(this);
    document.body.innerText += txt;
}

//function expression

const sum = function(a, b){
    // console.log(this);
    return a + b;
}

sum(3, 4);

//arrow function

const multi = (a, b) => {
    return a * b;
}

const multi2 = (a, b) => a * b;

console.log(cars);

//!Для кожного
// for(let i = 0; i < cars.length; i++){
//     console.log(i, cars[i]);
// }
// cars.forEach((el, i, arr) => console.log(i, el));

//!Отримати відфільтрований масив
// const for3 = [];
// for(let i = 0; i < cars.length; i++){
//     if(cars[i] % 3 === 0){
//         for3.push(cars[i]);
//     }
// }

// const for3 = cars.filter((el) => !(el % 3));
// console.log(for3);

