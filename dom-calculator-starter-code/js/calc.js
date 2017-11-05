//global variable used to differentiate between first and second number button press
var firstNumber = 'firstInputReady';
var secondNumber = false;
var operatorInput = 'operatorInputReady';

//function to display and return the value assigned to buttons in buttonNum class
function numberButtonFunction() {
  var allButtons = document.getElementsByClassName('buttonNum');
  for (var i = 0; i < allButtons.length; i++) {
    var button = allButtons[i];
    button.addEventListener('click', function(event){
      //first number input
      if (firstNumber === 'firstInputReady') {
        document.getElementById('screen').innerHTML = this.value;
        firstNumber= parseInt(this.value);
        operatorInput = 'operatorInputReady';
        //second number input
      } else if (secondNumber === 'secondInput') {
        document.getElementById('screen').innerHTML = this.value;
        secondNumber= parseInt(this.value);
      }
    })
  }
}

//function to display and return the operator
function operatorButtonFunction() {
  var allOperators = document.getElementsByClassName('operator');
   for (var i = 0; i < allOperators.length; i++) {
      var operator = allOperators[i]
      operator.addEventListener('click', function(event){
        if (operatorInput === 'operatorInputReady') {
        document.getElementById('screen').innerHTML = this.value;
        var operatorType = this.value;
        operatorInput= operatorType;
        secondNumber = 'secondInput';
    }
  })
  }
}

//function intended to display the results of the calculation to the screen
function equalsButtonFunction() {
  var equals = document.getElementsByClassName('equals')
  equals[0].addEventListener('click', function (event) {
    var solution = equalsCalculation();
    document.getElementById('screen').innerHTML = solution;
  })
}

//function to do calculation
function equalsCalculation() {
  switch (operatorInput) {
    case '+':
      return (firstNumber + secondNumber).toFixed(2)
      break;
    case '-':
      return (firstNumber - secondNumber).toFixed(2)
      break;
    case '*':
      return (firstNumber * secondNumber).toFixed(2)
      break;
    case '/':
      return (firstNumber / secondNumber).toFixed(2)
      break;
    default:
      return 'error';
  }
}

// function to clear Calculator
function clearCalculator() {
  var clearButton = document.getElementsByClassName("buttonClear");
  var calculatorScreen = document.getElementById('screen')
  clearButton[0].addEventListener('click', function (event) {
    calculatorScreen.innerHTML= 'Sparta Calculator';
    firstNumber='firstInputReady'
    secondNumber=false;
    operatorInputr='operatorInputReady';
  })
}

equalsButtonFunction()
numberButtonFunction();
operatorButtonFunction();
clearCalculator();
