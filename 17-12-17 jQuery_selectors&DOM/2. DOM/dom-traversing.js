var $bestHero = $("#best-hero");

// TODO: 1. Chwytając za element #best-hero, złap referencję do diva .container i dodaj do niego jakiś css

$bestHero.closest('.container').css('color', 'green');

// TODO: 2. Chwytając za element #best-hero, złap referencję do diva .row

$bestHero.closest('.row');

// TODO: 3. Chwytając za element #best-hero, złap referencję do uprzedniego elementu listy

$bestHero.prev();

// TODO: 4. Chwytając za element #best-hero, złap referencję do następnego elementu listy i dodaj jakiś css

$bestHero.next().css('color', 'red');

// TODO: 5. Chwytając za element #best-hero, złap referencję do jego bezpośredniego rodzica

$bestHero.parent();

// TODO: 6. Chwytając za element #best-hero, złap referencję do jego bezpośredniego rodzica i dodaj do niego jakąś klasę oraz atrybut name

/*
$bestHero.parent
    .addClass('.superheroes')
    .attr('id', 'name');
    .attr('title', 'wartosc');
*/
