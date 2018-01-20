// PROTOTYPY

function talk() {
    console.log(this.sound);
}

let animal = { talk };

console.log(animal); // {talk: ƒ}
animal.talk(); // undefined, bo nie ma jeszcze sounda

let cat = {
    sound: 'miaaał'
};

//cat.talk(); // błąd

// Kot jest teraz prototypem czystego obiektu, ale jeśli ustawimy mu prototyp na coś innego (w tym przypadku na animala)
// to teraz logując kota, po ustawieniu prototypu:

Object.setPrototypeOf(cat, animal); // ręczne ustawienie prototypu
cat.talk(); // miaaaał <-- dlatego że proto przeskoczyło na funkcję talk

// Zmiana prototypu dla danego obiektu bo jego faktycznym utworzeniu jest bardzo obciążająca dla renderera, dlatego lepiej
// nie używać tego w praktyce, w praktyce należy używać Object.create

//**********************************

let dog = {
    sound: 'hał hał'
};

Object.setPrototypeOf(dog, animal);
console.log(dog.talk()); // hał hał // mimo że to metoda animala to zachowuje się tak, jakby była psem
// bo kontekst jest ustawiony tam, gdzie jest wywoływana

let prarieDog = {
    howl: function () {
        console.log(this.sound.toUpperCase()); // nowa metoda, która korzysta z sounda
    }
};
Object.setPrototypeOf(prarieDog, dog); // prototypem psa preriowego jest teraz dog
console.log(prarieDog.howl()); // HAŁ HAŁ

animal.talk = function () {
    console.log('what does the fox say?');
};
dog.talk(); //what does the fox say?

// Podsumowując: prototypy można rozumieć jako dziedziczenie, tworzy łańcuch zależności między kolejnymi metodami;
// Pozwala z jednej strony pisać lekkie metody robiące pojedyncze rzeczy, ale jest też niebezpieczne, bo zmiana
// jednej rzeczy może rozwalić cały łańcuch

// Prototypy nie przydają się w praktyce, chyba że przy debugowaniu, pozwalają też lepiej rozumieć działanie