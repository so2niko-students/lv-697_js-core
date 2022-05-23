let i = 0;

// Операція
// операнд оператор операнд
5 + 9 // 14
'1' + 0 // '10'
// по операндам
// унарні
console.log(+i);
console.log(-i);
i++;
i--;
++i;
--i;
new Date();
typeof i;
console.log(!i);
console.log(~i);

// бінарні
const g = i;
i + g;
g * i;
g ** 3;
i / 44;
g % 2;

// тернарні
i > 0 ? console.log(true) : console.log(false);

if(i > 0){
    console.log(true);
}else{
    console.log(false);
}

i = 100;

//Цикли
//цикл з передумовою
// while(i < 10){
//     console.log('i:', i);
//     i++;
// }

// for(let j = 0; j < 10; j++){
//     console.log(j);
// }

//цикл з післяумовою
// do{
//     console.log('i', i);
//     i++;
// }while(i < 10);

// console.log(i);

console.log('alert', alert('Hello'));// pop-up вікно з інформацією
console.log('prompt', prompt('type here', 'lalala'));//поп-ап, але з полем для вводу (другий аргумент - значення за замовчуванням)
console.log('confirm', confirm('Are you sure?'));//поп-ап, але з кнопками "Так", "Ні"