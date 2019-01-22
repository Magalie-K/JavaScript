submit.addEventListener("click", function(){ //début de la fonction submit
var age = document.getElementById("age").value; // Lien avec le html
var regexAge = /^[0-9]+$/
  if (regexAge.test(age) && (age >= 18 && age < 110)) { //test uniquement des chiffres pour majeur
      alert("Vous êtes majeur ! Bravo"); //résultat si bon
    } else if (regexAge.test(age) && (age < 18)) { //test pour mineur
    alert("Tu es mineur, dommage"); //message affiché pour les mineurs
  }
  else {
    alert("Veuillez entrer un âge correcte.")//message erreur et hors d'age
  }
})
