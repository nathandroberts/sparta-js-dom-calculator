
var allButtons = document.getElementsByClassName('buttonNum');

function numberButtonFunction() {
  for (var i = 0; i < allButtons.length; i++) {
    var button = allButtons[i];
    button.addEventListener('click', function(event){
      console.log(this.value + ' was clicked');
    })
  }

}
buttonLinker();
