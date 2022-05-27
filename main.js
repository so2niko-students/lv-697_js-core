//Об'єкти
const obj = {};

let dog = 'Шарік';
let cat = {
    name : 'Cookie'
};

let dog2 = dog;//Шарік
dog2 = 'Пупік';

// console.log(dog, dog2);

let cat2 = cat;

cat.age = 3;
cat2.name = 'Princess';
// console.log(cat, cat2);
// console.log(cat == cat2);

const car1 = { name : 'Mercedes' };
const car2 = { name : 'Mercedes' };

console.log(car1, car2);
console.log(car1 == car2);

const arr = [
    123, 
    22, 
    'strings', 
    null, 
    true, 
    undefined, 
    { lalala : 12 }, 
    [
        345435, 5345, 65656, 5888, 'hohoho', { job : 'helper' }
    ]
];

const arrNums = [34, 55, 778, 435, 23423, 6757, 787, 9898, 5444];

