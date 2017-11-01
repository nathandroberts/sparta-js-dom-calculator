//global variable used to differentiate between first and second number button press
var timesPressed = 1;

//function to display and return the value assigned to buttons in buttonNum class
function numberButtonFunction() {
  var allButtons = document.getElementsByClassName('buttonNum');
  for (var i = 0; i < allButtons.length; i++) {
    var button = allButtons[i];

     button.addEventListener('click', function(event){
      console.log(this.value + ' was clicked');
      document.getElementById('screen').innerHTML = this.value;
      console.log(timesPressed +': times pressed value before increment');
      timesPressed++;
      console.log(timesPressed +': times pressed value after increment');
      console.log();
      console.log(this.value +' was returned')
      return parseInt(this.value);
    })
  }


}

//function to display and return the operator
function operatorButtonFunction() {
  var allOperators = document.getElementsByClassName('operator');
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
//function intended to display the results of the calculation to the screen
function equalsButtonFunction() {
  var equals = document.getElementsByClassName('equals')
  equals[0].addEventListener('click', function (event) {

    var solution = equalsCalculation();
    document.getElementById('screen').innerHTML = solution;
  })
}
//function intended to calculate and return answer.
//Inputs for formula designed to be set based on the value returned by the number buttons as well as the times the number buttons have been pressed
//not functional
function equalsCalculation() {
  var solution;
  var input1;
  var input2;
  //want next code to trigger at certian intervals but currently have incorrect syntax. Need a way to store the data from numberButtonFunction at different timesPressed values
  //not sure what to use, if? while? for? ect
  if (timesPressed === 1) {
    input1 = numberButtonFunction();
    console.log(input1);
  }
  if (timesPressed === 2) {
    input2 = numberButtonFunction();
    console.log(input2);
  }
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

equalsButtonFunction()


numberButtonFunction();
operatorButtonFunction();
