//création de la fonction après le click sur Valider
submit.addEventListener("click", function () {
//appelle l'id du premier nombre et du deuxième nombre dans le formulaire
var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;
var regexDivision = /^[0-9]+$/;//définit le regex

if (regexDivision.test(firstNumber) && regexDivision.test(secondNumber)){ //création des conditions par rapport au regex
      alert(result = firstNumber % secondNumber); //affichage du résultat
    } else {
    alert("Saisie incorrecte, veuillez indiquer un nombre");
  }
})
