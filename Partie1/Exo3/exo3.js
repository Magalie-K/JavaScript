var name=prompt("Bonjour, entrez votre nom");
var regexName = /^[a-zA-ZÄ-ÿ- ]+$/;

if (regexName.test(name)){
  alert("Bienvenue " + name);
} else {
  alert("Nom non valide");
}
