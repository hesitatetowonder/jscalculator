var $calculator = $('<table>');
$calculator.attr('name', 'Calculator');
var $header = $('<th> <input>');
$header.attr('type', 'text');
$header.attr('placeholder', 'Result');
$header.attr('id', 'result');

var $topRow = $('<tr>');

var $seven = $('<td><button>');
$seven.text('7');
$seven.attr('type', 'button');
$seven.attr('id', 'seven');

var $eight = $('<td><button>');
$eight.text('8');
$eight.attr('type', 'button');
$eight.attr('id', 'eight');

var $nine = $('<td><button>');
$nine.text('9');
$nine.attr('type', 'button');
$nine.attr('id', 'nine');

var $secondRow = $('<tr>');

var $four = $('<td><button>');
$four.text('4');
$four.attr('type', 'button');
$four.attr('id', 'four');

var $five = $('<td><button>');
$five.text('5');
$five.attr('type', 'button');
$five.attr('id', 'five');

var $six = $('<td><button>');
$six.text('6');
$six.attr('type', 'button');
$six.attr('id', 'six');

var $thirdRow = $('<tr>');

var $one = $('<td><button>');
$one.text('1');
$one.attr('type', 'button');
$one.attr('id', 'one');

var $two = $('<td><button>');
$two.text('2');
$two.attr('type', 'button');
$two.attr('id', 'two');

var $three = $('<td><button>');
$three.text('3');
$three.attr('type', 'button');
$three.attr('id', 'three');

var $bottomRow = $('<tr>');

var $decimal = $('<td><button>');
$decimal.text('.');
$decimal.attr('type', 'button');
$decimal.attr('id', 'decimal');

var $zero = $('<td><button>');
$zero.text('0');
$zero.attr('type', 'button');
$zero.attr('id', 'zero');

var $clear = $('<td><button>');
$clear.text('C');
$clear.attr('type', 'button');
$clear.attr('id', 'clear');

var $equal = $('<td><button>');
$equal.text('=');
$equal.attr('type', 'button');
$equal.attr('id', 'equal');

var $subtraction = $('<td><button>');
$subtraction.text('-');
$subtraction.attr('type', 'button');
$subtraction.attr('id', 'subtraction');

var $addition = $('<td><button>');
$addition.text('+');
$addition.attr('type', 'button');
$addition.attr('id', 'addition');

var $division = $('<td><button>');
$division.text('/');
$division.attr('type', 'button');
$division.attr('id', 'division');

var $mulitplication = $('<td><button>');
$mulitplication.text('*');
$mulitplication.attr('type', 'button');
$mulitplication.attr('id', 'mulitplication');

var $futureFunction = $('<td><button>');
$futureFunction.text('ff');
$futureFunction.attr('type', 'button');
$futureFunction.attr('id', 'ff');

var $futureFunction2 = $('<td><button>');
$futureFunction2.text('ff');
$futureFunction2.attr('type', 'button');
$futureFunction2.attr('id', 'ff');



$('body').append($structure);
$structure.append($calculator);
// $structure.append($top);
$structure.append($header);
$header.append($topRow);
$topRow.append($seven);
$topRow.append($eight);
$topRow.append($nine);
$topRow.append($division);
$topRow.append($futureFunction);
$topRow.append($secondRow);
$secondRow.append($four);
$secondRow.append($five);
$secondRow.append($six);
$secondRow.append($mulitplication);
$secondRow.append($futureFunction2);
$secondRow.append($thirdRow);
$thirdRow.append($one);
$thirdRow.append($two);
$thirdRow.append($three);
$thirdRow.append($subtraction);
$thirdRow.append($addition);
$thirdRow.append($bottomRow);
$bottomRow.append($decimal);
$bottomRow.append($zero);
$bottomRow.append($clear);
$bottomRow.append($equal);
