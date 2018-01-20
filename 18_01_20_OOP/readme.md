## Zasady wybierania this:

1. Jeżeli nie zdefiniowany to global object (window)
	a) Chyba że jest 'use strict', wtedy undefined
2. Jeśli był wywołany na obiekcie to wskazuje na ten obiekt
3. Chyba że jest zbindowany (.bind(obj))
4. Funkcje strzałkowe - nadrzędna funkcja, w której jest wywoływana

## Jak działa .bind(obj):

1. Ustawia kontekst (this) na podany element;
2. Zwraca zbindowaną kopię obiektu. Raz zbindowany obiekt nie może być ponownie zbindowany;

## Jak działa .call():

Ustawia kontekst na podany pierwszy parametr, kolejne przekazuje jako parametry i zwraca wynik funkcji.

## .call() vs .apply()

Funkcje różnią się sposobem przekazywania argumentów (call - pojedynczo, apply - jako tablica)

## Object literal (proste obiekty)

ES6 pozwala na krótki zapis obiektu:

var a = 'foo', b = 42, c = {};
var o = {a, b, c};

## Object.create 

Tworzy nowy obiekt z prototypem wskazującym na poprzedni.
Object.create jest dobrze zoptymalizowany. Lepiej używać go niż ręcznie ustawiać prototyp.

## Object assign

Łączy wiele obiektów, modyfikując przy tym pierwszy obiekt.
Kopiuje własne właściwości obiektów do pierwszego obiektu przekazywanego w parametrach funkcji. Prototyp pierwszego obiektu zostaje nienaruszony.

Łączenie obiektów bez modyfikacji pierwszego:

Object.assign({}, first last);

## Konstruktor
