/* TODO:2 Za pomocą funkcji setInerval, wyświetlaj aktualny czas w elemencie o id timer. Możesz skorzystać
 * z metody obiektu Date o nazwie toLocaleTimeString(); */

const $timer = $('#timer');

const displayDate = setInterval(function () {
    const currentDate = new Date();
    $timer.text(currentDate)
},1000);

/* TODO:2.b) za pomocą funkcji clearInterval, czyść zegar z czasu na kliknięcie stworzonego przycisku */

const $stopBtn = $('#stop-btn');

$stopBtn.on('click', function () {
    clearInterval(displayDate)
});


/* TODO:2.c) za pomocą funkcji setTimeout, po 15 sekundach pokaż diva z informacją, że wygrałeś milion dolarów:P */

const $message = $('#message');

setTimeout(function () {
    $message.text('Wygrałeś milion dolarów!')
}, 15000);
