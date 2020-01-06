//SELECTION PERSO

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
    alert("Arrive Bientôt! Selection par defaut de Risitas");
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
    
    alert("Arrive Bientôt! Selection par defaut de Risitas");
      

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
    alert("Arrive Bientôt! Selection par defaut de Risitas");

};

function test() {
    
/*if (document.getElementById("character-box").style.backgroundImage == "url(https://risibank.fr/cache/stickers/d1578/157805-full.png)"){
window.open("sardoche.html")
}; */

setTimeout(function(){
           $('#dialoginit').show();
        }, 1000);


     
     let dialogs = ['Votre reveil sonne! La victoire la plus importante de toutes est celle remportée sur soi-même.'],  
        initial = 0;
        individual = dialogs[initial].split('');

    function createDiag ( dialog ) {

      for(i = 0; i < dialog.length; i++) {
        (function(i){

          setTimeout(function(){
            $('#dialoginit').text($('#dialoginit').text() +   dialog[i]);
          }, 50*i);  

        }(i));

      }

    }

    createDiag( individual );

alert("Vous avez choisi RISITAS, sélection par défaut");

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
        }, 8000);



        document.body.style.backgroundImage='url("reveil.png")'
        let charaname = "Risitas";
        document.getElementById("charaname").innerHTML = charaname;

 /*let bg = $("#character-box").css('background-image');
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
        }, 8000);



        document.body.style.backgroundImage='url("reveil.png")'
        let charaname = "Risitas";
        document.getElementById("charaname").innerHTML = charaname;

      if (bg === 'https://risibank.fr/cache/stickers/d84/8427-full.jpg') {
        alert("Vous avez choisi HENRY DE LESQUEN");
 }




*/
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
    $('#dialoginit').fadeOut();


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

//CHOIX SORTIR

function sortir() {

document.body.style.backgroundImage='url("rue.jpg")'
$(function() {
        setTimeout(function() { $("#citation").fadeOut(100); }, 100)

        });



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

//RESTER CHEZ SOI

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

//ATTAQUE SPECIALE

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

//ATTAQUE SIMPLE 

function simpleattack() {

    $('#assomme').fadeOut();
    $('#lit').fadeOut();

    let audio = document.getElementById("issou");
        audio.play();

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
            setTimeout(function() { $("#adversaire").fadeOut(3500); }, 3500)

            });


    setTimeout(function(){document.body.style.backgroundImage='url("black.png")'}, 7000);
    setTimeout(function(){document.body.style.backgroundImage='url("10.jpg")'}, 10000);

   
    setTimeout(function(){
           $('#choix4').show();
        }, 11000);

    
}

//HOPITAL 


//PARTIR

function partir() {
document.body.style.backgroundImage='url("hop.jpg")'   

    $("#choix4").fadeOut(100);


    setTimeout(function(){
           $('#hosto').show();
        }, 400);

        let dialogs = ['Vous trouvez une armure et une épée'],  
            initial = 0;
            individual = dialogs[initial].split('');

        function createDiag ( dialog ) {

          for(i = 0; i < dialog.length; i++) {
            (function(i){

              setTimeout(function(){
                $('#dialog7').text($('#dialog7').text() +   dialog[i]);
              }, 50*i);  

            }(i));

          }

        }


        createDiag( individual );

 



} 

//DEMANDER OU JE SUIS 


function repondre() {

    document.body.style.backgroundImage='url("10.jpg")'
    
    $("#choix4").fadeOut(100);
    $("#dialogdoc").show(100);

    $("#versfin2").show(3000);

    

    let dialogs = ['Vous avez été retrouvé inconscient. Le docteur vous restaure votre vie et vous donne une nouvelle capacité ultime : SAINTE CHANCLA'],  
            initial = 0;
            individual = dialogs[initial].split('');

        function createDiag ( dialog ) {

          for(i = 0; i < dialog.length; i++) {
            (function(i){

              setTimeout(function(){
                $('#dialogdoc').text($('#dialogdoc').text() +   dialog[i]);
              }, 50*i);  

            }(i));

          }

        }


        createDiag( individual );

    

    


}


//Sainte Chancla

