const offices = [
    { id: "GD", name: "Gdansk", headquarter: true },
    { id: "GL", name: "Gliwice" },
    { id: "KO", name: "Koszalin" }
];

const workers = [
    { id: 1,  name: "Bartek",     type: "P", office: "GD", salary: 300 },
    { id: 2,  name: "Wojtek",     type: "P", office: "GD", salary: 210 },
    { id: 3,  name: "Piotr",      type: "M", office: "GL", salary: 250 },
    { id: 4,  name: "Damian",     type: "P", office: "KO", salary: 290 },
    { id: 5,  name: "Jan",        type: "P", office: "GL", salary: 210 },
    { id: 6,  name: "Mateusz",    type: "P", office: "GD", salary: 290 },
    { id: 7,  name: "Weronika",   type: "M", office: "KO", salary: 240 },
    { id: 8,  name: "Gabriela",   type: "M", office: "GD", salary: 290 },
    { id: 9,  name: "Alina",      type: "M", office: "KO", salary: 290 },
    { id: 10, name: "Aleksander", type: "P", office: "GL", salary: 260 },
    { id: 11, name: "Tomek",      type: "P", office: "GD", salary: 200 },
    { id: 12, name: "Krzysztof",  type: "M", office: "KO", salary: 290 },
    { id: 13, name: "Marcin",     type: "P", office: "GD", salary: 280 },
    { id: 14, name: "Agata",      type: "P", office: "GD", salary: 230 },
    { id: 15, name: "Magda",      type: "P", office: "KO", salary: 220 }
];

/*
Firma X posiada trzy aktualnie biura zlokalizowane w Gdansku, Gliwicach i Koszalinie a w
niedalekiej przyszlosci planuje otworzyc nowe biuro w Poznaniu.
Wymagania aplikacji: Na podstawie dostarczonych danych, prosze stworzyc obiekt Firma.

Firma powinna posiadac:
- liste Biur (tablice)

Natomiast Kazde biuro powinno posiadac liste Pracowników, id, name, oraz informacje czy jest
glówna siedziba.
Kazdy pracownik ma propercje office, która pozwala nam rozpoznac, do którego biura nalezy
(id w offices).

Do stworzenia struktury firmy uzyj przykladowych danych z zmiennych offices i workers.
*/

const company = {};

company.offices = offices.map(office => {
   return {
       id: office.id,
       name: office.name,
       headquater: office.headquarter || false,
       workers: workers.filter((workers) => {return workers.office === office.id})
   }
});


const getOfficeInfo = company.offices
    .map(office => {
    return {
       name: office.name,
       workers: office.workers.length,
       // average Salary
   }
});

const addNewOffice = (id, name, headquarter) => {
    company.offices.push({
        id: id,
        name: name,
        headquarter: headquarter,
        workers: []
    });
};

const createNewWorker = (id, name, type, office, salary) => {
    let newWorker = {
        id: id,
        name: name,
        type: type,
        office: office,
        salary: salary
    };
    return newWorker;
};

//Uzywajac obiektu „Firma” wykonaj nastepujace operacje (w kolejnosci):

// 1) Wyswietl, informacje o biurze w Gliwicach (lokalizacja, liczba przypisanych pracowników, srednia pensja),

// 2) Dodaj nowe biuro (w Poznaniu)

addNewOffice('PO', 'Poznan', false);

// 3) Dodaj nowego pracownika do biura w Poznaniu:
// { id: 16, name: "Olek", type: "M", office: "PO", salary: 500 }

company.offices[3].workers.push(createNewWorker(16, 'Olek', 'M', 'PO', 500));