/*=====================================================
LINK: https://developer.mozilla.org /en-US/docs/Web/JavaScript/Reference/Global_Objects/String
=====================================================
Wskazówki do zadań:
- string.replace() - zmiana dowolnego znaku lub ciągu znaków
- string.split() - konwersja stringa do tablicy
- string.trim() - usunięcie whitespaces
- string.charAt() - odczytanie znaku na zadanym indeksie
- string.substring() - ekstrakcja części znaków ze stringa
- string.toLowerCase() - konwersja na wielkie litery
- string.toUpperCase() - konwersja na małe litery
- string.length - odczytanie ilości znaków */

// TODO: 1. Napisz funkcję, która przyjmuje parametr typu string, oraz zwraca jego ilość znaków //

function getStringLength (name) {
    return name.length
};

console.log(getStringLength('Jarek'));

// TODO: 2. Napisz funkcję, która przyjmuje parametr typu string, a następnie zwraca go oczyszczonego z white-space'ów.
/* Wartości wejściowe do sprawdzenia w zadaniach 1 i 2:
    - ' John'
    - '  Smith'
    - ' H4xer    ' */

function getNoWS(text) {
    return text.trim()
};

console.log(getNoWS(' John'));
console.log(getNoWS(' H4xer    '));


/* TODO: 3. Poniższe zmienne, rozbij na tablicę liter, oczekiwany wynik to: ['R','a','m','b','o']:
    - var nameOne = 'Rambo';
    - var nameTwo = 'R_a_m_b_o';
    - var nameThree = 'ROX1aOX1mOX1bOX1o'; */


var nameOne = 'Rambo';
var nameTwo = 'R_a_m_b_o';
var nameThree = 'ROX1aOX1mOX1bOX1o';

nameOne = nameOne.split('');

console.log('nameOne', nameOne);

/* TODO: 4. Stwórz nowe zmienne na podstawie stringa name = "EXPIRED", które zawierają odpowiednio:
    - pierwsze 3 litery tego stringa
    - ostatnie 3 litery tego stringa */

var name = "EXPIRED";

function last3(newName) {
    return newName.substring(name.length - 3)
};

console.log(last3(name));

function first3(newName) {
    return newName.substring(0, 3)
};

console.log(first3(name));

// TODO: 5. Napisz funkcję o nazwie capitalize, która jako parametr przyjmuje stringa i go "kapitalizuje" //

function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
};

console.log(capitalize('jarek'));


// TODO: 6. W zmiennej var url = 'users/{id}' podmień "{id}" na liczbę 3 i wynik przypisz do nowej zmiennej //

var url = 'users/{id}';
var replacedUrl = url.replace(/{id}/g, 3); // wyrażenie regularne
var replacedUrl = url.replace("{id}", 3);

console.log(replacedUrl);


/* TODO: 7. Napisz funkcję która przyjmuje parametr typu string, a następnie jednocześnie:
    - czyści go z whitespaceów
    - litery konwertuje na wielkie
    - zwraca 2 pierwsze znaki */

function modifyString(str) {
    return str.trim().toUpperCase().substring(0, 2);
};

console.log(modifyString('  jarek  '));



