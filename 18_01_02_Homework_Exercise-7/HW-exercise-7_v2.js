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
// (aby pominąć używanie pętli, posługujemy się funkcją getOffice, której przekazujemy parametr city)

const getNumberOfWorkersByOffice = (city) => {return getOffice(city).workers.length};

const getTotalSalaryByOffice = (city) => getOffice(city).workers
    .reduce((acc, next) => acc + next.salary, 0);

const getAverageSalaryByOffice = (city) => {
    return Math.round(getTotalSalaryByOffice(city) / getNumberOfWorkersByOffice(city))
};

// Liczenie średniej pensji dla całej firmy:

const getNumberOfAllWorkers = () => {
    let numberOfWorkers = 0;
    for (let i = 0; i < company.offices.length; i++) {
        numberOfWorkers += company.offices[i].workers.length;
    }
    return numberOfWorkers;
};

const getTotalSalary = () => {
    let totalSalary = 0;
    for (let i = 0; i < company.offices.length; i++) {
        totalSalary += company.offices[i].workers.reduce((acc, next) => acc + next.salary, 0);
        }
    return totalSalary;
};

const getAverageSalaryInCompany = () => {return Math.round(getTotalSalary() / getNumberOfAllWorkers())};

// Wyświetalnie informacji o konkretnym biurze:
//(kolejny raz z pomocą przychodzi funkcja getOffice)

const getOfficeInfo = (city) => {
    return {
        Localization: getOffice(city).name,
        NumberOfWorkers: getNumberOfWorkersByOffice(city),
        AverageSalary: getAverageSalaryByOffice(city)
    }
};

// Wyszukiwanie najlepiej opłacanych pracowników:
//(W Koszalinie jest trzech z takimi samymi najwyższymi pensjami, a zatem funkcja musi brać to pod uwagę)

const topWorkersInOffice = (city) => {
    let workersSortedBySalaries = getOffice(city).workers.sort((prev, next) => {
        return next.salary - prev.salary //sortujemy pracowników biura wg zarobków
    });
    let topWorker = workersSortedBySalaries[0]; // najlepiej zarab. pracownik to pracownik na indeksie 0
    let topWorkers = workersSortedBySalaries.filter(worker => {
            return worker.salary === topWorker.salary;
        // filtrujemy tablicę i pozostawiamy tylko pracowników, którzy mają takie zarobki jak ten najlepszy na indeksie 0.
        });
    // jeżeli mamy tylko jednego najlepszego pracownika, tablica przestaje być potrzebna i możemy wydobyć z niej obiekt:
    if (topWorkers.length === 1) {
        return topWorkers[0]
    } else {
        return topWorkers
    }
};

const topWorkerInCompany = () => {
    let topWorkers = [];
  for (let i = 0; i < company.offices.length; i++) {
      let workersSortedBySalaries = company.offices[i].workers.sort((prev, next) => {
          return next.salary - prev.salary //sortujemy pracowników poszczególnych biur wg zarobków
      });
      let topWorkerByOffice = workersSortedBySalaries.slice(0, 1); //w każdym biurze zostawiamy tylko najlepszego pracownika (na indeksie 0)
      topWorkers = topWorkers.concat(topWorkerByOffice); // łączymy uzyskane tablice i otrzymujemy tablicę najlepszych pracowników w poszczególnych biurach
  }
    let topWorkersSortedBySalaries = topWorkers.sort((prev, next) => {
      return next.salary - prev.salary //sortujemy tablicę najlepszych pracowników
    });
  return topWorkersSortedBySalaries[0]; // najlepiej zarabiający pracownik to obiekt na indeksie 0 posortowanej tablicy
};

const officeOfTopWorker = () => {
    const checkOffice = (office) => {return office.id === topWorkerInCompany().office};
    //wyszukujemy nazwę biura najlepszego pracownika, zestawiając id tego pracownika z id poszczególnych biur
    const findTopWorkerOffice = company.offices.find(office => {return checkOffice(office)});
    return findTopWorkerOffice.name //// nazwa biura najlepszego pracownika to propercja .name wyniku z findTopWorkerOffice
};

// ******************************Rozwiązania zadań***************************************

// 1) Wyswietl, informacje o biurze w Gliwicach (lokalizacja, liczba przypisanych pracowników, srednia pensja),

console.log(getOfficeInfo('Gliwice')); //Miasto: Gliwice, Pracownicy: 3, Srednia pensja: 240

// 2) Dodaj nowe biuro (w Poznaniu)

addNewOffice('PO', 'Poznan', false);

// 3) Dodaj nowego pracownika do biura w Poznaniu:

addNewWorker(16, 'Olek', 'M', 'PO', 500);

// 4) Wyswietl, informacje o biurze w Poznaniu

console.log(getOfficeInfo('Poznan')); //Miasto: Poznan, Pracownicy: 1, Srednia pensja: 500

// 5) Wyswietl srednia pensje w calej firmie

console.log(getAverageSalaryInCompany()); //272

//6) Wyswietl najlepiej oplacanego pracownika w poszczególnych biurach

console.log(topWorkersInOffice('Gdansk')); //Bartek
console.log(topWorkersInOffice('Gliwice')); //Aleksander
console.log(topWorkersInOffice('Koszalin')); //Damian, Alina, Krzysztof
console.log(topWorkersInOffice('Poznan')); //Olek

// 7) Wyswietl najlepiej oplacanego pracownika w calej firmie oraz nazwe jego biura.

console.log(topWorkerInCompany());
console.log(officeOfTopWorker());

//***************************Bonus**************************************************

/*
Poniżej modyfikuję funkcję do wyszukiwania najlepiej zarabiającego pracownika w całej firmie tak, aby działała
w sytuacji, gdy w całej firmie jest dwóch lub więcej pracowników z takimi samymi najwyższymi pensjami.
Na potrzeby testu zmniejszam zarobki Olka (Poznań, 500) do 300, tak aby mógł 'rywalizować' z Bartkiem (Gdańsk, 300)
 */

topWorkersInOffice('Poznan').salary = 300;

const topWorkersInCompany = () => {
    let topWorkers = [];
    for (let i = 0; i < company.offices.length; i++) {
        let workersSortedBySalaries = company.offices[i].workers.sort((prev, next) => {
            return next.salary - prev.salary //sortujemy pracowników poszczególnych biur wg zarobków
        });
        let topWorker = workersSortedBySalaries[0]; // najlepiej zarab. pracownik to pracownik na indeksie 0
        let topWorkersInOffice = workersSortedBySalaries.filter(worker => {
                return worker.salary === topWorker.salary;
                // filtrujemy tablicę i pozostawiamy tylko pracowników, którzy mają takie zarobki jak ten najlepszy na indeksie 0
            });
        topWorkers = topWorkers.concat(topWorkersInOffice);
        }
    //wyjście z pętli
    let topWorkersSortedBySalaries = topWorkers.sort((prev, next) => {
        return next.salary - prev.salary //sortujemy tablicę najlepszych pracowników
    });
    let topWorkerInCompany = topWorkersSortedBySalaries[0]; // najlepszy pracownik to ten na indeksie 0
    let workersWithBestSalaries = topWorkersSortedBySalaries.filter(worker => {
            return worker.salary === topWorkerInCompany.salary;
            // filtrujemy tablicę i pozostawiamy tylko pracowników, którzy mają takie zarobki jak ten najlepszy na indeksie 0
        });
    return workersWithBestSalaries;
};

console.log(topWorkersInCompany()); // Bartek (Gdańsk, 300) i Olek (Poznań, 300)
