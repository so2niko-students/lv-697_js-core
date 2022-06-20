//MORSE
const morzeWord1 = morzeWord.map(el => el.split(' ').map(elem => morzeDict[elem]).join('')).join(' ').toUpperCase();
