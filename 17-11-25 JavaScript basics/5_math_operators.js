/*
=====================================================
MATH: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math
=====================================================
Wskazówki do zadań:
- Math.random() - zwraca losową wartość w zakresie od 0 do 1
- Math.round(a) - zaokrągła wartość w górę lub w dół
- Math.max(a, b, c...) - zwraca największą wartość spośród przekazanych wartosci
- Math.pow(a, b) - podnosi wartość a do potegi b

/* TODO: 1. Napisz funkcję, która przyjmuje dwa parametry.
    - pierwszy parametr to wartość, a drugi to potęga
    - funkcja ma zwracać wartość podniesioną do tej potęgi
 */

function numberPowered(number, power) {
    return Math.pow(number, power)
};

console.log(numberPowered(2, 2));


// TODO: 2. Napisz funkcję, która zwraca losową liczbę w zakresie od 0 do 1. //

function randomNumber(number) {
    return Math.floor(Math.random())
};

console.log(randomNumber())

// TODO: 3. Napisz funkcję, która zwraca losową liczbę w zakresie 1 do 10.

function randomNumber10() {
    return Math.ceil(Math.random() * 10)

}

// TODO: 3. Napisz funkcję, która przyjmuje 3 parametry (liczby) i zwraca parametr z największą wartością

function biggestNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3)
};

console.log(biggestNumber(3, 4, 5))

// TODO: 4. Napisz metodę, która przyjmuje 1 parametr (liczbę) i zaokrągla tą liczbę do całosci.

function roundNumber(number) {
    return Math.round(number)
};

console.log(roundNumber(5.55555))


// TODO: 5. Napisz funkcję, która przyjmuje dwie liczby i zwraca resztę z dzielenia tych liczb.

function getReminder(a, b) {
    return a % b;
}

console.log(getReminder(9, 2))



// TODO: 6. Napisz funkcję, która liczy pole koła (pi r^2). Wynik ma być podany z dokładnością do 2 cyfr po przecinku.

function getCircleArea(r, price) {
    return (Math.PI * r * r) / price;
}


// TODO: 7. Napisz funkcję, która liczy deltę ( b^2 - 4ac). Wynik ma być zaokrąglony do całości.

function getDelta(a, b, c) {
    return b * b - 4 * a * c;
}


/* TODO: 8. Zadeklaruj globalną zmienna var counter = 0;
    - następnie stwórz funkcję, która podbija wartość globalnej zmiennej o nazwie counter o jeden
      przy każdym wywołaniu.
    - następnie wywołają tą funkcję 3 razy i wyświetl w konsoli wartość zmiennej counter. */

var counter = 0;
function counterUp() {
    return counter++;
};

console.log(counterUp());
console.log(counterUp());
console.log(counterUp());

console.log(counter);