/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('e',' ');
}
var concatString = function (texte1, texte2) {
    return texte1+texte2;
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte.substr(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return typeof texte === 'string';
}
var AfficherExtensionString = function (texte) {
    return texte.split('.').pop();
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length-1;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
var result = array.map(Math.abs);
    return result;
}
var sufaceCercle = function (rayon) {
    return Math.round(rayon * rayon * Math.PI);
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}
var calculIMC = function (poids, taille) {
    return Math.round(poids / (taille * taille)*100)/100;
}
