// 1. TODO. Wyłap kraje, których powierzchnia jest większa niż 1000000 km2 lub mniejsza niż 30000 km2


var bigAndSmallCountries = countries.filter(function (country) {
    return country.area < 30000 || country.area > 1000000;
    });

// 2. TODO. Wyłap kraje, których powierzchnia jest mniejsza niż 5000000 km2 i liczba ludności większa od 10 mln.

var smallAreaBigPopulation = countries.filter(function (country) {
    return country.area < 5000000 && country.population > 10000000;
});


// 3. TODO. Wyłap kraje, które mają co najmniej 3 sasiądów

var threeBorders = countries.filter(function (country) {
    return country.borders.length >= 3;
});


// 4. TODO. Wyłap kraje, których region to europa

var isEurope = countries.filter(function (country) {
    return country.region === 'Europe';
});

// 5. TODO. Wyłap kraje, których stolica zaczna się na literę przekazaną w parametrze

function getCountryByLetter(letter) {
    return function (country) {
        return country.name.startsWith(letter);
    }
    
}

var filterAtCountries = countries.filter(getCountryByLetter('P'));


// 7. TODO. Wyłap kraje, które za sasiąda mają Niemców

function hasBorderWithGermany(border) {
    return function (country) {
        return country.borders.includes(border); // ES6
        // return country.index.Of('DEU') !== -1; // ES5
    }

}

var filterGermany = countries.filter(hasBorderWithGermany('DEU'));

// 8. TODO: Sprawdź, czy czy jakikolwiek kraj ma stolicę na literę "Y"

function isCapitalFirstLetter(letter) {
    return function (country) {
        return country.capital.startsWith(letter);
    }
}

var filterCapitalNames = countries.some(isCapitalFirstLetter('Y'));


// 9. TODO: Sprawdź, czy wszystkie kraje mają populację powyżej 50 tys.

