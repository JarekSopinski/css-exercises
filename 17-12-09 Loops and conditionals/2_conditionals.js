/* TODO.1 Napisz instrukcję IF  / ELSE, która:
 - wyświetli console.log("Cześć, jestem junior devem!") w przypadku,
  jeśli zmienna developer jest równa 'junior js dev'
 - a jeśli nie jest, to wyświetli ("Jednak nie junior dev:( ");
 */

var developer = 'junior js dev';

if (developer = 'junior is dev') {
    console.log('Cześć, jestem junior devem!');
} else {
    console.log('Jednak nie junior dev :(');
}


/* TODO.2: Napisz instrukcję IF / ELSE IF / ELSE, która:
    - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest >= 67
    - wyświetli console.log("Średni wiek!") jeśli Twój wiek jest < 67 i > 33
    - wyświetli console.log("Czas na emeryturę!") jeśli Twój wiek jest <= 33 i > 18
    - wyświetli console.log("Hej młodziaku!") jeśli Twój wiek jest <= 18
 */

var myAge = 15;

if (myAge >= 67) {
    console.log('Czas na emeryturę!');
} else if (myAge < 67 && myAge > 33) {
    console.log('Średni wiek!');
} else if (myAge <= 33 && myAge > 18) {
    console.log('Czas na emeryturę!');
} else {
    console.log('Hej młodziaku!')
}

/* TODO.3: Napisz funkcję, która zwraca true jeśli:
    - wartość zmiennej skill jest równa 'javaScript' lub 'HTML' lub 'CSS'
 */

var skill = 'javaScript';

function isJavaScript(skill) {
    return skill === 'javaScript' || skill === 'HTML' || skill === 'CSS';
}



/* TODO.4: Napisz funkcję, która przyjmuje jako parametr stringa i zwraca true jeśli:
 - wartość przyjętego parametru jest różna od słowa JavaScript
 */

function dontKnowJS(skill) {
    return skill !== 'JavaScript';
}

console.log(dontKnowJS('CSS'));

/* TODO.5: Napisz funkcję isShopOpen, która przyjmuje jako parametr liczbę i zwraca true jeśli:
 - wartość parametru jest mniejsza niż 23 i większa od 6
 */

function isShopOpen(hour) {
    return hour > 6 && hour < 23;
}

//nie musimy używać if else przy samym porównywaniu wartości, tylko wtedy, gdy wykonujemy jakąś instrukcję!!!

console.log(isShopOpen(24));
console.log(isShopOpen(22));



/* TODO.6: Wykorzystując funkcję isShopOpen i negację (!), napisz funkcję isShopClosed
    - która zwraca true, jeśli sklep jest zamknięty (czyli neguje wartość zwróconą z isShopOpen)
 */

function isShopClosed(hour) {
    return !isShopOpen(hour)
}

console.log(isShopClosed(22));

/* TODO.7: Wykorzystując SWITCH, napisz funkcję, która jako parametr przyjmuje stringa o nazwie day i:
 - która wyrzuca w konsoli wymyślony tekst, w zależności czy "case" jest spełniony
 - case mają odpowiadać kolejnym dniom: "Monday", "Tuesday", "Wednesday" etc...
 - ma być 7 warunków (7 dni)
 - w przypadku jeśli case nie pasuje do żadnego przypadku, to funkcja ma wyświetlić w konsoli tekst: "Taki dzień nie istnieje!";
 */


function checkDay(day) {


    switch (day) {
        case 'Monday':
            console.log('Work');
            break;
        case 'Tuesday':
            console.log('Work harder');
            break;
        case 'Wednesday':
            console.log('Work even harder');
            break;
        case 'Thursday':
            console.log('Prepare for weekend');
            break;
        case 'Friday':
            console.log('Party hard');
            break;
        case 'Sunday':
            console.log('Party harder');
            break;
        case 'Saturday':
            console.log('Hangover');
            break;
        default:
            console.log('Taki dzień nie istnieje!');
    }
}

// jeżeli używamy return, break jest zbędny (bo return zawsze kończy działanie funkcji)



/* TODO.8: Wykorzystując TERNARY OPERATOR:
    - przypisz do zmiennej discount wartość: '2.00$' jeśli isMember = true a jeśli nie to '10.00$';
        czy
  */

var isMember = false;

var discount = isMember = true ? '2.00$' : '10.00$';

console.log(discount);

