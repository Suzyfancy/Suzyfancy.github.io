"use strict";
document.addEventListener("DOMContentLoaded", initialiser);

function initialiser(evt) {
    
    
    let btnSound = document.getElementById("btnMusique");
    btnSound.addEventListener("click", modalMusique)
    
    let btnEcran = document.getElementById("btnFullScreen");
    btnEcran.addEventListener("click", modalFullscreen)
    
    let btnSoundEcran = document.getElementById("btnMusiqueFullScreen");
    btnSoundEcran.addEventListener("click", modalMusiqueFullscreen)

}

function soundOn(evt) {
    var musique = document.getElementById("audio");
    musique.play();

    var soundOff = document.getElementById("soundOff")
    soundOff.style.visibility = "hidden";

    var soundOn = document.getElementById("soundOn")
    soundOn.style.visibility = "visible";

}



function modalMusique(evt){
    var musique = document.getElementById("audio");
    musique.play();

    var soundOff = document.getElementById("soundOff")
    soundOff.style.visibility = "hidden";

    var soundOn = document.getElementById("soundOn")
    soundOn.style.visibility = "visible";
}

function modalFullscreen(evt){
    elem.requestFullscreen();
    
    var iconeFullScreen = document.getElementById("fullScreen")
    iconeFullScreen.style.visibility="hidden";
    
    var iconeSmallScreen = document.getElementById("smallScreen");
    iconeSmallScreen.style.visibility="visible";
}

function modalMusiqueFullscreen(evt){
    
    var musique = document.getElementById("audio");
    musique.play();

    var soundOff = document.getElementById("soundOff")
    soundOff.style.visibility = "hidden";

    var soundOn = document.getElementById("soundOn")
    soundOn.style.visibility = "visible";
    
    elem.requestFullscreen();
    
    var iconeFullScreen = document.getElementById("fullScreen")
    iconeFullScreen.style.visibility="hidden";
    
    var iconeSmallScreen = document.getElementById("smallScreen");
    iconeSmallScreen.style.visibility="visible";
}

