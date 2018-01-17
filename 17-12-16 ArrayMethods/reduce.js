// 1. TODO: Zwróć łączną liczbę ludności na świecie

const getTotalPopulation = countries.reduce((acc, next) => {
    return acc + next.population
}, 0);

console.log(getTotalPopulation);

// 2. TODO: Zwróć obiekt, którego klucze to nazwy krajów, a wartości to populacja

const getPopulationByCountry = countries.reduce((acc, next) => {
    return Object.assign(acc, { [next.name.toLowerCase()]: next.population})
}, {});

console.log(getPopulationByCountry);

// 3. TODO: Zwróć stringa, który zawiera wszystkie nazwy stolic oddzielone spacją

const getCapitalNames = countries.reduce((acc, next) => {
    return acc + next.capital + ', '
}, '');

console.log(getCapitalNames);

// 4. TODO: Zwróć tablicę ze wszystkimi altSpellings

const getAltSpellings = countries.reduce((acc, next) => {
    return acc.concat(next.altSpellings)
}, []);

console.log(getAltSpellings);