function saintechancla() {
    document.body.style.backgroundImage='url("hop5.jpg")' 
    
    $("#hooded").fadeOut(100);
    $("#finencours2").fadeOut(100);
    $("#choixfindoc").fadeOut(100);

    $("#chancla").show(100);
    $("#finalbutton").show(100);
    $("#hood").fadeOut(100);
    $("#finencours2").fadeOut(100);
    $("#specialfin").fadeOut(100);
    
    let dialogs = ['Le sans visage est projeté au sol, ses points de vie sont réduits à 0, mais il semble se relever.'],  
            initial = 0;
            individual = dialogs[initial].split('');

        function createDiag ( dialog ) {

          for(i = 0; i < dialog.length; i++) {
            (function(i){

              setTimeout(function(){
                $('#chancla').text($('#chancla').text() +   dialog[i]);
              }, 50*i);  

            }(i));

          }

        }


        createDiag( individual );

    
}

//FIN

function fin() {
    
    document.body.style.backgroundImage='url("hop5.jpg")' 
    $("#finalbutton").fadeOut(100);
    $("#chancla").fadeOut(100);
    $("#hood").fadeOut(100);
    $("#finencours2").fadeOut(100);
    $("#specialfin").fadeOut(100);
    $("#visage").show(2000);
    $("#finaldialog").show(100);
    $("#continuefin").show(5000);
    

    let dialogs = ['L ombre disparait sur le visage du "sans visage". Il porte votre visage!'],  
            initial = 0;
            individual = dialogs[initial].split('');

        function createDiag ( dialog ) {

          for(i = 0; i < dialog.length; i++) {
            (function(i){

              setTimeout(function(){
                $('#finaldialog').text($('#finaldialog').text() +   dialog[i]);
              }, 50*i);  

            }(i));

          }

        }


        createDiag( individual );



}


//ADVERSAIRE EXTREMISTE FEMINOVEGAN

function porterarm() {
    document.body.style.backgroundImage='url("sortiehop.jpg")'   
    $("#hosto").fadeOut(100);

    setTimeout(function(){
           $('#sortie').show();
        }, 400);

    let dialogs = ['Une feministe-vegan, extremiste précisons-le, vous barre la route et vous attaque'],  
            initial = 0;
            individual = dialogs[initial].split('');

        function createDiag ( dialog ) {

          for(i = 0; i < dialog.length; i++) {
            (function(i){

              setTimeout(function(){
                $('#dialog8').text($('#dialog8').text() +   dialog[i]);
              }, 50*i);  

            }(i));

          }

        }


        createDiag( individual );



}

//SANS ARMURE

function sansarm() {

    document.body.style.backgroundImage='url("gameover.jpg")'
        
        $('#hosto').fadeOut();
        setTimeout(function(){
                   $('#gameov2').show();
                }, 1500);
        setTimeout(function(){
                   $('#gameover2').show();
                }, 200);
        
        let dialogs = ['Perdu.. Votre excès de confiance vous perdra.'],  
                    initial = 0;
                    individual = dialogs[initial].split('');

                function createDiag ( dialog ) {

                  for(i = 0; i < dialog.length; i++) {
                    (function(i){

                      setTimeout(function(){
                        $('#gameover2').text($('#gameover2').text() +   dialog[i]);
                      }, 50*i);  

                    }(i));

                  }

                }


                createDiag( individual );    





}


function attack() {

    let audio = document.getElementById("issou");
            audio.play();

    let adv2health = document.getElementById("adv2health")
    adv2health.value -= 20; 

    setTimeout(function(){let myhealth = document.getElementById("myfinalhealth")
    myhealth.value -= 30;}, 100);


        if (adv2health.value == 0) {

                document.body.style.backgroundImage='url("special.png")'

                setTimeout(function(){
                   document.body.style.backgroundImage='url("sortiehop.jpg")';
                }, 3000);


                $("#sortie").fadeOut(100);

                setTimeout(function(){
                   $('#dialog10').show();
                }, 400);

                let dialogs = ['Vous avez triomphé de l adversaire grâce à votre toute nouvelle puissance'],  
                initial = 0;
                individual = dialogs[initial].split('');

                    function createDiag ( dialog ) {

                        for(i = 0; i < dialog.length; i++) {
                            (function(i){

                          setTimeout(function(){
                            $('#dialog10').text($('#dialog10').text() +   dialog[i]);
                          }, 50*i);  

                            }(i));

                        }


                    }

                


                createDiag( individual );

                $('#versfin').show();

            
        }

    if (myhealth.value == 0) {
        
        document.body.style.backgroundImage='url("gameover.jpg")'

    }
    
}


