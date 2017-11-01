
var allButtons = document.getElementsByClassName('buttonNum');

function numberButtonFunction() {
  for (var i = 0; i < allButtons.length; i++) {
    var button = allButtons[i];
    var timesPressed = 1;
    button.addEventListener('click', function(event){
      console.log(this.value + ' was clicked');
      document.getElementById('screen').innerHTML = this.value;
      timesPressed++;
      return this.value;
    })
  }
}
var allOperators = document.getElementsByClassName('operator');


function operatorButtonFunction() {
   for (var i = 0; i < allOperators.length; i++) {
    var operator = allOperators[i]
    operator.addEventListener('click', function(event){
      console.log(this.value + ' was clicked');
      document.getElementById('screen').innerHTML = this.value;
      var operatorType = this.value;
      return operatorType;
    })

  }
}
function equalsButtonFunction() {
  var equals = document.getElementsByClassName('equals')
  equals[0].addEventListener('click', function (event) {

    var solution = equalsCalculation();
    document.getElementById('screen').innerHTML = solution;
  })
}

function equalsCalculation() {
  var solution;
  input1 =
  operatorType = operatorButtonFunction();
  if (operatorType === '+') {
    solution =input1 + input2;
    return solution;
  } else if (operatorType === '-') {
    solution =input1 - input2;
    return solution;
  } else if (operatorType === '*') {
    solution =input1 * input2;
    return solution;
  } else if (operatorType === '/') {
    solution =input1 / input2;
    return solution;
  }
}

function numberIncrement() {

}
equalsButtonFunction()


numberButtonFunction();
operatorButtonFunction();
// equalsButtonFunction(numberButtonFunction(), operatorButtonFunction(), numberButtonFunction())
