/* TODO.1 Stwórz element BUTTON w HTML. Następnie podepnij się pod ten przycisk i:
- po najechaniu na przycisk, kolor strony ma się zrobić żółty
- po zjechaniu, tło ma wrócić do koloru białego
- wykorzystaj eventy mouseenter oraz mouseleave.

document.getElementById('button').addEventListener('mouseleave', function(event) {
	console.log(this);
	console.log('jestem buttonem, który ma przypięty eventHandler na mouseever');
});
 */

let body = document.getElementsByTagName('body')[0]; // [0] - ważne, tak trzeba przy grupie elementów!!!!!
let button = document.getElementById('button'); // tutaj nie trzeba numeru indeksu, bo jest tylko jedno id
let input = document.getElementById('input');
//let counter = 0;

button.addEventListener('mouseenter', function (event) {
    console.log('test');
    body.style.backgroundColor = 'yellow';
});

button.addEventListener('mouseleave', function (event) {
    console.log('test');
    body.style.backgroundColor = 'white';
});

/* TODO.2 Stwórz element INPUT w HTML. Następnie podepnij się pod ten input i:
 - na focus inputa, input ma dostać zielony border o grubości 2px.
 - na blur inputa (utrata focusa), ma stracić zielony border.
 - nadanie bordera ma następić poprzez dodanie klasy (podpowiedź: element.classList.add(nazwa_klasy))
 */

input.addEventListener('focus', function (event) {
    //console.log('test');
    this.classList.add('greenBorder') // klasa ze stylesheeta
});

input.addEventListener('blur', function (event) {
    this.classList.remove('greenBorder')
});


/* TODO.3 Podepnij się pod event 'scroll' obiektu window i na scrolla:
 - co każdy ruch scrolla, powinien wyświetlić się console.log z aktualną wartością scrolla.
 */

window.addEventListener('scroll', function (event) {
    //counter ++;
    //console.log(counter);
    console.log(window.scrollY)
});
