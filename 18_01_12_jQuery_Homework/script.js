/*
Za pomoc¹ wy³¹cznie biblioteki jQuery, utwórz nastêpujacy kod html:

http://jsfiddle.net/h6gp9jnt/

<div class="container">
  <div class="row">
    <div class="col-sm-4" id="aaa"><p class="description">Jeden</p></div>
    <div class="col-sm-4" id="ccc"><p class="description">Dwa</p></div>
    <div class="col-sm-4" id="ooo"><p class="description">Trzy</p></div>
  </div>
  <div class="row">
    <div class="col-xs-6" style="color: red;"><p class="description">Cztery</p></div>
    <div class="col-xs-6" style="color: red;"><p class="description">Piec</p></div>
  </div>
  <div class="row">
    <div class="col-md-3" data-product="300"><p class="description">Szesc</p></div>
    <div class="col-md-3" data-product="400"><p class="description">Siedem</p></div>
    <div class="col-md-3" data-product="500"><p class="description">Osiem</p></div>
  </div>
</div>
 */

let $row1 = $('<div class="row">');
let $row2 = $('<div class="row">');
let $row3 = $('<div class="row">');

let $colSm4First = $('<div class="col-sm-4" id="#aaa"><p class="description">Jeden</p></div>');
let $colSm4Second = $('<div class="col-sm-4" id="#ccc"><p class="description">Dwa</p></div>');
let $colSm4Third = $('<div class="col-sm-4" id="#ooo"><p class="description">Trzy</p></div>');
let $colXs6First = $('<div class="col-xs-6" style="color: red"><p class="description">Cztery</p></div>');
let $colXs6Second = $('<div class="col-xs-6" style="color: red"><p class="description">Pięć</p></div>');
let $colMd3First = $('<div class="col-md-3" data-product="300"><p class="description">Sześć</p></div>');
let $colMd3Second = $('<div class="col-md-3" data-product="400"><p class="description">Siedem</p></div>');
let $colMd3Third = $('<div class="col-md-3" data-product="500"><p class="description">Osiem</p></div>');

$('body').prepend($('<div class="container">'));
let $container = $('.container');

const addRow = (row) => {$container.prepend(row)};

addRow($row1);
addRow($row2);
addRow($row3);

let $firstRow = $('.row').eq(0);
let $secondRow = $('.row').eq(1);
let $thirdRow = $('.row').eq(2);

const addCol = (row, col) => {row.append(col)};

addCol($firstRow, $colSm4First);
addCol($firstRow, $colSm4Second);
addCol($firstRow, $colSm4Third);
addCol($secondRow, $colXs6First);
addCol($secondRow, $colXs6Second);
addCol($thirdRow, $colMd3First);
addCol($thirdRow, $colMd3Second);
addCol($thirdRow, $colMd3Third);