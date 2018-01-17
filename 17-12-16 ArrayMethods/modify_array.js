let names = ['Janek', 'Bolek', 'Rysiu'];

// 1. TODO. Do tablicy names dodaj parę imion na koniec tablicy

names.push('Adam', 'Tomek');

console.log(names);

// 2. TODO. Z tablicy names usuń imię z końca tablicy

names.pop();
console.log(names);

// 3. TODO. Z tablicy names usuń imię z początku tablicy

names.shift();
console.log(names);

// 4. TODO. Do tablicy names dodaj parę imion na początek tablicy

names.unshift('Carl', 'Neal');
console.log(names);


// 5. TODO: Do tablicy names, dołącz tablicę englishNames (zmodyfikuj)

const englishNames = ['Monica', 'Jessica', 'John'];

names = names.concat(englishNames);
console.log(names);

// 6. TODO: Skopiuj tablicę names bez referencji

let copiedNames = [...names];
copiedNames.push('Vader');
console.log(copiedNames);
console.log(names);
