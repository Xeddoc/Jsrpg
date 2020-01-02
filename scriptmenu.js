
function lesquen() {
document.getElementById("character-box").style.backgroundImage = "url('https://risibank.fr/cache/stickers/d84/8427-full.jpg')";
var audio = document.getElementById("select");
audio.play();
document.getElementById("descriptionjawa").style.display = "none"
document.getElementById("descriptionsardoche").style.display = "none"
document.getElementById("descriptionrisitas").style.display = "none"

setTimeout(function(){
   $('#descriptionlesquen').show();// or fade, css display however you'd like.
}, 800);
setTimeout(function(){
   $('#continue').show();// or fade, css display however you'd like.
}, 800);
document.getElementById("loader").style.display = ""
$(function() {
setTimeout(function() { $("#loader").fadeOut(400); }, 400)

})
}

function risitas() {
  document.getElementById("character-box").style.backgroundImage = "url('https://risibank.fr/cache/stickers/d5/570-full.jpg')";
var audio = document.getElementById("select");
   audio.play();
document.getElementById("descriptionlesquen").style.display = "none"
document.getElementById("descriptionjawa").style.display = "none"
document.getElementById("descriptionsardoche").style.display = "none"

setTimeout(function(){
   $('#descriptionrisitas').show();// or fade, css display however you'd like.
}, 800);
setTimeout(function(){
   $('#continue').show();// or fade, css display however you'd like.
}, 800);
document.getElementById("loader").style.display = ""
$(function() {
setTimeout(function() { $("#loader").fadeOut(400); }, 400)

})
}

  function jawa() {
  document.getElementById("character-box").style.backgroundImage = "url('https://images-na.ssl-images-amazon.com/images/I/91LGV9QfnuL._SY550_.jpg')";
var audio = document.getElementById("select");
   audio.play();
document.getElementById("descriptionlesquen").style.display = "none"
document.getElementById("descriptionsardoche").style.display = "none"
document.getElementById("descriptionrisitas").style.display = "none"
setTimeout(function(){
   $('#descriptionjawa').show();// or fade, css display however you'd like.
}, 800);
setTimeout(function(){
   $('#continue').show();// or fade, css display however you'd like.
}, 800);
document.getElementById("loader").style.display = ""
$(function() {
setTimeout(function() { $("#loader").fadeOut(400); }, 400)

})

} 

function sardoche() {
document.getElementById("character-box").style.backgroundImage = "url('https://risibank.fr/cache/stickers/d1578/157805-full.png')";
var audio = document.getElementById("select");
audio.play();

document.getElementById("descriptionlesquen").style.display = "none"
document.getElementById("descriptionjawa").style.display = "none"
document.getElementById("descriptionrisitas").style.display = "none"
setTimeout(function(){
   $('#descriptionsardoche').show();// or fade, css display however you'd like.
}, 800);
setTimeout(function(){
   $('#continue').show();// or fade, css display however you'd like.
}, 800);
document.getElementById("loader").style.display = ""
$(function() {
setTimeout(function() { $("#loader").fadeOut(400); }, 400)

})


}

 
