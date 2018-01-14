/* TODO:1. Napisz skrypt, który po spowoduje, że po,
kliknięciu elementu o #scroll-to-top, strona zostanie płynnie przewinięta do góry */

const $scrollToTopBtn = $('#scroll-top-btn');
const $page = $('body, html');

function scrollToTop() {
    const animationTime = 800;
    $page.animate({scrollTop: 0}, animationTime)
}

$scrollToTopBtn.on('click', scrollToTop);

//TODO:2. Napisz skrypt, który spowoduje, że linki w menu będą przewijać do odpowiedniej sekcji

/*

const $navLinks = $('ul');

function scrollToSection() {
    const animationTime = 400;
    const $anchor = $navLinks.attr('href');

    $(this)
        .parent()
        .addClass('active')
        .siblings()
        .removeClass('active');

    $page.animate({ scrollTop: $anchor.offset().top }, animationTime);
};
*/

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


//TODO:3. Rozszerz skrypt z zadania drugiego, tak aby dodawał klasę active do aktywnego elementu listy na kliknięcie go i czyścił pozostałe

//rozwiązanie w ptk 2

/* TODO:4. Napisz skrypt, który będzie nasłuchiwać na scroll window,
jeśli scroll wyniesie więcej niż 80px, to doda klasę navbar-effect do elementu o klasie .navbar */


const $navbar = $('.navbar');

$('window').on('scroll', function () {
    $(this).scrollTop() > 80 ? $navbar.addClass('navbar-effect') : $navbar.removeClass('navbar-effect')
});

/* TODO:5. Napisz skrypt, który nasłuchuje na zaznaczenie checkboxa #terms-cbx, jeśli jest zaznaczony, to button #send-btn
to ma być odblokowany */

const $terms = $('#terms-cbx');
const $sendBtn = $('#send-btn');

const unlockSendBtn = () => {
    if ($terms.prop('checked')) {
    $sendBtn.prop('disabled', false);
    } else {
        $sendBtn.prop('disabled', true);
    }
    /*
    alternatywnie zamiast if / else:
    const isTermsCbxUnchecked = !$termsCbx.prop('checked');
    $submitBtn.prop('disabled', isTermsCbxUnchecked)
     */
};

$terms.on('click', unlockSendBtn);

/* TODO:6. Wypełnij element select #cars, poniższą tablicą samochodów:
['BMW', 'Mazda', 'Mercedes', 'Audi'] */

const $cars = $('#cars');
const carList = ['BMW', 'Mazda', 'Mercedes', 'Audi'];

/*

const addList = (array) => {
    for (let i = 0; i < array.length; i++) {
        $cars.append($(`<option value="${array[i]}">${array[i]}</option>`)) // `` <- te znaki to template string, typ stringa w ES6 w którym można sięgać do parametrów zamiast pisać plus jak w klasycznych stringach
    }
};

addList(carList);

*/

const addList = carList.forEach(car => {
    $cars.append($(`<option value="${car}">${car}</option>`)) // nie używać mapa, bo map zwraca nową tablicę (co jest zbędne)
});

/*
NAJBARDZIEJ EFEKTYWNA OPCJA:
function getOptions() {
    return cars.map(car => $(`<option value="${car}">${car}</option>`))
    }

 */

/* TODO:7. Napisz metodę, która wyświetli w konsoli wybraną wartość z selecta z listą samochodów, po kliknięciu tego selecta */

function showSelectedCar () {
    console.log($(this).val());
};

$cars.on('click', showSelectedCar);

/* TODO:8. Napisz skrypt, który sprawdzi poprawność powtórznego hasła oraz jego wymagana długość (conajmniej 6 znaków).
jeśli warunki zostaną spełnione, odblokuj guzik #submit-btn */

const $submitBtn = $('#submit-btn');
const $passInput = $('#pass-input');
const $passRepeatInput = $('#repeat-pass-input');

function isPassInvalid() {
    const MIN_REQUIRED_PASS_LENGTH = 6;
    return $passInput.val() !== $passRepeatInput.val() && $passInput.val().length < MIN_REQUIRED_PASS_LENGTH;
}

function validateSubmitBtn() {
    $submitBtn.prop('disabled', isPassInvalid());
}

$passInput.add($passRepeatInput).on('keyup', validateSubmitBtn); //add - łączy selektory w 1

/* TODO:EXTRAS!. ZADANIE DODATKOWE W MIEDZY CZASIE!
/ Na podstawie tablicy userów:

   {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
   {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
   {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
   {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

- stworzyć dynamicznie tabelę <table> i wypełnić ją danymi z tablicy users.
- Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa
ma wyświetlić w konsoli ID danego użytkownika

- Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd (ikonę można wziąć z bootstrapa, glyphicona...)
- rząd powinien zawierać klasę table-row
- komórka powinna zawierać klasę table-cell
- najechanie na rząd (mouseover) ma podświetlić...
- niżej ma być formularz, który pobiera dane usera i pushuje go do tablicy users i od razu odświeża tablicę (jeszcze raz zawołać appenda)
*/

const users = [
    {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
    {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
    {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
    {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

//const getUsersIds = () => {return users.map(user => user.id)};

const table = $('<table class="table">').appendTo('body'); //klasa 'table' z bootstrapa

const getRowsWithUsers = () => {
    return users.map(user => {
        return $(` 
        <tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.city}</td>
        </tr>
    `) //template string
    })
};

table.append(getRowsWithUsers); // przypisanie wartości do zmiennej table



