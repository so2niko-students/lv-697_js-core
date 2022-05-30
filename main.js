const ui = {
    btn : document.querySelector('.btn_count'),
    inpA : document.querySelector('.inp_a'),
    inpB : document.querySelector('.inp_b'),
    answer : document.querySelector('.answer'),
};

const onClickCount = () => {
    const a = ui.inpA.value;
    const b = ui.inpB.value;

    const s = a * b;
    ui.answer.innerText = s;
}

ui.btn.addEventListener('click', onClickCount);