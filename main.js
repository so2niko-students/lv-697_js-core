const d = {
    in : document.querySelector('.in'),
    out : document.querySelector('.out')
};

d.in.addEventListener('change', () => {
    const str = d.in.value;
    const strLen = str.length;
    let outStr = '';
    for(let i = 0; i < strLen; i += 1){
        outStr += isNaN(str[i]) ? str[i] : '';
    }

    d.out.innerText = outStr;
});

//Regular expressions - Регулярні вирази
/**
 * Квантифікатори - https://uk.javascript.info/regexp-quantifiers
 * Якоря - https://uk.javascript.info/regexp-anchors
 * флаги - gim - https://uk.javascript.info/regexp-introduction
 * групи - https://uk.javascript.info/regexp-groups
 * діапазони - https://uk.javascript.info/regexp-character-sets-and-ranges
 */