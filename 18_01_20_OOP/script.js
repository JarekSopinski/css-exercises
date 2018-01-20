// Dwa poniższe przykłady pokazują w jaki sposób wykorzystać jedną funkcję w wielu obiektach:

let dog = {
    sound: 'hau hau',
    talk: function() {
        console.log(this.sound);
    }
};

let cat = {
    sound: 'miau miau'
};

dog.talk(); //hau hau
let talkFunction = dog.talk;
talkFunction();
let boundFunction = talkFunction.bind(dog);
boundFunction(); // hau hau
let talkAsCat = dog.talk.bind(cat);
talkAsCat(); // miau miau

//**********************************

let talk = function () {
    console.log(this.sound);
};

let speak = talk; //skrót z ES6

let boromir = {
    speak, // reference of talk function
    sound: 'One does not simply walk into mordor'
};

boromir.speak(); // this is boromir
talk(); // this is global window object

boromir.speak = talk.bind(boromir);

let faramir = {
    speak: talk, // talk is clean
    sound: 'But fear no more!'
};

faramir.speak(); // But fear no more!
faramir.speak = talk.bind(boromir);
faramir.speak(); // One does not simply walk into mordor

// boromir i faramir korzystają z tej samej funkcji, ale mają oddzielne rezultaty - chyba że zbindujemy faramira do boromira, wtedy
// faramir wypowie kwestię faramira

//**************************************

// bind - tylko ustawia kontekst
// call, apply - ustawiają kontekst i argumenty

const o = {
    a: 'o object',
    method: function (a, b, c) {
        console.log(this, a, b, c);
    }
};

const x = {
    a: 'x object'
};

o.method(1, 2); // this === o, [1, 2]
o.method.call(x, 1, 2, 3); // this === x, [1, 2, 3] (bind nie zwróciłby tutaj niczego) (na obiekcie o wywołaliśmy metodę mówiąc, że kontekstem jest x)
// w callu jest możliwość przekazania parametrów przy wywołaniu; call ma zawsze pierwszy parametr jako kontekst,
// w razie jego pominięcia kontekstem byłaby liczba...

// różnica call vs apply to to, że kolejne paramy w call przekazujemy jako poszczególne paramy,
// natomiast drugim parametrem w przypadku apply jest tablica

o.method.apply(x, [1, 2, 3]); // this === x, [1, 2, 3]

// czyli w callu paramy wpisywane 'na goło', a w apply jako tablica


//****************************************

