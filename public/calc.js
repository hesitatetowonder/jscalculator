$(document).ready(function() {
    cleared();
    zero();
    one();
    two();
    three();
    four();
    five();
    six();
    seven();
    eight();
    nine();
    equal();
    plus();
    minus();
    multiply();
    division();
});
var total = [];
var temp = [];
//numbers
var zero = function() {
    $('#zero').on('click', function(e) {
        temp.push('0');
        $update(0);
    });
}
var one = function() {
    $('#one').on('click', function(e) {
        temp.push('1');
        $update(1);;
    });
}
var two = function() {
    $('#two').on('click', function(e) {
        temp.push('2');
        $update(2);;
    });
}
var three = function() {
    $('#three').on('click', function(e) {
        temp.push('3');
        $update(3);
    });
}
var four = function() {
    $('#four').on('click', function(e) {
        temp.push('4');
        $update(4);
    });
}
var five = function() {
    $('#five').on('click', function(e) {
        temp.push('5');
        $update(5);
    });
}
var six = function() {
    $('#six').on('click', function(e) {
        temp.push('6');
        $update(6);
    });
}
var seven = function() {
    $('#seven').on('click', function(e) {
        temp.push('7');
        $update(7);
    });
}
var eight = function() {
    $('#eight').on('click', function(e) {
        temp.push('8');
        $update(8);
    });
}
var nine = function() {
    $('#nine').on('click', function(e) {
        temp.push('9');
        $update(9);
    });
}
//operands
var plus = function() {
    $('#plus').on('click', function(e) {
        total.push(temp.join(''));
        temp = [];
        total.push('+')
        $update('+');
    });
}
var minus = function() {
    $('#minus').on('click', function(e) {
        total.push(temp.join(''));
        temp = [];
        total.push('-')
        $update('-');
    });
}
var multiply = function() {
    $('#multiply').on('click', function(e) {
        total.push(temp.join(''));
        temp = [];
        total.push('*')
        $update('*');
    });
}
var division = function() {
    $('#division').on('click', function(e) {
        total.push(temp.join(''));
        temp = [];
        total.push('/')
        $update('/');
    });
}
//total
var equal = function() {
    $('#equal').on('click', function(e) {
      total.push(temp.join(''));
      temp = [];
        for (i = 0; i < total.length; i++) {
            if (isNaN(total[i])) {
                if (total[i] === '*') {
                    temp.push(parseInt(total[i - 1] * total[i + 1]));
                    total.splice((i - 1), 3, temp);
                    temp = [];
                    i = 0;
                }
                if (total[i] === '/') {
                    temp.push(parseInt(total[i - 1] / total[i + 1]));
                    total.splice((i - 1), 3, temp);
                    temp = [];
                    i = 0;
                }
            }
        }
        for (i = 0; i < total.length; i++) {
            if (isNaN(total[i])) {
                if (total[i] === '+') {
                    temp.push(parseInt(total[i - 1]) + parseInt(total[i + 1]));
                    total.splice((i - 1), 3, temp);
                    temp = [];
                    i = 0;
                }
                if (total[i] === '-') {
                    temp.push(parseInt(total[i - 1]) - parseInt(total[i + 1]));
                    total.splice((i - 1), 3, temp);
                    temp = [];
                    i = 0;
                }
            }
        }
        $update(total);
        console.log(total);
    });
}
//misc functions(clear, update)
var cleared = function() {
    $('#cleared').on('click', function(e) {
        total = [];
        $update(0);
    });
}
var $update = function(result) {
    $('#result').text(result);
}
//body
var $calculator = $('<table>');
var $result = $('<tr><th colspan="5" id="result"><button>0</button></th><th rowSpan="5"><button id="equal">=</button></th></tr>');
var $topRow = $('<tr><td id="seven"><button>7</button></td><td id="eight"><button>8</button></td><td id="nine"><button>9</button></td><td id="division"><button>/</button></td></tr>');
var $secondRow = $('<tr><td id="four"><button>4</button></td><td id="five"><button>5</button></td><td id="six"><button>6</button></td><td id="multiply"><button>*</button></td></tr>');
var $thirdRow =
    $('<tr><td id="one"><button>1</button></td><td id="two"><button>2</button></td><td id="three"><button>3</button></td><td id="minus"><button>-</button></td></tr>');
var $fourthRow =
    $('<tr><td id="cleared"><button>C</button></td><td id="zero"><button>0</button></td><td id="decimal"><button>.</button></td><td id="plus"><button>+</button></td></tr>');

$('body').append($calculator);
$calculator.append($result);
$calculator.append($topRow);
$calculator.append($secondRow);
$calculator.append($thirdRow);
$calculator.append($fourthRow);
