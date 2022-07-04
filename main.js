//LocalStorage
//SessionStorage

function g(className){ return document.querySelector(className)}
function listener(className, eventName, callback){
    g(className).addEventListener(eventName, callback);
}

const counter = localStorage.getItem('counter') || 0;
g('.counter').innerText = counter;
localStorage.setItem('counter', +counter + 1);


listener('.open', 'click', () => {
    window.open('secondPage.html');
});

listener('.openInThisWindow', 'click', () => {
    window.open('secondPage.html', '_self');
});