
function lesquen() {
    document.getElementById("character-box").style.backgroundImage = "url('https://risibank.fr/cache/stickers/d84/8427-full.jpg')";
    let audio = document.getElementById("select");
    audio.play();
    document.getElementById("descriptionjawa").style.display = "none";
    document.getElementById("descriptionsardoche").style.display = "none";
    document.getElementById("descriptionrisitas").style.display = "none";

    setTimeout(function(){
       $('#descriptionlesquen').show();
    }, 800);

    setTimeout(function(){
       $('#continue').show();
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
   $('#descriptionrisitas').show();
}, 800);
setTimeout(function(){
   $('#continue').show();
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
   $('#descriptionjawa').show();
}, 800);
setTimeout(function(){
   $('#continue').show();
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
   $('#descriptionsardoche').show();
}, 800);
setTimeout(function(){
   $('#continue').show();
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
   $('#pagejeu').show();
}, 1000);
setTimeout(function(){
   $('#lever').show();
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



    // DIALOGUE

    let dialogs = ['Les héros vivent à travers leurs victoires mais naissent de leurs échecs.'],  
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


    //boutons choix

    setTimeout(function(){
       $('#choix1').show();
    }, 6000);




}


function sortir() {

$(function() {
        setTimeout(function() { $("#citation").fadeOut(100); }, 100)

        });

document.body.style.backgroundImage='url("rue.jpg")'

setTimeout(function(){
   $('#attaque').show();
}, 300);

setTimeout(function(){
   $('#choix2').show();
}, 2000);

let dialogs = ['Un individu étrange sans visage attaque un policier devant vous'],  
    initial = 0;
    individual = dialogs[initial].split('');

function createDiag ( dialog ) {

  for(i = 0; i < dialog.length; i++) {
    (function(i){
        
      setTimeout(function(){
        $('#dialog2').text($('#dialog2').text() +   dialog[i]);
      }, 50*i);  
    
    }(i));
    
  }

}

createDiag( individual );

//bouton choix




}


function rester() {
document.body.style.backgroundImage='url("alerte.png")'

$(function() {
        setTimeout(function() { $("#citation").fadeOut(100); }, 100)

    });

setTimeout(function(){
   $('#tv').show();
}, 200);

setTimeout(function(){
   $('#choix3').show();
}, 3000);


let dialogs = ['Une invasion.. La police est passée proche.. Vous n etes pas à l abris. Vous voyez un policier en difficulté devant votre maison. Vous pouvez l aider ou bien vous barricader'],  
    initial = 0;
    individual = dialogs[initial].split('');

function createDiag ( dialog ) {

  for(i = 0; i < dialog.length; i++) {
    (function(i){
        
      setTimeout(function(){
        $('#dialog3').text($('#dialog3').text() +   dialog[i]);
      }, 50*i);  
    
    }(i));
    
  }

}

createDiag( individual );

}


//CHOIX SOUS-JACENTS SORTIR

function help() {

$(function() {
        setTimeout(function() { $("#tv").fadeOut(300); }, 300)

    });

$(function() {
        setTimeout(function() { $("#attaque").fadeOut(300); }, 300)

    });

setTimeout(function(){
   $('#adversaire').show();
}, 400);

setTimeout(function(){
   $('#attaques').show();
}, 400);

document.body.style.backgroundImage='url("rue.jpg")'


}

function specialattackfail() {
setTimeout(function(){
   $('#dialog5').show();
}, 400);

let dialogs = ['Votre corps n est pas encore assez puissant, vous vous évanouissez et perdez vos souvenirs'],  
    initial = 0;
    individual = dialogs[initial].split('');

function createDiag ( dialog ) {

  for(i = 0; i < dialog.length; i++) {
    (function(i){
        
      setTimeout(function(){
        $('#dialog5').text($('#dialog5').text() +   dialog[i]);
      }, 50*i);  
    
    }(i));
    
  }

}


createDiag( individual );

setTimeout(function(){let myhealth = document.getElementById("health")
myhealth.value -= 20;}, 3000);

document.getElementById("simple").onclick = null;
document.getElementById("spe").onclick = null;



$(function() {
        setTimeout(function() { $("#adversaire").fadeOut(4000); }, 4000)

        });

setTimeout(function(){window.location.reload()}, 8000);



}


function simpleattack() {

    let advhealth = document.getElementById("advhealth")
    advhealth.value -= 20; 

    setTimeout(function(){
       $('#dialog4').show();
    }, 400);

    let dialogs = ['L individu semble utiliser une technique spéciale'],  
        initial = 0;
        individual = dialogs[initial].split('');

    function createDiag ( dialog ) {

      for(i = 0; i < dialog.length; i++) {
        (function(i){

          setTimeout(function(){
            $('#dialog4').text($('#dialog4').text() +   dialog[i]);
          }, 50*i);  

        }(i));

      }

    }


    createDiag( individual );

    setTimeout(function(){let myhealth = document.getElementById("health")
    myhealth.value -= 20;}, 3000);

    document.getElementById("simple").onclick = null;
    document.getElementById("spe").onclick = null;


    $(function() {
            setTimeout(function() { $("#adversaire").fadeOut(4000); }, 4000)

            });


    setTimeout(function(){document.body.style.backgroundImage='url("black.png")'}, 8000);
    setTimeout(function(){document.body.style.backgroundImage='url("10.jpg")'}, 10000);
    
    
}



//DISTRAIRE

function distraire() {
}


//CHOIX SOUS-JACENTS RESTER

function barricader() {
document.body.style.backgroundImage='url("")'

$(function() {
        setTimeout(function() { $("#tv").fadeOut(300); }, 300)

    });
    
    //GAME OVER  DIALOGUE 4 : IL FAUT AFFRONTER SES PEURS

}





 
