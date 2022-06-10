//Знаходити

//змінювати внутрішній контент - текст, стиль(зовнішній вигляд)

//видаляти

//створювати

//2 шляхи створення елементів
//повністю через строки
//  .innerHTML
const test = document.querySelector('.test');

const redSq = '<div class="red square"></div>';

test.innerHTML = redSq;
// test.innerText = redSq;

//повністю через об'єкти
const div = document.createElement('div');
div.classList.add('blue', 'square');
test.appendChild(div);


//Видалення
document.querySelector('.btn-delete').addEventListener('click', () => {
    //Видалення через об'єкти
    
    // while(test.hasChildNodes()){
    //     // test.removeChild(test.firstChild);
    //     test.firstChild.remove();
    // }

    test.innerHTML = '';
});

setTimeout(() => {
    console.log('hello, I am a setTimeOut');
}, 3000);

const intervalID = setInterval(() => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    console.clear();
    console.log(h, m, s);
    console.log(d.toLocaleTimeString());
}, 333);

// clearInterval(intervalID);

