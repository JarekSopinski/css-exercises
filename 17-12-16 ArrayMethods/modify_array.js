var names = ['Janek', 'Bolek', 'Rysiu'];

// 1. TODO. Do tablicy names dodaj parę imion na koniec tablicy


names.push('Brajan', 'Dżesika');


// 2. TODO. Z tablicy names usuń imię z końca tablicy

names.pop();

// 3. TODO. Z tablicy names usuń imię z początku tablicy

names.shift();


// 4. TODO. Do tablicy names dodaj parę imion na początek tablicy

names.unshift('Janusz', 'Bożena');

// 5. TODO: Do tablicy names, dołącz tablicę englishNames (zmodyfikuj)
var englishNames = ['Monica', 'Jessica', 'John'];

names = names.concat(englishNames);

// 6. TODO: Skopiuj tablicę names bez referencji

var copiedNames = [...names]; // kopiowanie bez referencji powoduje, że zmiany skopiowanej tablicy nie modyfikują już pierwszej tablicy,
// obie tablice nie są już ze sobą powiązane.
