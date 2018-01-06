// Dane wyjściowe:

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

// Budowa obiektu z powyższych danych:

const company = {};

company.offices = offices.map(office => {
    return {
        id: office.id,
        name: office.name,
        headquater: office.headquarter || false,
        workers: workers.filter((workers) => {return workers.office === office.id})
    }
});

// Dodawanie nowych danych:

const addNewOffice = (id, name, headquarter) => {
    company.offices.push({
        id: id,
        name: name,
        headquarter: headquarter,
        workers: []
    });
};

const addNewWorker = (id, name, type, office, salary) => {
    let newWorker = {
        id: id,
        name: name,
        type: type,
        office: office,
        salary: salary
    };
    for (let i = 0; i < company.offices.length; i++) {
        if (newWorker.office === company.offices[i].id) {
            company.offices[i].workers.push(newWorker);
        }
    }
};

// Dostęp do obiektu konkretnego biura:

const getOffice = (city) => company.offices.find(({name}) => name === city);

// Liczenie średniej pensji dla danego biura:

const getNumberOfWorkersByOffice = (city) => {return getOffice(city).workers.length};

console.log(getNumberOfWorkersByOffice('Gliwice')); // 3 pracowników

const getTotalSalaryByOffice = (city) => getOffice(city).workers
    .reduce((acc, next) => acc + next.salary, 0);

console.log(getTotalSalaryByOffice('Gliwice')); // 720

const getAverageSalaryByOffice = (city) => {
    return Math.round(getTotalSalaryByOffice(city) / getNumberOfWorkersByOffice(city))
};

console.log(getAverageSalaryByOffice('Gliwice')); // 720 / 3 = 240

// Liczenie średniej pensji dla całej firmy:

const getNumberOfAllWorkers = () => {
    let numberOfWorkers = 0;
    for (let i = 0; i < company.offices.length; i++) {
        numberOfWorkers += company.offices[i].workers.length;
    }
    return numberOfWorkers;
};

console.log(getNumberOfAllWorkers()); //15

const getTotalSalary = () => {
    let totalSalary = 0;
    for (let i = 0; i < company.offices.length; i++) {
        totalSalary += company.offices[i].workers.reduce((acc, next) => acc + next.salary, 0);
        }
    return totalSalary;
};

console.log(getTotalSalary()); //3850

const getAverageSalaryInCompany = () => {return Math.round(getTotalSalary() / getNumberOfAllWorkers())};


// ******************************Rozwiązania zadań***************************************

// 1) Wyswietl, informacje o biurze w Gliwicach (lokalizacja, liczba przypisanych pracowników, srednia pensja),



// 2) Dodaj nowe biuro (w Poznaniu)

addNewOffice('PO', 'Poznan', false);
console.log(getOffice('Poznan'));

// 3) Dodaj nowego pracownika do biura w Poznaniu:

addNewWorker(16, 'Olek', 'M', 'PO', 500);
console.log(getOffice('Poznan').workers[0]);

// 4) Wyswietl, informacje o biurze w Poznaniu

// 5) Wyswietl srednia pensje w calej firmie

console.log(getAverageSalaryInCompany());

//6) Wyswietl najlepiej oplacanego pracownika w poszczególnych biurach


// 7) Wyswietl najlepiej oplacanego pracownika w calej firmie oraz nazwe jego biura.



