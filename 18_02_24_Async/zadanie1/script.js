/* TODO:1 Korzystając z funkcji jQuery ajax, wyświetl dane w tabeli za pomocą jQuery.ajax. */
/* LINK do serwera: https://api.fefaq.pl/questions */

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
    const $table = $('#questions');
    const rows = questions
        .map(question => getRow(question))
        .join();

    $table.append(rows);
};
