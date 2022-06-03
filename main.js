//Методи масивів

const paymentsInPLN = [12, 66, 34, 3.5, 8, 11];
const PLN_TO_UAH = 6.87;


//!Новий масив, зроблений зі старого (оброблений)
// const paymentsInUAH = [];
// for(let i = 0; i < paymentsInPLN.length; i += 1){
//     paymentsInUAH.push(paymentsInPLN[i] * PLN_TO_UAH);
// }

const paymentsInUAH = paymentsInPLN.map((p) => p * PLN_TO_UAH);
const paymentsInUAH2 = paymentsInPLN.map(function(p){ return  p * PLN_TO_UAH});

console.log(paymentsInUAH);

function show(text){
    console.log(text);
}

const ui = {
    inp : document.querySelector('.inpPLN'),
    txt : document.querySelector('.textUAH')
};

const onChange = () => {
    const pln = Number(ui.inp.value);
    const uah = convert(pln, PLN_TO_UAH);
    ui.txt.innerText = uah;
}

const convert = (value, exch) => value * exch;

ui.inp.addEventListener('input', onChange);

