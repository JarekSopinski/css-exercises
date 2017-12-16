///////// ES6 ////////////////////

/*
Trik na sortowanie liczb:

numbers.sort((prev, next) => prev - next); rosnąco
numbers.sort((prev, next) => next - prev); malejąco
 */

// 1. TODO: Posortuj tablicę względem powierzchni, malejąco

const areaDecreasing = countries.sort((prevCountry, nextCountry) => nextCountry.area - prevCountry.area);

console.log(areaDecreasing);

/* 2. TODO: Posortuj tablicę względem liczby ludności, rosnąco, i zwróć tylko
    tablicę obiektów, które mają tylko nazwy krajów i ich populację */

const populationIncreasing = countries
    .sort((prevCountry, nextCountry) => prevCountry.population - nextCountry.population)
    .map(({name, population}) => ({name, population})); ////gdyby nie było okrągłego nawiasu dodatkowego, JS by pomyślał że name population jest ciałem funkcji)


// 3. TODO: Dla każdego, zawołaj poniższą funkcję:

function helloFromCountry(country) {
    console.log('Pozdrowienia z ' + country.name);
}

const greetings = countries.forEach((country) => console.log('Pozdrowienia z ' + country.name));


// 4. TODO: Znajdź kraj, którego domena to ".cn"

//const isDomain = countries.find(({ topLevelDomain }) => topLevelDomain.borders.includes('.cn'));


// 5. TODO: Zwróć sumę populacji krajów, które mają za sąsiada Polskę

const populationSum = countries
    .filter((country) => country.borders.includes('POL'))
    .reduce((acc, next) => acc + next.population, 0);


// 6. TODO: Sprawdź, czy wszyscy sąsiedzi Chin, mają razem populację większą niż Chiny (zadanie na szóstkę!)

// bardziej zaawansowane rozwiązanie

const china = countries.find(({ name }) => name === 'China');

const chinaNeighboursPopulation = countries
    .filter(country => country.borders.includes(country.alpha3Code))
    .reduce((acc, next) => acc + next.population, 0);

console.log(china.population < chinaNeighboursPopulation);

/* 7. TODO: Dana jest tablica users. Napisz funkcję, która jako parametr przyjmuje
      ID usera i usuwa element o usera o zadanym ID. */

var users = [
    { id: 1, name: 'John'},
    { id: 5, name: 'Monica'},
    { id: 12, name: 'Luke'},
    { id: 17, name: 'Mike'}
];

const removeUser = id => {
    const ids = users.map(user => user.id); // [1, 5, 12, 17]
    const index = ids.indexOf(id); // czy 12? index === 2

    users.splice(index, 1);
};




