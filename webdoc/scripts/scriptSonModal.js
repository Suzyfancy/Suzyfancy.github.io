"use strict";
document.addEventListener("DOMContentLoaded", initialiser);

function initialiser(evt) {
    
    let modalSonOn = document.getElementById("btnOui");
    modalSonOn.addEventListener("click", modalSoundOn)
}

function modalSoundOn(evt) {
    var musique = document.getElementById("audio");
    musique.play();

    var soundOff = document.getElementById("soundOff")
    soundOff.style.visibility = "hidden";

    var soundOn = document.getElementById("soundOn")
    soundOn.style.visibility = "visible";
}