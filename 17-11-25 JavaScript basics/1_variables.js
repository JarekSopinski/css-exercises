// TODO: 1. Podepnij ten plik do pliku index.html
// TODO: 2. Zadeklaruj 2 zmienne typu string
// TODO: 3. Zadeklaruj 2 zmienne typu number
// TODO: 4. Zadeklaruj 2 zmienne typu boolean
// TODO: 5. Zadeklaruj zmienna typu undefined
// TODO: 6. Zadeklaruj zmienna typu null
// TODO: 7. Zadeklaruj tablicę zawierajacą zmienne typu string
// TODO: 8. Zadeklaruj tablicę zawierajacą zmienne różnego typu
// TODO: 9. Zadeklaruj obiekt o nazwie person zawierajacy pola:
//  - firstName
//  - lastName
//  - age
//  - country
// TODO: 10. Sprawdź typ co najmniej jeden zmiennej z poprzednich zadań
// TODO: 11. Nadpisz wartość dowolnej zmiennej zadeklarownej w poprzednim zadaniu

// WYNIKI WYŚWIETL W KONSOLI: np.
var name = 'Tomek';
console.log('Ex.1', name);

var firstName = 'Jarek';
var lastName = 'Sopinski'
var city = 'Gdansk';
var age = 29;
var height = 175;
var isHuman = true;
var isWoman = false;
var stomach = null;
var question;

var strings = [firstName, city];
console.log(strings);

var various = [firstName, age];
console.log(various);

var person = {
    firstName: 'Jarek',
    lastName: 'Sopinski',
    age: age,
    country: 'Poland'
};

console.log(person);

console.log(typeof firstName);

var age = 10;
console.log(age);

delete age;
console.log(age);




