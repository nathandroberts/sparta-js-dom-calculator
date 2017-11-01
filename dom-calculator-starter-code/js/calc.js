
var allButtons = document.getElementsByClassName('buttonNum');

function numberButtonFunction() {
  for (var i = 0; i < allButtons.length; i++) {
    var button = allButtons[i];
    button.addEventListener('click', function(event){
      console.log(this.value + ' was clicked');
      document.getElementById('screen').innerHTML = this.value;
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
    })
  }
}
 numberButtonFunction();
 operatorButtonFunction();
