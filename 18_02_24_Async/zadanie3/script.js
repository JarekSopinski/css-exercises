/* TODO:3 Za pomocą fetch API, pobierz dane z fefaq.pl i wyświetl dane w tabeli
   LINK do serwera: https://api.fefaq.pl/questions */

const getRow = question => {
    return `
        <tr>
            <td>${question.question}</td>
            <td>${question.level}</td>
            <td>${question.category}</td>
        </tr>
    `
};

const displayQuestions = questions => {
    const table = document.getElementById('questions');
    const rows = questions
        .map(question => getRow(question))
        .join();

    table.innerHTML = rows;
};

/* TODO:3.b Po pobraniu danych, zmień kolor tła strony na żółty */
/* TODO:3.c Po pobraniu danych, przypisz je do poniższej zmiennej o nazwie questions */
let questions;
