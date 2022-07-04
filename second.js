const c = localStorage.getItem('counter');
alert(c);

document.querySelector('.back').addEventListener('click', () => {
    history.back();
})