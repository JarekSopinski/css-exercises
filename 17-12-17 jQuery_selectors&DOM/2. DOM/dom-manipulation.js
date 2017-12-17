var $heroes = $('.heroes-list');

/* TODO: 1. Do listy o klasie heroes-list dodaj nowy element listy <li> z nowym Heroesem:
// a) jako pierwszy element listy
// b) jako ostatni element listy */

var $newHero = $('<li>');
var $newHero2 = $('<li>');

$heroes.prepend($newHero.text('Wolverine'));
$heroes.append($newHero2.text('Superman'));

// TODO: 2. Za listą heroes-list dodaj paragraf z dowolonym tekstem

var $text = $('<p>');
var $text2 = $('<p>All these things will be lost...</p>'); //można napisać tekst już w zmiennej...
$heroes.after($text.text('I have seen things...')); // ... albo dopiero przy wywołaniu


// TODO: 3. Przed listą heroes-list dodaj paragraf z dowolnym tesktem

$heroes.before($text2);


// TODO: 4. Stwórz element <li> i dodaj go na początek listy heroes-list za pomocą prependTo

var $villain = $('<li>Loki</li>');
$villain.prependTo($heroes);


// TODO: 5. Stwórz element <li> i dodaj go na koniec listy heroes-list

var $villain2 = $('<li>Magneto</li>');
$villain2.appendTo($heroes);

// TODO: 6. Każdemu elementowi o klasie hero dodaj klasę marvel-hero i ostyluj ją w <head> w pliku index

$('.hero').addClass('.marvel-hero');

// TODO: 7. Z elementu o ID best-hero, usuń klasę hero

$('#best-hero').removeClass('hero');


// TODO: 8. Sprawdź czy pierwszy element listy posiada klasę disney-hero

$heroes.find('li').first().hasClass('disney-hero'); // output: false


// TODO: 9. Do ostatniego elementu listy dodaj klasę o wymyślonej nazwie

$heroes.find('li').last().addClass('wymyslonaNazwa');


// TODO: 10.Usuń ostatni element listy

$heroes.find('li').last().remove();

// TODO: 11.Wyczyść zawartość paragrafu o id "dom-info"

var $domInfo = $('#dom-info')
$domInfo.empty();


// TODO: 12.Do paragrafu o id "dom-info" dodaj nowy tekst
$domInfo.text('jakis tekst');


// TODO: 13.Do paragrafu o id "dom-info" za pomocą metody CSS() dodaj kolorowe tło

$domInfo.css('backgroundColor', 'red');

