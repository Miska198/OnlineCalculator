function solveExpression(){
  var vyraz = document.getElementById("priklad").value;
  document.getElementById("vysledek").innerHTML = "Vysledek je: " + priklad;
}

var input = document.getElementById("priklad");

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if(event.keyCode == 13){
    solveExpression();
  }
});