function specialattack() {

    let audio = document.getElementById("yatangaki");
                audio.play();

    let adv2health = document.getElementById("adv2health")
        adv2health.value -= 100; 


        if (adv2health.value == 0) {

            document.body.style.backgroundImage='url("special.png")'

                    setTimeout(function(){
                       document.body.style.backgroundImage='url("sortiehop.jpg")';
                    }, 3000);


                    $("#sortie").fadeOut(100);

            setTimeout(function(){
                   $('#dialog10').show();
                }, 400);

                let dialogs = ['Vous avez triomphé de l adversaire grâce à votre toute nouvelle puissance'],  
                initial = 0;
                individual = dialogs[initial].split('');

                    function createDiag ( dialog ) {

                        for(i = 0; i < dialog.length; i++) {
                            (function(i){

                          setTimeout(function(){
                            $('#dialog10').text($('#dialog10').text() +   dialog[i]);
                          }, 50*i);  

                            }(i));

                        }


                    }


                createDiag( individual );

                $('#versfin').show();
            

        }


}





//DISTRAIRE

function distraire() {

setTimeout(function(){
           $('#dialogmma').show();
        }, 400);
document.body.style.backgroundImage='url("rue.jpg")'

$("#attaque").fadeOut(100);

let dialogs = ['Sans rigoler. Je pratique la MMA depuis maintenant 6 ans, de la boxe en parallèle depuis 7 ans, je pourrai. Ainsi que la musculation depuis 4 ans, 1m87 pour 86 kg...'],  
            initial = 0;
            individual = dialogs[initial].split('');

        function createDiag ( dialog ) {

          for(i = 0; i < dialog.length; i++) {
            (function(i){

              setTimeout(function(){
                $('#dialogmma').text($('#dialogmma').text() +   dialog[i]);
              }, 50*i);  

            }(i));

          }

        }


        createDiag( individual );



setTimeout(function(){
           $('#choixmma').show();
        }, 4000);
}

//CONTINUER DISTRACTION

function continuer() {
    $("#dialogmma").fadeOut(100);
    $("#choixmma").fadeOut(100);

    setTimeout(function(){
           $('#dialog9').show();
        }, 100);

    let dialogs = ['Miracle! Le saint pavé MMA a fait fuir l individu sans visage! Le policier vous remercie et vous conseille de faire attention'],  
            initial = 0;
            individual = dialogs[initial].split('');

        function createDiag ( dialog ) {

          for(i = 0; i < dialog.length; i++) {
            (function(i){

              setTimeout(function(){
                $('#dialog9').text($('#dialog9').text() +   dialog[i]);
              }, 50*i);  

            }(i));

          }

        }


        createDiag( individual );

    setTimeout(function(){
           $('#larrypolice').show();
        }, 2000);

    setTimeout(function(){
           $('#continue2').show();
        }, 3000);


}

//AVANCER DANS LA RUE

function avance() {

    document.body.style.backgroundImage='url("ruelle.jpg")'
    $("#larrypolice").fadeOut(100);
    $("#continue2").fadeOut(100);
    $("#dialog9").fadeOut(100);
    

    setTimeout(function(){
           $('#dialogruelle').show();
        }, 100);

    setTimeout(function(){
           $('#choixinter').show();
        }, 100);

    let dialogs = ['Vous arrivez dans une ruelle très inquietante qui mène au parking privé de votre résidence, vous avez contourné votre immeuble par la rue précédente'],  
            initial = 0;
            individual = dialogs[initial].split('');

        function createDiag ( dialog ) {

          for(i = 0; i < dialog.length; i++) {
            (function(i){

              setTimeout(function(){
                $('#dialogruelle').text($('#dialogruelle').text() +   dialog[i]);
              }, 50*i);  

            }(i));

          }

        }


        createDiag( individual );


    
}


// PARKING

function park() {
    
    $("#dialogruelle").fadeOut(100);
    $("#choixinter").fadeOut(100);
    document.body.style.backgroundImage='url("park.jpg")'

    setTimeout(function(){
               $('#dialogparking').show();
            }, 200);

    setTimeout(function(){
               $('#choixpark').show();
            }, 100);

    let dialogs = ['Vous cherchez votre voiture, elle était pourtant là...'],  
                initial = 0;
                individual = dialogs[initial].split('');

            function createDiag ( dialog ) {

              for(i = 0; i < dialog.length; i++) {
                (function(i){

                  setTimeout(function(){
                    $('#dialogparking').text($('#dialogparking').text() +   dialog[i]);
                  }, 50*i);  

                }(i));

              }

            }


            createDiag( individual );    
      


    


}

