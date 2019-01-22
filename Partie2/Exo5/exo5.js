
// SOLUTION 1 EN BOUCLE
// var image1 = document.getElementById('image1');
// var image2 = document.getElementById('image2');
// var image3 = document.getElementById('image3');
// var image4 = document.getElementById('image4');
// var image5 = document.getElementById('image5');
// var images = [image1, image2, image3, image4, image5];
// var imageReplace = {image1 : 'images/image1_2.jpg', image2 : 'images/image2_2.jpg', image3 : 'images/image3_2.jpg', image4 : 'images/image4_2.jpg', image5 : 'images/image5_2.jpg'};
//
// for (var i = 0; i<images.length; i++) {
//   images[i].addEventListener ('mouseover', function() {
//     this.src = imageReplace[this.id];
// })}

// SOLUTION 2 EN BOUCLE

// var imageId = [  //Association des ID avec le html dans un tableau
//   document.getElementById('image1'),
//   document.getElementById('image2'),
//   document.getElementById('image3'),
//   document.getElementById('image4'),
//   document.getElementById('image5'),
// ]
// //Création de la boucle
// for (var i = 0; i < imageId.length; i++) {
// imageId[i].addEventListener("mouseover",function(){
//   this.src = "images/"+[this.id]+"_2.jpg"
// })}//fin de la boucle

// SOLUTION AVEC MOUSEOVER DANS HTML
function replace(image) {
  image.src='images/'+image.id+'_2.jpg';
}
