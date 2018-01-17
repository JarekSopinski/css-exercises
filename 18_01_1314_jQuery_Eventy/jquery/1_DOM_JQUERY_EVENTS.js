
/* TODO:1. Na kliknięcie elementu listy, dodaj klasę "active", na odkliknięcie usuń.
 */

const $hero = $('.hero');

function addActiveClass() {
    $(this).toggleClass('active') //metoda toggleClass do przełączania klasy
}

$hero.on('click', addActiveClass);

/* TODO:2. Wykorzystaj event "mouseenter" i "mouseleave", aby podświetlać element listy po najechaniu myszką
np za pomocą metody css() lub addClass() / removeClass() */

function addHighlight() {
    $(this).css('background-color', 'red')
}

function removeHighlight() {
    $(this).css('background-color', 'white')
}

// sposób 1:

$hero.on('mouseenter', addHighlight);
$hero.on('mouseleave', removeHighlight);

// sposób 2 - wiele eventów naraz:

/*

$('ul').on({
    mouseenter: highlightOnOver,
    mouseleave: highlightOnLeave
}, 'li'); // delegacja do LI
*/

/* TODO:3. Dodaj w pliku HTML input i paragraf. W paragrafie pokazuj aktualną wartość textową inputa.
Skorzystaj z metody val(), którą posiada input opakowany w obiekt jQuery.
 */

$('body').append($('<input>'));
$('body').append($('<p>Tutaj pokazuje się wynik inputa</p>'));

const $input = $('input');
const $paragraph = $('p');

const showInputValue = () => {
    $paragraph.text($input.val())
};

$input.on('keyup', showInputValue);

/* TODO:4. Wykorzystaj event scroll na obiekcie window i pokaz w konsoli aktualną wartość scrolla
 */

$(window).on('scroll', function() {
    console.log($(this).scrollTop()); //metoda scrollTop() zwraca bieżącą wertykalną pozycję scrolla
});

/* TODO:5. Na kliknięcie elementu listy, przypnij eventHandler z parametrem, który zmieni kolor textu 
(kolor ma być parametrem)!.
 */

function changeColor(color) {
    return function () { //żeby parametr zadziałał, trzeba właściwą funkcję opakować w jeszcze jedną (anonimową) funkcję
        $(this).css('color', color) // przekazujemy parametr 'color'
    }
}

$hero.on('click', changeColor('blue'));

/* TODO:6. Powtórz zadanie nr 1 przy użyciu event delegation
 */

const $heroesList = $('ul'); // tym razem zamiast do elementu (.hero) odnosimy się do całej listy (rodzica .hero)

$heroesList.on('click', 'li', addActiveClass); // li jest elementem listy, do którego będzie delegacja (jeśli zostanie dodany nowy)
// addActiveClass to funkcja z zadania 1.

$heroesList.append($('<li>').text('Superman')); // teraz po dodaniu nowego li, nowe li również zostanie podświetlone
//żeby działało poprawnie, trzeba najpierw wykomentować pierwsze wywołanie (11 linijka), albo zmienić toggle na add

/* TODO:7. Odepnij event w jednym z powyższych przykładow
*/

$heroesList.last().off('click');


