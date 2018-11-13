/*function solveExpression() {
  var priklad = document.getElementById("priklad").value;
  document.getElementById("vysledek").innerHTML = "Vysledek je: " + priklad;
}

var input = document.getElementById("priklad");

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    solveExpression();
  }
});
*/
function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;
  let leva = 0;
  let prava = 0;
  var zmena = true;
  var operator = "";
  for (let i = 0; i < vyraz.length; i++) {
    if (vyraz.charAt(i) == "+") {
      operator = "+";
      zmena = false;
    } else if (vyraz.charAt(i) == "-") {
      operator = "-";
      zmena = false;
    } else if (vyraz.charAt(i) == "*") {
      operator = "*";
      zmena = false;
    } else if (vyraz.charAt(i) == "/") {
      operator = "/";
      zmena = false;
    } else {
      if (zmena) {
        leva = leva * 10 + parseInt(vyraz.charAt(i));
      } else {
        prava = prava * 10 + parseInt(vyraz.charAt(i));
      }
    }
  }
  var output = 0;
  if (operator === "+") {
    output = leva + prava;
  } else if (operator === "-") {
    output = leva - prava;
  } else if (operator === "*") {
    output = leva * prava;
  } else if (operator === "/") {
    output = leva / prava;
  } else {
    output = NaN;
  }
  document.getElementById("vysledek").value =
    leva + " " + operator + " " + prava + " = " + output;
}

var input = document.getElementById("vyraz");

// Spustí funkci, když uživatel zmáčkne Enter
input.addEventListener("keyup", function(event) {
  // Zruší výchozí funkci klávesy, pokud nějaká existuje
  event.preventDefault();
  // 13 je hodnota klávesy Enter
  if (event.keyCode === 13) {
    solveExpression();
  }
});
