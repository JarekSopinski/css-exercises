/* TODO:4 Za pomocą fetch API, dodaj pytanie do fefaq, użyj metody POST
 Przykładowy obiekt body = {
     question: 'some text',
     level: 'junior' (lub mid lub senior)
     category: 'html' (lub np 'js')
 }

 Pamiętaj, aby użyć metody JSON.stringify na obiekcie z body!
 Dane do body zbierz z formularza. Dane wyślij dodając event click na submit button.
 */

const $submitBtn = $('#submit');
const $questionBody = $('#question-body');
const $questionLevel = $('#question-level');
const $questionCategory = $('#question-category');
const $postMessage = $('#post-message');

const url = 'https://api.fefaq.pl/questions';


$submitBtn.on('click', function (e) {

    e.preventDefault();

    const question = $questionBody.val();
    const level = $questionLevel.val();
    const category = $questionCategory.val();

    const newQuestion = {
        question: question,
        level: level,
        category: category
    };

    localStorage.setItem('questionBody', JSON.stringify(newQuestion));
    // zapisanie pytania w local storage

    console.log(newQuestion);

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newQuestion),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .catch(error => $postMessage.text('Nie udało się wysłać pytania!'))
        // catch nie przerywa łańcucha promisów!
        .then(response => $postMessage.text('Pomyślnie wysłano pytanie'))
        //.then(localStorage.setItem('myKey', 'Test local storage'))
        .then(console.log(localStorage.getItem('questionBody')))

});


/*
const postQuestion = (body) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
    })
};

const sendQuestion = (e) => {
    e.preventDefault();

    const body = {
        question: $questionBody.value,
        level: $questionLevel.value,
        category: $questionCategory.value
    };

    postQuestion(body)
        .then(res => res.json())
        .catch(error => $postMessage.text('Nie udało się wysłać pytania!'))
        .then(response => $postMessage.text('Pomyślnie wysłano pytanie'));
};

$submitBtn.addEventListener('click', sendQuestion);
 */

/* TODO:4.b jeśli pomyślnie dodałeś pytanie, wyświetl paragraf, że pomyślnie wysłano pytanie */
/* TODO:4.c powyższy paragraf ma zniknąć po 3 sekundach */
/* TODO:4.d obsłuż wyjątek - jeśli otrzymasz error, pokaż console.log z jakąś wiadomością */
/* TODO:4.e obsłuż wyjątek - jeśli otrzymasz error, pokaż paragraf z errorem i ukryj go po 3 sekundach */