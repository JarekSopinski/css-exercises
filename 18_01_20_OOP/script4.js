//************* _PROTO_ ************************

console.log(`_proto vs prototype`);
let cat = { breed: 'munchkin' };
let myCat = { name: 'Fluffykins' };
Object.setPrototypeOf(myCat, cat);
// prototype is set
console.log(myCat, myCat.breed);
// proto is reference to prototype object
console.log(myCat.__proto__);
console.log(myCat.__proto__ === cat); // true, proto myCat'a to po prostu cat
cat.tailLength = 15;
console.log(myCat.tailLength);
console.log(myCat); // w moim kocie nie ma tej wartości, długość ogona została pobrana wyłącznie z prototypu

//************ SŁOWO KLUCZOWE 'NEW'  ********************

function Person(saying) {
    this.saying = saying
};

Person.prototype.talk = function () {
    console.log('I say: ', this.saying);
};

let crockford = new Person('SEMICOLANS!!!!');
console.log(crockford);
crockford.talk();

// Co robi 'new'?

// New tworzy nowy obiekt i dla tego obiektu ustawia prototyp... nowy obiekt ma taki sam prototyp jak to, z czego go tworzymy

// Jak działa 'new' pokazane w innym zapisie, przetłumaczenie tego, co faktycznie dzieje się 'pod spodem':

function createNew(constructor) {
    let obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    let argsArray = Array.from(arguments);
    argsArray = argsArray.slice(1);
    constructor.apply(obj, argsArray);

    return obj;
};

crockford = createNew(Person, 'SEMICOLANS!!!!');
crockford.talk();
console.log(crockford);

// Podsumowując: 'New' tworzy nowy obiekt przy użyciu kluczy wziętych z prototypu,

