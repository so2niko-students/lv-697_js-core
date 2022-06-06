//https://developer.mozilla.org/en-US/docs/Web/API/UI_Events
const rSq = document.querySelector('.red.square');

rSq.addEventListener('click', (ev) => console.log('click', Date.now(), ev));
rSq.addEventListener('mousedown', () => console.log('mousedown', Date.now()));
rSq.addEventListener('mouseup', () => console.log('mouseup', Date.now()));
rSq.addEventListener('contextmenu', (ev) => {
    ev.preventDefault();
    console.log('contextmenu', Date.now());
});


document.body.addEventListener('keypress', (ev) => console.log('keypress', Date.now(), ev));