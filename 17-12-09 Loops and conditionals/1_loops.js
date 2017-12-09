// FOR LOOP
// TODO.1: Przy użyciu pętli FOR, wyświetl w konsoli wszystkie napoje z listy
// UWAGA: Wyświetlone nazwy mają być wypisane wielkimi literami.

var drinksNames = ['Vodka', 'Whisky', 'Prosseco', 'Beer', 'Vine', 'Gin'];

for (var i=0; i < drinksNames.length; i++) {
	console.log(drinksNames[i].toUpperCase());
}

// TODO.2: Przy użyciu pętli FOR, przypisz do zmiennej totalPrice sumę elementów tablicy prices
// Wykorzystaj operator +=

var totalPrice = 0;
var prices = [19.99, 40.00, 35.99, 3.20, 16.50, 23.30];

for (i=0; i < prices.length; i++) {
	totalPrice += prices[i];
}

// TODO.3: Napisz funkcję, która zwróci sumę cen drinków z tablicy drinks

	var drinks = [
		{ name: '  Vodka', price: 19.99 },
		{ name: 'Whisky  ', price: 40.00 },
		{ name: 'Prosseco  ', price: 35.99 },
		{ name: '  Beer', price: 3.20 },
		{ name: '   Vine  ', price: 16.50 },
		{ name: '  Gin  ', price: 23.33 }
	];

function getDrinksTotalPrice() {
	var total = 0;
	for (i = 0; i < drinks.length; i++) {
		total += drinks[i].price;
	}

	return total;
}

getDrinksTotalPrice();


// TODO.4: Puść pętlę po tablicy drinks i zaokrąglij w niej ceny do całości

for (i=0; i < drinks.length; i++) {
    drinks[i].price = Math.round(drinks[i].price);
}

console.log(drinks);


// TODO.5. TODO: Za pomocą pętli, doklej jednostkę PLN do cen, zastosuj dekremenację!


/*
for (i=drinks.length - 1; i >= 0; i--) {
	drinks[i].price = drinks[i].price + ' PLN';
}*/

console.log(drinks);



// TODO.6: TODO: Za pomocą pętli, oczyść nazwy drinków z white-spaces

for (i=0; i < drinks.length; i++) {
	drinks[i].name = drinks[i].name.trim();
}

console.log(drinks);

// TODO.7: TODO: Puść pętlę po tablicy drinks i do każdego obiektu (drinka) dopisz nowe pole "id":
//    - obiekt z indeksem zero ma mieć ID 1, i tak dalej, wykorzystaj dostęp do licznika pętli *


for (i=0; i < drinks.length; i++) {
	drinks[i].id = i + 1;
}

console.log(drinks);

// TODO.8: TODO: Napisz funkcję, która policzy średnią cenę drinka w tablicy drinks

function getAveragePrice() {
	return getDrinksTotalPrice() / drinks.length;
}

console.log(getAveragePrice());

/* TODO.9: Za pomocą pętli while, wyświetl console.log z ceną i nazwą każdego drinka
 */

