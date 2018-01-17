// 1. TODO: Posortuj tablicę względem powierzchni, malejąco

const countriesDecreasing = countries.sort((prev, next) => {
    return next.area - prev.area
});

console.log(countriesDecreasing);


/* 2. TODO: Posortuj tablicę względem liczby ludności, rosnąco, i zwróć tylko
    tablicę obiektów, które mają tylko nazwy krajów i ich populację */

const populationIncreasing = countries
    .sort((prev, next) => prev.population - next.population)
    //.map(country => {return country.name + ' - ' + country.population});
    .map(({ name, population }) => ({name, population}));

console.log(populationIncreasing);

// 3. TODO: Dla każdego, zawołaj poniższą funkcję:

function helloFromCountry(country) {
    console.log('Pozdrowienia z ' + country.name);
}

const helloByCountry = countries.forEach(country => {
    return helloFromCountry(country)
});

console.log(helloByCountry);


// 4. TODO: Znajdź kraj, którego domena to ".cn"

const checkDomain = (country) => {return country.topLevelDomain === '.cn'};

const findCountryWithDomain = countries.find(country => {
    return checkDomain(country)
});

console.log(findCountryWithDomain);

const isDomain = countries.find(({ topLevelDomain }) => topLevelDomain.includes('.cn'));

console.log(isDomain);

// 5. TODO: Zwróć sumę populacji krajów, które mają za sąsiada Polskę

const PolandNeighboursPopulation = countries
    .filter(country => country.borders.includes('POL'))
    .reduce((acc, next) => acc + next.population, 0);

console.log(PolandNeighboursPopulation);


// 6. TODO: Sprawdź, czy wszyscy sąsiedzi Chin, mają razem populację większą niż Chiny (zadanie na szóstkę!)

const China = countries.find(({name}) => name === 'China');
console.log(China);

const ChinaNeighboursPopulation = countries
    .filter(country => country.borders.includes('CHN'))
    .reduce((acc, next) => {return acc + next.population}, 0);

console.log(ChinaNeighboursPopulation);

const isChinaNeighboursBigger = () => ChinaNeighboursPopulation > China.population; //true

console.log(isChinaNeighboursBigger());


/* 7. TODO: Dana jest tablica users. Napisz funkcję, która jako parametr przyjmuje
      ID usera i usuwa element o usera o zadanym ID. */

var users = [
    { id: 1, name: 'John'},
    { id: 5, name: 'Monica'},
    { id: 12, name: 'Luke'},
    { id: 17, name: 'Mike'}
];

const removeUser = id => {
    const ids = users.indexOf(user => user.id); // [1,5,12,17]
    const index = ids.indexOf(id); // czy 12?  index === 2

    users.splice(index, 1);
};

removeUser(5);
console.log(users);

