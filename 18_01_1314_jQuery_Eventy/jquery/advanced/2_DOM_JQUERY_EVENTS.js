/*
TODO:1. Napisz skrypt, który po spowoduje, że po,
kliknięciu elementu o #scroll-to-top, strona zostanie płynnie przewinięta do góry */

const $page = $('body, html'); // animacje do scrollowania wywołujemy zawsze dla całej strony
const $scrollToTopBtn = $('#scroll-top-btn');

function scrollToTop() {
    const animationTime = 800;

    $page.animate({scrollTop: 0}, animationTime); // animacja jest wywołana na całej stronie, czyli przesuwa całą stronę
    //scrollTop to pozycja scrolla, a zatem scrollTop: 0 oznacza górę strony.
}

$scrollToTopBtn.on('click', scrollToTop);

/*********************************************************************************************************

 TODO:2. Napisz skrypt, który spowoduje, że linki w menu będą przewijać do odpowiedniej sekcji */

// metoda offset() - zwraca pozycję elementu względem window. Ma dwie propercje: left i top, które działają w sposób
// analogiczny do pozycji relatywnych, a zatem przykładowo offset().top o wartości 50 to odsunięcie o 50px od góry ekranu.

const $navbar = $('.navbar-nav');
const $navLinks = $navbar.find('a'); //metoda .find() wyszukuje elementy o zadanym selektorze w dół drzewa

function scrollToSection() {
    const animationTime = 400; // dla linków lepszy jest wolniejszy czas...
    const anchor = $(this).attr('href'); //this będzie przy wywołaniu odnosić się do $navLinks,
    // czyli alternatywnie można zapisać $navLinks.attr('href').
    // 'Kotwica' odnosi się do atrybutu href każdego linku, czyli miejsca, do którego kierują.

    //ROZWIĄZANIE ZADANIA 3:

    $(this)
        .parent() //rodzic elementu 'a' to element 'li'
        .addClass('active')
        .siblings()
        .removeClass('active');

    //koniec rozwiązania zadania 3

    $page.animate({scrollTop: $(anchor).offset().top}, animationTime);

    // scrollTop, czyli pozycja scrolla, ma wartość pozycji anchora, odczytaną z użyciem metody offset()
    // WAŻNE! zmienna anchor musi być tutaj opakowana w jQuery;
    // jeżeli zapiszę to jako anchor.offset().top, funkcja nie zadziała.
}

$navLinks.on('click', scrollToSection);

/*
***************************ALTERNATYWNE ROZWIĄZANIE Z DELEGACJĄ:*****************************************

const $navLinks = $('ul');

$navLinks.on('click', 'a', function() {
    const anchor = $(this).attr('href');
    const animationTime = 400;

    $(this)
        .parent()
        .addClass('active')
        .siblings()
        .removeClass('active');

    $page.animate({
        scrollTop: $(anchor).offset().top
    }, animationTime)
});
**********************************************************************************************************
 */

/* TODO:3. Rozszerz skrypt z zadania drugiego, tak aby dodawał klasę active do aktywnego elementu listy na kliknięcie go i czyścił pozostałe

(ROZWIĄZANIE PRZY ROZWIĄZANIU ZADANIA 2)
 */

/**********************************************************************************************************

 TODO:4. Napisz skrypt, który będzie nasłuchiwać na scroll window,
jeśli scroll wyniesie więcej niż 80px, to doda klasę navbar-effect do elementu o klasie .navbar
 */

function handleNavbarEffect() {
    const effectThreshold = 80;

    $(window).scrollTop() > effectThreshold ? // czy bieżąca pozycja scrolla jest większa od wartości zmiennej?
        $navLinks.addClass('navbar-effect') : //jeżeli tak, dodajemy klasę...
        $navLinks.removeClass('navbar-effect'); //jeżeli nie, nie dodajemy...

    // powyżej jest ternary operator (a>b? c : d)
}

$(window).on('scroll', handleNavbarEffect); // podczas przewijania strony, wywołuje się funkcja
// sprawdzająca wartość scrolla

//!!! Zwrócić uwagę na opakowanie window [$(window) oraz wywołanie scrollTop jako funkcję, z ()]
// Trzeba rozróżniać scrollTop jako metodę ( z ()) oraz jako wartość, to są dwie różne rzeczy!!!!!


/************************************************************************************************************

 TODO:5. Napisz skrypt, który nasłuchuje na zaznaczenie checkboxa #terms-cbx, jeśli jest zaznaczony, to button #send-btn
to ma być odblokowany */

const $termsCbx = $('#terms-cbx');
const $sendBtn = $('#send-btn');

// .prop() - metoda jQuery, która zwraca wartość propercji danego elementu (propercja przekazywana jako parametr)
// Można dodać drugi parametr, true albo false, przykładowo: $( "input" ).prop( "disabled", false );

const isCheckboxChkd = () => {
    $termsCbx.prop('checked') ?
        $sendBtn.prop('disabled', false) :
        $sendBtn.prop('disabled', true);
};

