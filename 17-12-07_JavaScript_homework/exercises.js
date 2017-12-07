/*
1. Napisz funkcję, która przyjmuje trzy parametry - (sender, sms, receiver)
a następnie zwraca stringa w następującym formacie:

"(FROM: sender) (TO: receiver) (MESSAGE: sms)"

UWAGA: - Zwróć uwagę na wielkość liter w imionach oraz brak whitespaces dla sms
 */

function message (sender, receiver, sms) {
    sender = sender.substr(0,1).toUpperCase() + sender.substr(1).toLowerCase();
    receiver = receiver.substr(0,1).toUpperCase() + receiver.substr(1).toLowerCase();
    return '(FROM: ' + sender.trim() + ')' + ' (TO: ' + receiver.trim() + ')' + ' (MESSAGE: ' + sms.trim() + ')'
}

message('gAndaLF   ', 'bARloG    ', 'You shall not pass!     ');

/*
2. Napisz funkcję, która przyjmuje dwa parametry - firstName oraz lastName, a następnie
zwraca inicjały rozdzielone kropką, zwrócony string powinien składać się z wielkich liter.

Przykładowy wynik dla następujących zmiennych: var firstName = 'john'; var lastName = 'doe';
WYNIK = 'J.D';
 */

function initials (firstName, lastName) {
    return firstName.substr(0,1).toUpperCase() + '.' + lastName.substr(0,1).toUpperCase();
}

initials('Darth', 'Vader');

/*
3. Napisz funkcję, która generuje losową liczbę, zaokrągloną do dwóch liczb po przecinku
a następnie zwraca stringa "Twoja szczęśliwa liczba to: TUTAJ_TA_LOSOWA_LICZBA"
 */

function randomNum() {
    var num = Math.random() * 10;
    return 'Twoja szczesliwa liczba to: ' + num.toFixed(2);
}

randomNum();

/*
4. Napraw bugi we funkcji oraz popraw formatowanie nazewnictwa.
Funkcja powinna zwrocić sumę tip i price

 Function get_dinner_price {
   tip: '20';
   tip + price;
   var price = 100;
 }
get_dinner_price(); // musi zwrócić liczbę o wartości 120 (100 + 20)
 */

function getDinnerPrice(tip, price) {
    return tip + price;
}

getDinnerPrice(20, 100);


