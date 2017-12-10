/* 1. TODO: stworz obiekt MyMath który posiada trzy metody: do liczenia wierzchołka Y, wierzchołka X oraz delty. Metody
wzory:  peekY = - delta/4a
        peekX = - a / 2b
        delta = b * b - 4 * a * c

        Wykorzystaj stworzony obiekt i wywołaj jego metody z odpowiednimi parametrami, sprwadz czy zwraca dobre wartości
 */


var myMath = {
    peekX: function (a, b) {
        return -a / 2 * b;
    },
    delta: function (a, b, c) {
        return b * b - 4 * a * c;
    },
    peekY: function (a, b, c) {
        return this.delta(a, b, c) / 4 * a;
    }
};

console.log(myMath.peekX(5, 5, 5));