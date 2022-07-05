//LocalStorage
//SessionStorage
const URL = 'https://randomuser.me/api/';

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

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', () => {
        const data = JSON.parse(xhttp.responseText);
        console.log(data);
    });
    xhttp.open("GET", URL, true);
    xhttp.send();
}

// loadDoc();

fetch(URL).then(r => r.json()).then(console.log);