//RETOUR SUR SES PAS

function retour() {
    $("#dialogruelle").fadeOut(100);
    $("#choixinter").fadeOut(100);
    $("#finencours2").fadeOut(100);
    $("#choixfindoc").fadeOut(100);

    document.body.style.backgroundImage='url("gameover.jpg")'

    setTimeout(function(){
               $('#gameov2').show();
            }, 1500);
    setTimeout(function(){
               $('#gameover2').show();
            }, 200);

    let dialogs = ['Perdu.. Affronter ses peurs peut parfois nous sauver.. Vous vous évanouissez et perdez tout souvenir.'],  
                initial = 0;
                individual = dialogs[initial].split('');

            function createDiag ( dialog ) {

              for(i = 0; i < dialog.length; i++) {
                (function(i){

                  setTimeout(function(){
                    $('#gameover2').text($('#gameover2').text() +   dialog[i]);
                  }, 50*i);  

                }(i));

              }

            }


            createDiag( individual );    
let audio = document.getElementById("gamo");
            audio.play();
      



}

// LE HUMMER

function carjack() {
    document.body.style.backgroundImage='url("route.jpg")'

    $("#dialogparking").fadeOut(100);
    $("#choixpark").fadeOut(100);
    
    setTimeout(function(){
               $('#hummerrouge').show();
            }, 200);

    let dialogs = ['VOUS VOLEZ LE HUMMER ROUGE, APPELEZ VOTRE AMI DE TOUJOURS JESUS ET PARTEZ A TRAVERS LE MONDE, DOMINER TERRES ET CIEUX, A BORD DE CET INCROYABLE VEHICULE'],  
                initial = 0;
                individual = dialogs[initial].split('');

            function createDiag ( dialog ) {

              for(i = 0; i < dialog.length; i++) {
                (function(i){

                  setTimeout(function(){
                    $('#hummerrouge').text($('#hummerrouge').text() +   dialog[i]);
                  }, 50*i);  

                }(i));

              }

            }


            createDiag( individual );  

    setTimeout(function(){
               $('#hummer').show();
            }, 100);


    
}


//ETAGE PARKING

function etage() {
    document.body.style.backgroundImage='url("black.png")'
    $('#dialogparking').fadeOut();
    $('#choixpark').fadeOut();

    $('#assomme').show();
    $('#lit').show();

    let dialogs = ['Vous ressentez une grosse douleur à la tête, quelqu un vous assomme.. Vous tombez et perdez connaissance..'],  
                initial = 0;
                individual = dialogs[initial].split('');

            function createDiag ( dialog ) {

              for(i = 0; i < dialog.length; i++) {
                (function(i){

                  setTimeout(function(){
                    $('#assomme').text($('#assomme').text() +   dialog[i]);
                  }, 50*i);  

                }(i));

              }

            }


            createDiag( individual );    
      
}

//CHOIX SOUS-JACENTS RESTER

function barricader() {
    document.body.style.backgroundImage='url("gameover.jpg")'

    $(function() {
            setTimeout(function() { $("#tv").fadeOut(100); }, 100)

        });
    setTimeout(function(){
               $('#gameover1').show();
            }, 100);

    setTimeout(function(){
               $('#gameov').show();
            }, 1500);

    let dialogs = ['Perdu.. Affronter ses peurs peut parfois nous sauver.. Vous vous évanouissez et perdez tout souvenir.'],  
                initial = 0;
                individual = dialogs[initial].split('');

            function createDiag ( dialog ) {

              for(i = 0; i < dialog.length; i++) {
                (function(i){

                  setTimeout(function(){
                    $('#gameover1').text($('#gameover1').text() +   dialog[i]);
                  }, 50*i);  

                }(i));

              }

            }


            createDiag( individual );    
      
    
}



//VERSFIN

