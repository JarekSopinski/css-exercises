/* TODO:1 Korzystając z funkcji jQuery ajax, wyświetl dane w tabeli za pomocą jQuery.ajax. */
/* LINK do serwera: https://api.fefaq.pl/questions */

const $reactQuestionsCounter = $('#react-questions-counter');

const fetchData = () => {
    return $.ajax({
        url: 'https://api.fefaq.pl/questions'
    })
};


fetchData()
    .then((questions) => displayQuestions(questions)) // skrót: then(displayQuestions)
    .then(questions => {
        $reactQuestionsCounter.text(getNumberOfReactQuestions(questions))
    })


const getRow = question => {
    return `
        <tr class="section-${question.category}">
            <td>${question.question}</td>
            <td>${question.level}</td>
            <td>${question.category}</td>
        </tr>
    `
}; // dynamiczne stylowanie po nazwach kategorii


const displayQuestions = questions => {
    const $table = $('#questions');
    const rows = questions
        .map(question => getRow(question))
        .join();

    $table.append(rows);
    return questions
};

const getNumberOfReactQuestions = question => {
    return question
        .filter(question => question.category === 'react')
        .length
};




