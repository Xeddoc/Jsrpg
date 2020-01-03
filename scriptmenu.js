
function lesquen() {
    document.getElementById("character-box").style.backgroundImage = "url('https://risibank.fr/cache/stickers/d84/8427-full.jpg')";
    let audio = document.getElementById("select");
    audio.play();
    document.getElementById("descriptionjawa").style.display = "none";
    document.getElementById("descriptionsardoche").style.display = "none";
    document.getElementById("descriptionrisitas").style.display = "none";

    setTimeout(function(){
       $('#descriptionlesquen').show();// or fade, css display however you'd like.
    }, 800);

    setTimeout(function(){
       $('#continue').show();// or fade, css display however you'd like.
    }, 800);

    document.getElementById("loader").style.display = ""

    $(function() {
        setTimeout(function() { $("#loader").fadeOut(400); }, 400)

    });
};

function risitas() {
  document.getElementById("character-box").style.backgroundImage = "url('https://risibank.fr/cache/stickers/d5/570-full.jpg')";

let audio = document.getElementById("select");
   audio.play();

document.getElementById("descriptionlesquen").style.display = "none";
document.getElementById("descriptionjawa").style.display = "none";
document.getElementById("descriptionsardoche").style.display = "none";

setTimeout(function(){
   $('#descriptionrisitas').show();// or fade, css display however you'd like.
}, 800);
setTimeout(function(){
   $('#continue').show();// or fade, css display however you'd like.
}, 800);
document.getElementById("loader").style.display = ""
$(function() {
setTimeout(function() { $("#loader").fadeOut(400); }, 400)

});
};

  function jawa() {
  document.getElementById("character-box").style.backgroundImage = "url('https://images-na.ssl-images-amazon.com/images/I/91LGV9QfnuL._SY550_.jpg')";
let audio = document.getElementById("select");
   audio.play();
document.getElementById("descriptionlesquen").style.display = "none";
document.getElementById("descriptionsardoche").style.display = "none";
document.getElementById("descriptionrisitas").style.display = "none";
setTimeout(function(){
   $('#descriptionjawa').show();// or fade, css display however you'd like.
}, 800);
setTimeout(function(){
   $('#continue').show();// or fade, css display however you'd like.
}, 800);
document.getElementById("loader").style.display = ""
$(function() {
setTimeout(function() { $("#loader").fadeOut(400); }, 400)

});

} ;

function sardoche() {
document.getElementById("character-box").style.backgroundImage = "url('https://risibank.fr/cache/stickers/d1578/157805-full.png')";
let audio = document.getElementById("select");
audio.play();

document.getElementById("descriptionlesquen").style.display = "none";
document.getElementById("descriptionjawa").style.display = "none";
document.getElementById("descriptionrisitas").style.display = "none";
setTimeout(function(){
   $('#descriptionsardoche').show();// or fade, css display however you'd like.
}, 800);
setTimeout(function(){
   $('#continue').show();// or fade, css display however you'd like.
}, 800);
document.getElementById("loader").style.display = ""
$(function() {
setTimeout(function() { $("#loader").fadeOut(400); }, 400)

});


};

function test() {
    
/*if (document.getElementById("character-box").style.backgroundImage == "url(https://risibank.fr/cache/stickers/d1578/157805-full.png)"){
window.open("sardoche.html")
}; */

 let bg = $("#character-box").css('background-image');
 bg = bg.replace('url("','').replace('")','');

       
 if (bg === 'https://risibank.fr/cache/stickers/d1578/157805-full.png') {
        alert("Vous avez choisi SARDOCHE");


 }
 
 if (bg === 'https://images-na.ssl-images-amazon.com/images/I/91LGV9QfnuL._SY550_.jpg') {
        alert("Vous avez choisi un JAWA");
 }
 
 if (bg === 'https://risibank.fr/cache/stickers/d5/570-full.jpg') {
        alert("Vous avez choisi RISITAS");
        $(function() {
        setTimeout(function() { $("#page1").fadeOut(200); }, 200)

        });

let audio = document.getElementById("reveil");
   audio.play();

setTimeout(function(){
   $('#pagejeu').show();// or fade, css display however you'd like.
}, 1000);
setTimeout(function(){
   $('#lever').show();// or fade, css display however you'd like.
}, 8500);

document.body.style.backgroundImage='url("reveil.png")'
let charaname = "Risitas";
document.getElementById("charaname").innerHTML = charaname;






 }

 if (bg === 'https://risibank.fr/cache/stickers/d84/8427-full.jpg') {
        alert("Vous avez choisi HENRY DE LESQUEN");
 }
}





function changefond() {

$(function() {
        setTimeout(function() { $("#pagejeu").fadeOut(100); }, 100)

        });
$(function() {
        setTimeout(function() { $("#lever").fadeOut(100); }, 100)

        });

setTimeout(function(){
   $('#citation').show();
}, 1200);
    
document.body.style.backgroundImage='url("chambre.jpg")'



// DIALGOGUE

var dialogs = ['Les héros vivent à travers leurs victoires mais naissent de leurs échecs.'],  
    initial = 0;
    individual = dialogs[initial].split('');

function createDiag ( dialog ) {

  for(i = 0; i < dialog.length; i++) {
    (function(i){
        
      setTimeout(function(){
        $('#dialog').text($('#dialog').text() +   dialog[i]);
      }, 50*i);  
    
    }(i));
    
  }

}

createDiag( individual );


let audio = document.getElementById("sirene");
    audio.play();


//bouton sortir

setTimeout(function(){
   $('#choix1').show();
}, 6000);



}


function 








 
