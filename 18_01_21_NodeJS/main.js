var map = require('lodash/map');
var jQuery = require('jquery');

function square(n) {
    return n*n;
}

console.log(map([1,2,3,4,5,6], square));

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

console.log(message);