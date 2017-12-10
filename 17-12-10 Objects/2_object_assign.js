/* 1. TODO. Dany jest obiekt superman i powers. Stworz nowy obiekt supermanWithPowers, nie modyfikując żadnego
z obiektów superman i powers) */

var superman = {
    origin: 'Krypton',
    alterEgo: 'Klark Kent'
};

var powers = {
    speed: 300,
    strength: 200
};

var supermanWithPowers = Object.assign({}, superman, powers); //pusty obiekt żeby superman nie został zmodyfikowany, zawsze modyfikowany jest pierwszy

console.log(supermanWithPowers);

/* 2. Puść pętlę po obiekcie supermanWithPowers i wyświetl w konsoli klucze oraz wartości.*/

for (var key in supermanWithPowers){
    console.log(key);
}

/* 3. Z użyciem Object.keys stwórz tablicę o nazwie supermanKeys, która trzyma klucze obiektu
supermanWithPowers */

Object.keys(supermanWithPowers);
Object.keys(supermanWithPowers); // tylko w ES7

/* 4. Podepnij z CDN bibliotekę lodash w pliku index.html. Wykorzystaj metodę isEqual, do sprwadzenie czy obiekty
  woman i man mają te same wartości
 */

var man = {
    legs: 2,
    hasHands: true
};

var woman = {
    legs: 2,
    hasHands: true
};

var equalizer = _.isEqual(man, woman); // wymagana 'podłoga' przed isEqual -> _.isEqual
console.log(equalizer);

// w samym JS nie ma narzędzia do porównywania obiektów, dlatego trzeba korzystać z zew. bibliotek. Sam JS zawsze pokaże false przy porów. obiektów.




