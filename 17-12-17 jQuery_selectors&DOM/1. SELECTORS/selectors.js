// TODO: Złap w selektor jQuery poniższe elementy i zapisz je do zmiennej o stosownej nazwie:
// 1. TODO: element o ID best-hero

var $bestHeroID = $('#best-hero');

// 2. TODO: elementy o klasie hero

var $heroes = $('.hero');

// 3. TODO: element o klasie heroes-list

var $heroesListClass = $('.heroes-list');

// 4. TODO: trzeci element listy heroes-list

var $thirdHero = $('#best-hero');
var $thirdHero2 = $('.hero:nth-child(2n)');

// 5. TODO: elementy o klasie hero, nie zawierające elementu z id best-hero (użyć NOT z jQuery)

$heroes.not('#best-hero'); //używam wcześniejszej zmiennej

// 6. TODO: tylko parzyste elementy listy heroes-list

$('li:even');


// 7. TODO: element nav

$('nav').css('color', 'red'); // przykładowe ostylowanie


// 8. TODO: obiekt document

$('document')

// 9. TODO: obiekt window

$('window');

// 10.TODO: jednocześnie elementy o klasach container i row

$('.container, .row');


// 11.TODO: jednocześnie elementy o klasach heroes-list i hero

$('.heroes-list, .hero');

