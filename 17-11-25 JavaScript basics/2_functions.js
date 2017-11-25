/*
 =====================================================
 CUSTOM FUNCTIONS
 =====================================================
// TODO: 1. Napisz funkcję, która wyświetla console.log z dowolnym tekstem
/* TODO: 2. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName a następnie:
    - zwraca stringa z powitaniem, np: 'Hello my dear firstName lastName!'
    - wynik funkcji prtzypisz do zmiennej o nazwie greeting
    - zadeklaruj funkcję jako function declaration oraz jako function expression */
/* TODO: 3. Napisz funkcję, która przyjmuje dwa parametry: firstName oraz lastName. Następnie:
    - zwraca stringa z powitaniem (wykorzystaj z funkcję z zadania 3!) a do powitania
      dokleja stringa "I love you!"*
    - oczekiwana zwrotka: "Hello my dear firstName lastName! I love you!" */
// TODO: 4. Opakuj kod z tego pliku w IIFE.


(function () {
    function text() {
        console.log('lorem ipsum')
    };

    console.log(text());

    function greeting(firstName, lastName) {
        return 'Hello my dear ' + firstName + ' ' + lastName;
    }

    console.log(greeting('Jarek', 'Sopinski'));

    function lovelyGreeting(firstName, lastName) {
        return greeting('Jarek', 'Sopinski') + ' I love you';
    };

    console.log(lovelyGreeting())
});




