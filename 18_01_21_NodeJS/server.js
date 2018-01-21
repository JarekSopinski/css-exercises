// Postawienie prostego serwera http z użyciem node.js:


// Ładujemy 3 biblioteki:

const http = require('http'); // ładujemy bibliotekę http
const fs = require('fs'); // ładujemy bibliotekę nodeową fs
const index = fs.readFileSync('./index.html'); // ładujemy plik index.html

const hostname = '127.0.0.1'; // ustawiamy nazwę serwera, którego będziemy używać
const port = 3000; // ustawiamy port

// tworzymy serwer:

const server = http.createServer(function (req, res) { // req to żądanie, res to odpowiedź, którą zwrócimy
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // daje odpowiedź z zawartością pliku index.html
    res.end(index); // kończy
});

// Uruchomienie serwera:

server.listen(port, hostname, function () {
    console.log('Server running at http://' + hostname + ':' + port + '/'); // Informacja o tym, że serwer działa, na jakim hoście i porcie
}); // po uruchomieniu programu (pliku server.js w node) w konsoli pokaże się ten log jako potwierdzenie, że serwer działa

// po wejściu w hostname możemy wyświetlić zawartość pliku index.html
