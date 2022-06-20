//функції-конструктори - Класи
function Dog(name){
    this.type = 'dog';
    this.name = name;
    this.legs = 4;
}

//прототипи - Наслідування
const Animal = {
    dob : '1.1.2001',
    addMicrob(){
        let count = 0;
        return function(){
            count++;
            return count;
        }
    }
};

Dog.prototype = Animal;

const sharik = new Dog('Sharik');
// console.log(sharik);
// console.log(sharik.dob);

//замикання - Інкапсуляцію
const bobik = new Dog('Bobik');
bobik.legs = 6;
// console.log(bobik, sharik);
const addMicro = bobik.addMicrob();
addMicro();
addMicro();
addMicro();

// console.log('microbes: ', addMicro());

class Car{
    constructor(dob, engineType){
        this.dob = dob;
        this.engineType = engineType;
    }
    print(){
        console.log(`Car is ${ this.engineType } and made in ${ this.dob } `);
    }
}

const myCar = new Car(2022, 'electro');
myCar.print();

class Audi extends Car{
    constructor(dob, engineType, model, color){
        super(dob, engineType);//виклик конструктора Car
        this.model = model;
        this.color = color;
        Audi.count++;
    }
    static count = 0;
    print(){
        console.log(`${ this.color } Audi model ${ this.model }
engine: ${ this.engineType}
made in: ${ this.dob }
age: ${this.#countAge()}`);

    }
    #countAge(){
        const nowYear = (new Date()).getFullYear();
        const dobYear = (new Date(this.dob)).getFullYear();
        return nowYear - dobYear;
    }
}

const rs6 = new Audi('2020', 'hybrid', 'rs6', 'black');
const tt = new Audi('2007', 'gasoline', 'tt', 'sky blue');
rs6.print();
tt.print();
console.log(tt);
console.log(Audi.count);

const d = new Date();
Date.now();
// d.now();
Math.random();
Math.PI;
Math.floor(2.33);