$termsCbx.on('click', isCheckboxChkd);

/**********************************************************************************************************

 ALTERNATYWNE ROZWIĄZANIE, BEZ IF / ELSE:

 function toggleSubmitBtnDisability() {

    const isTermsCbxUnchecked = !$termsCbx.prop('checked'); // zmienna ma wartość false, jeżeli checkbox nie został zaznaczony
    $sendBtn.prop('disabled', isTermsCbxUnchecked); // jeżeli isTermsCbxUnchecked ma wartość false, to propercja 'disabled' nie zostanie wyłączona

}

 **********************************************************************************************************/

/* TODO:6. Wypełnij element select #cars, poniższą tablicą samochodów:
['BMW', 'Mazda', 'Mercedes', 'Audi'] */

const carsArray = ['BMW', 'Mazda', 'Mercedes', 'Audi'];
const $carsSelect = $('#cars');

const addList = carsArray.forEach(car => {
    $carsSelect.append($(`<option value="${car}">${car}</option>`)) // `` to template strings z ES6
}); // <select> składa się z sub-elementów <option>, do których trzeba przypisać 'value'
// czyli każdy samochód z tablicy jest appendowany zarówno do <select>, jak i jako wartość <option>

// lepiej nie używać tutaj mapa, bo map zwraca nową tablicę (co jest zbędne)

/*******************************************************************************************************

 ALTERNATYWNE ROZWIĄZANIE - NAJBARDZIEJ EFEKTYWNE

 const cars = ['BMW', 'Mazda', 'Mercedes', 'Audi'];
 const $carsList = $('#cars');

 const getOptions = () => {
    return cars.map(car => $(`<option value="${car}">${car}</option>`));
};

 $carsList.append(getOptions());


 *******************************************************************************************************/

// TODO:7. Napisz metodę, która wyświetli w konsoli wybraną wartość z selecta z listą samochodów, po kliknięciu tego selecta

function showSelectedCar() {
    console.log($(this).val());
}

$carsSelect.on('change', showSelectedCar);

/*
Odnośnie eventa 'change', z dokumentacji:
The change event is fired for <input>, <select>, and <textarea> elements when a change to
the element's value is committed by the user.
Unlike the input event, the change event is not necessarily fired for each change to an element's value.
 */

/**********************************************************************************************************

 TODO:8. Napisz skrypt, który sprawdzi poprawność powtórznego hasła oraz jego wymagana długość (conajmniej 6 znaków).
jeśli warunki zostaną spełnione, odblokuj guzik #submit-btn */

const submitButton = $('#submit-btn');
const $passInput = $('#pass-input');
const $repeatPassInput = $('#repeat-pass-input');

function togglePasswordSubmitBtnDisability() {
    const passwordLengthThreshold = 6; // zmienna do sprawdzania wymaganej długości hasła

    const isPasswordLongEnough = () => $passInput.val().length >= passwordLengthThreshold;
    // zwraca true jeśli długość inputa jest równa lub dłuższa 6
    const arePasswordsEqual = () => $passInput.val() === $repeatPassInput.val();
    // zwraca true jeżeli oba inputy mają takie same wartości

    isPasswordLongEnough() && arePasswordsEqual() ? // czy obie funkcje zwracają true?
        submitButton.prop('disabled', false) : //jeżeli tak, to wyłączamy propercję 'disabled' (submit jest odblokowany)
        submitButton.prop('disabled', true); // jeżeli nie, propercja 'disabled' pozostaje włączona
}

$repeatPassInput.on('keyup', togglePasswordSubmitBtnDisability);

/********************************************************************************************************

 ALTERNATYWNE ROZWIĄZANIE:

 function isPassInvalid() {
    const MIN_REQUIRED_PASS_LENGTH = 6;
    return $passInput.val() !== $passRepeatInput.val() ||
        $passInput.val().length < MIN_REQUIRED_PASS_LENGTH;
}

 function validateSubmitBtn() {
    $submitBtn.prop('disabled', isPassInvalid());
}

 $passInput.add($passRepeatInput).on('keyup', validateSubmitBtn); // add - łaczy selektory w 1

 ******************************************************************************************************/

/* TODO:EXTRAS!. ZADANIE DODATKOWE W MIEDZYCZASIE!
/ Na podstawie tablicy userów:
[
   {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
   {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
   {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
   {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

- stworzyć dynamicznie tabelę <table> i wypełnić ją danymi z tablicy users. (mamy!)

A.
- Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa
  ma wyświetlić w konsoli ID danego użytkownika
- Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd
- rząd powinien zawierać klasę table-row
- komórka powinna zawierać klasę table-cell
- najechanie na rząd ma go podświetlić

B.
- nad tabela być formularz, który pobiera dane usera i puszuje go do tablicy users i od razu pokazuje na widoku.
- formularz ma mieć select, z 5 miastami do wyboru (Twoja decyzja), pozostałe wartości pobrane z inputów textowych
- przycisk do dodania użytkownika ma być odblokowany jeśli wiek age > 18 a firstName ma więcej niż 3 litery
*/

