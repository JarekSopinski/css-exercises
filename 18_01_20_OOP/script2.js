//**************** OBJECT CREATE ****************************

const cat = {
    makeSound: function () {
        console.log(this.sound);
    }
};

let secondCat = cat;
console.log(cat === secondCat); //true

const dachowiec =  Object.create(cat);
console.log(cat === dachowiec); // false
// dlatego że Object.create nie tworzy referencji, ale tworzy nowy obiekt
// możemy bezpiecznie modyfikować cat i dachowiec nie zostanie zmodyfikowany
//dachowiec to nowy obiekt z prototypami od cat'a

// I właśnie dlatego:

dachowiec.sound = 'miałłłłłł';
dachowiec.makeSound(); // miałłłłł
cat.makeSound(); // undefined, bo nie został zmodyfikowany w momencie modyfikacji dachowca

// Prototypy:


cat.drinkMilk = function () {
    console.log('yummy');
};

console.log(cat, dachowiec);
console.log(dachowiec.drinkMilk());

//Sprawdzamy, czy cat jest prototypem dachowca:
console.log(cat.isPrototypeOf(dachowiec)); //true, bo dachowiec został stworzony z cat'a

//Prototypy to specyficzna forma dziedziczenia w JS; nie dostajemy tego co miał poprzedni obiekt, tylko jego właściwości

const perski = Object.create(cat);
perski.sound = 'daj whiskas';
perski.makeSound(); // daj whiskas

//************************************************

const kot = {
    makeSound: function () {
        console.log(this.sound);
    }
};

function objectCreate(proto) {
    const obj = {}; //tworzymy nowy obiekt
    Object.setPrototypeOf(obj, proto); // dla tego obiektu ustawiamy ręcznie prototyp
    return obj;
}

const bonifacy = objectCreate(kot);
bonifacy.sound = 'miałłł';
bonifacy.makeSound();

//objectCreate tworzy kopię posiadającą prototypy od poprzedniego obiektu
// w ten sposób możemy tworzyć wiele różnych obiektów z pierwszego obiektu

// Podsumowując - objectCreate tworzy nowy obiekt z poprzedniego i ustawia mu prototyp poprzedniego

//****************** OBJECT ASSIGN  ****************************

// Object assign kopiuje wartości ze źródłowych obiektów, tym ...

let first = {name: 'Tony'};
let last = {lastName: 'Stark'};
let person = Object.assign(first, last);
console.log(person); // person to pierwszy obiekt, do którego skopiowaliśmy wartości z drugiego; nie jest to jakiś nowy, trzeci obiekt
console.log(first); // {name: "Tony", lastName: "Stark"} <--- zmodyfikowany
console.log(last); // {lastName: "Stark"} <---- nie został zmodyfikowany

// Zmerguj i nadpisz takie same klucze:

let a = Object.assign({foo: 0}, {foo: 1}, {foo: 2});

console.log(a); // foo: 2; nadpisał poprzednie foo, bo klucze były takie same


// **************** KLONOWANIE OBIEKTÓW ********************************

let obj2 = {person: 'Thor Odinson'};
let clone = Object.assign({}, obj2);
console.log(clone); // {person: "Thor Odinson"}

//************************  KONSTRUKTOR (używanie słowa kluczowego 'new')  **********************************************

//Wszystkie obiekty mają propercję constructor.

console.log({}.constructor); // Object() { [native code] }

let o = {};
console.log(o.constructor === Object); // true

o = new Object;
console.log(o.constructor === Object); // true

let a2 = [];
console.log(a2.constructor === Array); //true

a2 = new Array;
console.log(a2.constructor === Array); //true

let n = new Number(3);
console.log(n.constructor === Number); //true



function Tree(name) {
    this.name = name;
};

let theTree = new Tree('Redwood');
console.log(theTree); // Tree {name: "Redwood"}

/*
Kiedy używamy new Tree(), JS robi 4 rzeczy:

Tworzy nowy obiekt;
Ustawia konstruktora obiektu przypisanego do Tree;
Deleguje obiekt do Tree.prototype;
Przywołuje Tree() w kontekście nowego obiektu;
Rezultatem new Tree() jest ten nowy obiekt
 */

// Taka funkcja przydaje się jako baza do tworzenia obiektów, przydatne przy dużej ilości nowych obiektów

function Drzewo(name, n) {
    this.name = name;
    this.size = 0;
    this.calculateSize = function (n) {
        this.size = n*n
    };
    this.calculateSize(n);
};

let theDrzewo = new Drzewo('Redwood');
theDrzewo.calculateSize(2);
console.log(theDrzewo); // Drzewo {name: "Redwood", size: 4, calculateSize: ƒ}

// PODSUMOWUJĄC: KONSTRUKTOR TO METODA WYWOŁYWANA W MOMENCIE TWORZENIA OBIEKTU, THISEM JEST NOWY OBIEKT, KTÓRY POWSTAJE

// Przykładowo: można stworzyć konstruktor 'ssaki', a później z tego robić obiekty 'człowiek', 'delfin' itp; przydaje się przy dużych wyliczeniach