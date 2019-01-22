// SOLUTION LONGUE EN BOUCLE
// var images = [document.getElementById('image1'), document.getElementById('image2'), document.getElementById('image3'), document.getElementById('image4'), document.getElementById('image5')];
//
// var imageReplace = {image1 : 'images/image1_2.jpg', image2 : 'images/image2_2.jpg', image3 : 'images/image3_2.jpg', image4 : 'images/image4_2.jpg', image5 : 'images/image5_2.jpg'};
//
// var imageReplace2 = {image1 : 'images/image1.jpg', image2 : 'images/image2.jpg', image3 : 'images/image3.jpg', image4 : 'images/image4.jpg', image5 : 'images/image5.jpg'};
//
//
// for (var i =0; i<images.length; i++) {
// images[i].addEventListener ('mouseover', function (){
//   this.src= imageReplace[this.id];
// })
// }
//
// for (var i=0; i<images.length; i++) {
//   images[i].addEventListener ('mouseout', function () {
//     this.src=imageReplace2[this.id];
//   })
// }

// SOLUTION COURTE EN BOUCLE
// var images = [document.getElementById('image1'),
//               document.getElementById('image2'),
//               document.getElementById('image3'),
//               document.getElementById('image4'),
//               document.getElementById('image5')];
//
// for (var i=0; i<images.length; i++) {
//   images[i].addEventListener ('mouseover', function (){
//     this.src='images/'+[this.id]+'_2.jpg';
//   })
// }
//
// for (var i=0; i<images.length; i++) {
//   images[i].addEventListener ('mouseout', function (){
//   this.src='images/'+[this.id]+'.jpg';
//   })
// }

// SOLUTION AVEC DANS LE HTML
function replace1(image) {
  image.src='images/'+image.id+'_2.jpg';
}

function replace2(imageorigin) {
  imageorigin.src='images/'+imageorigin.id+'.jpg';
}
