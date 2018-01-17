// 1. TODO. Wyłap kraje, których powierzchnia jest większa niż 1000000 km2 lub mniejsza niż 30000 km2

const bigAndSmall = countries.filter(country => {
    return country.area > 1000000 || country.area < 30000;
});

console.log(bigAndSmall);


// 2. TODO. Wyłap kraje, których powierzchnia jest mniejsza niż 5000000 km2 i liczba ludności większa od 10 mln.

const getOverpopulatedCounries = countries.filter(country => {
    return country.area < 5000000 || country.population > 10000000;
});

console.log(getOverpopulatedCounries);


// 3. TODO. Wyłap kraje, które mają co najmniej 3 sasiądów

const getCountriesWithThreeNeighbours = countries.filter(country => {
    return country.borders.length >= 3;
});

console.log(getCountriesWithThreeNeighbours);

// 4. TODO. Wyłap kraje, których region to europa

const getEuropeanCountries = countries.filter(country => {
    return country.region === 'Europe'
});

console.log(getEuropeanCountries);

// 5. TODO. Wyłap kraje, których stolica zaczna się na literę przekazaną w parametrze

const filterByLetter = (key, letter) => {
    return country => {
        return country[key].startsWith(letter)
    }
};

const getCapitalsByLetterP = countries.filter(filterByLetter('capital', 'P'));

console.log(getCapitalsByLetterP);

// 7. TODO. Wyłap kraje, które za sasiąda mają Niemców

const hasBorderWithGermany = countries.filter(country => {
    return country.borders.includes('DEU')
});

console.log(hasBorderWithGermany);

// 8. TODO: Sprawdź, czy czy jakikolwiek kraj ma stolicę na literę "Y"

const beginsWithY = countries.some(country => {
    return country.capital.startsWith('Y')
});

console.log(beginsWithY);

const beginsWithYfind = countries.filter(country => {
    return country.capital.startsWith('Y')
});

console.log(beginsWithYfind);

// 9. TODO: Sprawdź, czy wszystkie kraje mają populację powyżej 50 tys.

const checkPopulation = countries.every(country => {
    return country.population > 50000
});

console.log(checkPopulation);