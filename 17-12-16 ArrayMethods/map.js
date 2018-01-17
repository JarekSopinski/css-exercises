// 1. TODO: Zmapuj tablicę countries tak, aby zwrócić tablicę samych nazw krajów

const getCountriesNames = countries.map(country => {return country.name});

// 2. TODO: Zmapuj tablicę countries, oczekiwany string w tablicy wynikowej:
// "NAME ma powierzchnię AREA km2 a populacja wynosi POPULATION ludzi"
// Przykład: "Afganistan ma powierzchnię 652230 km2 a populacja wynosi 27657145 ludzi"

const getCountriesArea = countries.map(country => {return country.area});
const getCountriesPopulation = countries.map(country => {return country.population});

const getCountryInfo = countries.map(country => {
    return country.name + ' ma powierzchnie ' + country.area + ' km2 a populacja wynosi ' + country.population + ' ludzi.'
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

const getCountryDetails = countries.map(country => {
    return {
        kraj: country.name.toUpperCase(),
        stolica: country.capital,
        region: country.region,
        sasiedzi: country.borders.length > 0 ? country.borders.join(' ') : 'BRAK',
        domena: country.topLevelDomain.join(),
        strefaCzasowa: country.timezones.join(),
        numerKierunkowy: country.callingCodes.join()
    }
});