function versfin() {

    $("#dialog10").fadeOut(100);
    $("#versfin").fadeOut(100);

    setTimeout(function(){
                       document.body.style.backgroundImage='url("black.png")';
                    }, 1000);
    
    setTimeout(function(){
                       document.body.style.backgroundImage='url("sortiehop.jpg")';
                    }, 5000);

    setTimeout(function(){
                       document.body.style.backgroundImage='url("black.png")';
                    }, 7000);

    setTimeout(function(){
                       document.body.style.backgroundImage='url("hop.jpg")';
                    }, 9000);

    setTimeout(function(){
                       document.body.style.backgroundImage='url("black.png")';
                    }, 11000);
    
    setTimeout(function(){
                       document.body.style.backgroundImage='url("hop2.jpg")';
                    }, 13000);

    setTimeout(function(){
                       document.body.style.backgroundImage='url("black.png")';
                    }, 14000);

    setTimeout(function(){
                       document.body.style.backgroundImage='url("hop3.jpg")';
                    }, 15000);

    setTimeout(function(){
                       document.body.style.backgroundImage='url("black.png")';
                    }, 16000);

    setTimeout(function(){
                       document.body.style.backgroundImage='url("hop5.jpg")';
                    }, 17000);

    setTimeout(function(){
                       document.body.style.backgroundImage='url("black.png")';
                    }, 18000);

    setTimeout(function(){
                       document.body.style.backgroundImage='url("hop5.jpg")';
                    }, 18500);

    

    setTimeout(function(){
                       document.body.style.backgroundImage='url("black.png")';
                    }, 19000);

    

    setTimeout(function(){
                       document.body.style.backgroundImage='url("hop5.jpg")';
                    }, 19500);

    setTimeout(function(){
               $('#hood').show();
            }, 19500);

    setTimeout(function(){
                       document.body.style.backgroundImage='url("black.png")';
                    }, 20000);

    setTimeout(function(){
               $('#hood').fadeOut();
            }, 19950);

    setTimeout(function(){
                       document.body.style.backgroundImage='url("hop5.jpg")';
                    }, 20500);

    setTimeout(function(){
               $('#hood').show();
            }, 20500);

    setTimeout(function(){
                       document.body.style.backgroundImage='url("black.png")';
                    }, 21000);

    setTimeout(function(){
               $('#hood').fadeOut();
            }, 20950);

    setTimeout(function(){
                    document.body.style.backgroundImage='url("hop5.jpg")';
                    }, 21500);

    setTimeout(function(){
               $('#hood').show();
            }, 21500);


    setTimeout(function(){
               $('#specialfin').show();
            }, 22000); 
    
     setTimeout(function(){
               $('#finencours2').show();
            }, 22000); 

    

    let dialogs = ['Un sans visage arrive et vous attaque devant la sortie de l hopital'],  
                initial = 0;
                individual = dialogs[initial].split('');

            function createDiag ( dialog ) {

              for(i = 0; i < dialog.length; i++) {
                (function(i){

                  setTimeout(function(){
                    $('#finencours2').text($('#finencours2').text() +   dialog[i]);
                  }, 50*i);  

                }(i));

              }

            }


            createDiag( individual ); 

    


}



function facelessend() {


    document.body.style.backgroundImage='url("hop5.jpg")';
     $('#versfin2').fadeOut();
     $('#dialogdoc').fadeOut();
     $('#finencours2').show();

    setTimeout(function(){
               $('#choixfindoc').show();
            }, 2000); 

    

    let dialogs = ['Un sans visage arrive et vous attaque devant la sortie de l hopital'],  
                initial = 0;
                individual = dialogs[initial].split('');

            function createDiag ( dialog ) {

              for(i = 0; i < dialog.length; i++) {
                (function(i){

                  setTimeout(function(){
                    $('#finencours2').text($('#finencours2').text() +   dialog[i]);
                  }, 50*i);  

                }(i));

              }

            }


            createDiag( individual );   

setTimeout(function(){
               $('#hooded').show();
            }, 1500); 


    
    
}


//ECRAN DE FIN

function continuefin() {
    
     $('#lastdialog').show();
     $('#visage').fadeOut();
     $('#finaldialog').fadeOut();
     $('#continuefin').fadeOut();
document.body.style.backgroundImage='url("reveil.png")';

let audio = document.getElementById("reveil");
   audio.play();

    let dialogs = ['Votre reveil sonne! La victoire la plus importante de toutes est celle remportée sur soi-même.'],  
                initial = 0;
                individual = dialogs[initial].split('');


            function createDiag ( dialog ) {

              for(i = 0; i < dialog.length; i++) {
                (function(i){

                  setTimeout(function(){
                    $('#lastdialog').text($('#lastdialog').text() +   dialog[i]);
                  }, 50*i);  

                }(i));

              }

            }


            createDiag( individual ); 
     
}

//REJOUER 

function tryagain() {
    window.location.reload()
}



 
