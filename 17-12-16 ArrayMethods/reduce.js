// 1. TODO: Zwróć łączną liczbę ludności na świecie

var allPeople = countries.reduce(function (acc, next) {
    return acc + next.population
}, 0);

// 2. TODO: Zwróć obiekt, którego klucze to nazwy krajów, a wartości to populacja

var namesAndPopulation = countries.reduce(function (acc, next) {
    return Object.assign(acc, {[next.name.toLowerCase()] : next.population});
}, {});


// 3. TODO: Zwróć stringa, którego zawiera wszystkie nazwy stolic są oddzielone spacją

var capitalNames = countries.reduce(function (acc, next) {
    return acc + next.capital + ' ';
}, '');


// 4. TODO: Zwróć tablicę ze wszystkimi altSpellings

var altSpellings = countries.reduce(function (acc, next) {
    return acc.concat(next.altSpellings)
}, []);




