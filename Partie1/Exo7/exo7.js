document.getElementById("submit").addEventListener("click", function () { //fonction après le click sur Valider

var shoeSize = document.getElementById('shoeSize').value;//recupère l'id du premier nombre dans le formulaire
var yearOfBirth = document.getElementById('yearOfBirth').value;//recupère l'id du deuxième nombre dans le formulaire
var regexDecimal = /^[0-9]+$/;//déclare le regex//

if (regexDecimal.test(shoeSize) && shoeSize >= 10 && shoeSize <= 60 && regexDecimal.test(yearOfBirth) && yearOfBirth > 1900 && yearOfBirth <= 2018) { //création des conditions par rapport au regex et limation année de naissance
    var result = ((((shoeSize * 2) + 5) * 50) - yearOfBirth) + 1766;//déclaration de la variable résultat
      alert(result); //affichage du résultat
    } else {
    alert("Mauvaise saisie. Veuillez saisir une pointue et une année de naissance correcte");
  }
})
