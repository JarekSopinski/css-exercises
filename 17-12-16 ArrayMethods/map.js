// 1. TODO: Zmapuj tablicę countries tak, aby zwrócić tablicę samych nazw krajów

var countriesNames = countries.map(function(country) {
    return country.name;
}); //ES5

const countriesNames6 = countries.map((country) => country.name); // ES6

// 2. TODO: Zmapuj tablicę countries, oczekiwany string w tablicy wynikowej:
// "NAME ma powierzchnię AREA km2 a populacja wynosi POPULATION ludzi"
// Przykład: "Afganistan ma powierzchnię 652230 km2 a populacja wynosi 27657145 ludzi"


var countryDescription = countries.map(function (country){
   return country.name + ' ma powierzchnię ' + country.area + ' km2 a populacja wynosi ' + country.population + ' ludzi.';
});



// 3. TODO: Zmapuj tablicę countries, oczekiwane obiekty w tablicy wynikowej:
/*

    kraj: NAME, (wielkimi literami!)
    stolica: CAPITAL
    region: REGION,
    sasiedzi: TUTAJ STRING Z WSZYSTKIMI SASIADAMI (borders) - jeśli sasiadów nie ma, to sasiedzi = 'BRAK'
    domena: 'Domena internetowa to TOPLEVELDOMAIN'
    strefaCzasowa: "Strefa czasowa UTC+XX:XX" (lub więcej jeśli są)
    numerKierunkowy: "48" (lub więcej jeśli są)
}
*/

var countryInfo = countries.map(function (country) {
    return {
        kraj: country.name.toUpperCase(),
        stolica: country.capital.toUpperCase(),
        region: country.region.toUpperCase(),
        sasiedzi: country.borders.length > 0 ? country.borders.join(' ') : 'BRAK', // tenary operator
        strefaCzasowa: 'Strefa czasowa ' + country.timezones.join(),
        numerKierunkowy: country.callingCodes.join()
    }

});

console.log(countryInfo);
console.log(countryInfo[0]); // są sąsiedzi
console.log(countryInfo[0]); // nie ma sąsiadów

