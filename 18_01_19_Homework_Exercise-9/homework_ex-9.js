/* Na podstawie tablicy userów:
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

const users = [
    {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
    {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
    {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
    {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

const $table = $('<table class="table table-dark">').appendTo('main');

const addUsersToRows = () => {
    return users.map(user => {
        return $(`
        <tr>
            <td><input type="checkbox" class="user-info"></td>
            <td class="id">${user.id}</td>
            <td class="firstName">${user.firstName}</td>
            <td class="lastName">${user.lastName}</td>
            <td class="age">${user.age}</td>
            <td class="city">${user.city}</td>
            <td><button class="remove-icon" style="cursor: pointer">X</button></td>
        </tr>
        `)
    })
};

$table.append(addUsersToRows());

// Dodanie checkboxa wyświetlającego ID danego użytkownika:

const $userInfoChbx = $('.user-info');

$userInfoChbx.on('click', function () {
    const parentRow = $(this).closest('tr');
    const thisId = parentRow.find('.id');
    console.log(thisId.text());
});

// Dodanie X z klasą remove-icon, który usuwa dany rząd:

const $removeButton = $('.remove-icon');

$removeButton.on('click', function () {
    $(this).closest('tr').css('display', 'none')
});

// Dodanie klasy table-row:

$table.find('tr').addClass('table-row');

// Dodanie klasy table-cell:

$table.find('td').addClass('table-cell');

// Podświetlanie rzędu po najechaniu:

const $tableRow = $('.table-row');

function toggleHighlight() {
    $(this).toggleClass('active')
}

$tableRow.on('mouseenter', toggleHighlight);
$tableRow.on('mouseleave', toggleHighlight);

// Budowa formularza, który dodaje nowego usera:

const $newUserForm = $('<div id="newUserForm" style="padding: 50px 0"></div>');
$newUserForm.prependTo('main');

const $newUserId = $('<input class="id" placeholder="Input your ID">');
const $newUserFirstName = $('<input class="firstName" placeholder="Input your first name">');
const $newUserLastName = $('<input class="lastName" placeholder="Input your last name">');
const $newUserAge = $('<input class="age" placeholder="Input your age">');
const $newUserSendBtn = $('<button class="btn btn-primary" disabled>Submit</button>');

$newUserId.appendTo($newUserForm);
$newUserFirstName.appendTo($newUserForm);
$newUserLastName.appendTo($newUserForm);
$newUserAge.appendTo($newUserForm);
$newUserSendBtn.appendTo($newUserForm);

// Dodanie do formularza selecta z 5 miastami do wyboru:

const $newUserCity = $('<select id="cities"></select>');
$newUserCity.prependTo($newUserForm);

const cities = ['Gdansk', 'Sopot', 'Gdynia', 'Warszawa', 'Poznan'];

const addCities = cities.forEach(city => {
    $newUserCity.append($(`<option value="${city}">${city}</option>`))
});


// Przełączanie blokady przycisku wg wieku i długości imienia:

const toggleNewUserBtnDisability = () => {

    const ageThreshold = 18;
    const nameLengthThreshold = 3;

    $newUserFirstName.val().length >= nameLengthThreshold && $newUserAge.val() >= ageThreshold ?
        $newUserSendBtn.prop('disabled', false) :
        $newUserSendBtn.prop('disabled', true)

};

$newUserFirstName.on('keyup', toggleNewUserBtnDisability);
$newUserAge.on('keyup', toggleNewUserBtnDisability);


// Dodawanie nowego użytkownika za pomocą danych wprowadzonych do formularza:

$newUserSendBtn.on('click', function () {
    const id = $newUserId.val();
    const city = $newUserCity.val();
    const firstName = $newUserFirstName.val();
    const lastName = $newUserLastName.val();
    const age = $newUserAge.val();

    const newUser = {id: id, firstName: firstName, lastName: lastName, age: age, city: city};

    const addNewUser = () => {
        return $(`
        <tr>
            <td><input type="checkbox" class="user-info"></td>
            <td class="id">${newUser.id}</td>
            <td class="firstName">${newUser.firstName}</td>
            <td class="lastName">${newUser.lastName}</td>
            <td class="age">${newUser.age}</td>
            <td class="city">${newUser.city}</td>
            <td><button class="remove-icon" style="cursor: pointer">X</button></td>
        </tr>
        `)};

    $table.append(addNewUser());
});