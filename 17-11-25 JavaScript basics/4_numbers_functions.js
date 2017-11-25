/*====================================================
NUMBERS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
=====================================================
Wskazówki do zadań:
- parseFloat(number) - konwersja stringa na liczbę
- number.toFixed() - dokładność liczb po przecinku
- number.toString() - konwersja number do string */

// TODO: 1. Napisz funkcję, która pobiera liczbę i zwraca ją skonwertowaną na string //

function convertToString(number) {
    return number.toString()
};


// TODO: 2. Napisz funkcję, która pobiera stringa i zwraca go skonwertowanego na number //

function convertToNumber(string) {
    return parseFloat(string)
};


/* TODO: 3. W poniższych zmiennych, doprecyzuj rozwinięcie dziesiętne. Nadpisz wartość zmiennych nową wartością. */

var powerHorses = 233; //do 3 liczb po przecinku
var score = 10.33344; //do 2 liczb po przecinku

powerHorses = powerHorses.toFixed(3);

console.log(powerHorses);

score = score.toFixed(2);

console.log(score);


