
let $hero = $('.hero');


/* TODO:1. Na kliknięcie elementu listy, dodaj klasę "active", na odkliknięcie usuń.
 */

function heighlight() {
    $(this).toggleClass('active');
}

$hero.on('click', heighlight);

/* TODO:2. Wykorzystaj event "mouseenter" i "mouseleave", aby podświetlać element listy po najechaniu myszką
np za pomocą metody css() lub addClass() / removeClass() */

function heighlightOnMouse() {
    $(this).addClass('active')
}

function removeHeighlightOnMouse() {
    $(this).removeClass('active')
}

$hero.mouseenter(heighlightOnMouse);
$hero.mouseleave(removeHeighlightOnMouse);

/* TODO:3. Dodaj w pliku HTML input i paragraf. W paragrafie pokazuj aktualną wartość textową inputa.
Skorzystaj z metody val(), którą posiada input opakowany w obiekt jQuery.
 */

let $inputValue = $('#inputValue');
let $input = $('input');

function addText() {
    $inputValue.text($input.val())
}

$input.keyup(addText);

/* TODO:4. Wykorzystaj event scroll na obiekcie window i pokaz w konsoli aktualną wartość scrolla
 */

let $window = $('window');

$window.on('scroll', function () {
    console.log($(this).scrollTop());
});


/* TODO:5. Na kliknięcie elementu listy, przypnij eventHandler z parametrem, który zmieni kolor textu (kolor ma być parametrem)!.
 */

function changeColor(color) {
    return function (event) {
        $(this).css('color', color);
    }
}

$hero.on('click', changeColor('brown'));

/* TODO:6. Powtórz zadanie nr 1 przy użyciu event delegation
 */

const $list = $('ul');

$list.on('click', 'li', heighlight);

/* TODO:7. Odepnij event w jednym z powyższych przykładow

 */

$('li').last().off('click');
